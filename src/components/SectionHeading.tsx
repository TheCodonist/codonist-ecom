import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, fade, text, align = "split" }: { index?: string; eyebrow: string; title: string; fade?: string; text?: string; align?: "split" | "center" }) {
  if (align === "center")
    return (
      <Reveal className="mx-auto mb-14 max-w-3xl text-center">
        <p className="eyebrow-brand">{index && <span className="mr-2 text-muted">[{index}]</span>}{eyebrow}</p>
        <h2 className="h-display mt-4 text-4xl leading-[1.04] md:text-6xl">
          {title} {fade && <span className="text-muted/60">{fade}</span>}
        </h2>
        {text && <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">{text}</p>}
      </Reveal>
    );
  return (
    <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
      <div className="max-w-3xl">
        <p className="eyebrow-brand">{index && <span className="mr-2 text-muted">[{index}]</span>}{eyebrow}</p>
        <h2 className="h-display mt-4 text-4xl leading-[1.04] md:text-6xl">
          {title} {fade && <span className="text-muted/60">{fade}</span>}
        </h2>
      </div>
      {text && <p className="max-w-sm text-base leading-relaxed text-muted md:text-right">{text}</p>}
    </Reveal>
  );
}
