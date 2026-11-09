"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Arrow, Check, Chevron, Close, Search } from "../icons";

/* ---------- Data table ---------- */
const people = [
  ["Ava Thompson", "London", "Admin", 2024, "Active"], ["Noah Becker", "Berlin", "Editor", 2023, "Active"], ["Liam Cohen", "Tel Aviv", "Viewer", 2025, "Invited"],
  ["Sofia Rossi", "Milan", "Editor", 2022, "Active"], ["Omar Haddad", "Dubai", "Admin", 2021, "Suspended"], ["Emma Wilson", "Toronto", "Viewer", 2024, "Active"],
  ["Lucas Martin", "Brussels", "Editor", 2025, "Invited"], ["Mia Chen", "Sydney", "Viewer", 2023, "Active"], ["James Carter", "Austin", "Admin", 2022, "Active"],
  ["Zara Ahmed", "Lahore", "Editor", 2025, "Active"], ["Ethan Brooks", "Belfast", "Viewer", 2021, "Suspended"], ["Layla Nasser", "Abu Dhabi", "Editor", 2024, "Active"],
] as const;
type Col = 0 | 1 | 2 | 3;

export function DataTableDemo() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<{ col: Col; dir: 1 | -1 }>({ col: 0, dir: 1 });
  const [page, setPage] = useState(0);
  const per = 5;
  const rows = useMemo(() => {
    const n = q.toLowerCase();
    return [...people]
      .filter((r) => r.join(" ").toLowerCase().includes(n))
      .sort((a, b) => (a[sort.col] > b[sort.col] ? 1 : -1) * sort.dir);
  }, [q, sort]);
  const pages = Math.max(1, Math.ceil(rows.length / per));
  useEffect(() => setPage(0), [q]);
  const head: [Col, string][] = [[0, "Name"], [1, "City"], [2, "Role"], [3, "Joined"]];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="relative w-full sm:w-64">
          <span className="sr-only">Search users</span>
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search users…" className="input !py-2.5 pl-9" />
        </label>
        <span className="text-xs text-muted">{rows.length} results</span>
      </div>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="bg-raised text-xs text-muted">
            <tr>
              {head.map(([c, l]) => (
                <th key={l} className="px-4 py-3 font-medium">
                  <button type="button" onClick={() => setSort((s) => ({ col: c, dir: s.col === c ? ((s.dir * -1) as 1 | -1) : 1 }))} className="inline-flex items-center gap-1 hover:text-ink">
                    {l} <Chevron className={`h-3 w-3 transition ${sort.col === c ? "opacity-100" : "opacity-30"} ${sort.col === c && sort.dir === -1 ? "rotate-180" : ""}`} />
                  </button>
                </th>
              ))}
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.slice(page * per, page * per + per).map((r) => (
              <tr key={r[0]} className="border-t border-line transition-colors hover:bg-raised/60">
                <td className="px-4 py-3 font-medium">{r[0]}</td><td className="px-4 py-3 text-muted">{r[1]}</td><td className="px-4 py-3">{r[2]}</td><td className="px-4 py-3 tabular-nums text-muted">{r[3]}</td>
                <td className="px-4 py-3"><span className={`rounded-full px-2.5 py-1 text-xs font-medium ${r[4] === "Active" ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : r[4] === "Invited" ? "bg-sky-500/15 text-sky-600 dark:text-sky-400" : "bg-rose-500/15 text-rose-600 dark:text-rose-400"}`}>{r[4]}</span></td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={5} className="px-4 py-10 text-center text-muted">No users found</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-muted">Page {page + 1} of {pages}</span>
        <div className="flex gap-2">
          <button type="button" disabled={page === 0} onClick={() => setPage((p) => p - 1)} className="rounded-full border border-line px-4 py-1.5 disabled:opacity-40">Prev</button>
          <button type="button" disabled={page >= pages - 1} onClick={() => setPage((p) => p + 1)} className="rounded-full border border-line px-4 py-1.5 disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Booking ---------- */
export function BookingDemo() {
  const [day, setDay] = useState<number | null>(12);
  const [slot, setSlot] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const busy = (d: number) => d % 6 === 0 || d % 7 === 0;
  const slots = ["09:00", "09:30", "10:30", "11:00", "13:00", "14:30", "16:00", "17:30"];
  if (done)
    return (
      <div className="grid place-items-center py-14 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-ink"><Check className="h-6 w-6" /></span>
        <p className="mt-5 font-display text-2xl font-semibold">Booked for {day} Dec at {slot}</p>
        <p className="mt-1 text-sm text-muted">A confirmation email and calendar invite would be sent now.</p>
        <button type="button" onClick={() => { setDone(false); setSlot(null); }} className="btn-ghost mt-6">Book another</button>
      </div>
    );
  return (
    <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="font-semibold">December 2026</p>
        <div className="mt-3 grid grid-cols-7 gap-1.5 text-center text-sm">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i} className="py-1 text-xs text-muted">{d}</span>)}
          <span /> {/* Dec 1 2026 is a Tuesday */}
          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
            <button key={d} type="button" disabled={busy(d)} onClick={() => { setDay(d); setSlot(null); }} className={`rounded-xl py-2.5 transition ${day === d ? "bg-ink font-semibold text-bg" : busy(d) ? "cursor-not-allowed text-muted/40 line-through" : "hover:bg-raised"}`}>{d}</button>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold">{day ? `Available on ${day} Dec` : "Pick a date"}</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {slots.map((t, i) => {
            const off = day !== null && (day + i) % 4 === 0;
            return <button key={t} type="button" disabled={off} onClick={() => setSlot(t)} className={`rounded-xl border py-3 text-sm font-medium transition ${slot === t ? "border-brand bg-brand text-brand-ink" : off ? "border-line text-muted/40 line-through" : "border-line hover:border-ink/40"}`}>{t}</button>;
          })}
        </div>
        <button type="button" disabled={!slot} onClick={() => setDone(true)} className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-40">Confirm booking <Arrow /></button>
      </div>
    </div>
  );
}

