import { Check } from "lucide-react";
import Image from "next/image";
import { siteConfig, contactAnchors, fillCopy } from "@/site.config";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function HeroSection() {
  const s = siteConfig.strings.hero;

  return (
    <section id="hero" className="scroll-mt-20 bg-muted/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-10 lg:grid-cols-[1fr_280px] lg:items-center">
        <div>
          <FadeIn>
            <h1 className="font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-[2.5rem]">
              {s.headlineBeforeCity}{" "}
              <span className="brush-underline text-primary">{siteConfig.city}</span> {s.headlineAfterCity}{" "}
              <span className="text-gradient-accent">{s.headlineDuration}</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-3 max-w-xl text-base text-neutral-600 sm:text-lg">
            {fillCopy(s.sublineTemplate, { experienceYears: siteConfig.experienceYears })}
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={contactAnchors.phone} className="w-full min-h-[52px] sm:w-auto sm:min-w-[200px]">
              {s.ctaPhone}
            </ButtonLink>
            <ButtonLink
              href={contactAnchors.email}
              variant="secondary"
              className="w-full min-h-[52px] sm:w-auto sm:min-w-[200px]"
            >
              {s.ctaEmail}
            </ButtonLink>
          </FadeIn>
          <FadeIn delay={0.12} className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {siteConfig.microTrust.map((item) => (
              <div key={item.id} className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success/15 text-success">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                {item.text}
              </div>
            ))}
          </FadeIn>
        </div>
        <FadeIn delay={0.08} className="relative mx-auto w-full max-w-[280px] lg:mx-0">
          <div className="overflow-hidden rounded-xl shadow-soft-lg ring-1 ring-primary/10">
            <Image
              src={siteConfig.masterPhotoSrc}
              alt={siteConfig.masterPhotoAlt}
              width={560}
              height={560}
              className="h-auto w-full object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 280px, 280px"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
