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
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#E9E8E6] text-[#C86A28] border border-[#C6C2C1] mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C86A28]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151515] leading-[1.12]">
        {title}{" "}
        {gradientWord && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#544643] to-[#C86A28]">
            {gradientWord}
          </span>
        )}{" "}
        {titleSuffix}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#544643] leading-relaxed max-w-2xl font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
