type SvgProps = React.SVGProps<SVGSVGElement>;

export function Asterisk(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="M5.5 5.5l13 13" />
      <path d="M18.5 5.5l-13 13" />
    </svg>
  );
}

export function Squiggle(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 120 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M2 8 Q 15 -2, 30 8 T 60 8 T 90 8 T 118 8" />
    </svg>
  );
}

export function Sparkle(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12 2 L13.5 9 L21 10 L13.5 12 L12 22 L10.5 12 L3 10 L10.5 9 Z" />
    </svg>
  );
}

export function ArrowSwoop(props: SvgProps) {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M4 30 C 20 30, 30 6, 60 12" />
      <path d="M52 6 L60 12 L54 20" />
    </svg>
  );
}
