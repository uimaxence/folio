"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  AnimatedArrowRight,
  AnimatedArrowUpRight,
  AnimatedCalendar,
} from "./animated-icons";

type Variant = "primary" | "secondary" | "ghost";
type Icon = "arrow" | "arrow-up-right" | "calendar" | "none";

type Props = {
  href: string;
  variant?: Variant;
  icon?: Icon;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-paper px-5 py-3 hover:bg-ink/85",
  secondary:
    "border border-ink px-5 py-3 hover:bg-ink hover:text-paper",
  ghost:
    "text-[13px] tracking-[0.1em] font-medium hover:text-ink/60 px-0 py-0",
};

const iconSize: Record<Variant, string> = {
  primary: "w-4 h-4",
  secondary: "w-4 h-4",
  ghost: "w-3.5 h-3.5",
};

function IconFor({ kind, className }: { kind: Icon; className: string }) {
  if (kind === "arrow") return <AnimatedArrowRight className={className} />;
  if (kind === "arrow-up-right")
    return <AnimatedArrowUpRight className={className} />;
  if (kind === "calendar") return <AnimatedCalendar className={className} />;
  return null;
}

export function AnimatedCTA({
  href,
  variant = "primary",
  icon = "arrow",
  external = false,
  onClick,
  className = "",
  children,
}: Props) {
  const baseClass =
    variant === "ghost"
      ? `inline-flex items-center gap-1.5 ${styles[variant]} transition-colors ${className}`
      : `inline-flex items-center gap-2 rounded-full text-[14px] tracking-[0.1em] ${styles[variant]} transition-colors ${className}`;

  const targetProps = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <motion.span
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="inline-flex"
    >
      <Link
        href={href}
        onClick={onClick}
        className={baseClass}
        {...targetProps}
      >
        <span>{children}</span>
        <IconFor kind={icon} className={iconSize[variant]} />
      </Link>
    </motion.span>
  );
}
