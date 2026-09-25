"use client";

import dynamic from "next/dynamic";

const Hero3DScene = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-pink-500/20 blur-3xl animate-pulse-glow" />
        <div className="absolute inset-8 rounded-full border border-indigo-500/30 animate-spin-slow" />
        <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-indigo-600/40 to-purple-600/40 animate-pulse" />
      </div>
    </div>
  ),
});

export function Hero3D() {
  return (
    <div className="w-full h-[380px] sm:h-[460px] lg:h-[560px] relative">
      <Hero3DScene />
    </div>
  );
}
