import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./icons";
import { engagementModels, projectTypes } from "@/data/offer";

/** "Projects we take on": the kinds of work Codonist accepts and how clients can hire. */
export default function ProjectTypes() {
  return (
    <div>
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line grid-cols-2 lg:grid-cols-4">
        {projectTypes.map((t, i) => (
          <Reveal key={t.title} delay={(i % 4) * 60} className="bg-surface">
            <div className="flex h-full flex-col p-4 sm:p-6 md:p-7">
              <span className="font-mono text-[11px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-base font-semibold leading-tight tracking-tight sm:mt-4 sm:text-lg">{t.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted sm:text-sm">{t.text}</p>
              <ul className="mt-5 hidden flex-wrap gap-1.5 sm:flex">
                {t.examples.map((e) => <li key={e} className="rounded-full bg-raised px-2.5 py-1 text-[11px] text-muted">{e}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-stretch">
        {engagementModels.map((m) => (
          <div key={m.title} className="card p-6">
            <p className="font-display font-semibold">{m.title}</p>
            <p className="mt-1.5 text-sm text-muted">{m.text}</p>
          </div>
        ))}
        <Link href="/contact" className="group flex items-center justify-center gap-2 rounded-3xl bg-ink px-8 py-6 text-sm font-semibold text-bg">
          Tell us about your project <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
