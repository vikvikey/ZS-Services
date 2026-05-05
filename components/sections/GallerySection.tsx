import { siteConfig } from "@/site.config";
import { FadeIn } from "@/components/motion/FadeIn";
import { GalleryCarousel } from "@/components/GalleryCarousel";

export function GallerySection() {
  const s = siteConfig.strings.gallery;

  return (
    <section id="gallery" className="scroll-mt-20 bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
            {s.titleBeforeAccent} <span className="text-primary">{s.titleAccent}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">{s.description}</p>
        </FadeIn>
        <FadeIn delay={0.08} className="mt-10">
          <GalleryCarousel />
        </FadeIn>
      </div>
    </section>
  );
}
