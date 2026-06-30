"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, CalendarCheck } from "lucide-react";

type IconProps = { className?: string };

const spring = { type: "spring" as const, stiffness: 400, damping: 18 };

const MotionArrowRight = motion.create(ArrowRight);
const MotionArrowUpRight = motion.create(ArrowUpRight);
const MotionCalendarCheck = motion.create(CalendarCheck);

export function AnimatedArrowRight({ className }: IconProps) {
  return (
    <MotionArrowRight
      aria-hidden
      className={className}
      strokeWidth={2.2}
      variants={{ rest: { x: 0 }, hover: { x: 4 } }}
      transition={spring}
    />
  );
}

export function AnimatedArrowUpRight({ className }: IconProps) {
  return (
    <MotionArrowUpRight
      aria-hidden
      className={className}
      strokeWidth={2.2}
      variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
      transition={spring}
    />
  );
}

export function AnimatedCalendar({ className }: IconProps) {
  return (
    <MotionCalendarCheck
      aria-hidden
      className={className}
      strokeWidth={2.2}
      variants={{
        rest: { scale: 1, rotate: 0 },
        hover: { scale: 1.12, rotate: -6 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
    />
  );
}
