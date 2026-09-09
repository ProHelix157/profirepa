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
        <h1>The fire most likely to kill you is the one that never catches.</h1>
        <p>
          A cigarette in upholstery, a failing outlet, wiring in a wall — these smolder for hours,
          and the two common kinds of smoke alarm are not equally good at finding them. The numbers
          below are from published research and the UL standard itself. They are the reason the{" "}
          {site.networkName} exists.
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
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n300)", marginTop: 32, maxWidth: "70ch" }}>
          Underwriters Laboratories tested the cheaper sensing type against smoldering fires in
          synthetic materials — mattress foam, nylon carpet, the things actually in a modern house.
          It failed to go off <strong>at all</strong> in 91% of those tests. Not late. Not at all.
          The American Society of Home Inspectors does not hedge: its position is that homeowners
          should replace ionization alarms with photoelectric ones.
        </p>
        <p style={{ fontSize: 13, color: "var(--n500)", marginTop: 16 }}>
          Sources: Grosse, DeJong &amp; Murphy, Texas A&amp;M University, Figure 8 — probability of
          fatality due to detector failing to warn while the room of origin remained tenable ·
          Underwriters Laboratories, Smoke Characterization Project, for the Fire Protection
          Research Foundation · American Society of Home Inspectors position statement.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="kicker" style={{ marginBottom: 20 }}>
          Not just any photoelectric
        </div>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em", maxWidth: "28ch", marginBottom: 24 }}>
          A hardware-store photoelectric is a real improvement. Ours goes further.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)", maxWidth: "70ch", marginBottom: 40 }}>
          To be fair about it: a photoelectric alarm from the hardware store beats what&apos;s in
          most homes. But its lens spends ten years collecting dust, cooking film and dirt — and it
          never tells you. That is how alarms quietly stop working. Here is what separates ours from
          every other photoelectric on the shelf:
        </p>
        <table className="table" style={{ maxWidth: 880 }}>
          <thead>
            <tr>
              <th style={{ width: "28%" }}></th>
              <th style={{ width: "36%" }}>Typical box-store alarm</th>
              <th style={{ width: "36%", color: "var(--accent)" }}>{site.networkName}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>When the sensor gets dirty</td>
              <td style={{ color: "var(--n400)" }}>No warning, no access</td>
              <td>It warns you; the chamber lifts out and cleans</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>As the sensor ages</td>
              <td style={{ color: "var(--n400)" }}>Drifts silently</td>
              <td>Corrects itself, tells you when it needs help</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Fast flaming fires</td>
              <td style={{ color: "var(--n400)" }}>Optical only</td>
              <td>Heat sensing built into every smoke sensor</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Whole-house interconnect</td>
              <td style={{ color: "var(--n400)" }}>Wired models, or a few app-based</td>
              <td>Wireless, 200 ft, no wiring — and the alert names the room</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>If it fails in ten years</td>
              <td style={{ color: "var(--n400)" }}>You buy another one</td>
              <td>Lifetime replacement guarantee</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>When you move</td>
              <td style={{ color: "var(--n400)" }}>Stays on the ceiling</td>
              <td>Two screws, no wiring — it comes with you</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n300)", marginTop: 32, maxWidth: "70ch" }}>
          That last row matters more than people think: renters and future movers are buying{" "}
          <strong>protection for their family</strong>, not an upgrade to a landlord&apos;s ceiling.
          Unscrew it and it goes to the next house.
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
          still deserve to know about. Three alarm points — 70, 150 and 400 ppm — mean you know
          whether to open a window or get everyone out.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--n400)", marginTop: 24, maxWidth: "70ch" }}>
          One more thing about cheap CO alarms: the sensor inside doesn&apos;t only detect carbon
          monoxide. It also reacts to alcohols and products that contain them — hairspray, aerosols,
          cleaning sprays, plug-in air fresheners. The danger is not the false alarm; it&apos;s what
          the false alarm <em>teaches</em> you. An alarm that sounds when nothing is wrong teaches a
          family to doubt it — and the next time, the instinct is to go looking for the candle
          instead of getting everyone out. An alarm that cries wolf is one you stop believing.
        </p>
      </section>

      <section className="section wrap" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ background: "var(--surface)", borderLeft: "4px solid var(--accent)", padding: "40px 48px", maxWidth: 880 }}>
          <div className="kicker" style={{ marginBottom: 16 }}>Fifty-five years</div>
          <p style={{ fontSize: 22, lineHeight: 1.5, fontStyle: "italic", color: "var(--n300)" }}>
            Since 1971, home fires and carbon monoxide have killed and injured an estimated 2
            million people. Our manufacturer has never been informed of a loss of life due to a
            failure of its products.
          </p>
        </div>
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