/* ---------- Cart ---------- */
const products = [
  { id: 1, name: "Studio Headphones", price: 129, color: "#fde68a" },
  { id: 2, name: "Desk Lamp", price: 59, color: "#c7d2fe" },
  { id: 3, name: "Ceramic Mug", price: 18, color: "#fecaca" },
  { id: 4, name: "Leather Notebook", price: 24, color: "#bbf7d0" },
];
export function CartDemo() {
  const [cart, setCart] = useState<Record<number, number>>({ 2: 1 });
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(false);
  const add = (id: number, d = 1) => setCart((c) => { const n = Math.max(0, (c[id] ?? 0) + d); const x = { ...c, [id]: n }; if (!n) delete x[id]; return x; });
  const subtotal = products.reduce((s, p) => s + (cart[p.id] ?? 0) * p.price, 0);
  const discount = applied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 7;
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <div className="grid grid-cols-2 gap-3">
        {products.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="h-24" style={{ background: p.color }} />
            <div className="p-3">
              <p className="text-sm font-semibold">{p.name}</p>
              <div className="mt-2 flex items-center justify-between"><span className="text-sm text-muted">${p.price}</span>
                <button type="button" onClick={() => add(p.id)} className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-bg transition active:scale-95">Add</button></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col rounded-2xl border border-line bg-surface p-5">
        <p className="flex items-center justify-between font-semibold">Cart <span className="rounded-full bg-brand px-2 py-0.5 text-xs text-brand-ink">{count}</span></p>
        <div className="mt-3 flex-1 space-y-3">
          {products.filter((p) => cart[p.id]).map((p) => (
            <div key={p.id} className="flex items-center justify-between text-sm">
              <span>{p.name}</span>
              <span className="flex items-center gap-2">
                <button type="button" aria-label={`Remove one ${p.name}`} onClick={() => add(p.id, -1)} className="h-7 w-7 rounded-lg border border-line">−</button>
                <span className="w-4 text-center tabular-nums">{cart[p.id]}</span>
                <button type="button" aria-label={`Add one ${p.name}`} onClick={() => add(p.id)} className="h-7 w-7 rounded-lg border border-line">+</button>
              </span>
            </div>
          ))}
          {!count && <p className="py-6 text-center text-sm text-muted">Your cart is empty</p>}
        </div>
        <form className="mt-4 flex gap-2" onSubmit={(e) => { e.preventDefault(); setApplied(code.trim().toUpperCase() === "CODONIST10"); }}>
          <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Try CODONIST10" className="input !py-2 text-xs" />
          <button className="rounded-xl border border-line px-3 text-xs font-semibold">Apply</button>
        </form>
        <dl className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
          <div className="flex justify-between text-muted"><dt>Subtotal</dt><dd className="tabular-nums">${subtotal}</dd></div>
          {applied && <div className="flex justify-between text-emerald-600 dark:text-emerald-400"><dt>Discount (10%)</dt><dd>−${discount}</dd></div>}
          <div className="flex justify-between text-muted"><dt>Shipping</dt><dd>{shipping ? `$${shipping}` : "Free"}</dd></div>
          <div className="flex justify-between text-base font-semibold"><dt>Total</dt><dd className="tabular-nums">${subtotal - discount + shipping}</dd></div>
        </dl>
        <button type="button" disabled={!count} className="btn-brand mt-4 w-full disabled:opacity-40">Checkout</button>
      </div>
    </div>
  );
}

