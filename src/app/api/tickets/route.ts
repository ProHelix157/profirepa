import { NextResponse } from "next/server";
import { createTicket } from "@/lib/tickets";
import { sendTicketEmails } from "@/lib/email";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const category = String(body.category ?? "").trim().slice(0, 100);
  const urgency = String(body.urgency ?? "normal").trim().slice(0, 50);
  const kind = body.kind === "consultation" ? "consultation" : "support";

  if (!name || name.length > 200) return NextResponse.json({ error: "Please give us your name." }, { status: 400 });
  if (!phone || phone.length > 40) return NextResponse.json({ error: "Please give us a phone number." }, { status: 400 });
  if (!message || message.length > 5000) return NextResponse.json({ error: "Please tell us what's going on." }, { status: 400 });
  if (email && (email.length > 320 || !email.includes("@"))) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  // honeypot — bots fill every field
  if (String(body.company ?? "").trim() !== "") {
    return NextResponse.json({ ok: true, ticketNumber: "PFS-000000-0000" });
  }

  try {
    const ticket = await createTicket({ kind, name, phone, email: email || undefined, category, urgency, message });
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
