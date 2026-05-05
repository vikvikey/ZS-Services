import { Quote } from "lucide-react";
import Image from "next/image";
import { siteConfig, fillCopy, type Testimonial } from "@/site.config";
import { FadeIn } from "@/components/motion/FadeIn";

export function TestimonialsSection() {
  const s = siteConfig.strings.testimonials;

  return (
    <section id="reviews" className="scroll-mt-20 bg-muted/40 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
            {s.titleBeforeAccent} <span className="brush-underline">{s.titleAccent}</span>
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {(siteConfig.testimonials as readonly Testimonial[]).map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-xl border border-neutral-200 bg-surface p-5 shadow-soft">
                <Quote className="h-8 w-8 text-sky-accent/80" aria-hidden />
                <p className="mt-3 flex-1 text-neutral-700">{t.text}</p>
                {t.imageSrc ? (
                  <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg ring-1 ring-neutral-200">
                    <Image
                      src={t.imageSrc}
                      alt={t.imageAlt ?? fillCopy(s.imageAltTemplate, { name: t.name })}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                ) : null}
                <footer className="mt-4 border-t border-neutral-100 pt-4 text-sm">
                  <span className="font-semibold text-neutral-900">{t.name}</span>
                  <span className="text-neutral-500"> · {t.city}</span>
                </footer>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
