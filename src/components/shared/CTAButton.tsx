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
    "group inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C86A28]/40 active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm sm:text-base px-6 py-3 gap-2.5",
    lg: "text-base sm:text-lg px-8 py-4 gap-3",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#151515] text-[#F7F8F8] hover:bg-[#544643] shadow-md shadow-[#151515]/10 hover:-translate-y-0.5 border border-[#151515]",
    secondary:
      "bg-[#E9E8E6] text-[#151515] hover:bg-[#151515] hover:text-[#F7F8F8] border border-[#C6C2C1] shadow-xs",
    outline:
      "bg-[#EFF0EF] text-[#151515] border border-[#C6C2C1] hover:border-[#151515] shadow-xs hover:shadow-sm",
    ghost:
      "text-[#544643] hover:text-[#151515] hover:bg-[#E9E8E6]",
    white:
      "bg-[#F7F8F8] text-[#151515] hover:bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:-translate-y-0.5",
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
        <Icon className="w-4 h-4 text-[#C86A28] transition-transform duration-300 group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {iconPosition === "right" && Icon && (
        <Icon className="w-4 h-4 text-[#C86A28] transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
