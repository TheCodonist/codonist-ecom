import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid-paper grid min-h-[70vh] place-items-center">
      <div className="container text-center">
        <p className="font-display text-[120px] font-bold leading-none tracking-tightest md:text-[200px]"><span className="text-brand-deep dark:text-brand">{"{"}</span>404<span className="text-brand-deep dark:text-brand">{"}"}</span></p>
        <p className="mt-4 text-lg text-muted">This page doesn’t exist, but your next project could.</p>
        <div className="mt-8 flex justify-center gap-3"><Link href="/" className="btn-primary">Back home</Link><Link href="/contact" className="btn-ghost">Contact us</Link></div>
      </div>
    </section>
  );
}
