import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Pro Fire Safety team — Safety Advisors and installers in Central Pennsylvania.",
};

export default function CareersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="kicker">Careers</div>
        <h1>Join our team.</h1>
        <p>
          We&apos;re a locally owned Mill Hall company doing work that genuinely matters — teaching
          families how to survive the worst night of their lives, and installing the equipment that
          makes sure it never comes to that.
        </p>
      </div>

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 88, display: "flex", flexDirection: "column", gap: 24 }}>
        <p className="prose">
          Interested in becoming a Safety Advisor? Tell us about yourself — call{" "}
          <a href={site.phoneHref}>{site.phone}</a> or send a note through our contact page.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/support?new" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
