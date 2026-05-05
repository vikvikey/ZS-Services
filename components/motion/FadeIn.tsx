"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

const defaultViewport = { once: true as const, margin: "-48px" };

export function FadeIn({
  className,
  children,
  delay = 0,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      viewport={defaultViewport}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
