import type { Metadata } from "next";
import { SupportTabs } from "@/components/SupportTabs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Support",
  description:
    "Request a free in-home evaluation, or open a support ticket with Pro Fire Safety — sensor questions, app setup, batteries, warranty.",
};

export default async function SupportPage({ searchParams }: { searchParams: Promise<{ new?: string }> }) {
  const params = await searchParams;
  const initial = params.new !== undefined ? "consultation" : "support";
  return (
    <>
      <div className="page-hero">
        <div className="kicker">Contact &amp; support</div>
        <h1>How can we help?</h1>
        <p>
          New here? Request a free in-home evaluation — no obligation, and you keep the 180-piece
          emergency preparedness kit. Already protected? Open a ticket and we&apos;ll get back to
          you within one business day.
        </p>
      </div>

      <section className="wrap" style={{ paddingTop: 56, paddingBottom: 88, display: "grid", gridTemplateColumns: "minmax(280px, 4fr) minmax(320px, 8fr)", gap: 56, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--surface)", border: "1px solid var(--divider-soft)", padding: "18px 22px" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Rather talk?</div>
              <div style={{ fontSize: 14, color: "var(--n400)" }}>
                <a href={site.phoneHref} style={{ color: "var(--text)", fontWeight: 700 }}>{site.phone}</a> — or 911 for an active fire.
              </div>
            </div>
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>Visit</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--n400)" }}>
              {site.address[0]}
              <br />
              {site.address[1]}
            </p>
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>Service area</div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--n400)" }}>
              {site.serviceArea} — Lock Haven, State College, Williamsport, Bellefonte, and
              everywhere in between.
            </p>
          </div>
        </div>
        <SupportTabs initial={initial} />
      </section>
    </>
  );
}
