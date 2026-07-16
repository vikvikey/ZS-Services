"use client";

import Image from "next/image";
import { useState } from "react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { siteConfig } from "@/site.config";

export function GalleryCarousel() {
  const g = siteConfig.strings.gallery;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="gallery-swiper gallery-swiper--pagination-bottom"
      >
        {siteConfig.gallery.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="grid gap-3 md:grid-cols-2 md:gap-4">
              <figure className="relative overflow-hidden rounded-xl bg-neutral-100 shadow-soft-lg ring-1 ring-neutral-200">
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
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/75 via-neutral-900/35 to-transparent px-3 pb-2 pt-8 text-center text-sm font-semibold uppercase tracking-wide text-white">
                  {g.labelBefore}
                </figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-xl bg-neutral-100 shadow-soft-lg ring-1 ring-neutral-200">
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
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/75 via-neutral-900/35 to-transparent px-3 pb-2 pt-8 text-center text-sm font-semibold uppercase tracking-wide text-emerald-300">
                  {g.labelAfter}
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="mt-2 text-center font-heading text-lg font-semibold text-neutral-900">
        {siteConfig.gallery[activeIndex]?.title}
      </p>
    </div>
  );
}
