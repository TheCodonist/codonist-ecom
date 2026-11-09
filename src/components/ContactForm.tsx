"use client";

import { useState } from "react";
import { services, site } from "@/data/site";
import { Arrow, Check } from "./icons";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
const budgets = ["< $1k", "$1k – $3k", "$3k – $8k", "$8k+", "Not sure yet"];

export default function ContactForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (message.length < 10) next.message = "A sentence or two about the project helps.";
    setErrors(next);
    if (Object.keys(next).length) return;
    // No backend yet: hand the enquiry to the visitor's email app, pre-filled.
    const body = `Name: ${name}\nEmail: ${email}\nServices: ${picked.join(", ") || "-"}\nBudget: ${budget || "-"}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent)
    return (
      <div className="card grid place-items-center p-14 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-ink"><Check className="h-6 w-6" /></span>
        <h3 className="mt-6 font-display text-3xl font-semibold">Thanks, almost there</h3>
        <p className="mt-2 max-w-sm text-muted">Your email app should have opened with your message. Hit send and we’ll reply within one business day.</p>
        <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-6">Edit message</button>
      </div>
    );

  return (
    <form onSubmit={submit} noValidate className="card space-y-7 p-6 md:p-10">
      <fieldset>
        <legend className="text-sm font-semibold">What can we help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {services.map((s) => (
            <button key={s.slug} type="button" aria-pressed={picked.includes(s.title)} onClick={() => toggle(s.title)} className={`rounded-full border px-4 py-2 text-sm transition ${picked.includes(s.title) ? "border-brand bg-brand font-semibold text-brand-ink" : "border-line text-muted hover:border-ink/40 hover:text-ink"}`}>
              {s.title}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Your name
          <input name="name" autoComplete="name" className="input mt-2" aria-invalid={!!errors.name} />
          {errors.name && <span className="mt-1.5 block text-xs font-normal text-rose-500">{errors.name}</span>}
        </label>
        <label className="block text-sm font-semibold">Email
          <input name="email" type="email" autoComplete="email" className="input mt-2" aria-invalid={!!errors.email} />
          {errors.email && <span className="mt-1.5 block text-xs font-normal text-rose-500">{errors.email}</span>}
        </label>
      </div>
      <fieldset>
        <legend className="text-sm font-semibold">Budget</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button key={b} type="button" aria-pressed={budget === b} onClick={() => setBudget(b)} className={`rounded-full border px-4 py-2 text-sm transition ${budget === b ? "border-ink bg-ink text-bg" : "border-line text-muted hover:text-ink"}`}>{b}</button>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm font-semibold">Tell us about your project
        <textarea name="message" rows={5} className="input mt-2 resize-none" placeholder="Goals, timeline, links to designs…" aria-invalid={!!errors.message} />
        {errors.message && <span className="mt-1.5 block text-xs font-normal text-rose-500">{errors.message}</span>}
      </label>
      <button type="submit" className="btn-brand w-full !py-4 text-[15px] sm:w-auto">Send enquiry <Arrow /></button>
    </form>
  );
}
