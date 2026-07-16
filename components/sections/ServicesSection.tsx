import Image from "next/image";
import { siteConfig, type ServiceItem } from "@/site.config";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FadeIn } from "@/components/motion/FadeIn";

export function ServicesSection() {
  const s = siteConfig.strings.services;

  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden py-12 sm:py-16">
      <Image
        src="/images/public/IMG_1829.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/85" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
            {s.titleBeforeAccent} <span className="brush-underline">{s.titleAccent}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">{s.subtitle}</p>
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(siteConfig.services as readonly ServiceItem[]).map((service, i) => (
            <FadeIn key={service.id} delay={Math.min(i * 0.04, 0.2)}>
              <article className="flex h-full items-start gap-4 rounded-xl border border-neutral-200 bg-surface p-5 shadow-soft transition hover:shadow-soft-lg">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ServiceIcon icon={service.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-base font-semibold text-neutral-900">{service.title}</h3>
                  {service.description ? (
                    <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
                  ) : null}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
