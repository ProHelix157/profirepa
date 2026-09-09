import { getSql, ensureSchema, type Ticket } from "./db";

function generateTicketNumber() {
  // e.g. PFS-250908-4821 — date-stamped, human-readable over the phone
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `PFS-${ymd}-${rand}`;
}

export type NewTicket = {
  kind: "support" | "consultation";
  name: string;
  phone: string;
  email?: string;
  category?: string;
  urgency?: string;
  message: string;
};

export async function createTicket(input: NewTicket): Promise<Ticket> {
  await ensureSchema();
  const sql = getSql();
  for (let attempt = 0; attempt < 3; attempt++) {
    const ticketNumber = generateTicketNumber();
    try {
      const rows = await sql`
        INSERT INTO tickets (ticket_number, kind, name, phone, email, category, urgency, message)
        VALUES (${ticketNumber}, ${input.kind}, ${input.name}, ${input.phone}, ${input.email ?? null},
                ${input.category ?? ""}, ${input.urgency ?? "normal"}, ${input.message})
        RETURNING *
      `;
      return rows[0] as Ticket;
    } catch (err) {
      const isUniqueViolation = err instanceof Error && err.message.includes("tickets_ticket_number_key");
      if (!isUniqueViolation || attempt === 2) throw err;
    }
  }
  throw new Error("could not allocate ticket number");
}

export async function listTickets(status?: string): Promise<Ticket[]> {
  await ensureSchema();
  const sql = getSql();
  if (status && status !== "all") {
    return (await sql`SELECT * FROM tickets WHERE status = ${status} ORDER BY created_at DESC`) as Ticket[];
  }
  return (await sql`SELECT * FROM tickets ORDER BY created_at DESC`) as Ticket[];
}

export async function updateTicket(id: number, fields: { status?: string; notes?: string }) {
  const sql = getSql();
  if (fields.status !== undefined && fields.notes !== undefined) {
    await sql`UPDATE tickets SET status = ${fields.status}, notes = ${fields.notes}, updated_at = now() WHERE id = ${id}`;
  } else if (fields.status !== undefined) {
    await sql`UPDATE tickets SET status = ${fields.status}, updated_at = now() WHERE id = ${id}`;
  } else if (fields.notes !== undefined) {
    await sql`UPDATE tickets SET notes = ${fields.notes}, updated_at = now() WHERE id = ${id}`;
  }
}
