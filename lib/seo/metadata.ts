import type { Metadata } from "next";
import { COMPANY_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/config/site";

const OG_IMAGE_DEFAULT = `${SITE_URL}/og-default.jpg`;

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? OG_IMAGE_DEFAULT;

  return {
    title: `${title}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${COMPANY_NAME}`,
      description,
      url,
      siteName: COMPANY_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${COMPANY_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Mineração em Goiás`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};
