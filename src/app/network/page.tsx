import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Pro Fire Network",
  description:
    "A private wireless mesh of smoke, heat, CO, water and freeze sensors. Danger in one room means alerts in every room — and the alert names the room.",
};

const devices = [
  {
    img: "/device-smoke.jpg",
    name: "Smoke Sensor",
    body: "Infrared optics scan the chamber every 4 seconds, plus dual thermal sensing — catching both slow smoldering and fast flaming fires with fewer false alarms. The chamber lifts out and cleans, and the system tells you when it needs it. A sealed box-store alarm that gets dirty just quietly stops working.",
    specs: ["360° cleanable smoke chamber", "Heat backup built in", "One-touch silence", "100 dB horn"],
  },
  {
    img: "/device-heat.jpg",
    name: "Heat Sensor",
    body: "For the kitchen, garage, attic and laundry room — where a smoke alarm would nuisance-trip and most homes have no protection at all. Rate-of-rise detection plus three programmable fixed temperatures.",
    specs: ["Rate-of-rise + fixed temp", "117° / 135° / 175° settings", "Covers the rooms alarms can't"],
  },
  {
    img: "/device-co.jpg",
    name: "Carbon Monoxide Sensor",
    body: "Most alarms are built around a single high trigger point. Ours responds at three concentrations, at the fast end of every UL 2034 window — and the app warns you of low-level CO the standard requires alarms not to sound at.",
    specs: ["Responds at 3 CO levels", "App alert at 30–50 ppm sustained", "Alerts every room, not one"],
  },
  {
    img: "/device-water.jpg",
    name: "Water Sensor",
    body: "At every water connection in the house: water heater, washer, sump, bathrooms. A failed hose becomes a text message in the first minute.",
    specs: ["Leak detection at the source", "Freeze detection built in"],
  },
  {
    img: "/device-bedside.jpg",
    name: "Bedside Control Center",
    body: "An alarm only works if it wakes you. The standard high-pitched beep is poor at waking children, adults over 40, and anyone on sleep aids. The Bedside Control Center uses a 520 Hz low-frequency tone — the one that does work — and vibrates the mattress at the same time.",
    specs: ["520 Hz low-frequency alarm", "Mattress shaker", "Whole network at arm's reach"],
  },
  {
    img: "/device-commlink.jpg",
    name: "Comm Link",
    body: `One per system — the bridge that connects your network to the ${site.appName}, so up to 8 contacts get texts and emails the moment anything trips.`,
    specs: ["Real-time text + email alerts", "Up to 8 contacts", "PEEK in from anywhere"],
  },
];

const specs = [
  ["Battery", "Sealed 10-year industrial LiMn — the alarm's full NFPA 72 service life"],
  ["Monthly fee", "$0. Ever."],
  ["Radio range", "200 ft"],
  ["Alarm horn", "100 dB on every sensor"],
  ["Flame rating", "94 V0"],
  ["Smoke scan cycle", "Every 4 seconds"],
  ["App", `${site.appName} — iOS and Android`],
  ["Alert contacts", "Up to 8, by text and email"],
  ["Whole-house install", "About 2 hours"],
  ["Product warranty", "Lifetime replacement guarantee (prorated)"],
  ["Fire warranty", "Damaged in a fire? We replace it free."],
];

export default function NetworkPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">The {site.networkName}</div>
        <h1>A private sensor network for your whole home.</h1>
        <p>
          Built on Texas Instruments microprocessors and RF modules, every sensor joins one private
          wireless mesh — no wiring to run, no monthly fee. If there is danger in one room, every
          room sounds, and our exclusive Event Positioning System names the room it is coming from,
          so your family escapes away from it, not through it.
        </p>
      </div>

      <section className="section wrap split-grid" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/app-demo-poster.jpg"
          style={{ width: "100%", maxWidth: 240, height: "auto", borderRadius: "11%/5.4%", display: "block", boxShadow: "0 24px 60px rgba(0,0,0,0.55)", margin: "0 auto" }}
          aria-label={`The ${site.appName} scrolling through every sensor in the home, room by room`}
        >
          <source src="/app-demo.mp4" type="video/mp4" />
        </video>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, alignSelf: "center" }}>
          <div className="kicker">The {site.appName}</div>
          <h2 style={{ fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Every room, in your pocket.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)", maxWidth: "54ch" }}>
            See your home&apos;s safety in real time, room by room. Instant texts and emails tell you
            — and up to 8 contacts — exactly which room has a fire, a water leak, a freeze problem,
            or carbon monoxide. The PEEK feature lets you check in from anywhere, any time. iOS and
            Android.
          </p>
        </div>
      </section>

      <section className="section wrap" style={{ paddingTop: 72, paddingBottom: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28 }}>
        {devices.map((d) => (
          <div key={d.name} style={{ background: "var(--surface)", border: "1px solid var(--divider-soft)", padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            <Image src={d.img} alt={d.name} width={480} height={480} style={{ width: "100%", maxWidth: 220, height: "auto", aspectRatio: "1", objectFit: "cover", alignSelf: "flex-start" }} />
            <h3 style={{ fontSize: 24 }}>{d.name}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--n400)" }}>{d.body}</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: "var(--n300)", display: "flex", flexDirection: "column", gap: 6 }}>
              {d.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section wrap" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="kicker" style={{ marginBottom: 24 }}>
          Published specifications
        </div>
        <table className="table" style={{ maxWidth: 720 }}>
          <tbody>
            {specs.map(([k, v]) => (
              <tr key={k}>
                <td style={{ fontWeight: 600, width: "40%" }}>{k}</td>
                <td style={{ color: "var(--n300)" }}>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="wrap" style={{ paddingTop: 72, paddingBottom: 88, display: "flex", flexDirection: "column", gap: 24 }}>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em", maxWidth: "24ch" }}>
          See it in your own home.
        </h2>
        <p style={{ fontSize: 17, color: "var(--n400)", maxWidth: "60ch" }}>
          A certified Safety Advisor will walk your home room by room, design the network for your
          floor plan, and leave you a 180-piece emergency preparedness kit — free, no obligation.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary">
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
