import { Mail, Phone } from "lucide-react";
import { contactAnchors, siteConfig } from "@/site.config";

export function MobileStickyCta() {
  const { regionAriaLabel, phone, email } = siteConfig.strings.mobileSticky;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-surface/95 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-soft-lg md:hidden"
      role="region"
      aria-label={regionAriaLabel}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={contactAnchors.phone}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-soft"
        >
          <Phone className="h-5 w-5 shrink-0" aria-hidden />
          {phone}
        </a>
        <a
          href={contactAnchors.email}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary bg-surface py-3 text-sm font-semibold text-primary"
        >
          <Mail className="h-5 w-5 shrink-0" aria-hidden />
          {email}
        </a>
      </div>
    </div>
  );
}
