"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Extract number and suffix/prefix (e.g. "150+" -> num: 150, suffix: "+", "4.9" -> num: 4.9, "100%" -> num: 100, suffix: "%")
  const numericMatch = value.match(/(\d+(\.\d+)?)/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const isFloat = value.includes(".");
  const suffix = value.replace(/[\d.]/g, "");

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCurrent(easeProgress * targetNumber);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrent(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetNumber, duration]);

  const displayValue = isFloat
    ? current.toFixed(1)
    : Math.floor(current).toString();

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
