import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old WordPress URLs still in search indexes → new homes
    return [
      { source: "/pro-fire-safety-network", destination: "/network", permanent: true },
      { source: "/pro-fire-safety-about", destination: "/about", permanent: true },
      { source: "/pro-fire-safety-faq", destination: "/faq", permanent: true },
      { source: "/pro-fire-safety-contact-us", destination: "/contact", permanent: true },
      { source: "/index.php/pro-fire-safety-contact-us", destination: "/contact", permanent: true },
      { source: "/pro-fire-safety-accessories", destination: "/accessories", permanent: true },
      { source: "/pro-fire-safety-careers", destination: "/", permanent: true },
      { source: "/careers", destination: "/", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/privacy-policy-2", destination: "/privacy", permanent: true },
      { source: "/end-user-license-agreement", destination: "/privacy", permanent: true },
      { source: "/free-fire-blanket", destination: "/contact", permanent: true },
      { source: "/free-emergency-kit", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
