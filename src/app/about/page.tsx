import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Arrow, ArrowUpRight } from "@/components/icons";
import { site, skillGroups, timeline } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description: "Codonist is a software studio founded by Hamayun Aziz, a full stack developer with 10+ years of experience in Laravel, Vue.js, Python, WordPress and mobile apps.",
};

const values = [
  ["Plan before code", "Clear scope, milestones and estimates before a single line is written."],
  ["Communicate clearly", "Regular updates, honest timelines and quick replies across time zones."],
  ["Build to last", "Clean, documented code your next developer will thank you for."],
  ["Stay after launch", "Support, fixes and improvements long after go-live."],
];

export default function AboutPage() {
  return (
    <>
      <section className="grid-paper border-b border-line">
        <div className="container grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow-brand animate-rise">[ About ]</p>
            <h1 className="h-display mt-5 animate-rise text-5xl leading-[1] [animation-delay:80ms] md:text-7xl">
              Old-school reliability. <span className="text-muted/60">New-school craft.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-muted [animation-delay:160ms]">
              Codonist is the software studio of Hamayun Aziz, a full stack developer who has been building for the web since 2015. From hand-coded HTML to Laravel platforms, Vue and React apps, WordPress stores, mobile apps and Python services, it’s one studio for the whole stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-brand">Work with us <Arrow /></Link>
              <a href={site.links.linkedin} target="_blank" rel="noopener" className="btn-ghost">LinkedIn <ArrowUpRight /></a>
            </div>
          </div>
          <div className="portrait relative aspect-square overflow-hidden rounded-[32px] border border-line">
            <Image src="/images/hamayun-aziz.jpg" alt="Hamayun Aziz" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            <div className="tint absolute inset-0 bg-brand mix-blend-multiply" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-black/70 px-5 py-4 text-white backdrop-blur">
              <div><p className="font-semibold">Hamayun Aziz</p><p className="text-xs text-white/60">Founder &amp; Lead Engineer</p></div>
              <span className="font-mono text-xs text-brand">{site.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <SectionHeading index="01" eyebrow="How we work" title="Principles that" fade="clients come back for." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="card p-7">
                <span className="font-display text-4xl font-semibold text-brand-deep dark:text-brand">{`{${i + 1}}`}</span>
                <h3 className="mt-6 font-display text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/50 py-24">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading index="02" eyebrow="Journey" title="A decade of" fade="shipping." />
            <div className="card p-7">
              <p className="eyebrow">Education & certification</p>
              <p className="mt-4 font-semibold">Master’s degree, Computer Science / Applications</p>
              <p className="text-sm text-muted">Gomal University · 2012 – 2014</p>
              <p className="mt-4 font-semibold">WordPress Developer Certification</p>
              <p className="text-sm text-muted">2022</p>
            </div>
          </div>
          <ol className="relative border-l border-line pl-8">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.title} delay={i * 80} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[39px] top-1 h-[15px] w-[15px] rounded-full border-[3px] border-bg bg-brand" />
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{t.period}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <SectionHeading index="03" eyebrow="Toolbox" title="The stack," fade="end to end." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g, i) => (
              <Reveal key={g.name} delay={(i % 3) * 70} className="card p-7">
                <p className="eyebrow">{g.name}</p>
                <div className="mt-5 flex flex-wrap gap-2">{g.items.map((s) => <span key={s} className="rounded-full bg-raised px-3 py-1.5 text-sm">{s}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
