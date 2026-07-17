import Image from "next/image";
import { siteConfig, contactAnchors } from "@/site.config";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function HeroSection() {
  const s = siteConfig.strings.hero;

  return (
    <section id="hero" className="scroll-mt-20 bg-muted/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-10 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <FadeIn immediate>
            <h1 className="font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-[2.5rem]">
              <span className="text-primary">{s.headline}</span>
            </h1>
          </FadeIn>
          <div className="mt-5">
            <FadeIn immediate>
              <p className="text-lg font-medium text-neutral-800">{siteConfig.aboutLead}</p>
              <p className="mt-4 text-neutral-600">{siteConfig.aboutBody}</p>
            </FadeIn>
          </div>
          <FadeIn immediate className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
        </div>
        <FadeIn immediate className="relative mx-auto w-full max-w-[320px] lg:mx-0">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={siteConfig.masterPhotoSrc}
              alt={siteConfig.masterPhotoAlt}
              width={560}
              height={560}
              className="h-auto w-full object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 320px, 320px"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
