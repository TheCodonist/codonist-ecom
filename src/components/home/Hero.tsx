import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../icons";
import { techMarquee } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative -mt-[72px] overflow-hidden pt-[72px]">
      {/* Portrait panel (desktop) */}
      <div className="portrait absolute inset-y-0 right-0 hidden w-[52%] lg:block" aria-hidden>
        <Image src="/images/hamayun-aziz.jpg" alt="" fill priority sizes="52vw" className="object-cover object-[50%_20%]" />
        <div className="tint absolute inset-0 bg-brand mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(90deg,black_30%,transparent_60%)]" aria-hidden />

      <div className="container relative">
        <div className="flex min-h-[calc(100svh-72px)] max-w-2xl flex-col justify-center py-16 lg:py-24">
          <p className="eyebrow-brand animate-rise">
            <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-emerald-500 align-middle" />
            Software studio · Since 2015
          </p>
          <h1 className="mt-6 animate-rise font-display text-[44px] font-light leading-[0.98] tracking-tightest text-ink [animation-delay:80ms] sm:text-6xl md:text-7xl xl:text-[88px]">
            Code with <span className="font-semibold">craft.</span>
            <br />
            Products with <span className="relative font-semibold">purpose<span className="text-brand-deep dark:text-brand">.</span></span>
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted [animation-delay:160ms] md:text-xl">
            Codonist designs and builds web apps, mobile apps, websites and online stores, with Python &amp; AI where it counts. One studio for the whole stack, led by Hamayun Aziz.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:240ms]">
            <Link href="/contact" className="btn-brand !px-7 !py-4 text-[15px]">
              Start your project <Arrow />
            </Link>
            <Link href="/work" className="btn-ghost !px-7 !py-4 text-[15px]">See our work</Link>
          </div>

          {/* Portrait card (mobile) */}
          <div className="portrait relative mt-12 aspect-[4/5] overflow-hidden rounded-3xl lg:hidden">
            <Image src="/images/hamayun-aziz.jpg" alt="Hamayun Aziz, founder of Codonist" fill sizes="100vw" className="object-cover object-top" />
            <div className="tint absolute inset-0 bg-brand mix-blend-multiply" />
          </div>

          <div className="mt-14 flex animate-rise items-center gap-4 [animation-delay:320ms]">
            <div className="flex -space-x-2">
              {["US", "UK", "CA", "DE", "AE"].map((c) => (
                <span key={c} className="grid h-8 w-8 place-items-center rounded-full border-2 border-bg bg-raised text-[10px] font-bold text-muted">{c}</span>
              ))}
            </div>
            <p className="text-sm text-muted">Trusted by clients in the USA, UK, Europe &amp; the Middle East</p>
          </div>
        </div>

        {/* Founder tag (desktop) */}
        <div className="absolute bottom-24 right-10 hidden animate-rise items-center gap-3 rounded-2xl border border-line bg-surface/80 px-4 py-3 shadow-xl backdrop-blur-md [animation-delay:400ms] lg:flex xl:right-20">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#111] font-display text-sm font-bold text-brand">HA</span>
          <div>
            <p className="text-sm font-semibold">Hamayun Aziz</p>
            <p className="text-xs text-muted">Founder &amp; Lead Engineer</p>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative border-y border-line bg-surface/60 py-5 backdrop-blur">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-14 pr-14">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span key={i} className="flex items-center gap-14 whitespace-nowrap font-display text-lg font-semibold text-muted/70">
                {t} <span className="text-brand-deep dark:text-brand">{"{ }"}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
