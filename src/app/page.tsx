import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { getReviews } from "@/lib/reviews";
import { PhoneDemo } from "@/components/PhoneDemo";
import styles from "./page.module.css";

const pillars = [
  {
    n: "01",
    title: "Fire",
    img: "/threat-fire.jpg",
    alt: "A pan fire flaring on a stovetop",
    body: "Smoke and heat sensors in every room, including the ones a hallway alarm never hears. When one sensor sees smoke, every sensor sounds, and the network names the room.",
  },
  {
    n: "02",
    title: "Flood",
    img: "/threat-flood.jpg",
    alt: "Water leaking from a failed pipe",
    body: "Water sensors under the water heater, behind the washer, beside the sump. A failed hose becomes a text message in the first minute, not a claim in the third week.",
  },
  {
    n: "03",
    title: "Freeze",
    img: "/threat-freeze.jpg",
    alt: "A pipe joint covered in frost",
    body: "Freeze sensors watch the crawlspace and the cabin you only visit on weekends. A Pennsylvania January does not give your pipes a second chance.",
  },
];

const networkFeatures = [
  {
    title: "Event Positioning System",
    body: "Exclusive to the network. Names the exact room the hazard is in, so your family escapes away from it.",
  },
  {
    title: "Texas Instruments inside",
    body: "Every sensor runs a TI microprocessor and RF module. Sealed 10-year industrial LiMn battery. No wiring, no chirp.",
  },
  {
    title: site.appName,
    body: "iOS and Android. Up to 8 contacts get texts and emails in real time, wherever they are — and the PEEK feature lets you check on your home any time.",
  },
  {
    title: "Bedside Control Center",
    body: "The whole network at arm's reach, at night, when most home fires happen — with a 520 Hz low-frequency alarm and mattress shaker built to wake heavy sleepers.",
  },
];

const comparison = [
  ["Where it listens", "The hallway it hangs in", "Every room"],
  ["What it detects", "Smoke, sometimes CO", "Smoke, heat, CO, flood, freeze"],
  ["Who it tells", "Whoever is home and awake", "Whole house + 8 contacts"],
  ["What it says", "Something, somewhere", "Which hazard, which room"],
  ["Battery", "Yearly 9V, chirps at 3 a.m.", "10-year sealed LiMn"],
  ["When it gets dirty", "Quietly stops working", "Warns you; chamber lifts out"],
  ["If it fails in ten years", "You buy another one", "Lifetime replacement guarantee"],
  ["Installed by", "You and a ladder", "Certified Safety Advisor"],
];

const steps = [
  {
    n: "01",
    title: "Evaluate",
    body: "A certified Safety Advisor walks your home with you, room by room, and explains what a fire, a leak or a freeze would actually do in each one. Free, no obligation — and you receive a 180-piece emergency preparedness kit.",
  },
  {
    n: "02",
    title: "Install",
    body: "We design the network for your floor plan and install it — about two hours for a whole house. Wireless, so no drywall comes down. App and Bedside Control Center set up before we leave.",
  },
  {
    n: "03",
    title: "Monitor",
    body: "The network watches every room, every second, for a decade on one battery — with no monthly fee, ever. If anything ever fails from fire, we replace it.",
  },
];

