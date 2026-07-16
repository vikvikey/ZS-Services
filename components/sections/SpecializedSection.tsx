import { siteConfig } from "@/site.config";
import { FadeIn } from "@/components/motion/FadeIn";

export function SpecializedSection() {
  return (
    <section id="specialized" className="scroll-mt-20 bg-muted/40 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="space-y-12">
          {siteConfig.specializedBlocks.map((block, blockIndex) => (
            <FadeIn key={block.id} delay={blockIndex * 0.06}>
              <article className="rounded-xl border border-neutral-200 bg-surface p-6 shadow-soft sm:p-8">
                <h2 className="font-heading text-xl font-bold text-neutral-900 sm:text-2xl">{block.title}</h2>
                <div className="mt-4 space-y-4">
                  {block.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-neutral-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
