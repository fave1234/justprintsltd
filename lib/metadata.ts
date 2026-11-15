import type { Metadata } from "next";
import { SITE } from "./site";

const OG_IMAGE = {
  url: "/images/hero-books.jpg",
  width: 1600,
  height: 900,
  alt: "Premium hardcover books printed by Justprints by PlusFrica — crimson foil detail on a dark press table",
};

/** Consistent per-page metadata: canonical URL + Open Graph + Twitter card. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      type: "website",
      locale: "en_NG",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
