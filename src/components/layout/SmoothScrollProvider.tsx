"use client";

import { ReactNode, useEffect } from "react";
import { registerGSAP } from "@/lib/gsap";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    const { ScrollTrigger } = registerGSAP();
    ScrollTrigger.clearScrollMemory("manual");

    // Initial refresh after short tick to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 100);

    // Refresh after fonts are loaded
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    // Refresh after full window load
    const onLoad = () => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return <>{children}</>;
}
