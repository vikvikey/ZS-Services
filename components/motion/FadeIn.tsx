"use client";

import { useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const ioOpts: IntersectionObserverInit = { rootMargin: "-48px 0px", threshold: 0 };

export type FadeInProps = Omit<ComponentProps<"div">, "children"> & {
  /** Без анимации и без IO — для блоков выше сгиба (hero). */
  immediate?: boolean;
  delay?: number;
  children?: ReactNode;
};

export function FadeIn({
  immediate = false,
  delay = 0,
  className,
  children,
  style,
  ...rest
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(immediate);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (immediate || reduceMotion) {
      setShown(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
          return;
        }
      }
    }, ioOpts);

    io.observe(el);
    return () => io.disconnect();
  }, [immediate, reduceMotion]);

  const animate = !immediate && !reduceMotion;

  return (
    <div
      ref={ref}
      className={cn(
        animate && [
          "ease-out transition-[opacity,transform] duration-[350ms]",
          shown ? "translate-y-0 opacity-100" : "translate-y-3.5 opacity-0",
        ],
        className
      )}
      style={{
        ...style,
        ...(animate && shown && delay > 0 ? { transitionDelay: `${delay}s` } : undefined),
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
