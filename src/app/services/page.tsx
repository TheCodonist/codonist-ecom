import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Process from "@/components/Process";
import SectionHeading from "@/components/SectionHeading";
import { Arrow, Check, ServiceIcon } from "@/components/icons";
import { projects, services, type Tag } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web applications, mobile apps, websites, WordPress & WooCommerce, Shopify & e-commerce, Python & AI, design to code and ongoing maintenance.",
};

const related: Record<string, Tag[]> = {
  "web-applications": ["Vue", "Laravel / PHP"],
  "mobile-apps": ["Vue"],
  websites: ["Design to code"],
  wordpress: ["WordPress"],
  ecommerce: ["E-commerce"],
  "python-ai": ["Python"],
  "design-to-code": ["Design to code"],
  maintenance: ["WordPress"],
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="[ Services ]" title="One studio." fade="The whole stack." text="Whatever you’re building (an app, a store, a website or something in between), we plan it, build it and keep it running." />
      <section className="py-12 md:py-20">
        <div className="container divide-y divide-line">
          {services.map((s, i) => {
            const examples = projects.filter((p) => p.tags.some((t) => related[s.slug]?.includes(t))).slice(0, 3);
            return (
              <Reveal key={s.slug}>
                <article id={s.slug} className="grid scroll-mt-28 gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-brand-ink"><ServiceIcon name={s.icon} /></span>
                      <span className="font-mono text-xs text-muted">0{i + 1} / 0{services.length}</span>
                    </div>
                    <h2 className="h-display mt-6 text-4xl md:text-5xl">{s.title}</h2>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">{s.long}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{s.stack.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="card p-7">
                      <p className="eyebrow">What’s included</p>
                      <ul className="mt-5 space-y-3">
                        {s.includes.map((x) => (
                          <li key={x} className="flex gap-3 text-sm"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-brand-ink"><Check className="h-3 w-3" /></span>{x}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card flex flex-col p-7">
                      <p className="eyebrow">Related work</p>
                      <ul className="mt-5 flex-1 space-y-3">
                        {examples.map((p) => (
                          <li key={p.slug} className="flex items-center justify-between gap-3 border-b border-line pb-3 text-sm last:border-0">
                            <span><b>{p.name}</b><span className="block text-xs text-muted">{p.summary}</span></span>
                            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: p.palette[1] }} />
                          </li>
                        ))}
                        {!examples.length && <li className="text-sm text-muted">Case studies coming soon.</li>}
                      </ul>
                      <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Discuss your project <Arrow /></Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <section className="border-t border-line bg-surface/50 py-24">
        <div className="container">
          <SectionHeading eyebrow="Process" title="How we" fade="work." text="Every engagement follows the same clear path." />
          <Process />
        </div>
      </section>
    </>
  );
}
