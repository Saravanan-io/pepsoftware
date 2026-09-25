"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  color?: string;
  size?: string;
  delay?: number;
}

export function GradientBlob({
  className,
  color = "from-[#5B4CFB]/15 via-[#8E4CFB]/10 to-[#EC4899]/15",
  size = "w-96 h-96",
  delay = 0,
}: GradientBlobProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 0.95, 1],
        rotate: [0, 45, -30, 0],
        x: [0, 20, -15, 0],
        y: [0, -25, 15, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={cn(
        "absolute rounded-full pointer-events-none blur-[90px] bg-gradient-to-tr -z-10",
        size,
        color,
        className
      )}
    />
  );
}
