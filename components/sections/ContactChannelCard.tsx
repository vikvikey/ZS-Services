"use client";

import { useCallback, useState } from "react";
import { Check, Copy, Mail, Phone } from "lucide-react";
import { siteConfig, fillCopy } from "@/site.config";
import { cn } from "@/lib/cn";

const iconMap = {
  phone: Phone,
  mail: Mail,
} as const;

export type ContactChannelIcon = keyof typeof iconMap;

export type ContactChannelCardProps = {
  id: string;
  icon: ContactChannelIcon;
  label: string;
  valueDisplay: string;
  valueForCopy: string;
  actionHref: string;
  actionLabel: string;
};

export function ContactChannelCard({
  id,
  icon,
  label,
  valueDisplay,
  valueForCopy,
  actionHref,
  actionLabel,
}: ContactChannelCardProps) {
  const [copied, setCopied] = useState(false);
  const Icon = iconMap[icon];
  const t = siteConfig.strings.contactCard;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(valueForCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      //
    }
  }, [valueForCopy]);

  const copyAria = fillCopy(t.copyAriaLabelTemplate, { label: label.toLowerCase() });

  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-xl border border-neutral-200 bg-muted/30 p-5 shadow-soft sm:scroll-mt-32"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{label}</div>
          <p
            className="mt-2 select-text break-all font-mono text-lg font-semibold leading-snug text-neutral-900 [overflow-wrap:anywhere] sm:text-xl"
            tabIndex={0}
            title={valueDisplay}
          >
            {valueDisplay}
          </p>
          <p className="mt-1 text-xs text-neutral-500">{t.selectHint}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5 sm:flex-initial",
            copied && "border-success text-success",
          )}
          aria-label={copyAria}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 shrink-0" aria-hidden />
              {t.copiedButton}
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 shrink-0" aria-hidden />
              {t.copyButton}
            </>
          )}
        </button>
        <a
          href={actionHref}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-primary/90 sm:flex-initial"
        >
          {actionLabel}
        </a>
      </div>
      <p className="sr-only" aria-live="polite">
        {copied ? t.copiedAnnounce : ""}
      </p>
    </article>
  );
}
