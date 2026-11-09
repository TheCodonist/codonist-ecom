"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/site";
import { Quote } from "./icons";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused]);
  const t = testimonials[i]!;
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Quote className="h-8 w-8 text-brand" />
      <blockquote key={i} className="mt-5 min-h-[150px] animate-rise font-display text-2xl font-light leading-snug tracking-tight md:text-[28px]">
        {t.quote}
      </blockquote>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm"><b>{t.name}</b> <span className="text-white/50">· {t.company}</span></p>
        <div className="flex gap-1.5" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, n) => (
            <button key={n} type="button" role="tab" aria-selected={n === i} aria-label={`Testimonial ${n + 1}`} onClick={() => setI(n)} className={`h-1.5 rounded-full transition-all ${n === i ? "w-7 bg-brand" : "w-1.5 bg-white/30 hover:bg-white/60"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
