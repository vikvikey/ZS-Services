import { MapPin } from "lucide-react";
import { siteConfig, getTelHref, getMailtoHref, contactElementIds } from "@/site.config";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactChannelCard } from "@/components/sections/ContactChannelCard";

export function ContactsSection() {
  const tel = getTelHref(siteConfig.phoneE164);
  const mailto = getMailtoHref(siteConfig.email);
  const c = siteConfig.strings.contacts;

  return (
    <section id="contacts" className="scroll-mt-20 bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
            {c.titleBeforeAccent} <span className="text-gradient-accent">{c.titleAccent}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-600 sm:text-base">
            {c.introPart1}
            <span className="font-medium text-neutral-800">{c.introEmphasize1}</span>
            {c.introPart2}
            <span className="font-medium text-neutral-800">{c.introEmphasize2}</span>
            {c.introPart3}
            <span className="font-medium text-neutral-800">{c.introEmphasize3}</span> {c.introPart4}
          </p>
        </FadeIn>
        <FadeIn delay={0.06} className="mt-8 grid gap-6 sm:grid-cols-2">
          <ContactChannelCard
            id={contactElementIds.phone}
            icon="phone"
            label={c.phoneChannelLabel}
            valueDisplay={siteConfig.phoneDisplay}
            valueForCopy={siteConfig.phoneDisplay}
            actionHref={tel}
            actionLabel={c.phoneActionLabel}
          />
          <ContactChannelCard
            id={contactElementIds.email}
            icon="mail"
            label={c.emailChannelLabel}
            valueDisplay={siteConfig.email}
            valueForCopy={siteConfig.email}
            actionHref={mailto}
            actionLabel={c.emailActionLabel}
          />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-sky-accent/40 bg-sky-accent/5 p-5">
          <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-sky-accent" aria-hidden />
          <div>
            <div className="font-heading font-semibold text-neutral-900">{c.areaTitle}</div>
            <p className="mt-1 text-neutral-600">{siteConfig.serviceArea}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
