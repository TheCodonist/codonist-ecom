import Link from "next/link";
import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import Founder from "@/components/home/Founder";
import SitesWall from "@/components/home/SitesWall";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import ProjectCard from "@/components/ProjectCard";
import Process from "@/components/Process";
import ProjectTypes from "@/components/ProjectTypes";
import BetterThanAI from "@/components/BetterThanAI";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/icons";
import { projects } from "@/data/site";
import { labDemos } from "@/data/lab";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <Hero />

      <section className="grid-paper relative py-24 md:py-32">
        <div className="container">
          <SectionHeading align="center" index="01" eyebrow="What we build" title="The software your business" fade="runs on." text="Dashboards, booking systems, stores and AI features: designed, engineered and supported by one studio." />
          <Reveal><ProductShowcase /></Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading index="02" eyebrow="Selected work" title="Built to" fade="perform." text="A few of the platforms, products and websites we’ve shipped for clients around the world." />
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[300px_300px]">
            {featured.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className={i === 0 ? "md:row-span-2" : ""}>
                <ProjectCard project={p} large={i === 0} showStatus={false} className="h-[260px] md:h-full" />
              </Reveal>
            ))}
            <Reveal delay={320}>
              <Link href="/work" className="group flex h-[200px] flex-col justify-between rounded-3xl bg-brand p-7 text-brand-ink md:h-full">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">All projects</span>
                <span>
                  <span className="block font-display text-3xl font-semibold tracking-tight">Explore the full portfolio</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold">Filter by technology <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="mt-20 md:mt-28">
          <div className="container"><p className="eyebrow mb-6 text-center">Client websites, live today</p></div>
          <SitesWall />
        </div>
      </section>

      <section className="border-y border-line bg-surface/50 py-24 md:py-32">
        <div className="container">
          <SectionHeading index="03" eyebrow="Services" title="One studio." fade="The whole stack." text="Web and mobile apps, websites, stores, Python & AI, and the care that keeps it all running." />
          <ServicesGrid />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading index="04" eyebrow="Projects we take on" title="From a one-day fix" fade="to a full platform." text="If it runs on the web or a phone, we can build it, fix it or make it better. Here’s what clients bring us most." />
          <ProjectTypes />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container"><BetterThanAI /></div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading index="05" eyebrow="Codonist Lab" title="Don’t take our word for it." fade="Try it." text="Working demos of the features clients ask for most. Every one built in-house." />
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {labDemos.map((d, i) => (
              <Reveal key={d.id} delay={(i % 4) * 60} className={i >= 4 ? "hidden lg:block" : ""}>
                <Link href={`/lab#${d.id}`} className="card group flex h-full flex-col p-4 transition-all sm:p-6 duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-xl">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{d.tag}</span>
                  <span className="mt-3 font-display text-base font-semibold leading-tight tracking-tight sm:mt-4 sm:text-lg">{d.title}</span>
                  <span className="mt-2 flex-1 text-xs leading-relaxed text-muted sm:text-sm">{d.text}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">Try it <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 flex justify-center lg:hidden">
            <Link href="/lab" className="btn-ghost">See all {labDemos.length} demos <Arrow className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container"><Reveal><Founder /></Reveal></div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container">
          <SectionHeading index="06" eyebrow="Process" title="How we" fade="work." text="Simple, transparent and milestone-based. You always know what’s happening and what’s next." />
          <Process />
        </div>
      </section>
    </>
  );
}
