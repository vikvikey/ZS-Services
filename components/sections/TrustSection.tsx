import Image from "next/image";
import { siteConfig } from "@/site.config";
import { FadeIn } from "@/components/motion/FadeIn";

export function TrustSection() {
  const s = siteConfig.strings.trust;

  return (
    <section id="trust" className="scroll-mt-20 bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
            {s.titleBeforeAccent} <span className="text-sky-accent">{s.titleAccent}</span>
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <FadeIn className="relative mx-auto w-full max-w-[280px] lg:mx-0">
            <div className="overflow-hidden rounded-xl shadow-soft-lg ring-1 ring-neutral-200">
              <Image
                src={siteConfig.examplePhotoSrc}
                alt={siteConfig.examplePhotoAlt}
                width={560}
                height={700}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 280px, 280px"
              />
            </div>
          </FadeIn>
          <div>
            <FadeIn delay={0.05}>
              <p className="text-lg font-medium text-neutral-800">{siteConfig.aboutLead}</p>
              <p className="mt-4 text-neutral-600">{siteConfig.aboutBody}</p>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {siteConfig.stats.map((st) => (
                <div
                  key={st.id}
                  className="rounded-xl border border-neutral-200 bg-muted/60 px-4 py-4 text-center shadow-soft sm:text-left"
                >
                  <div className="font-heading text-2xl font-bold text-primary">{st.value}</div>
                  <div className="mt-1 text-xs text-neutral-600 sm:text-sm">{st.label}</div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
