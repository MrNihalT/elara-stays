import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./constants";

type SeoArgs = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  image = "/Logo.jpg",
  keywords = [],
}: SeoArgs): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const isLogo = image.includes("Logo");

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: isLogo ? 512 : 1200,
          height: isLogo ? 512 : 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: isLogo ? "summary" : "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}
