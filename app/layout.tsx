import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, fillCopy } from "@/site.config";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://zs-services.example.com";

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
  openGraph: {
    title: fillCopy(seo.ogTitleTemplate, metaVars),
    description: fillCopy(seo.ogDescriptionTemplate, metaVars),
    type: "website",
    locale: seo.ogLocale,
    url: siteUrl,
    siteName: siteConfig.brandName,
    images: [
      {
        url: `${siteUrl}/images/og-placeholder.svg`,
        width: 1200,
        height: 630,
        alt: fillCopy(seo.ogImageAltTemplate, metaVars),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fillCopy(seo.twitterTitleTemplate, metaVars),
    description: fillCopy(seo.twitterDescriptionTemplate, metaVars),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={htmlLang} className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
