"use client";

import { useState } from "react";

export function CopyChip({
  value,
  label,
  className = "",
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard unavailable; no-op
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Cliquer pour copier"
      className={`inline-flex items-center gap-2 font-mono text-[12.5px] bg-paper rounded-full px-2.5 py-1 text-ink/80 hover:text-ink transition-colors ${className}`}
    >
      <span>{label ?? value}</span>
      <span
        aria-hidden
        className={`text-[11px] tracking-[0.1em] transition-opacity ${
          copied ? "text-accent opacity-100" : "text-ink/40 opacity-100"
        }`}
      >
        {copied ? "COPIÉ" : "COPY"}
      </span>
    </button>
  );
}
