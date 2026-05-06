"use client";

import Image from "next/image";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { siteConfig } from "@/site.config";

export function GalleryCarousel() {
  const g = siteConfig.strings.gallery;

  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      className="gallery-swiper gallery-swiper--pagination-top"
    >
      {siteConfig.gallery.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            <figure className="overflow-hidden rounded-xl bg-neutral-100 shadow-soft-lg ring-1 ring-neutral-200">
              <Image
                src={slide.beforeSrc}
                alt={slide.beforeAlt}
                width={800}
                height={534}
                className="aspect-[3/2] max-h-[min(80vh,900px)] w-full object-cover sm:aspect-auto sm:h-[min(72vh,820px)] sm:max-h-none"
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(50vw - 2.5rem), 640px"
                fetchPriority="low"
              />
              <figcaption className="px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {g.labelBefore}
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl bg-neutral-100 shadow-soft-lg ring-1 ring-neutral-200">
              <Image
                src={slide.afterSrc}
                alt={slide.afterAlt}
                width={800}
                height={534}
                className="aspect-[3/2] max-h-[min(80vh,900px)] w-full object-cover sm:aspect-auto sm:h-[min(72vh,820px)] sm:max-h-none"
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(50vw - 2.5rem), 640px"
                fetchPriority="low"
              />
              <figcaption className="px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-success">
                {g.labelAfter}
              </figcaption>
            </figure>
          </div>
          <p className="mt-4 text-center font-heading text-lg font-semibold text-neutral-900">{slide.title}</p>
          <p className="text-center text-sm font-medium text-sky-accent">
            {g.durationPrefix} {slide.duration}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
