import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { ArrowUpRight, Chat, Mail } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description: "Start a project with Codonist. Email, WhatsApp, Upwork or the enquiry form. We reply within one business day.",
};

export default function ContactPage() {
  const channels = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: <Mail className="h-5 w-5" /> },
    { label: "WhatsApp", value: site.phone, href: site.whatsapp, icon: <Chat className="h-5 w-5" /> },
    { label: "Upwork", value: "Hire through Upwork", href: site.links.upwork, icon: <ArrowUpRight className="h-5 w-5" /> },
  ];
  return (
    <>
      <PageHeader eyebrow="[ Contact ]" title="Let’s build" fade="something good." text="Tell us what you’re working on. We reply within one business day, usually much sooner." />
      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <ContactForm />
          <aside className="space-y-4">
            {channels.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="card group flex items-center gap-4 p-6 transition hover:-translate-y-0.5 hover:border-ink/30">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-raised transition group-hover:bg-brand group-hover:text-brand-ink">{c.icon}</span>
                <span><span className="block text-xs text-muted">{c.label}</span><span className="block font-semibold">{c.value}</span></span>
              </a>
            ))}
            <div className="card p-6">
              <p className="eyebrow">Elsewhere</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[["LinkedIn", site.links.linkedin], ["GitHub", site.links.github], ["CodePen", site.links.codepen], ["YouTube", site.links.youtube]].map(([l, h]) => (
                  <a key={l} href={h} target="_blank" rel="noopener" className="chip hover:border-ink/40 hover:text-ink">{l}</a>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted">Based in {site.location}. Working with clients in {site.countries.length} countries across every time zone.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
