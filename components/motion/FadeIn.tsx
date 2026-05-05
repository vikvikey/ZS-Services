"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const scrollViewport = { once: true as const, margin: "-48px" };

function isIntersectingViewport(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;
  return r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw;
}

type FadeInProps = Omit<HTMLMotionProps<"div">, "ref" | "children"> & {
  delay?: number;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Сначала блоки обычные и полностью видимы (div).
 * После layout измеряем: не на первом экране → заменяем на motion, скрываем и
 * показываем при скролле (whileInView). На первом экране остаётся обычный div без анимации.
 */
export function FadeIn({ className, children, delay = 0, ...rest }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [placement, setPlacement] = useState<"pending" | "firstScreen" | "offScreen">("pending");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setPlacement(isIntersectingViewport(el) ? "firstScreen" : "offScreen");
  }, []);

  const commonClass = cn(className);
  const divProps = rest as ComponentProps<"div">;

  if (placement !== "offScreen") {
    return (
      <div ref={ref} className={commonClass} {...divProps}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      key="fade-below-fold"
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{ duration: 0.35, delay }}
      className={commonClass}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
