import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { createTicket } from "@/lib/tickets";
import { sendTicketEmails } from "@/lib/email";

const MAX_FILES = 4;

// Validated against a list rather than a length check, so "Pa", "penn" and "XX" are all refused
// and the stored value is always a real two-letter code. DC and PR included: the service area is
// PA, but a ticket can come from anywhere and silently rejecting a valid state is worse than
// storing one we do not serve.
const US_STATES = new Set([
  "AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA",
  "ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR",
  "PA","PR","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
]);
const MAX_FILE_BYTES = 25 * 1024 * 1024;
const ALLOWED_TYPES = /^(image|video)\//;

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }

  const field = (k: string, max = 300) => String(form.get(k) ?? "").trim().slice(0, max);

  const name = field("name", 200);
  const phone = field("phone", 40);
  const email = field("email", 320);
  const address = field("address");
  const city = field("city", 120);
  const state = field("state", 2).toUpperCase();
  const zip = field("zip", 10);
  const serialNumber = field("serialNumber", 100);
  const securityKey = field("securityKey", 100);
  const message = String(form.get("message") ?? "").trim().slice(0, 5000);
  const category = field("category", 100);
  const urgency = field("urgency", 50) || "normal";
  const kind = form.get("kind") === "consultation" ? "consultation" : "support";

  if (!name) return NextResponse.json({ error: "Please give us your name." }, { status: 400 });
  if (!phone) return NextResponse.json({ error: "Please give us a phone number." }, { status: 400 });
  if (!message) return NextResponse.json({ error: "Please tell us what's going on." }, { status: 400 });
  // Enforced server-side as well as in the form. The browser `required` attribute is a
  // convenience — anything can POST this endpoint directly, and an address without a town is
  // the reason this validation exists (ticket PFS-260916-2579). Support tickets need a
  // dispatchable address; a consultation request does not, so there it is validated only if given.
  if (kind === "support") {
    if (!address) return NextResponse.json({ error: "Please give us the street address." }, { status: 400 });
    if (!city) return NextResponse.json({ error: "Please give us the city or town." }, { status: 400 });
    if (!US_STATES.has(state)) {
      return NextResponse.json({ error: "Please choose a state." }, { status: 400 });
    }
  } else if (state && !US_STATES.has(state)) {
    return NextResponse.json({ error: "Please choose a state." }, { status: 400 });
  }
  if (email && !email.includes("@")) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  // honeypot — bots fill every field
  if (field("company") !== "") {
    return NextResponse.json({ ok: true, ticketNumber: "PFS-000000-0000" });
  }

  // upload attachments
  const attachments: string[] = [];
  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  for (const file of files.slice(0, MAX_FILES)) {
    if (!ALLOWED_TYPES.test(file.type)) continue;
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json({ error: `Each file must be under 25 MB.` }, { status: 400 });
    }
    try {
      const safeName = file.name.replace(/[^\w.\-]+/g, "_").slice(0, 80);
      const blob = await put(`tickets/${Date.now()}-${safeName}`, file, {
        access: "public",
        addRandomSuffix: true,
      });
      attachments.push(blob.url);
    } catch (err) {
      console.error("attachment upload failed", err);
      return NextResponse.json({ error: "File upload failed — try again or submit without files." }, { status: 500 });
    }
  }

  try {
    const ticket = await createTicket({
      kind,
      name,
      phone,
      email: email || undefined,
      address,
      city,
      state,
      zip,
      serialNumber,
      securityKey,
      attachments,
      category,
      urgency,
      message,
    });
    try {
      await sendTicketEmails(ticket);
    } catch (err) {
      console.error("ticket email failed for", ticket.ticket_number, err);
    }
    return NextResponse.json({ ok: true, ticketNumber: ticket.ticket_number });
  } catch (err) {
    console.error("ticket creation failed", err);
    return NextResponse.json({ error: "Something went wrong on our end — please call us instead." }, { status: 500 });
  }
}
