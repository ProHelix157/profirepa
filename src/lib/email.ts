import { Resend } from "resend";
import type { Ticket } from "./db";
import { site } from "./site";

const NOTIFY_TO = process.env.TICKET_NOTIFY_EMAIL ?? "devlon@pahfss.com";
// Resend's shared onboarding sender works until a custom domain is verified.
const FROM = process.env.TICKET_FROM_EMAIL ?? "Pro Fire Safety <onboarding@resend.dev>";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function sendTicketEmails(ticket: Ticket) {
  const resend = getResend();
  if (!resend) {
    console.warn("RESEND_API_KEY not set; skipping ticket emails for", ticket.ticket_number);
    return;
  }

  const label = ticket.kind === "consultation" ? "Consultation request" : "Support ticket";

  // Notify Devlon
  await resend.emails.send({
    from: FROM,
    to: NOTIFY_TO,
    subject: `[${ticket.ticket_number}] ${label} — ${ticket.name} (${ticket.urgency})`,
    text: [
      `${label} ${ticket.ticket_number}`,
      ``,
      `Name:     ${ticket.name}`,
      `Phone:    ${ticket.phone}`,
      `Email:    ${ticket.email ?? "—"}`,
      `Category: ${ticket.category || "—"}`,
      `Urgency:  ${ticket.urgency}`,
      ``,
      ticket.message,
      ``,
      `Work it: https://profirepa.com/admin`,
    ].join("\n"),
  });

  // Confirm to the customer, if they gave an email
  if (ticket.email) {
    await resend.emails.send({
      from: FROM,
      to: ticket.email,
      subject: `We got it — ticket ${ticket.ticket_number}`,
      text: [
        `Hi ${ticket.name.split(" ")[0]},`,
        ``,
        ticket.kind === "consultation"
          ? `Thanks for requesting a free in-home evaluation. Your reference number is ${ticket.ticket_number}. We'll call you shortly to set up a time.`
          : `Thanks for reaching out to Pro Fire Safety support. Your ticket number is ${ticket.ticket_number}. We'll get back to you within one business day.`,
        ``,
        `If this is urgent, call us at ${site.phone}. For an active emergency, call 911.`,
        ``,
        `— Pro Fire Safety`,
        `${site.address[0]}, ${site.address[1]}`,
      ].join("\n"),
    });
  }
}
