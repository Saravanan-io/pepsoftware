"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.65,
  yOffset = 24,
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // expo-out per spec
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
