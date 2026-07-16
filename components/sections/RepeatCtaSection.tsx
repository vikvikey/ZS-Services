import { siteConfig, contactAnchors } from "@/site.config";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function RepeatCtaSection() {
  const s = siteConfig.strings.repeatCta;

  return (
    <section id="cta-repeat" className="scroll-mt-20 bg-primary py-12 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">{s.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">{s.body}</p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={contactAnchors.phone} className="bg-white text-primary hover:bg-neutral-100">
            {s.ctaPhone}
          </ButtonLink>
          <ButtonLink
            href={contactAnchors.email}
            variant="secondary"
            className="border-white !bg-transparent text-white hover:bg-white/10"
          >
            {s.ctaEmail}
          </ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
