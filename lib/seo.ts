import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title?: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({ title, description, path = "/", image = "/brand/og.svg" }: SeoInput): Metadata {
  const url = new URL(path, siteConfig.baseUrl);
  const fullTitle = title ? `${title} | ${siteConfig.shortName}` : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ],
      locale: "en_NP",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    }
  };
}
