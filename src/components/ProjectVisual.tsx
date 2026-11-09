import Image from "next/image";
import type { Project } from "@/data/site";

/** Real screenshot when available, otherwise a branded browser-style preview. */
export default function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const [bg, accent] = project.palette;
  if (project.image)
    return <Image src={project.image} alt={`${project.name} screenshot`} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />;
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: `radial-gradient(120% 90% at 100% 0%, ${accent}33, transparent 55%), linear-gradient(160deg, ${bg}, #050505)` }}>
      <div className={`absolute rounded-xl border border-white/15 bg-white/[0.06] shadow-2xl backdrop-blur-sm transition-transform duration-700 group-hover:-translate-y-1.5 ${large ? "inset-x-10 bottom-0 top-20" : "inset-x-6 bottom-0 top-14"}`}>
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <i className="h-2 w-2 rounded-full bg-white/25" /><i className="h-2 w-2 rounded-full bg-white/25" /><i className="h-2 w-2 rounded-full bg-white/25" />
        </div>
        <div className="p-4">
          <div className="h-2.5 w-1/4 rounded-full" style={{ background: accent }} />
          <div className={`mt-4 rounded-full bg-white/80 ${large ? "h-5 w-1/2" : "h-3.5 w-1/2"}`} />
          <div className="mt-3 h-2 w-2/3 rounded-full bg-white/15" />
          <div className="mt-1.5 h-2 w-1/2 rounded-full bg-white/10" />
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => <div key={i} className={`${large ? "h-20" : "h-10"} rounded-lg bg-white/[0.07]`} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
