"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Menu, X, Globe, Layout, Smartphone, Palette, GraduationCap } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

function NavIcon({ title }: { title: string }) {
  if (title.includes("Website")) return <Globe className="w-4 h-4" />;
  if (title.includes("UI/UX")) return <Layout className="w-4 h-4" />;
  if (title.includes("Mobile")) return <Smartphone className="w-4 h-4" />;
  if (title.includes("Graphic") || title.includes("AR")) return <Palette className="w-4 h-4" />;
  return <GraduationCap className="w-4 h-4" />;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(79,70,229,0.08)] border-b border-[#e8eaf0] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl btn-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-black text-xl leading-none">P</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white shadow-sm" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#0b0d17] leading-none">
                PEP <span className="font-light text-indigo-600">Software</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#8b8fa8] mt-0.5">
                Design & Digital
              </span>
            </div>
          </Link>

          {/* Desktop Nav — glass pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-xl border border-[#e8eaf0] px-4 py-2 rounded-full shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredNav(item.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-indigo-700 bg-indigo-50"
                        : "text-[#4a4d6a] hover:text-[#0b0d17] hover:bg-[#f4f6fb]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded-full btn-primary text-white ml-0.5">
                        {item.badge}
                      </span>
                    )}
                    {item.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredNav === item.label ? "rotate-180 text-indigo-600" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {hoveredNav === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-3 w-80 p-3 rounded-2xl bg-white border border-[#e8eaf0] shadow-2xl z-50"
                        >
                          {item.children.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="group/sub flex items-start gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover/sub:bg-indigo-600 group-hover/sub:text-white transition-colors shrink-0 mt-0.5">
                                <NavIcon title={sub.label} />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-[#0b0d17] group-hover/sub:text-indigo-700 transition-colors">
                                  {sub.label}
                                </div>
                                {sub.description && (
                                  <p className="text-xs text-[#8b8fa8] mt-0.5 line-clamp-1">
                                    {sub.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex btn-primary items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-white border border-[#e8eaf0] text-[#0b0d17] shadow-sm hover:bg-[#f4f6fb] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 180 }}
              className="fixed top-0 right-0 bottom-0 w-[88%] max-w-sm bg-white z-50 flex flex-col shadow-2xl overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#f0f0f5]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center text-white font-black text-lg">P</div>
                  <span className="font-extrabold text-lg text-[#0b0d17]">PEP Software</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-[#f4f6fb] text-[#4a4d6a]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex-1 px-5 py-6 space-y-1.5">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-bold text-[#0b0d17] hover:bg-[#f4f6fb] hover:text-indigo-700 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            {item.label}
                            {item.badge && (
                              <span className="text-[9px] uppercase font-black px-1.5 py-0.5 rounded-full btn-primary text-white">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-[#8b8fa8] transition-transform ${expandedMobile === item.label ? "rotate-180 text-indigo-600" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {expandedMobile === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 space-y-1 pt-1 pb-2 ml-2 border-l-2 border-indigo-100"
                            >
                              {item.children.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 px-3 text-xs font-semibold text-[#4a4d6a] hover:text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 px-4 rounded-xl text-sm font-bold text-[#0b0d17] hover:bg-[#f4f6fb] hover:text-indigo-700 transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-[#f0f0f5]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl btn-primary text-white font-bold text-sm"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
