import { process } from "@/data/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
      <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" aria-hidden />
      {process.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 90} className="relative">
          <span className="relative block h-[15px] w-[15px] rounded-full border-[3px] border-bg bg-brand ring-1 ring-brand-deep/40" />
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Step 0{i + 1}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
