"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light mode" : "Dark mode"}
      className={`relative inline-flex h-9 w-[68px] items-center rounded-full border border-line bg-raised p-1 transition-colors ${className}`}
    >
      <span
        className={`absolute top-1 h-7 w-7 rounded-full bg-surface shadow-sm ring-1 ring-line transition-transform duration-300 ${dark ? "translate-x-[30px]" : "translate-x-0"}`}
      />
      <span className="relative z-10 grid h-7 w-7 place-items-center text-ink"><Sun className="h-3.5 w-3.5" /></span>
      <span className="relative z-10 grid h-7 w-7 place-items-center text-ink"><Moon className="h-3.5 w-3.5" /></span>
    </button>
  );
}
