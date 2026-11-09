import Image from "next/image";
import Link from "next/link";
import Testimonials from "../Testimonials";
import { Arrow } from "../icons";

export default function Founder() {
  return (
    <div className="grid overflow-hidden rounded-[32px] bg-[#0A0A0B] text-white lg:grid-cols-[0.85fr_1.15fr]">
      <div className="portrait relative min-h-[420px]">
        <Image src="/images/hamayun-aziz.jpg" alt="Hamayun Aziz, founder of Codonist" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-top [filter:grayscale(1)_contrast(1.12)]" />
        <div className="absolute inset-0 bg-brand opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-5 left-5 rounded-2xl bg-black/70 px-4 py-3 backdrop-blur">
          <p className="text-sm font-semibold">Hamayun Aziz</p>
          <p className="text-xs text-white/60">Founder &amp; Lead Engineer · 10+ years</p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-12 p-8 md:p-14">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">The person behind the braces</p>
          <h3 className="mt-5 font-display text-3xl font-light leading-[1.08] tracking-tightest md:text-5xl">
            One partner for the <b className="font-semibold">whole stack</b>, from database to pixel.
          </h3>
          <p className="mt-6 max-w-xl leading-relaxed text-white/60">
            I started Codonist to give businesses a developer they can rely on for the long run: someone who plans properly, communicates clearly and ships work that holds up. A decade later, clients still come back for their next project.
          </p>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">More about the studio <Arrow /></Link>
        </div>
        <div className="border-t border-white/10 pt-10">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
