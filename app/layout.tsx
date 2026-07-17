import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig, fillCopy } from "@/site.config";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = getSiteUrl();
const ogImageUrl = `${siteUrl}/images/logo-nobg-nosubtext.svg`;

const { seo, htmlLang } = siteConfig.strings;
const metaVars = {
  city: siteConfig.city,
  brandName: siteConfig.brandName,
  phoneDisplay: siteConfig.phoneDisplay,
  email: siteConfig.email,
  serviceArea: siteConfig.serviceArea,
};

export const metadata: Metadata = {
  title: fillCopy(seo.titleTemplate, metaVars),
  description: fillCopy(seo.descriptionTemplate, metaVars),
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: fillCopy(seo.ogTitleTemplate, metaVars),
    description: fillCopy(seo.ogDescriptionTemplate, metaVars),
    type: "website",
    locale: seo.ogLocale,
    url: siteUrl,
    siteName: siteConfig.brandName,
    images: [
      {
        url: ogImageUrl,
        alt: fillCopy(seo.ogImageAltTemplate, metaVars),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fillCopy(seo.twitterTitleTemplate, metaVars),
    description: fillCopy(seo.twitterDescriptionTemplate, metaVars),
    images: [ogImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={htmlLang} className={inter.variable}>
      <body className="font-sans">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
