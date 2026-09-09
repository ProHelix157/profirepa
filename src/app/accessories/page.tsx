import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessories",
  description:
    "The Rusoh Eliminator self-service fire extinguisher, fire blankets, and the 180-piece emergency preparedness kit — the equipment that completes a home safety plan.",
};

const rusohPoints = [
  "Self-service by design — no licensed technician, no service calls. Reload it yourself in minutes and put it right back on the wall.",
  "Not pressurized until you use it. The expellant cartridge screws in and pressurizes only when you fight a fire — easier to check, safer to store.",
  "The patented fluffing wheel keeps the powder fluid — a quarter-turn now and then and the agent is ready when seconds count.",
  "5 lb ABC unit rated 3-A:40-B:C. UL listed, NFPA 10 compliant — the first portable self-service extinguisher to earn it.",
  "Corrosion-proof engineered polymer body, built for either hand.",
];

export default function AccessoriesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">Accessories</div>
        <h1>The equipment that completes the plan.</h1>
        <p>
          The {site.networkName} watches your home. These are the tools your family uses when
          seconds count — every one of them covered in your free consultation.
        </p>
      </div>

      {/* Rusoh Eliminator — featured, flames behind */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/rusoh-flames.mp4"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(18,17,16,0.92) 0%, rgba(18,17,16,0.7) 50%, rgba(18,17,16,0.35) 100%)" }} />
        <div className="wrap" style={{ position: "relative", paddingTop: 88, paddingBottom: 88, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <div className="kicker" style={{ marginBottom: 20 }}>
              Fire extinguishers
            </div>
            <h2 style={{ fontSize: 40, letterSpacing: "-0.02em", maxWidth: "22ch", marginBottom: 20 }}>
              The Rusoh<sup>®</sup> Eliminator<sup>®</sup> — the extinguisher you service yourself.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--n300)", maxWidth: "58ch", marginBottom: 28 }}>
              A traditional extinguisher needs a licensed technician on a schedule — and quietly
              loses pressure in between. We carry the Eliminator because it fits how we think about
              safety equipment: you should be able to check it, maintain it, and trust it yourself.
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, maxWidth: "58ch", display: "flex", flexDirection: "column", gap: 12, fontSize: 15, lineHeight: 1.6, color: "var(--n300)" }}>
              {rusohPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <Image src="/rusoh-lineup.png" alt="The Rusoh Eliminator family: 2.5 lb, 5 lb, and 13.25 lb self-service fire extinguishers" width={1200} height={1200} style={{ width: "100%", maxWidth: 480, height: "auto", justifySelf: "center", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.6))" }} />
        </div>
      </section>

      {/* Blanket + EPK */}
      <section className="section wrap" style={{ paddingTop: 64, paddingBottom: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--divider-soft)", padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
          <Image src="/acc-fireblanket.jpg" alt="Fire blanket" width={600} height={600} style={{ width: "100%", maxWidth: 320, height: "auto", aspectRatio: "1", objectFit: "cover", background: "#fff", alignSelf: "flex-start" }} />
          <h3 style={{ fontSize: 26 }}>Fire Blankets</h3>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--n400)" }}>
            The fastest, safest answer to a grease fire — no mess, no aim, no expiration anxiety.
            Smother it and done. Every kitchen should have one within reach of the stove.
          </p>
        </div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--divider-soft)", padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
          <Image src="/acc-epk.jpg" alt="180-piece emergency preparedness kit" width={600} height={600} style={{ width: "100%", maxWidth: 320, height: "auto", aspectRatio: "1", objectFit: "cover", background: "#fff", alignSelf: "flex-start" }} />
          <h3 style={{ fontSize: 26 }}>Emergency Preparedness Kit</h3>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--n400)" }}>
            The 180-piece kit every evaluation customer receives free — food, water, light, first
            aid, and the basics your family needs in any emergency, packed and ready to grab.
          </p>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 88, display: "flex", flexDirection: "column", gap: 24 }}>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em", maxWidth: "26ch" }}>
          Not sure what your home needs? That&apos;s the point of the walk-through.
        </h2>
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
