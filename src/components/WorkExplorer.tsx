"use client";

import { useMemo, useState } from "react";
import { allTags, projects, type Tag } from "@/data/site";
import ProjectCard from "./ProjectCard";
import { Search } from "./icons";

type Sort = "featured" | "az" | "live";

export default function WorkExplorer({ limit, compact = false }: { limit?: number; compact?: boolean }) {
  const [tag, setTag] = useState<Tag | "All">("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<Sort>("featured");

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let r = projects.filter(
      (p) =>
        (tag === "All" || p.tags.includes(tag)) &&
        (!needle || [p.name, p.summary, p.country, p.client, ...p.tools].join(" ").toLowerCase().includes(needle)),
    );
    if (sort === "az") r = [...r].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "live") r = [...r].sort((a, b) => Number(b.status === "Live") - Number(a.status === "Live"));
    if (sort === "featured") r = [...r].sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || Number(!!b.image) - Number(!!a.image));
    return limit ? r.slice(0, limit) : r;
  }, [tag, q, sort, limit]);

  const counts = useMemo(() => Object.fromEntries(allTags.map((t) => [t, projects.filter((p) => p.tags.includes(t)).length])), []);

  return (
    <div>
      <div className="card flex flex-col gap-3 p-3 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search projects</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by project, tool or country…" className="input !rounded-full !border-transparent !bg-raised pl-11" />
        </label>
        <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0" role="group" aria-label="Filter by technology">
          {(["All", ...allTags] as const).map((t) =>
            t !== "All" && counts[t] === 0 ? null : (
              <button
                key={t}
                type="button"
                aria-pressed={tag === t}
                onClick={() => setTag(t)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-all ${tag === t ? "bg-brand text-brand-ink" : "text-muted hover:bg-raised hover:text-ink"}`}
              >
                {t}
              </button>
            ),
          )}
        </div>
        {!compact && (
          <label className="flex shrink-0 items-center gap-2 text-sm text-muted">
            <span className="sr-only lg:not-sr-only">Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-ink focus:outline-none">
              <option value="featured">Featured</option>
              <option value="live">Live first</option>
              <option value="az">A–Z</option>
            </select>
          </label>
        )}
      </div>

      <p className="mt-5 px-1 text-sm text-muted" aria-live="polite">
        Showing <b className="text-ink">{list.length}</b> {list.length === 1 ? "project" : "projects"}
        {tag !== "All" && <> in <b className="text-ink">{tag}</b></>}
      </p>

      {list.length ? (
        <div className={`mt-4 grid gap-4 sm:grid-cols-2 ${compact ? "lg:grid-cols-3" : "lg:grid-cols-3"}`}>
          {list.map((p) => (
            <div key={p.slug} className="animate-rise">
              <ProjectCard project={p} className="h-[340px]" />
              {!compact && (
                <div className="px-1 pt-4">
                  <p className="text-sm leading-relaxed text-muted">{p.built}</p>
                  {p.quote && <p className="mt-3 border-l-2 border-brand pl-3 text-sm italic text-ink/80">“{p.quote}”</p>}
                  <div className="mt-3 flex flex-wrap gap-1.5">{p.tools.map((t) => <span key={t} className="chip !text-[11px]">{t}</span>)}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="card mt-4 grid place-items-center p-16 text-center">
          <p className="font-display text-2xl font-semibold">No matches</p>
          <p className="mt-2 text-muted">Try another keyword or filter.</p>
          <button type="button" onClick={() => { setQ(""); setTag("All"); }} className="btn-ghost mt-6">Reset filters</button>
        </div>
      )}
    </div>
  );
}
