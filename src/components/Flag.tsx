/** Small inline SVG flags (emoji flags don't render on Windows). */
const flags: Record<string, React.ReactNode> = {
  US: (
    <>
      <rect width="30" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#b22234" />)}
      <rect width="13" height={(20 * 7) / 13} fill="#3c3b6e" />
    </>
  ),
  UK: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#c8102e" strokeWidth="1.5" />
      <path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0V20M0 10H30" stroke="#c8102e" strokeWidth="3.5" />
    </>
  ),
  CA: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="7.5" height="20" fill="#d52b1e" />
      <rect x="22.5" width="7.5" height="20" fill="#d52b1e" />
      <path d="M15 4l1.2 2.6 2.3-.8-.9 3.6 2-1 .6 1.5 2.2-.4-1.6 2.3 1 .7-3.8 2 .3 2.2H15.5V18h-1v-2.3H11.7l.3-2.2-3.8-2 1-.7-1.6-2.3 2.2.4.6-1.5 2 1-.9-3.6 2.3.8z" fill="#d52b1e" />
    </>
  ),
  DE: (
    <>
      <rect width="30" height="7" fill="#000" />
      <rect y="6.67" width="30" height="7" fill="#dd0000" />
      <rect y="13.33" width="30" height="6.67" fill="#ffce00" />
    </>
  ),
  AE: (
    <>
      <rect width="30" height="7" fill="#00732f" />
      <rect y="6.67" width="30" height="7" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <rect width="8" height="20" fill="#ff0000" />
    </>
  ),
};

const names: Record<string, string> = { US: "United States", UK: "United Kingdom", CA: "Canada", DE: "Germany", AE: "United Arab Emirates" };

export default function Flag({ code, className = "" }: { code: string; className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} role="img" aria-label={names[code] ?? code}>
      <title>{names[code] ?? code}</title>
      {flags[code]}
    </svg>
  );
}
