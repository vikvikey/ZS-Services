import { siteConfig, fillCopy } from "@/site.config";

const OG_LOGO_PATH = "/images/logo-nobg-nosubtext.svg";

function absoluteUrl(siteUrl: string, path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildLocalBusinessJsonLd(siteUrl: string) {
  const { seo } = siteConfig.strings;
  const metaVars = {
    city: siteConfig.city,
    brandName: siteConfig.brandName,
    phoneDisplay: siteConfig.phoneDisplay,
    email: siteConfig.email,
    serviceArea: siteConfig.serviceArea,
  };

  const description = fillCopy(seo.descriptionTemplate, metaVars);

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.brandName,
    url: siteUrl,
    description,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    logo: absoluteUrl(siteUrl, OG_LOGO_PATH),
    image: [
      absoluteUrl(siteUrl, siteConfig.masterPhotoSrc),
      absoluteUrl(siteUrl, siteConfig.brandLogoSrc),
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: "FR",
    },
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.city,
      },
      siteConfig.serviceArea,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de rénovation et finition",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
        },
      })),
    },
  };
}
