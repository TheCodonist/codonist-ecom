import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow, Check, Close } from "./icons";
import { aiCompare } from "@/data/offer";
import { site } from "@/data/site";

/** "AI can start it. We finish it." Positioning against AI-only builds. */
export default function BetterThanAI() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#0b0b0d] p-7 text-white md:p-14">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/20 blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">AI + human expertise</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            AI can start it.<br /><span className="text-brand">We finish it.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            AI tools are great for a first draft. But when the code breaks, the app won’t deploy, or the feature only half works, you need a developer who understands it. That’s us.
          </p>
          <p className="mt-4 max-w-md text-white/70">We use AI every day to work faster, and we take responsibility for every line we ship.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-brand">Stuck with an AI-built project? <Arrow className="h-4 w-4" /></Link>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn border border-white/20 text-white hover:border-white/50">WhatsApp us</a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.04] text-xs font-semibold uppercase tracking-wider">
              <div className="px-5 py-4 text-white/50">AI tools alone</div>
              <div className="border-l border-white/10 px-5 py-4 text-brand">{"{Codonist}"}</div>
            </div>
            {aiCompare.map((r) => (
              <div key={r.us} className="grid grid-cols-2 border-b border-white/10 text-sm last:border-0">
                <div className="flex gap-2 px-3 py-4 text-white/55 md:gap-2.5 md:px-5"><Close className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />{r.ai}</div>
                <div className="flex gap-2 border-l border-white/10 px-3 py-4 text-white md:gap-2.5 md:px-5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{r.us}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
