import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { createTicket } from "@/lib/tickets";
import { sendTicketEmails } from "@/lib/email";

const MAX_FILES = 4;
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
  const serialNumber = field("serialNumber", 100);
  const securityKey = field("securityKey", 100);
  const message = String(form.get("message") ?? "").trim().slice(0, 5000);
  const category = field("category", 100);
  const urgency = field("urgency", 50) || "normal";
  const kind = form.get("kind") === "consultation" ? "consultation" : "support";

  if (!name) return NextResponse.json({ error: "Please give us your name." }, { status: 400 });
  if (!phone) return NextResponse.json({ error: "Please give us a phone number." }, { status: 400 });
  if (!message) return NextResponse.json({ error: "Please tell us what's going on." }, { status: 400 });
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