/* ---------- Multi-step quote ---------- */
const kinds = [["Website", 900], ["Web app", 3500], ["Online store", 2200], ["Mobile app", 4000]] as const;
const extras = [["Admin dashboard", 1200], ["User accounts", 600], ["Payments", 500], ["AI assistant", 900], ["Multi-language", 400]] as const;
export function QuoteDemo() {
  const [step, setStep] = useState(0);
  const [kind, setKind] = useState<number>(0);
  const [ex, setEx] = useState<number[]>([]);
  const [pages, setPages] = useState(6);
  const total = kinds[kind]![1] + ex.reduce((s, i) => s + extras[i]![1], 0) + pages * 120;
  const steps = ["Project", "Features", "Size", "Estimate"];
  return (
    <div>
      <ol className="flex gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex-1">
            <div className={`h-1.5 rounded-full transition-colors ${i <= step ? "bg-brand" : "bg-line"}`} />
            <p className={`mt-2 text-xs ${i === step ? "font-semibold text-ink" : "text-muted"}`}>{i + 1}. {s}</p>
          </li>
        ))}
      </ol>
      <div key={step} className="mt-6 min-h-[180px] animate-rise">
        {step === 0 && (
          <div className="grid grid-cols-2 gap-3">
            {kinds.map(([k], i) => <button key={k} type="button" onClick={() => setKind(i)} className={`rounded-2xl border p-4 text-left font-semibold transition ${kind === i ? "border-brand bg-brand/20" : "border-line hover:border-ink/40"}`}>{k}</button>)}
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-wrap gap-2">
            {extras.map(([k], i) => <button key={k} type="button" aria-pressed={ex.includes(i)} onClick={() => setEx((e) => (e.includes(i) ? e.filter((x) => x !== i) : [...e, i]))} className={`rounded-full border px-4 py-2.5 text-sm transition ${ex.includes(i) ? "border-ink bg-ink text-bg" : "border-line hover:border-ink/40"}`}>{ex.includes(i) && "✓ "}{k}</button>)}
          </div>
        )}
        {step === 2 && (
          <label className="block">
            <span className="text-sm font-semibold">Roughly how many pages or screens? <b className="ml-1 text-brand-deep dark:text-brand">{pages}</b></span>
            <input type="range" min={1} max={30} value={pages} onChange={(e) => setPages(+e.target.value)} className="mt-5 w-full accent-[#FFE100]" />
            <span className="mt-1 flex justify-between text-xs text-muted"><span>1</span><span>30</span></span>
          </label>
        )}
        {step === 3 && (
          <div className="rounded-2xl bg-raised p-6">
            <p className="text-sm text-muted">Ballpark estimate for a {kinds[kind]![0].toLowerCase()}</p>
            <p className="mt-2 font-display text-4xl font-semibold tabular-nums">${Math.round(total * 0.9).toLocaleString()} – ${Math.round(total * 1.2).toLocaleString()}</p>
            <p className="mt-2 text-xs text-muted">Demo numbers only. Real quotes follow a short discovery call.</p>
          </div>
        )}
      </div>
      <div className="mt-6 flex justify-between">
        <button type="button" disabled={step === 0} onClick={() => setStep((s) => s - 1)} className="btn-ghost !py-2.5 disabled:opacity-40">Back</button>
        {step < 3 ? <button type="button" onClick={() => setStep((s) => s + 1)} className="btn-primary !py-2.5">Continue <Arrow /></button> : <button type="button" onClick={() => { setStep(0); setEx([]); }} className="btn-primary !py-2.5">Start over</button>}
      </div>
    </div>
  );
}

