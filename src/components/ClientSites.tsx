"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { clientSites, siteCategories, type SiteCategory } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

type Filter = "All" | SiteCategory;

/** Filterable gallery of client websites with real screenshots. */
export default function ClientSites({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const list = useMemo(() => (filter === "All" ? clientSites : clientSites.filter((s) => s.category === filter)), [filter]);
  const max = limit ?? 12;
  const visible = showAll ? list : list.slice(0, max);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter websites by industry">
        {(["All", ...siteCategories] as Filter[]).map((c) => {
          const count = c === "All" ? clientSites.length : clientSites.filter((s) => s.category === c).length;
          const active = filter === c;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => { setFilter(c); setShowAll(false); }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active ? "border-ink bg-ink text-bg" : "border-line text-muted hover:border-ink/40 hover:text-ink"}`}
            >
              {c} <span className="ml-1 font-mono text-[11px] opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">{list.length} websites shown</p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener" className="group card block overflow-hidden transition hover:-translate-y-1 hover:border-ink/30">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-raised">
                <Image src={s.image} alt={`${s.name} website`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                {s.demo && <span className="absolute left-3 top-3 rounded-full bg-[#111]/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white">Front-end build</span>}
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-ink">{s.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.about}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted/80">{s.category} · {s.country}</p>
                </div>
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition group-hover:border-brand group-hover:bg-brand group-hover:text-brand-ink" aria-hidden>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {list.length > max && (
        <div className="mt-10 flex justify-center">
          <button type="button" className="btn-ghost" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Show fewer" : `Show all ${list.length} websites`}
          </button>
        </div>
      )}
    </div>
  );
}
