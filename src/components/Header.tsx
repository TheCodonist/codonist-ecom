"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Arrow, Chevron, Close, Menu, ServiceIcon } from "./icons";
import { nav, services } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-line/80 bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                <button
                  type="button"
                  aria-expanded={mega}
                  onClick={() => setMega((v) => !v)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-ink ${pathname.startsWith("/services") ? "text-ink" : "text-muted"}`}
                >
                  Services <Chevron className={`h-3.5 w-3.5 transition-transform ${mega ? "rotate-180" : ""}`} />
                </button>
                <div className={`absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3 transition-all duration-200 ${mega ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}>
                  <div className="card grid grid-cols-[1fr_220px] overflow-hidden shadow-2xl shadow-black/10">
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {services.map((s) => (
                        <Link key={s.slug} href={`/services#${s.slug}`} className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-raised">
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-raised text-ink transition-colors group-hover:bg-brand group-hover:text-brand-ink">
                            <ServiceIcon name={s.icon} className="h-4 w-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-ink">{s.title}</span>
                            <span className="block text-xs leading-relaxed text-muted">{s.short}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col justify-between bg-ink p-6 text-bg">
                      <div>
                        <p className="eyebrow !text-bg/60">Not sure where to start?</p>
                        <p className="mt-3 font-display text-xl font-semibold leading-snug">Tell us the problem. We’ll suggest the stack.</p>
                      </div>
                      <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                        Get a free estimate <Arrow />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-ink ${pathname === item.href ? "text-ink" : "text-muted"}`}
              >
                {item.label}
                {item.label === "Lab" && <span className="ml-1.5 rounded-full bg-brand px-1.5 py-0.5 align-middle text-[9px] font-bold uppercase tracking-wider text-brand-ink">Live</span>}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Start a project
          </Link>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-bg transition-all duration-300 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="container flex flex-col gap-1 py-6">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-line py-5 font-display text-3xl font-semibold tracking-tight transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
            >
              {item.label} <Arrow className="h-5 w-5 text-muted" />
            </Link>
          ))}
          <Link href="/contact" className="btn-brand mt-8">Start a project <Arrow /></Link>
        </div>
      </div>
    </header>
  );
}
