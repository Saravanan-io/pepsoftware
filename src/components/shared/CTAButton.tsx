import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon = ArrowRight,
  iconPosition = "right",
  className,
  onClick,
  target,
  rel,
}: CTAButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5B4CFB]/40 active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm sm:text-base px-6 py-3 gap-2.5",
    lg: "text-base sm:text-lg px-8 py-4 gap-3",
  }[size];

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#5B4CFB] via-[#754CFB] to-[#994CFB] text-white shadow-[0_10px_25px_-5px_rgba(91,76,251,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(91,76,251,0.55)] hover:-translate-y-0.5 border border-white/20",
    secondary:
      "bg-[#EFEDFF] text-[#5B4CFB] hover:bg-[#5B4CFB] hover:text-white border border-[#5B4CFB]/20 shadow-xs hover:shadow-[0_8px_20px_-4px_rgba(91,76,251,0.25)]",
    outline:
      "bg-white/90 text-[#0E0E12] border border-[#ECECF1] hover:border-[#5B4CFB] hover:text-[#5B4CFB] shadow-xs hover:shadow-md",
    ghost:
      "text-[#5B5B66] hover:text-[#5B4CFB] hover:bg-[#EFEDFF]/60",
    white:
      "bg-white text-[#0E0E12] hover:bg-[#F8F9FC] shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)] hover:-translate-y-0.5",
  }[variant];

  return (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={cn(baseStyles, sizeStyles, variantStyles, className)}
    >
      {iconPosition === "left" && Icon && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {iconPosition === "right" && Icon && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
