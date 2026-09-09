import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="cols">
        <div className="col" style={{ gap: 14 }}>
          <Image src="/logo-dark.png" alt="Pro Fire Safety" width={500} height={187} style={{ height: 44, width: "auto", marginLeft: -10, alignSelf: "flex-start" }} />
          <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--n400)" }}>
            {site.address[0]}
            <br />
            {site.address[1]}
            <br />
            <a href={site.phoneHref} style={{ color: "var(--text)" }}>
              {site.phone}
            </a>
          </div>
          <div style={{ fontSize: 13, color: "var(--n500)" }}>{site.serviceArea}</div>
        </div>
        <div className="col">
          <div className="col-label">Company</div>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/support?new">Contact Us</Link>
        </div>
        <div className="col">
          <div className="col-label">Products</div>
          <Link href="/network">{site.networkName}</Link>
          <Link href="/accessories">Accessories</Link>
          <Link href="/support?new">Free Evaluation</Link>
        </div>
        <div className="col">
          <div className="col-label">Support</div>
          <Link href="/support">Submit a Ticket</Link>
          <Link href="/why-alarms-fail">Why Alarms Fail</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      <div className="legal">
        <span>
          © {new Date().getFullYear()} Pro Fire Safety · {site.tagline}
        </span>
        <span>Mill Hall, Pennsylvania</span>
      </div>
    </footer>
  );
}
