import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      <span className="text-brand-deep dark:text-brand">{"{"}</span>
      Codonist
      <span className="text-brand-deep dark:text-brand">{"}"}</span>
    </span>
  );
}

export default function Logo() {
  return (
    <Link href="/" aria-label="Codonist home" className="group inline-flex items-center gap-2 text-[22px]">
      <Wordmark />
    </Link>
  );
}
