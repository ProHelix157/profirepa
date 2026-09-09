import type { Metadata } from "next";
import { TicketForm } from "@/components/TicketForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a free in-home fire safety evaluation with Pro Fire Safety — includes a 180-piece emergency preparedness kit.",
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">Contact us</div>
        <h1>Let&apos;s walk your home together.</h1>
        <p>
          Request a free in-home evaluation with a certified Safety Advisor — no obligation, and you
          receive a 180-piece emergency preparedness kit. Or just call: {site.phone}.
        </p>
      </div>

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 88, display: "grid", gridTemplateColumns: "minmax(280px, 5fr) minmax(320px, 7fr)", gap: 56, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>Call or visit</div>
            <p style={{ fontSize: 17, lineHeight: 1.7 }}>
              <a href={site.phoneHref} style={{ color: "var(--text)", fontWeight: 700 }}>
                {site.phone}
              </a>
              <br />
              <span style={{ color: "var(--n400)" }}>
                {site.address[0]}
                <br />
                {site.address[1]}
              </span>
            </p>
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>Service area</div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--n400)" }}>
              {site.serviceArea} — Lock Haven, State College, Williamsport, Bellefonte, and
              everywhere in between.
            </p>
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 10 }}>Already a customer?</div>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--n400)" }}>
              Head to <a href="/support">Submit a Ticket</a> instead — it goes straight to the
              service queue.
            </p>
          </div>
        </div>
        <TicketForm kind="consultation" />
      </section>
    </>
  );
}
