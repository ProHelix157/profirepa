import type { Metadata } from "next";
import { TicketForm } from "@/components/TicketForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Submit a Ticket",
  description: "Open a support ticket with Pro Fire Safety — sensor questions, app setup, batteries, warranty.",
};

export default function SupportPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">Customer support</div>
        <h1>Need a hand? Open a ticket.</h1>
        <p>
          A chirping sensor, an app question, a battery, a move — tell us what&apos;s going on and
          we&apos;ll get back to you within one business day. Existing customers: use the phone
          number we have on file so we can pull up your installation.
        </p>
      </div>

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 88, display: "grid", gridTemplateColumns: "minmax(280px, 5fr) minmax(320px, 7fr)", gap: 56, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--surface)", border: "1px solid var(--divider-soft)", padding: "18px 22px" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Emergency? Don&apos;t wait on a ticket.</div>
              <div style={{ fontSize: 14, color: "var(--n400)" }}>
                Call us at {site.phone} — or 911 for an active fire.
              </div>
            </div>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--n400)" }}>
            Every ticket gets a number the moment you submit — mention it if you call so we can pick
            up right where you left off.
          </p>
        </div>
        <TicketForm kind="support" />
      </section>
    </>
  );
}
