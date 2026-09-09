import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pro Fire Safety is a locally owned home fire safety company in Mill Hall, PA, serving families within two hours in every direction.",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">About Pro Fire Safety</div>
        <h1>Local. Personal. Prepared.</h1>
        <p>
          Pro Fire Safety is a locally owned company based in Mill Hall, Pennsylvania, serving
          families within a two-hour radius — from State College to Williamsport and beyond.
        </p>
      </div>

      <section className="section wrap" style={{ paddingTop: 80, paddingBottom: 80, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="kicker">Our mission</div>
          <h2 style={{ fontSize: 34, letterSpacing: "-0.015em" }}>Education first. Equipment second.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)" }}>
            We educate families about the devastating effects of home fires and other home safety
            issues. Our one-on-one consultations teach families how to survive a home fire and
            carbon monoxide poisoning — and often how to prevent property damage altogether. The
            equipment matters; knowing what to do when it speaks matters even more.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div className="kicker">How we work</div>
          <h2 style={{ fontSize: 34, letterSpacing: "-0.015em" }}>One advisor, room by room.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)" }}>
            Every engagement starts with a free in-home evaluation: a certified Safety Advisor walks
            your home with you and explains what a fire, a leak, or a freeze would actually do in
            each room. If the {site.networkName} is right for your home, we design it for your floor
            plan and install it in about two hours — and you keep the 180-piece emergency
            preparedness kit either way.
          </p>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 88, display: "flex", flexDirection: "column", gap: 24 }}>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em" }}>Meet us at your front door.</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/support?new" className="btn btn-primary">
            Schedule a free evaluation
          </Link>
          <a href={site.phoneHref} className="btn btn-outline">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
