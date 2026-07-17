import { buildLocalBusinessJsonLd } from "@/lib/local-business-json-ld";
import { getSiteUrl } from "@/lib/site-url";

export function LocalBusinessJsonLd() {
  const jsonLd = buildLocalBusinessJsonLd(getSiteUrl());

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
