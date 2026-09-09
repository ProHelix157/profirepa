import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Nav() {
  return (
    <nav className="site-nav">
      <Link href="/" className="brand" aria-label="Pro Fire Safety home">
        <Image src="/logo-dark.png" alt="Pro Fire Safety — Fire · Flood · Freeze" width={500} height={187} style={{ height: 48, width: "auto" }} priority />
      </Link>
      <div className="links">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <a href={site.phoneHref} className="btn btn-primary" style={{ padding: "10px 16px", fontSize: 14 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        {site.phone}
      </a>
    </nav>
  );
}
