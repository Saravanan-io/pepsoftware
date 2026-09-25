import Link from "next/link";
import { ArrowRight, Sparkles, Home, ChevronRight } from "lucide-react";

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight?: string;
  gradientWord?: string;
  description: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function ServiceHero({
  badge,
  title,
  highlight,
  gradientWord,
  description,
  bullets,
  ctaText = "Get a Free Quote",
  ctaHref = "/contact",
  breadcrumbs,
}: ServiceHeroProps) {
  const gradientText = highlight || gradientWord;
  return (
    <section className="relative pt-12 pb-20 section-light overflow-hidden">
      <div className="absolute inset-0 bg-dot-light opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-indigo-500/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs text-[#8b8fa8] mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((bc) => (
              <div key={bc.label} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                <Link href={bc.href} className="hover:text-indigo-600 transition-colors font-medium">
                  {bc.label}
                </Link>
              </div>
            ))}
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {badge}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0b0d17] leading-[1.06]">
              {title}{" "}
              {gradientText && <span className="text-gradient">{gradientText}</span>}
            </h1>

            <p className="text-base sm:text-lg text-[#4a4d6a] leading-relaxed">{description}</p>

            {bullets && (
              <ul className="space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-[#0b0d17]">
                    <div className="w-5 h-5 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 10">
                        <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href={ctaHref} className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm">
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#e8eaf0] text-[#0b0d17] font-semibold text-sm hover:border-indigo-400 hover:text-indigo-700 shadow-sm hover:shadow-md transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right: Feature highlights card */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="w-full p-8 rounded-3xl bg-gradient-to-br from-[#0a0d1b] to-[#0f1326] border border-white/10 shadow-2xl glow-blue">
              <div className="absolute inset-0 bg-grid-dark opacity-40 rounded-3xl overflow-hidden pointer-events-none" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[
                  { icon: "🎨", label: "Modern Technologies" },
                  { icon: "📱", label: "Responsive Design" },
                  { icon: "🔍", label: "SEO Optimized" },
                  { icon: "🏗️", label: "Scalable Architecture" },
                ].map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-2.5 p-5 rounded-2xl glass-dark border border-white/10 text-center">
                    <span className="text-2xl">{f.icon}</span>
                    <span className="text-xs font-bold text-white">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
