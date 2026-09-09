import { neon } from "@neondatabase/serverless";

function createSql() {
  return neon(process.env.DATABASE_URL!);
}

let _sql: ReturnType<typeof createSql> | null = null;

export function getSql() {
  if (!_sql) _sql = createSql();
  return _sql;
}

export type Ticket = {
  id: number;
  ticket_number: string;
  kind: "support" | "consultation";
  name: string;
  phone: string;
  email: string | null;
  address: string;
  serial_number: string;
  security_key: string;
  attachments: string[];
  category: string;
  urgency: string;
  message: string;
  status: "new" | "in_progress" | "waiting" | "done";
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export async function ensureSchema() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS tickets (
      id SERIAL PRIMARY KEY,
      ticket_number TEXT UNIQUE NOT NULL,
      kind TEXT NOT NULL DEFAULT 'support',
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      category TEXT NOT NULL DEFAULT '',
      urgency TEXT NOT NULL DEFAULT 'normal',
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      notes TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`ALTER TABLE tickets ADD COLUMN IF NOT EXISTS address TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE tickets ADD COLUMN IF NOT EXISTS serial_number TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE tickets ADD COLUMN IF NOT EXISTS security_key TEXT NOT NULL DEFAULT ''`;
  await sql`ALTER TABLE tickets ADD COLUMN IF NOT EXISTS attachments JSONB NOT NULL DEFAULT '[]'`;
}
