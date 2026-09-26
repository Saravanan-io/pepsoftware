"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, willChange: "transform" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#151515] via-[#544643] to-[#C86A28] origin-left z-50 pointer-events-none"
    />
  );
}
