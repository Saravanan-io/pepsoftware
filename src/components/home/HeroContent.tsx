"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Rocket, Users, BarChart3 } from "lucide-react";
import { HeroVideo } from "./HeroVideo";

export function HeroContent() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#F7F8F8]">
      {/* Background Abstract Shapes - Neutral Luxury Palette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top right depth glow */}
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#E7EBEA] blur-[120px] rounded-full" />

        {/* Bottom left soft surface glow */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-[#EFF0EF] blur-[140px] rounded-full" />

        {/* Top right warm swoosh */}
        <div className="absolute -top-32 right-0 w-[40%] h-[600px] bg-gradient-to-br from-[#E7EBEA] via-[#EFF0EF] to-[#E9E8E6] opacity-80 blur-[4px] rounded-bl-full transform rotate-12 scale-150 origin-top-right mix-blend-multiply" />

        {/* Bottom right soft circles */}
        <div className="absolute bottom-0 right-0 w-full h-[60%] overflow-hidden">
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] border-[1px] border-[#C6C2C1]/40 rounded-full" />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#E9E8E6]/80 to-transparent rounded-full" />
        </div>

        {/* Bottom left curve */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-[#C6C2C1]/20 to-transparent rounded-full blur-[2px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-gradient-to-tr from-[#E7EBEA]/60 to-transparent rounded-full blur-[2px]" />

        {/* Dots grid top right */}
        <div className="absolute top-[20%] right-[20%] w-32 h-32 opacity-30">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#C6C2C1 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
        </div>

        {/* Dots grid bottom center */}
        <div className="absolute bottom-[10%] left-[60%] w-32 h-20 opacity-30">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#C6C2C1 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
        </div>

        {/* Connecting lines & dots */}
        <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M750 250 Q 800 350 900 400" stroke="#C6C2C1" strokeWidth="1.5" />
          <circle cx="750" cy="250" r="5" fill="#C86A28" />
          <circle cx="900" cy="400" r="5" fill="#544643" />
          <path d="M150 900 Q 200 950 300 950" stroke="#C6C2C1" strokeWidth="1.5" />
          <circle cx="150" cy="900" r="5" fill="#C86A28" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 relative z-20">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[46px] sm:text-[56px] lg:text-[62px] leading-[1.06] font-extrabold tracking-tight text-[#151515]"
            >
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#151515]">Excellence</span>
              <br />
              Starts <span className="text-[#C86A28] relative inline-block">
                Here.
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#C86A28]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[17px] sm:text-[19px] text-[#544643] font-medium leading-relaxed max-w-[560px]"
            >
              We build powerful web, mobile and software solutions that help businesses grow, automate and stay ahead in the digital world.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-4 px-2 py-2 pr-6 rounded-full bg-[#151515] text-[#F7F8F8] hover:bg-[#544643] transition-colors shadow-lg shadow-[#151515]/10"
              >
                <span className="pl-6 text-[16px] font-semibold">Our Portfolio</span>
                <div className="w-10 h-10 rounded-full bg-[#E9E8E6] flex items-center justify-center text-[#151515] group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-4 px-8 py-3 rounded-full bg-[#FFFFFF] border-[1.5px] border-[#C6C2C1] text-[#151515] hover:border-[#544643] transition-colors shadow-sm"
              >
                <span className="text-[16px] font-semibold">Explore Services</span>
                <ArrowRight className="w-5 h-5 text-[#C86A28] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center text-[#C86A28] shadow-xs">
                  <Rocket className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-bold text-[#151515] leading-tight">
                  Innovative<br />Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center text-[#C86A28] shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-bold text-[#151515] leading-tight">
                  Client Focused<br />Approach
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] flex items-center justify-center text-[#C86A28] shadow-xs">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-bold text-[#151515] leading-tight">
                  Results<br />Driven
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Video Showcase */}
          <div className="lg:col-span-7 xl:col-span-7 relative z-20 flex justify-center lg:justify-end items-center w-full">
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
