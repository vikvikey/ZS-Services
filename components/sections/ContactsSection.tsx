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
            {c.titleBeforeAccent}
          </h2>
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
      </div>
    </section>
  );
}