/* ---------- AI chat (scripted, no API) ---------- */
const answers: [RegExp, string][] = [
  [/price|cost|budget|rate|quote/i, "Every project is quoted after a short discovery call. Small websites start in the low thousands; apps depend on scope. Try the quote estimator on this page!"],
  [/wordpress|woo|shopify|store|shop|ecommerce|e-commerce/i, "Yes: custom WordPress themes and plugins, WooCommerce stores and checkout customisation, plus Shopify setups and migrations."],
  [/python|django|flask|ai|gpt|chatbot|automation/i, "We build Django and Flask APIs, automation scripts and AI features like assistants and smart search inside your product."],
  [/mobile|app|android|ios/i, "We build cross-platform mobile apps with Capacitor and Cordova, so one codebase covers iOS and Android."],
  [/laravel|vue|react|next/i, "That's our home turf: Laravel back-ends with Vue or React front-ends, and Next.js for fast marketing sites."],
  [/time|long|deadline|fast/i, "A landing site takes about 1–2 weeks, a full web app 6–12 weeks. We agree milestones up front so you always know where things stand."],
  [/hello|hi|hey|salam/i, "Hi! I'm the Codonist assistant. Ask me about services, pricing, timelines or tech."],
];
export function ChatDemo() {
  const [msgs, setMsgs] = useState<{ me: boolean; text: string }[]>([{ me: false, text: "Hi! I'm the Codonist assistant. What are you building?" }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => { box.current?.scrollTo({ top: box.current.scrollHeight, behavior: "smooth" }); }, [msgs, typing]);
  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { me: true, text }]);
    setInput("");
    setTyping(true);
    const reply = answers.find(([r]) => r.test(text))?.[1] ?? "Good question! The best next step is a quick chat. Use the contact page or WhatsApp and Hamayun will reply personally.";
    setTimeout(() => { setTyping(false); setMsgs((m) => [...m, { me: false, text: reply }]); }, 900);
  };
  return (
    <div className="flex h-[420px] flex-col rounded-2xl border border-line bg-surface">
      <div ref={box} className="flex-1 space-y-3 overflow-y-auto p-5 text-sm">
        {msgs.map((m, i) => <div key={i} className={`max-w-[85%] animate-rise rounded-2xl px-4 py-2.5 leading-relaxed ${m.me ? "ml-auto rounded-br-md bg-ink text-bg" : "rounded-bl-md bg-raised"}`}>{m.text}</div>)}
        {typing && <div className="flex w-16 gap-1.5 rounded-2xl rounded-bl-md bg-raised px-4 py-3.5">{[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted" style={{ animationDelay: `${i * 150}ms` }} />)}</div>}
      </div>
      <div className="flex gap-2 overflow-x-auto px-4 pb-2">
        {["Do you build Shopify stores?", "How much does an app cost?", "Can you add AI to my site?"].map((s) => <button key={s} type="button" onClick={() => send(s)} className="chip shrink-0 hover:text-ink">{s}</button>)}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-line p-3">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about services, pricing, timelines…" className="input !border-transparent !bg-raised" aria-label="Message" />
        <button className="btn-brand !px-5">Send</button>
      </form>
    </div>
  );
}

/* ---------- UI kit ---------- */
export function UIKitDemo() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(false), 2500); return () => clearTimeout(t); }, [toast]);
  const tabs = ["Overview", "Specs", "Reviews"];
  const faqs = [["Do you sign NDAs?", "Yes. Many of our projects are under NDA, and we’re happy to sign yours before you share details."], ["Who owns the code?", "You do. Full source code and documentation are handed over at the end."], ["Do you offer support?", "Yes, ongoing monthly care plans or ad-hoc fixes, whatever suits you."]];
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-line p-4">
        <div className="relative flex rounded-full bg-raised p-1" role="tablist">
          <span className="absolute inset-y-1 rounded-full bg-surface shadow transition-all duration-300" style={{ width: `calc((100% - 8px) / 3)`, left: `calc(4px + ${tab} * (100% - 8px) / 3)` }} />
          {tabs.map((t, i) => <button key={t} type="button" role="tab" aria-selected={tab === i} onClick={() => setTab(i)} className={`relative z-10 flex-1 py-2 text-sm font-medium ${tab === i ? "text-ink" : "text-muted"}`}>{t}</button>)}
        </div>
        <p key={tab} className="mt-4 animate-rise px-1 text-sm leading-relaxed text-muted">{["Smooth animated tabs with full keyboard and screen-reader support.", "Built with semantic HTML, ARIA roles and Tailwind CSS. No heavy UI library needed.", "“Pixel-perfect and quick.” Every component matches the design file exactly."][tab]}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={() => setModal(true)} className="btn-primary !py-2.5">Open modal</button>
          <button type="button" onClick={() => setToast(true)} className="btn-ghost !py-2.5">Show toast</button>
        </div>
      </div>
      <div className="divide-y divide-line rounded-2xl border border-line">
        {faqs.map(([q, a], i) => (
          <div key={q}>
            <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold">{q}<Chevron className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} /></button>
            <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><p className="overflow-hidden px-5 text-sm leading-relaxed text-muted"><span className="block pb-4">{a}</span></p></div>
          </div>
        ))}
      </div>
      {modal && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setModal(false)} role="dialog" aria-modal="true" aria-label="Example modal">
          <div className="card w-full max-w-md animate-rise p-7" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between"><p className="font-display text-2xl font-semibold">Accessible modal</p><button type="button" aria-label="Close" onClick={() => setModal(false)}><Close /></button></div>
            <p className="mt-3 text-sm leading-relaxed text-muted">Click outside or press the close button. Focus styles, ARIA attributes and smooth motion are all built in.</p>
            <button type="button" onClick={() => setModal(false)} className="btn-brand mt-6">Got it</button>
          </div>
        </div>
      )}
      <div className={`fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 transition-all duration-300 ${toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`} role="status">
        <div className="flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm text-bg shadow-2xl"><Check className="h-4 w-4 text-brand" /> Changes saved successfully</div>
      </div>
    </div>
  );
}

