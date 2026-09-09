import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about home fire safety and the Pro Fire Network.",
};

const faqs = [
  {
    q: "I have wired-in alarms that came with my house. I'm good, right?",
    a: "You would think so. The problem is the alarms your contractor put in — or the ones from the big-box store — are probably using technology that's been around for over 40 years and hasn't changed. In today's house fires, they have failure rates that will shock you. See the research on our Why Alarms Fail page.",
  },
  {
    q: "Do my current alarms meet code?",
    a: "Keep in mind that code is the minimum. Most codes say to put smoke detectors in bedrooms, hallways outside bedrooms, and one per floor. So where does the fire have to be for those alarms to even see the smoke? Exactly there. Think of all the rooms where fires actually start: the kitchen, attic, unfinished basement, laundry room, garage, even the dining room. Would you rather know about those fires while they're still in those rooms — or wait until they reach where you're sleeping?",
  },
  {
    q: "We have another monitoring company. Why do we need you?",
    a: "Most monitoring companies don't provide whole-home fire protection. Go check where their detectors are installed — probably one per floor. That's like putting a security system on a house with 20 windows and doors and only covering three of them. Let them handle your security; let us handle your family's fire protection.",
  },
  {
    q: "Am I safer sleeping with my bedroom door open or closed?",
    a: "Closed. Sleeping with your door closed is significantly safer than sleeping with it open — yet fewer than 30% of Americans do it. Schedule a free fire safety consultation and we'll show you why.",
  },
  {
    q: "In a fire, how much time do I have to escape?",
    a: "Less than ever. Modern furnishings burn faster and produce more toxic smoke than the materials in older homes. The honest answer is: minutes, sometimes less. How long would it take to wake your whole family and get everyone out?",
  },
  {
    q: "Is there a monthly monitoring fee?",
    a: "No. $0 per month, ever. The network is yours — it alerts your phone and up to 8 contacts directly, with no subscription.",
  },
  {
    q: "\"This will never happen to me.\"",
    a: "No one thinks they're going to have a home fire — that's exactly the problem. With fire, preparation only counts if it happens before. Waiting until after can end in tragedy.",
  },
];

const didYouKnow = [
  "Doesn't have a family meeting spot",
  "Hasn't done a fire drill",
  "Doesn't know how to use a fire extinguisher",
  "Doesn't know how to put out a grease fire",
];

export default function FaqPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">FAQ</div>
        <h1>Frequently asked questions.</h1>
        <p>Straight answers about home fire safety, alarms, and the {site.networkName}.</p>
      </div>

      <section className="section wrap" style={{ paddingTop: 64, paddingBottom: 64, display: "flex", flexDirection: "column", maxWidth: 980 }}>
        {faqs.map((f) => (
          <div key={f.q} style={{ borderBottom: "1px solid var(--divider-soft)", padding: "28px 0" }}>
            <h3 style={{ fontSize: 22, marginBottom: 12 }}>{f.q}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)" }}>{f.a}</p>
          </div>
        ))}
      </section>

      <section className="section wrap" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="kicker" style={{ marginBottom: 20 }}>
          Did you know — the average family…
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
          {didYouKnow.map((d) => (
            <div key={d} style={{ borderTop: "2px solid var(--accent)", paddingTop: 18, fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 19, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              {d}
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 88, display: "flex", flexDirection: "column", gap: 24 }}>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em" }}>Get answers for your own home.</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary">
            Schedule a free consultation
          </Link>
          <a href={site.phoneHref} className="btn btn-outline">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
