"use client";

import { useState } from "react";
import { Wordmark } from "../Logo";

const tabs = [
  { id: "dash", label: "Dashboard", note: "Admin dashboards & reporting" },
  { id: "book", label: "Bookings", note: "Booking & scheduling systems" },
  { id: "shop", label: "Store", note: "E-commerce & checkout" },
  { id: "ai", label: "AI Assistant", note: "AI features inside your product" },
] as const;
type TabId = (typeof tabs)[number]["id"];

const bars = [42, 64, 50, 78, 70, 92, 61, 84, 100, 74, 88, 108];

function Dashboard() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-[auto_1fr] gap-3 md:gap-4">
      {[["Bookings today", "128", "+12%"], ["Revenue", "€14,320", "+8.4%"], ["Uptime", "99.98%", "30 days"]].map(([k, v, d]) => (
        <div key={k} className="rounded-2xl border border-line bg-surface p-3 md:p-4">
          <p className="truncate text-[11px] text-muted">{k}</p>
          <p className="mt-1 font-display text-lg font-semibold md:text-2xl">{v}</p>
          <p className="mt-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">{d}</p>
        </div>
      ))}
      <div className="col-span-3 flex items-end gap-1.5 rounded-2xl border border-line bg-surface p-4 md:col-span-2 md:gap-2.5">
        {bars.map((h, i) => (
          <div key={i} className={`flex-1 origin-bottom animate-rise rounded-t-md ${i % 3 === 2 ? "bg-brand" : "bg-ink"}`} style={{ height: `${h}%`, animationDelay: `${i * 40}ms` }} />
        ))}
      </div>
      <div className="hidden rounded-2xl border border-line bg-surface p-4 text-xs md:block">
        <p className="font-semibold">Recent orders</p>
        {[["#1042", "Paid"], ["#1041", "Shipped"], ["#1040", "Paid"], ["#1039", "Refunded"], ["#1038", "Paid"]].map(([id, s]) => (
          <div key={id} className="flex justify-between border-b border-line py-2.5 last:border-0">
            <span className="font-mono text-muted">{id}</span>
            <span className={s === "Refunded" ? "text-rose-500" : s === "Shipped" ? "text-sky-500" : "text-emerald-600 dark:text-emerald-400"}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bookings() {
  const [picked, setPicked] = useState("11:00");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="grid h-full gap-4 md:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-line bg-surface p-4">
        <div className="flex items-center justify-between"><p className="font-semibold">November 2026</p><p className="text-xs text-muted">Pick a date</p></div>
        <div className="mt-3 grid grid-cols-7 gap-1.5 text-center text-xs">
          {days.map((d) => <span key={d} className="py-1 text-muted">{d}</span>)}
          {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
            <span key={d} className={`rounded-lg py-2 ${d === 12 ? "bg-ink font-semibold text-bg" : d % 7 === 0 || d % 7 === 6 ? "text-muted/50" : "hover:bg-raised"}`}>{d}</span>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-line bg-surface p-4">
        <p className="font-semibold">Thu, 12 Nov</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {["09:00", "10:00", "11:00", "13:30", "15:00", "16:30"].map((t) => (
            <button key={t} type="button" onClick={() => setPicked(t)} className={`rounded-xl border py-2.5 text-sm font-medium transition ${picked === t ? "border-brand bg-brand text-brand-ink" : "border-line hover:border-ink/40"}`}>{t}</button>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-raised p-3 text-xs text-muted">Selected: <b className="text-ink">12 Nov · {picked}</b></div>
      </div>
    </div>
  );
}

function Store() {
  const [qty, setQty] = useState(1);
  return (
    <div className="grid h-full gap-4 md:grid-cols-[1fr_1fr]">
      <div className="grid grid-cols-2 gap-3">
        {[["Desk Lamp", "€59", "#f5d76e"], ["Ceramic Mug", "€18", "#d6d3d1"], ["Notebook", "€12", "#a7f3d0"], ["Backpack", "€89", "#c7d2fe"]].map(([n, p, c]) => (
          <div key={n} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="h-14 md:h-20" style={{ background: c }} />
            <div className="p-2.5 text-xs"><p className="font-semibold">{n}</p><p className="text-muted">{p}</p></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col rounded-2xl border border-line bg-surface p-4 text-sm">
        <p className="font-semibold">Your cart</p>
        <div className="mt-3 flex items-center justify-between border-b border-line pb-3">
          <span>Desk Lamp</span>
          <span className="flex items-center gap-2">
            <button type="button" aria-label="Decrease" onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-7 w-7 rounded-lg border border-line">−</button>
            <span className="w-4 text-center tabular-nums">{qty}</span>
            <button type="button" aria-label="Increase" onClick={() => setQty((q) => q + 1)} className="h-7 w-7 rounded-lg border border-line">+</button>
          </span>
        </div>
        <div className="mt-3 flex justify-between text-muted"><span>Shipping</span><span>Free</span></div>
        <div className="mt-1 flex justify-between font-semibold"><span>Total</span><span className="tabular-nums">€{qty * 59}</span></div>
        <button type="button" className="mt-auto rounded-xl bg-ink py-3 font-semibold text-bg">Checkout</button>
      </div>
    </div>
  );
}

function Assistant() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-4 text-sm">
      <div className="space-y-3">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-bg">Can you summarise last week’s support tickets?</div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-raised px-4 py-2.5">
          <p>Sure. 48 tickets, 92% resolved. The top issue was <b>password resets (14)</b>. I’ve drafted a help-centre article to reduce these.</p>
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-bg">Great, publish it as a draft.</div>
        <div className="flex max-w-[60%] items-center gap-1.5 rounded-2xl rounded-bl-md bg-raised px-4 py-3">
          {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted" style={{ animationDelay: `${i * 150}ms` }} />)}
        </div>
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-xl border border-line px-3 py-2.5 text-muted">Ask anything…<span className="ml-auto rounded-lg bg-brand px-2 py-1 text-xs font-semibold text-brand-ink">Send</span></div>
    </div>
  );
}

export default function ProductShowcase() {
  const [tab, setTab] = useState<TabId>("dash");
  const active = tabs.find((t) => t.id === tab)!;
  return (
    <div className="relative">
      <div className="mb-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Product examples">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${tab === t.id ? "bg-ink text-bg shadow-lg" : "border border-line text-muted hover:text-ink"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-line bg-raised shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="mx-auto hidden rounded-lg bg-raised px-4 py-1 font-mono text-[11px] text-muted sm:block">app.yourbusiness.com/{active.label.toLowerCase().replace(" ", "-")}</span>
        </div>
        <div className="grid md:grid-cols-[200px_1fr]">
          <aside className="hidden flex-col gap-1 bg-[#0B0B0D] p-5 text-sm text-white/55 md:flex">
            <Wordmark className="mb-6 text-lg text-white" />
            {tabs.map((t) => (
              <button key={t.id} type="button" onClick={() => setTab(t.id)} className={`rounded-lg px-3 py-2 text-left transition ${tab === t.id ? "bg-white/10 text-white" : "hover:text-white"}`}>{t.label}</button>
            ))}
            <div className="mt-auto rounded-xl border border-white/10 p-3 text-[11px] leading-relaxed">Built with Laravel, Vue &amp; Python</div>
          </aside>
          <div key={tab} className="h-[360px] animate-rise p-4 md:h-[420px] md:p-6">
            {tab === "dash" && <Dashboard />}
            {tab === "book" && <Bookings />}
            {tab === "shop" && <Store />}
            {tab === "ai" && <Assistant />}
          </div>
        </div>
      </div>
      <p className="mt-5 text-center text-sm text-muted">Interactive preview: {active.note}. Click around.</p>
    </div>
  );
}