/* ---------- RTL / i18n ---------- */
const copy = {
  en: { dir: "ltr", title: "Build your online store", text: "Fast, secure and easy to manage. Launch in weeks, not months.", cta: "Get started", nav: ["Home", "Products", "Pricing", "Contact"] },
  ar: { dir: "rtl", title: "أنشئ متجرك الإلكتروني", text: "سريع وآمن وسهل الإدارة. أطلق متجرك خلال أسابيع وليس أشهر.", cta: "ابدأ الآن", nav: ["الرئيسية", "المنتجات", "الأسعار", "اتصل بنا"] },
} as const;
export function RtlDemo() {
  const [lang, setLang] = useState<keyof typeof copy>("en");
  const c = copy[lang];
  return (
    <div>
      <div className="flex gap-2">
        {(["en", "ar"] as const).map((l) => <button key={l} type="button" onClick={() => setLang(l)} className={`rounded-full px-4 py-2 text-sm font-medium ${lang === l ? "bg-ink text-bg" : "border border-line text-muted"}`}>{l === "en" ? "English" : "العربية"}</button>)}
      </div>
      <div dir={c.dir} lang={lang} key={lang} className="mt-5 animate-rise overflow-hidden rounded-2xl border border-line">
        <div className="flex items-center justify-between border-b border-line bg-raised px-5 py-3 text-sm">
          <b>Shop</b><span className="flex gap-4 text-muted">{c.nav.map((n) => <span key={n}>{n}</span>)}</span>
        </div>
        <div className="p-8">
          <p className="font-display text-3xl font-semibold">{c.title}</p>
          <p className="mt-3 max-w-md text-muted">{c.text}</p>
          <button type="button" className="btn-brand mt-6">{c.cta}</button>
        </div>
      </div>
    </div>
  );
}
