import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientWord?: string;
  titleSuffix?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  gradientWord,
  titleSuffix,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 lg:mb-16", alignClasses, className)}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EFEDFF] text-[#5B4CFB] border border-[#5B4CFB]/20 mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#5B4CFB]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E0E12] leading-[1.12]">
        {title}{" "}
        {gradientWord && (
          <span className="text-gradient">
            {gradientWord}
          </span>
        )}{" "}
        {titleSuffix}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#5B5B66] leading-relaxed max-w-2xl font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
