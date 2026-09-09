import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://profirepa.com"),
  title: {
    default: "Pro Fire Safety | Fire · Flood · Freeze",
    template: "%s | Pro Fire Safety",
  },
  description:
    "The Pro Fire Network: wireless smoke, heat, carbon monoxide, flood, and freeze sensors in every room, installed by certified Safety Advisors in Central Pennsylvania.",
  openGraph: {
    title: "Pro Fire Safety | Built like a security system. Because it is one.",
    description:
      "Danger in one room, alerts in every room — and the alert names the room. Whole-home protection for Central Pennsylvania families.",
    type: "website",
    url: "https://profirepa.com",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Pro Fire Safety" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Fire Safety | Fire · Flood · Freeze",
    description: "Whole-home protection for Central Pennsylvania families.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <div className="shell">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
