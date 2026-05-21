import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createMetadata({
    description:
      "Genuine Suppliers & Builders Pvt. Ltd. provides construction, finishing, maintenance, repair, electrical, plumbing, CCTV, waterproofing, and interior services in Lalitpur, Nepal."
  }),
  metadataBase: new URL(siteConfig.baseUrl),
  keywords: [
    "Genuine Suppliers & Builders",
    "construction company Lalitpur",
    "builders Nepal",
    "plumbing Lalitpur",
    "electrician Lalitpur",
    "CCTV installation Nepal",
    "waterproofing Lalitpur",
    "modular kitchen Nepal"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: `${siteConfig.tagline}. Construction, repair, maintenance, and interior services in Lalitpur, Nepal.`,
    founder: siteConfig.ceo,
    email: siteConfig.email,
    telephone: [`+977${siteConfig.phonePrimary}`, `+977${siteConfig.phoneSecondary}`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lalitpur Metropolitan-25, Bhainsepati",
      addressLocality: "Lalitpur",
      addressCountry: "NP"
    },
    areaServed: ["Lalitpur", "Kathmandu Valley", "Nepal"],
    url: siteConfig.baseUrl
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
