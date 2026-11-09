import Link from "next/link";
import type { Project } from "@/data/site";
import ProjectVisual from "./ProjectVisual";
import { ArrowUpRight } from "./icons";

export default function ProjectCard({ project, large = false, className = "" }: { project: Project; large?: boolean; className?: string }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`${project.name}: view project`}
      className={`group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-3xl text-white ${className}`}
    >
      <ProjectVisual project={project} large={large} />
      <div className={`absolute inset-0 bg-gradient-to-t ${project.image ? "from-black/95 via-black/55 via-45% to-black/10" : "from-black/85 via-black/20 to-transparent"}`} />
      <div className="absolute left-5 top-5 flex flex-wrap gap-2">
        <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${project.status === "Live" ? "bg-emerald-400 text-emerald-950" : "bg-black/60 text-white backdrop-blur"}`}>
          {project.status === "Live" ? "● Live" : project.status}
        </span>
        <span className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] backdrop-blur">{project.tools.slice(0, 2).join(" · ")}</span>
      </div>
      <div className="relative p-6">
        <p className="text-xs text-white/60">{[project.country, project.year].filter(Boolean).join(" · ")}</p>
        <h3 className={`mt-1 font-display font-semibold tracking-tight ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>{project.name}</h3>
        <p className="mt-1 text-sm text-white/70">{project.summary}</p>
      </div>
      <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <ArrowUpRight />
      </span>
    </Link>
  );
}
