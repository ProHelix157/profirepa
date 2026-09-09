import type { Metadata } from "next";
import Link from "next/link";
import { isAdmin } from "@/lib/adminAuth";
import { listTickets } from "@/lib/tickets";
import { loginAction, logoutAction, updateTicketAction } from "./actions";

export const metadata: Metadata = {
  title: "Ticket Dashboard",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const statuses = [
  ["new", "New"],
  ["in_progress", "In progress"],
  ["waiting", "Waiting on customer"],
  ["done", "Done"],
] as const;

const statusColors: Record<string, string> = {
  new: "var(--accent)",
  in_progress: "#4ea8de",
  waiting: "#c9a227",
  done: "var(--n500)",
};

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ status?: string; error?: string }> }) {
  const params = await searchParams;

  if (!(await isAdmin())) {
    return (
      <div className="wrap" style={{ paddingTop: 96, paddingBottom: 120, maxWidth: 480 }}>
        <h1 style={{ fontSize: 36, marginBottom: 24 }}>Ticket dashboard</h1>
        <form action={loginAction} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="field">
            <label htmlFor="admin-password">Password</label>
            <input id="admin-password" name="password" type="password" className="input" autoFocus />
          </div>
          {params.error && (
            <p role="alert" style={{ color: "var(--accent)", fontWeight: 600, fontSize: 15 }}>
              Wrong password.
            </p>
          )}
          <button className="btn btn-primary" type="submit" style={{ alignSelf: "flex-start" }}>
            Sign in
          </button>
        </form>
      </div>
    );
  }

  const filter = params.status ?? "all";
  let tickets: Awaited<ReturnType<typeof listTickets>>;
  let dbError = false;
  try {
    tickets = await listTickets(filter);
  } catch {
    tickets = [];
    dbError = true;
  }

  const counts = { open: tickets.filter((t) => t.status !== "done").length };

  return (
    <div className="wrap" style={{ paddingTop: 56, paddingBottom: 120 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
        <h1 style={{ fontSize: 36 }}>Tickets</h1>
        <form action={logoutAction}>
          <button className="btn btn-outline" style={{ padding: "8px 14px", fontSize: 13 }}>Sign out</button>
        </form>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
        {[["all", "All"], ...statuses].map(([v, label]) => (
          <Link
            key={v}
            href={v === "all" ? "/admin" : `/admin?status=${v}`}
            className="btn"
            style={{
              padding: "8px 14px",
              fontSize: 13,
              border: "1px solid var(--divider)",
              background: filter === v ? "var(--accent)" : "transparent",
              color: filter === v ? "var(--ink)" : "var(--text)",
            }}
          >
            {label}
          </Link>
        ))}
        <span style={{ alignSelf: "center", fontSize: 13, color: "var(--n500)", marginLeft: 8 }}>
          {counts.open} open in view
        </span>
      </div>

      {dbError && (
        <p style={{ color: "var(--accent)", fontWeight: 600 }}>
          Couldn&apos;t reach the database. Is DATABASE_URL set?
        </p>
      )}

      {!dbError && tickets.length === 0 && <p style={{ color: "var(--n400)" }}>No tickets here. Quiet is good.</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {tickets.map((t) => (
          <div key={t.id} style={{ background: "var(--surface)", border: "1px solid var(--divider-soft)", borderLeft: `4px solid ${statusColors[t.status] ?? "var(--n500)"}`, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "baseline" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 18, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                {t.ticket_number}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    background: statusColors[t.status] ?? "var(--n500)",
                    color: "var(--ink)",
                  }}
                >
                  {statuses.find(([v]) => v === t.status)?.[1] ?? t.status}
                </span>
                <span style={{ fontWeight: 400, fontSize: 14, color: "var(--n400)" }}>
                  {t.kind === "consultation" ? "Consultation request" : t.category || "Support"}
                  {t.urgency !== "normal" && (
                    <strong style={{ color: "var(--accent)", marginLeft: 8, textTransform: "uppercase", fontSize: 12, letterSpacing: "0.06em" }}>
                      {t.urgency}
                    </strong>
                  )}
                </span>
              </div>
              <span style={{ fontSize: 13, color: "var(--n500)" }}>
                {new Date(t.created_at).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
              </span>
            </div>
            <div style={{ fontSize: 15 }}>
              <strong>{t.name}</strong>
              {" · "}
              <a href={`tel:${t.phone.replace(/[^0-9+]/g, "")}`}>{t.phone}</a>
              {t.email && (
                <>
                  {" · "}
                  <a href={`mailto:${t.email}`}>{t.email}</a>
                </>
              )}
            </div>
            {(t.address || t.serial_number || t.security_key) && (
              <div style={{ fontSize: 14, color: "var(--n400)", display: "flex", gap: 18, flexWrap: "wrap" }}>
                {t.address && <span>📍 {t.address}</span>}
                {t.serial_number && <span>S/N: {t.serial_number}</span>}
                {t.security_key && <span>Key: {t.security_key}</span>}
              </div>
            )}
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--n300)", whiteSpace: "pre-wrap" }}>{t.message}</p>
            {t.attachments.length > 0 && (
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 14 }}>
                {t.attachments.map((url, i) => (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                    Attachment {i + 1} ↗
                  </a>
                ))}
              </div>
            )}
            <form key={`${t.status}-${t.notes ?? ""}`} action={updateTicketAction} style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end", borderTop: "1px solid var(--divider-soft)", paddingTop: 14 }}>
              <input type="hidden" name="id" value={t.id} />
              <div className="field" style={{ minWidth: 180 }}>
                <label htmlFor={`status-${t.id}`}>Status</label>
                <select id={`status-${t.id}`} name="status" className="input" defaultValue={t.status} style={{ minHeight: 40 }}>
                  {statuses.map(([v, label]) => (
                    <option key={v} value={v}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field" style={{ flex: 1, minWidth: 220 }}>
                <label htmlFor={`notes-${t.id}`}>Your notes</label>
                <input id={`notes-${t.id}`} name="notes" className="input" defaultValue={t.notes ?? ""} style={{ minHeight: 40 }} />
              </div>
              <button className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 14 }}>
                Save
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
