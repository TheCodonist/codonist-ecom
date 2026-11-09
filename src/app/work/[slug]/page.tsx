import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/components/ProjectVisual";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { Arrow, ArrowUpRight, Check, Quote } from "@/components/icons";
import { projects, services, site } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.summary}`,
    description: `${p.built} Built by Codonist with ${p.tools.join(", ")}.`,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: p.image ? { images: [p.image] } : undefined,
  };
}

/** Map a project's tags to the services that cover them. */
function servicesFor(tags: string[]) {
  const map: Record<string, string[]> = {
    Vue: ["web-applications"],
    "React / Next.js": ["web-applications"],
    "Laravel / PHP": ["web-applications"],
    Python: ["python-ai"],
    WordPress: ["wordpress"],
    "E-commerce": ["ecommerce"],
    "Design to code": ["design-to-code", "websites"],
  };
  const slugs = Array.from(new Set(tags.flatMap((t) => map[t] ?? [])));
  return services.filter((s) => slugs.includes(s.slug)).slice(0, 2);
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  const p = projects[i];
  if (!p) notFound();
  const next = projects[(i + 1) % projects.length]!;
  const more = projects.filter((x) => x.slug !== p.slug && x.tags.some((t) => p.tags.includes(t))).slice(0, 3);
  const related = servicesFor(p.tags);

  const facts: [string, string][] = [
    ["Client", p.client],
    ["Location", p.country],
    ...(p.year ? ([["Year", p.year]] as [string, string][]) : []),
    ["Status", p.status === "Live" ? "Live" : p.status === "Archived" ? "Delivered, now offline" : "Delivered"],
  ];

  return (
    <>
      <section className="grid-paper border-b border-line">
        <div className="container py-14 md:py-20">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
            <Arrow className="h-3.5 w-3.5 rotate-180" /> All work
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
          <h1 className="h-display mt-5 max-w-4xl text-5xl leading-[1] md:text-7xl">{p.name}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">{p.summary}.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.url && p.status === "Live" && (
              <a href={p.url} target="_blank" rel="noopener" className="btn-primary">Visit live site <ArrowUpRight /></a>
            )}
            <Link href="/contact" className={p.url && p.status === "Live" ? "btn-ghost" : "btn-primary"}>Start a similar project <Arrow className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-raised md:aspect-[16/9]">
              <ProjectVisual project={p} large />
            </div>
            {!p.image && <p className="mt-3 text-center text-xs text-muted">This project is no longer online, so we show a preview instead of a screenshot.</p>}
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="eyebrow-brand">What we built</p>
              <p className="mt-4 font-display text-2xl leading-snug tracking-tight md:text-3xl">{p.built}</p>
              {p.quote && (
                <figure className="mt-12 rounded-3xl bg-ink p-8 text-bg md:p-10">
                  <Quote className="h-7 w-7 text-brand" />
                  <blockquote className="mt-4 font-display text-xl font-light leading-snug md:text-2xl">“{p.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm opacity-70">Client feedback, {p.client}</figcaption>
                </figure>
              )}
              {related.length > 0 && (
                <div className="mt-12">
                  <p className="eyebrow">Related services</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {related.map((s) => (
                      <Link key={s.slug} href={`/services#${s.slug}`} className="card group p-5 transition hover:border-ink/30">
                        <span className="font-display font-semibold">{s.title}</span>
                        <span className="mt-1 block text-sm text-muted">{s.short}</span>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">Learn more <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="card h-fit p-7">
              <dl className="space-y-4">
                {facts.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-line pb-4 text-sm last:border-0 last:pb-0">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="eyebrow mt-7">Tools</p>
              <ul className="mt-3 space-y-2">
                {p.tools.map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm"><span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-brand-ink"><Check className="h-3 w-3" /></span>{t}</li>
                ))}
              </ul>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="btn-brand mt-8 w-full">Ask about this project</a>
            </aside>
          </div>
        </div>
      </section>

      {more.length > 0 && (
        <section className="border-t border-line bg-surface/50 py-16 md:py-24">
          <div className="container">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="h-display text-3xl md:text-4xl">Similar work</h2>
              <Link href={`/work/${next.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold">Next project: {next.name} <Arrow className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {more.map((m) => <ProjectCard key={m.slug} project={m} className="h-[320px]" />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
