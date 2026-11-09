import type { IconName } from "@/data/site";

type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };

export const Arrow = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Sun = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Moon = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
);
export const Menu = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className} aria-hidden><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className} aria-hidden><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Search = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const Check = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><path d="m5 12 5 5 9-10" /></svg>
);
export const Chevron = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><path d="m6 9 6 6 6-6" /></svg>
);
export const Quote = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden><path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H6.5A1.5 1.5 0 0 1 8 8.5V7Zm11 0h-4a3 3 0 0 0-3 3v7h7v-7h-3.5A1.5 1.5 0 0 1 19 8.5V7Z" /></svg>
);
export const Mail = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Chat = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} aria-hidden><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /></svg>
);

const service: Record<IconName, React.ReactElement> = {
  app: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M8 13h4M8 16h7" /></>,
  mobile: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></>,
  wordpress: <><circle cx="12" cy="12" r="9" /><path d="M5.5 8.5 9.5 19l2.5-7 2.5 7 4-10.5M8 8.5h3M13 8.5h3" /></>,
  cart: <><path d="M3 4h2.5l2.2 10.5a1.5 1.5 0 0 0 1.5 1.2h7.9a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.3" /><circle cx="10" cy="20" r="1.3" /><circle cx="17" cy="20" r="1.3" /></>,
  python: <><path d="M12 3c-4 0-4 1.7-4 3v2h4.5v1H6c-2 0-3 1.4-3 4s1 4 3 4h2v-2.5c0-1.4 1.2-2.5 2.5-2.5h4c1.4 0 2.5-1.1 2.5-2.5V6c0-1.6-1.6-3-6-3Z" /><path d="M12 21c4 0 4-1.7 4-3v-2h-4.5v-1H18c2 0 3-1.4 3-4s-1-4-3-4" /><circle cx="10" cy="5.8" r=".6" fill="currentColor" /></>,
  design: <><path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.6-.8 1.6-1.6 0-1.2-1-1.4-1-2.4 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.1-4-7.5-9-7.5Z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" /></>,
  wrench: <><path d="M14.7 6.3a4 4 0 0 0 5 5l-8.4 8.4a2.1 2.1 0 0 1-3-3l8.4-8.4a4 4 0 0 0-2-2Z" /><path d="M14.7 6.3 17 4" /></>,
};

export function ServiceIcon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return <svg {...base} className={className} aria-hidden>{service[name]}</svg>;
}
