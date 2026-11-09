import Image from "next/image";
import type { Project } from "@/data/site";
import ProjectMockup, { hasMockup } from "./ProjectMockup";

/** Real screenshot when available, otherwise a branded typographic cover. */
export default function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const [bg, accent] = project.palette;
  if (project.image)
    return <Image src={project.image} alt={`${project.name} website screenshot`} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />;
  if (hasMockup(project.slug))
    return (
      <div className="absolute inset-0 overflow-hidden" style={{ background: `radial-gradient(100% 90% at 80% 0%, ${accent}55, transparent 60%), linear-gradient(160deg, ${bg}, #0a0a0b)` }}>
        <ProjectMockup project={project} />
      </div>
    );
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{ background: `radial-gradient(90% 80% at 85% 10%, ${accent}40, transparent 60%), linear-gradient(160deg, ${bg}, #050505)` }}
    >
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <span
        className={`absolute right-6 top-1/2 -translate-y-[60%] select-none font-display font-semibold leading-none tracking-tighter transition-transform duration-700 group-hover:-translate-x-2 ${large ? "text-[150px] md:text-[220px]" : "text-[120px]"}`}
        style={{ color: accent, opacity: 0.9 }}
      >
        {"{"}
        <span className="text-white/90">{project.name.charAt(0)}</span>
        {"}"}
      </span>
      <div className={`absolute left-6 flex flex-wrap gap-1.5 ${large ? "top-20" : "top-16"} max-w-[60%]`}>
        {project.tools.slice(0, large ? 5 : 3).map((t) => (
          <span key={t} className="rounded-md border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/70">{t}</span>
        ))}
      </div>
    </div>
  );
}
