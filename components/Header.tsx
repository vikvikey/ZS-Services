import { Mail, Phone } from "lucide-react";
import { siteConfig, contactAnchors } from "@/site.config";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";

export function Header() {
  const { navAriaLabel, phoneIconAriaLabel, emailIconAriaLabel, desktopPhone, desktopEmail } =
    siteConfig.strings.header;

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#hero" className="flex items-end gap-2 font-heading text-lg font-bold text-primary sm:text-3xl">
          <Image src={siteConfig.brandLogoSrc} alt={siteConfig.brandLogoAlt} width={100} height={66.32} fetchPriority="high" />
          {siteConfig.brandLogoText}
        </a>
        <nav className="flex items-center gap-2 sm:gap-3" aria-label={navAriaLabel}>
          <a
            href={contactAnchors.phone}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 text-primary transition hover:bg-muted md:hidden"
            aria-label={phoneIconAriaLabel}
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <a
            href={contactAnchors.email}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 text-primary transition hover:bg-muted md:hidden"
            aria-label={emailIconAriaLabel}
          >
            <Mail className="h-5 w-5" aria-hidden />
          </a>
          <ButtonLink href={contactAnchors.phone} className="hidden !min-h-11 px-4 text-sm md:inline-flex md:text-base">
            {desktopPhone}
          </ButtonLink>
          <ButtonLink
            href={contactAnchors.email}
            variant="secondary"
            className="hidden !min-h-11 px-4 text-sm md:inline-flex md:text-base"
          >
            {desktopEmail}
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
