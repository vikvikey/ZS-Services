import { Check } from "lucide-react";
import { siteConfig } from "@/site.config";
import { FadeIn } from "@/components/motion/FadeIn";

export function EngagementSection() {
  const { title, paragraphs } = siteConfig.engagement;
  const whyChooseTitle = siteConfig.strings.hero.whyChooseTitle;

  return (
    <section id="engagement" className="scroll-mt-20 bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        

        <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-start lg:gap-12">
          <div className="max-w-3xl space-y-4">
          <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
            <span className="text-sky-accent">{title}</span>
          </h2>
        </FadeIn>
            {paragraphs.map((paragraph, i) => (
              <FadeIn key={i} delay={Math.min(i * 0.05, 0.15)}>
                <p className="text-neutral-600">{paragraph}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1} className="mt-10 lg:mt-0">
            <div className="rounded-xl border border-neutral-200 bg-muted/40 p-6 shadow-soft sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-neutral-900">{whyChooseTitle}</h3>
              <ul className="mt-5 space-y-3">
                {siteConfig.microTrust.map((item) => (
                  <li key={item.id} className="flex items-start gap-3 text-sm font-medium text-neutral-700">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success/15 text-success">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
