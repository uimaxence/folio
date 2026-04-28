import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Maxence Cailleau"
      width={87}
      height={53}
      priority
      className={className}
    />
  );
}
