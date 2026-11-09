export default function PageHeader({ eyebrow, title, fade, text, children }: { eyebrow: string; title: string; fade?: string; text?: string; children?: React.ReactNode }) {
  return (
    <section className="grid-paper relative border-b border-line">
      <div className="container py-20 md:py-28">
        <p className="eyebrow-brand animate-rise">{eyebrow}</p>
        <h1 className="h-display mt-5 max-w-4xl animate-rise text-5xl leading-[1] [animation-delay:80ms] md:text-7xl">
          {title} {fade && <span className="text-muted/60">{fade}</span>}
        </h1>
        {text && <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-muted [animation-delay:160ms]">{text}</p>}
        {children}
      </div>
    </section>
  );
}
