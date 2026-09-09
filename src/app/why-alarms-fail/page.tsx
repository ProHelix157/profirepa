import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Most Smoke Alarms Fail",
  description:
    "Texas A&M research: ionization alarms carry a 55.8% chance of failing to warn in time during a smoldering fire. Photoelectric: 4.06%. Here's what the numbers mean for your home.",
};

export default function WhyAlarmsFailPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">The research</div>
        <h1>Most homes have alarms. That&apos;s not the same as being protected.</h1>
        <p>
          Most home fire deaths happen in homes that had alarms — alarms that did not sound, were
          not heard, or were in the wrong room. The numbers below are from published research and
          the UL standard itself. They are the reason the {site.networkName} exists.
        </p>
      </div>

      <section className="section wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="kicker" style={{ marginBottom: 20 }}>
          Ionization vs photoelectric
        </div>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em", maxWidth: "26ch", marginBottom: 24 }}>
          The alarm in most homes has a 1-in-2 chance of failing you in a smoldering fire.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)", maxWidth: "70ch", marginBottom: 40 }}>
          Researchers at Texas A&amp;M (Grosse, DeJong and Murphy) measured the probability of a
          fatality because the detector failed to warn while the room of origin was still survivable.
          Most smoke alarms sold in the US are ionization.
        </p>
        <table className="table" style={{ maxWidth: 720 }}>
          <thead>
            <tr>
              <th>Detector type</th>
              <th>Smoldering fire</th>
              <th>Flaming fire</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>Ionization (most homes)</td>
              <td style={{ color: "var(--accent)", fontWeight: 800, fontSize: 22 }}>55.8%</td>
              <td style={{ color: "var(--n300)" }}>19.8%</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Photoelectric (our network)</td>
              <td style={{ fontWeight: 800, fontSize: 22 }}>4.06%</td>
              <td style={{ color: "var(--n300)" }}>3.99%</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: 13, color: "var(--n500)", marginTop: 12 }}>
          Source: Grosse, DeJong &amp; Murphy, Texas A&amp;M University, Figure 8. Probability of
          fatality due to detector failing to warn while the room of origin remained tenable.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="kicker" style={{ marginBottom: 20 }}>
          Carbon monoxide
        </div>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em", maxWidth: "26ch", marginBottom: 24 }}>
          We respond at the fast end of every window the standard allows.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)", maxWidth: "70ch", marginBottom: 16 }}>
          UL 2034 sets response windows deliberately — the floors exist to prevent nuisance alarms,
          not because slow is good. Within those windows, our CO sensors respond at the fast end of
          every one, and respond at three concentrations rather than a single trigger point.
        </p>
        <table className="table" style={{ maxWidth: 720 }}>
          <thead>
            <tr>
              <th>CO level</th>
              <th>UL 2034 allows</th>
              <th style={{ color: "var(--accent)" }}>Our network responds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>70 ppm</td>
              <td style={{ color: "var(--n400)" }}>60–240 minutes</td>
              <td>60–80 minutes</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>150 ppm</td>
              <td style={{ color: "var(--n400)" }}>10–50 minutes</td>
              <td>10–15 minutes</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>400 ppm</td>
              <td style={{ color: "var(--n400)" }}>4–15 minutes</td>
              <td>4–8 minutes</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: 15, color: "var(--n300)", marginTop: 16, maxWidth: "70ch" }}>
          Plus: the {site.appName} warns you at 30–50 ppm after 8 hours of continuous detection — a
          low, sustained level the standard requires alarms <em>not</em> to sound at, but one you
          still deserve to know about.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 80, paddingBottom: 80, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>
        <div style={{ borderTop: "2px solid var(--text)", paddingTop: 24 }}>
          <h3 style={{ fontSize: 24, marginBottom: 12 }}>The alarm that quietly gets dirty</h3>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--n400)" }}>
            Box-store photoelectric alarms are sealed. Dust, dirt and film build up on the lens and
            the alarm quietly stops working — no warning, no access. Our smoke chamber lifts out and
            cleans, and the system tells you when it needs it.
          </p>
        </div>
        <div style={{ borderTop: "2px solid var(--text)", paddingTop: 24 }}>
          <h3 style={{ fontSize: 24, marginBottom: 12 }}>The beep that doesn&apos;t wake you</h3>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--n400)" }}>
            The standard high-pitched alarm tone is poor at waking children, adults over 40, and
            anyone on sleep aids. Our Bedside Control Center uses a 520 Hz low-frequency tone — the
            one that works — and vibrates the mattress at the same time.
          </p>
        </div>
        <div style={{ borderTop: "2px solid var(--text)", paddingTop: 24 }}>
          <h3 style={{ fontSize: 24, marginBottom: 12 }}>The alarm in the wrong room</h3>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--n400)" }}>
            A hallway alarm can&apos;t hear a garage fire. Our sensors cover every room and talk to
            each other — danger in one room sounds every room, and the alert names the room, so you
            escape away from it.
          </p>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 72, paddingBottom: 88, display: "flex", flexDirection: "column", gap: 24 }}>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em", maxWidth: "24ch" }}>
          Want to know where your home stands?
        </h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary">
            Schedule a free evaluation
          </Link>
          <Link href="/network" className="btn btn-outline">
            See the network
          </Link>
        </div>
      </section>
    </>
  );
}