export default async function Home() {
  const reviewData = await getReviews();
  return (
    <>
      {/* Hero — full-bleed */}
      <section className={`section ${styles.hero}`}>
        <Image src="/hero-aerial.jpg" alt="" fill priority style={{ objectFit: "cover" }} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <div className="kicker">
              {site.networkName} · Mill Hall, PA
            </div>
            <h1 className={styles.heroTitle}>
              Built like a security system.
              <br />
              Because it is one.
            </h1>
            <p className={styles.heroLede}>
              You&apos;ve already protected your home from the threats outside. The ones that start
              inside — fire, carbon monoxide, water, freeze — move faster and take more lives. The{" "}
              {site.networkName} puts a sensor in every room that tells you what&apos;s wrong, and
              exactly where.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn-primary">
                Schedule a free in-home evaluation
              </Link>
              <Link href="/network" className="btn btn-outline">
                See the network
              </Link>
            </div>
          </div>
          <div className={styles.heroSpecs}>
            <div>
              <span>Hazards</span>
              <span>Smoke · Heat · CO · Flood · Freeze</span>
            </div>
            <div>
              <span>Battery</span>
              <span>10-year industrial LiMn</span>
            </div>
            <div>
              <span>Alerts</span>
              <span>Every room + 8 contacts</span>
            </div>
            <div>
              <span>Monitoring fee</span>
              <span>$0 a month, forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={`section ${styles.pillars}`}>
        {pillars.map((p) => (
          <div key={p.title} className={styles.pillar}>
            <div className={styles.stepBadge}>
              <span className={styles.dot} />
              {p.n}
            </div>
            <Image src={p.img} alt={p.alt} width={640} height={400} style={{ width: "100%", height: "auto", aspectRatio: "8 / 5", objectFit: "cover" }} />
            <h3 style={{ fontSize: 36, letterSpacing: "-0.015em", marginTop: 8 }}>{p.title}</h3>
            <p style={{ fontSize: 16, color: "var(--n400)" }}>{p.body}</p>
          </div>
        ))}
      </section>

      {/* Network */}
      <section className={`section wrap ${styles.network}`}>
        <div className="kicker" style={{ marginBottom: 24 }}>
          The {site.networkName}
        </div>
        <h2 className={styles.networkTitle}>Danger in one room. Alerts in every room.</h2>
        <div className={styles.networkGrid}>
          <div className={styles.lineupWrap}>
            <Image src="/system-lineup.jpg" alt={`The complete ${site.networkName}: smoke, heat, and carbon monoxide sensors, Comm Link, Bedside Control Center with mattress shaker, and water sensor`} width={1400} height={832} style={{ width: "100%", height: "auto", border: "2px solid var(--divider)" }} />
            <div className={styles.phoneOverlay}>
              <PhoneDemo maxWidth={160} />
            </div>
          </div>
          <div className={styles.featureList}>
            {networkFeatures.map((f) => (
              <div key={f.title} className={styles.feature}>
                <h3 style={{ fontSize: 20, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: "var(--n400)" }}>{f.body}</p>
              </div>
            ))}
            <Link href="/network" className="btn btn-outline" style={{ alignSelf: "flex-start", marginTop: 16 }}>
              Explore the network
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={`section ${styles.compare}`}>
        <div className={styles.compareIntro}>
          <div className="kicker">Why not a $20 alarm</div>
          <h2 style={{ fontSize: 40, letterSpacing: "-0.02em" }}>A smoke alarm is a device. This is a system.</h2>
          <p style={{ fontSize: 15, color: "var(--n400)" }}>
            Most homes have alarms. Most home fire deaths still happen in homes with alarms that did
            not sound, were not heard, or were in the wrong room. The network is designed around
            those three failures.
          </p>
          <Link href="/why-alarms-fail" style={{ fontWeight: 600, fontSize: 15 }}>
            See the research on why alarms fail →
          </Link>
        </div>
        <div className={styles.compareTable}>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "30%" }}></th>
                <th style={{ width: "35%" }}>Store-bought alarm</th>
                <th style={{ width: "35%", color: "var(--accent)" }}>{site.networkName}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, a, b]) => (
                <tr key={label}>
                  <td style={{ fontWeight: 600 }}>{label}</td>
                  <td style={{ color: "var(--n400)" }}>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Statement */}
      <section className="section wrap" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <h2 style={{ fontSize: "clamp(40px, 4.8vw, 68px)", lineHeight: 1.05, letterSpacing: "-0.025em", maxWidth: "22ch", marginLeft: "-0.04em" }}>
          You&apos;re not buying alarms. You&apos;re putting a safety net around the people under your roof.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--n400)", maxWidth: "58ch", marginTop: 28 }}>
          Families invest in the {site.networkName} the way they invest in a security system,
          because that&apos;s what it is — designed for your floor plan, installed by a certified
          Safety Advisor, backed for life, and watching every room while you sleep.
        </p>
      </section>

      {/* Mission + why */}
      <section className={`section ${styles.mission}`}>
        <div>
          <div className="kicker">Our mission</div>
          <h2 style={{ fontSize: 34, letterSpacing: "-0.015em", margin: "18px 0" }}>Education first. Equipment second.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)", maxWidth: "52ch" }}>
            We educate families about the devastating effects of home fires and other home safety
            issues. Our one-on-one consultations teach families how to survive a home fire and
            carbon monoxide poisoning, and often how to prevent property damage altogether.
          </p>
        </div>
        <div>
          <div className="kicker">Why Pro Fire Safety</div>
          <h2 style={{ fontSize: 34, letterSpacing: "-0.015em", margin: "18px 0" }}>Your family&apos;s safety, treated as our own.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--n400)", maxWidth: "52ch" }}>
            Today&apos;s homes present dangers most homeowners never see. Education and advanced
            detection are the answer when seconds count, and we bring both to every home we visit.
            Locally owned in Mill Hall, serving families within two hours in every direction.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className={`section wrap ${styles.how}`}>
        <div className="kicker" style={{ marginBottom: 40 }}>
          How it works
        </div>
        <div className={styles.howGrid}>
          {steps.map((s) => (
            <div key={s.n} className={styles.howStep}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 15 }}>{s.n}</div>
              <h3 style={{ fontSize: 30, margin: "12px 0 0" }}>{s.title}</h3>
              <p style={{ fontSize: 16, color: "var(--n400)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews — pulled live from Google, refreshed daily */}
      <section className="section wrap" style={{ paddingTop: 80, paddingBottom: 80, display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="kicker">From our Google reviews</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(56px, 6vw, 88px)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                {reviewData.rating}<span style={{ color: "var(--accent)" }}>★</span>
              </span>
              <span style={{ fontSize: 18, color: "var(--n400)" }}>{reviewData.count} reviews on Google</span>
            </div>
          </div>
          <a href={reviewData.mapsUri} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Read all reviews on Google
          </a>
        </div>
        {reviewData.reviews.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
            {reviewData.reviews.slice(0, 3).map((r) => (
              <figure key={r.author + r.when} style={{ margin: 0, borderTop: "2px solid var(--text)", paddingTop: 22, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ color: "var(--accent)", fontSize: 15, letterSpacing: 2 }} aria-label={`${r.rating} out of 5 stars`}>
                  {"★".repeat(Math.round(r.rating))}
                </div>
                <blockquote style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--n300)" }}>
                  &ldquo;{r.text.length > 260 ? r.text.slice(0, 260).trimEnd() + "…" : r.text}&rdquo;
                </blockquote>
                <figcaption style={{ fontSize: 14, color: "var(--n500)" }}>
                  — {r.author} · {r.when}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* Close */}
      <section className={styles.close}>
        <div className={styles.closeCta}>
          <h2 style={{ fontSize: "clamp(40px, 4.5vw, 64px)", letterSpacing: "-0.025em", marginLeft: "-0.05em" }}>
            Let&apos;s walk your home together.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, maxWidth: "44ch" }}>
            A free in-home evaluation with a certified Safety Advisor. No obligation, and you keep
            what you learn.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-ink">
              Schedule a free evaluation
            </Link>
            <a href={site.phoneHref} className="btn btn-outline-ink">
              Call {site.phone}
            </a>
          </div>
        </div>
        <div className={styles.closeSupport}>
          <div className="kicker">Already protected?</div>
          <h2 style={{ fontSize: 30, letterSpacing: "-0.015em" }}>
            Submit a support ticket. You&apos;ll get a number in a minute and a person shortly after.
          </h2>
          <Link href="/support" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              <path d="M13 5v2M13 17v2M13 11v2" />
            </svg>
            Submit a ticket
          </Link>
        </div>
      </section>
    </>
  );
}
