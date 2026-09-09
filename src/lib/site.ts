export const site = {
  name: "Pro Fire Safety",
  tagline: "Fire · Flood · Freeze",
  phone: "814-280-3155",
  phoneHref: "tel:8142803155",
  address: ["7133 Nittany Valley Dr, Suite 2", "Mill Hall, PA 17751"],
  serviceArea: "Serving homes within two hours of Mill Hall, PA",
  networkName: "Pro Fire Network",
  appName: "Pro Fire App",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/network", label: "Network" },
  { href: "/why-alarms-fail", label: "Why Alarms Fail" },
  { href: "/accessories", label: "Accessories" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
  
] as const;
