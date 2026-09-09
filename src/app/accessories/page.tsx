import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessories",
  description:
    "Fire extinguishers, fire blankets, escape ladders, burn kits, emergency kits, 911 alert, radon and gas detectors — the equipment that completes a home safety plan.",
};

const accessories = [
  {
    img: "/acc-extinguishers.jpg",
    name: "Fire Extinguishers",
    body: "The right extinguisher for the right room — and a Safety Advisor who shows your family how to actually use one before you need it.",
  },
  {
    img: "/acc-fireblanket.jpg",
    name: "Fire Blankets",
    body: "The fastest, safest answer to a grease fire. No mess, no aim, no expiration anxiety — smother it and done.",
  },
  {
    img: "/acc-ladder.jpg",
    name: "Emergency Escape Ladders",
    body: "A second-story bedroom needs a second way out. Compact ladders that deploy in seconds from any window.",
  },
  {
    img: "/acc-burnkit.jpg",
    name: "Burn Kits",
    body: "Purpose-built first aid for burns — the minutes before help arrives matter.",
  },
  {
    img: "/acc-epk.jpg",
    name: "Emergency Preparedness Kits",
    body: "The 180-piece kit every evaluation customer receives free — food, water, light, first aid, and the basics your family needs in any emergency.",
  },
  {
    img: "/acc-911alert.jpg",
    name: "911 Alert",
    body: "One-touch emergency calling for family members who need help fast.",
  },
  {
    img: "/acc-radon.jpg",
    name: "Radon Detectors",
    body: "The second-leading cause of lung cancer is invisible and odorless — and common in Pennsylvania homes. Know your number.",
  },
  {
    img: "/acc-gas.jpg",
    name: "Gas Detectors",
    body: "Natural gas and propane leaks announced before your nose ever notices.",
  },
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

      <section className="section wrap" style={{ paddingTop: 64, paddingBottom: 72, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 28 }}>
        {accessories.map((a) => (
          <div key={a.name} style={{ background: "var(--surface)", border: "1px solid var(--divider-soft)", padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
            <Image src={a.img} alt={a.name} width={600} height={600} style={{ width: "100%", aspectRatio: "1", objectFit: "cover", background: "#fff" }} />
            <h3 style={{ fontSize: 21 }}>{a.name}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--n400)" }}>{a.body}</p>
          </div>
        ))}
      </section>

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 88, display: "flex", flexDirection: "column", gap: 24 }}>
        <h2 style={{ fontSize: 40, letterSpacing: "-0.02em", maxWidth: "26ch" }}>
          Not sure what your home needs? That&apos;s the point of the walk-through.
        </h2>
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
