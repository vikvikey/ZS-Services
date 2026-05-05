import { siteConfig, fillCopy } from "@/site.config";

export function Footer() {
  const line = fillCopy(siteConfig.strings.footer.lineTemplate, {
    year: new Date().getFullYear(),
    brandName: siteConfig.brandName,
    city: siteConfig.city,
  });

  return (
    <footer className="border-t border-neutral-200 bg-muted/60 py-8 text-center text-sm text-neutral-600">
      <p>{line}</p>
    </footer>
  );
}
