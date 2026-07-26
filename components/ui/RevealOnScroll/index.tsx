"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { RevealOnScrollProps } from "./types";

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  margin = "-80px",
  y = 20,
  duration = 0.6,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
