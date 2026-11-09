import Link from "next/link";
import { services } from "@/data/site";
import { Arrow, ServiceIcon } from "./icons";
import Reveal from "./Reveal";

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4" style={{ gap: 1 }}>
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 4) * 70} className="h-full">
          <Link href={`/services#${s.slug}`} className="group relative flex h-full min-h-[130px] flex-col bg-surface p-4 sm:p-7 md:min-h-[250px] transition-colors duration-300 hover:bg-raised">
            <div className="flex items-start justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-xl sm:h-11 sm:w-11 sm:rounded-2xl border border-line text-ink transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-ink">
                <ServiceIcon name={s.icon} />
              </span>
              <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-base font-semibold leading-tight tracking-tight sm:mt-8 sm:text-xl">{s.title}</h3>
            <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-muted sm:block">{s.short}</p>
            <div className="mt-6 hidden items-center justify-between sm:flex">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted/80">{s.stack.slice(0, 3).join(" · ")}</span>
              <Arrow className="h-4 w-4 -translate-x-2 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
