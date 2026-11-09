import Link from "next/link";
import { Wordmark } from "./Logo";
import { ArrowUpRight } from "./icons";
import { services, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0B] text-white">
      <div className="container pt-24">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-16 md:flex-row md:items-end">
          <h2 className="font-display text-5xl font-semibold leading-[1.02] tracking-tightest md:text-7xl">
            Have a project
            <br />
            in mind<span className="text-brand">?</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn bg-brand text-brand-ink hover:-translate-y-0.5">Start a project</Link>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="btn border border-white/15 hover:border-white/40">WhatsApp</a>
            <a href={site.links.upwork} target="_blank" rel="noopener" className="btn border border-white/15 hover:border-white/40">Hire on Upwork <ArrowUpRight /></a>
          </div>
        </div>

        <div className="grid gap-10 py-14 text-sm text-white/55 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark className="text-2xl text-white" />
            <p className="mt-4 max-w-xs leading-relaxed">Software studio for web, mobile and AI products. Based in {site.location}, working with clients worldwide.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}><Link href={`/services#${s.slug}`} className="transition-colors hover:text-brand">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Studio</p>
            <ul className="mt-4 space-y-2.5">
              {[["/work", "Work"], ["/lab", "Lab"], ["/about", "About"], ["/contact", "Contact"]].map(([h, l]) => (
                <li key={h}><Link href={h!} className="transition-colors hover:text-brand">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Contact</p>
            <ul className="mt-4 space-y-2.5">
              <li><a href={`mailto:${site.email}`} className="transition-colors hover:text-brand">{site.email}</a></li>
              <li><a href={site.whatsapp} className="transition-colors hover:text-brand">WhatsApp {site.phone}</a></li>
              <li className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                {[["LinkedIn", site.links.linkedin], ["GitHub", site.links.github], ["Upwork", site.links.upwork], ["YouTube", site.links.youtube]].map(([l, h]) => (
                  <a key={l} href={h} target="_blank" rel="noopener" className="transition-colors hover:text-brand">{l}</a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {year} Codonist. All rights reserved.</p>
          <p>Designed &amp; engineered in-house.</p>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none select-none whitespace-nowrap px-4 pb-2 text-center font-display text-[17.5vw] font-bold leading-[0.78] tracking-tightest text-white/[0.04]">
        <span className="text-brand/[0.12]">{"{"}</span>Codonist<span className="text-brand/[0.12]">{"}"}</span>
      </div>
    </footer>
  );
}
