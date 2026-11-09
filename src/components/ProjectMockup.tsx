import type { Project } from "@/data/site";

/**
 * Illustrated UI previews for projects whose live sites are offline.
 * Pure SVG, so it scales cleanly in any card size.
 */

const W = 640;
const H = 400;
const font = "Inter, system-ui, sans-serif";

function Browser({ url, children, dark = false }: { url: string; children: React.ReactNode; dark?: boolean }) {
  const bg = dark ? "#111318" : "#ffffff";
  const bar = dark ? "#1b1e25" : "#f1f1ef";
  return (
    <g>
      <rect x="40" y="56" width="560" height="380" rx="14" fill={bg} />
      <rect x="40" y="56" width="560" height="30" rx="14" fill={bar} />
      <rect x="40" y="72" width="560" height="14" fill={bar} />
      <circle cx="60" cy="71" r="4.5" fill="#ff5f57" />
      <circle cx="75" cy="71" r="4.5" fill="#febc2e" />
      <circle cx="90" cy="71" r="4.5" fill="#28c840" />
      <rect x="230" y="63" width="180" height="16" rx="8" fill={dark ? "#262a33" : "#e4e3de"} />
      <text x="320" y="74.5" textAnchor="middle" fontSize="8" fill={dark ? "#8b8f99" : "#7a7a74"} fontFamily={font}>{url}</text>
      <svg x="40" y="86" width="560" height="350" viewBox="0 0 560 350">{children}</svg>
    </g>
  );
}

function Phone({ x, children }: { x: number; children: React.ReactNode }) {
  return (
    <g>
      <rect x={x} y="40" width="190" height="380" rx="28" fill="#0c0c0e" />
      <rect x={x + 8} y="48" width="174" height="364" rx="21" fill="#ffffff" />
      <rect x={x + 70} y="55" width="50" height="11" rx="5.5" fill="#0c0c0e" />
      <svg x={x + 8} y="70" width="174" height="342" viewBox="0 0 174 342">{children}</svg>
    </g>
  );
}

const T = ({ x, y, s = 10, w = 600, c = "#111", a = "start", children }: { x: number; y: number; s?: number; w?: number; c?: string; a?: "start" | "middle" | "end"; children: React.ReactNode }) => (
  <text x={x} y={y} fontSize={s} fontWeight={w} fill={c} textAnchor={a} fontFamily={font}>{children}</text>
);
const Bar = ({ x, y, w, h = 6, c = "#e7e6e1", r = 3 }: { x: number; y: number; w: number; h?: number; c?: string; r?: number }) => <rect x={x} y={y} width={w} height={h} rx={r} fill={c} />;

function Jets(a: string) {
  return (
    <Browser url="imperiumjets.com">
      <rect width="560" height="350" fill="#0d1b2e" />
      <path d="M0 230 Q 280 170 560 210 L560 350 L0 350Z" fill="#132a46" />
      <g transform="translate(330 70) rotate(-8)">
        <path d="M0 30 L150 22 Q175 22 182 30 Q175 38 150 38 L0 34Z" fill="#e9edf3" />
        <path d="M70 26 L40 -8 L58 -8 L105 25Z" fill="#cfd6e0" />
        <path d="M80 36 L50 70 L68 70 L110 37Z" fill="#cfd6e0" />
        <path d="M2 30 L-8 8 L4 8 L18 29Z" fill="#cfd6e0" />
        {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={100 + i * 10} y="27" width="5" height="4" rx="1" fill="#3b4b63" />)}
      </g>
      <T x={28} y={36} s={11} w={700} c={a}>IMPERIUM JETS</T>
      {["Fleet", "Charter", "Empty legs", "News"].map((n, i) => <T key={n} x={300 + i * 62} y={36} s={9} w={500} c="#c9d2df">{n}</T>)}
      <T x={28} y={98} s={26} w={700} c="#fff">Fly private,</T>
      <T x={28} y={128} s={26} w={700} c="#fff">on your schedule.</T>
      <rect x="28" y="250" width="504" height="64" rx="12" fill="#fff" />
      {[["From", "Tel Aviv (TLV)"], ["To", "New York (TEB)"], ["Date", "12 Mar"], ["Passengers", "6"]].map(([l, v], i) => (
        <g key={l}>
          <T x={46 + i * 105} y={275} s={8} w={500} c="#8a8f99">{l}</T>
          <T x={46 + i * 105} y={293} s={11} w={700} c="#111">{v}</T>
        </g>
      ))}
      <rect x="452" y="262" width="68" height="40" rx="9" fill={a} />
      <T x={486} y={286} s={10} w={700} c="#111" a="middle">Search</T>
    </Browser>
  );
}

function SaasPwa(a: string) {
  return (
    <Browser url="app.atlantesys.com" dark>
      <rect width="120" height="350" fill="#16181e" />
      <T x={18} y={30} s={11} w={700} c={a}>atlantesys</T>
      {["Dashboard", "Assets", "Reports", "Team", "Settings"].map((n, i) => (
        <g key={n}>
          {i === 0 && <rect x="10" y={48 + i * 26} width="100" height="20" rx="6" fill={a} opacity="0.18" />}
          <T x={22} y={62 + i * 26} s={9} w={500} c={i === 0 ? "#fff" : "#8b8f99"}>{n}</T>
        </g>
      ))}
      <T x={140} y={34} s={14} w={700} c="#fff">Good morning, Sarah</T>
      {[["Active assets", "1,284"], ["Open tasks", "37"], ["Uptime", "99.9%"]].map(([l, v], i) => (
        <g key={l}>
          <rect x={140 + i * 134} y="50" width="122" height="62" rx="10" fill="#1d2028" />
          <T x={154 + i * 134} y={72} s={8} w={500} c="#8b8f99">{l}</T>
          <T x={154 + i * 134} y={96} s={18} w={700} c="#fff">{v}</T>
        </g>
      ))}
      <rect x="140" y="126" width="390" height="190" rx="12" fill="#1d2028" />
      <T x={156} y={148} s={9} w={600} c="#c9ccd3">Activity this month</T>
      <polyline points="160,280 200,250 240,262 280,220 320,232 360,190 400,205 440,170 480,180 510,150" fill="none" stroke={a} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="160,280 200,250 240,262 280,220 320,232 360,190 400,205 440,170 480,180 510,150 510,300 160,300" fill={a} opacity="0.12" />
    </Browser>
  );
}

function GuestApp(a: string) {
  return (
    <g>
      <Phone x={120}>
        <rect width="174" height="342" fill="#faf8f5" />
        <T x={14} y={26} s={13} w={700}>Welcome, Dana</T>
        <T x={14} y={42} s={8} w={500} c="#8a8a85">Your stay · 3 nights</T>
        <rect x="14" y="54" width="146" height="70" rx="12" fill={a} />
        <T x={26} y={78} s={9} w={600} c="#fff">Check-in</T>
        <T x={26} y={100} s={16} w={700} c="#fff">Fri 14 Jun</T>
        <T x={14} y={146} s={10} w={700}>June</T>
        {Array.from({ length: 21 }).map((_, i) => (
          <g key={i}>
            <rect x={14 + (i % 7) * 21} y={156 + Math.floor(i / 7) * 22} width="17" height="17" rx="5" fill={[12, 13, 14].includes(i) ? a : "#ece9e3"} />
            <T x={22.5 + (i % 7) * 21} y={168 + Math.floor(i / 7) * 22} s={7} w={600} c={[12, 13, 14].includes(i) ? "#fff" : "#555"} a="middle">{i + 1}</T>
          </g>
        ))}
        <rect x="14" y="236" width="146" height="34" rx="10" fill="#111" />
        <T x={87} y={257} s={9} w={700} c="#fff" a="middle">Confirm booking</T>
      </Phone>
      <Phone x={330}>
        <rect width="174" height="342" fill="#ffffff" />
        <circle cx="87" cy="70" r="34" fill={a} opacity="0.15" />
        <circle cx="87" cy="70" r="18" fill={a} />
        <T x={87} y={136} s={13} w={700} a="middle">Your guest pass</T>
        <T x={87} y={152} s={8} w={500} c="#8a8a85" a="middle">Step 2 of 3</T>
        {[0, 1, 2].map((i) => <rect key={i} x={50 + i * 26} y="162" width="22" height="4" rx="2" fill={i < 2 ? a : "#e5e5e5"} />)}
        {["Full name", "Phone", "Arrival time"].map((l, i) => (
          <g key={l}>
            <T x={14} y={192 + i * 38} s={7} w={600} c="#8a8a85">{l}</T>
            <rect x="14" y={197 + i * 38} width="146" height="22" rx="7" fill="#f3f2ef" />
          </g>
        ))}
      </Phone>
    </g>
  );
}

function Restaurant(a: string) {
  return (
    <Browser url="banterroom.ca">
      <rect width="560" height="350" fill="#1a120c" />
      <rect x="290" y="0" width="270" height="350" fill="#2a1c12" />
      {[0, 1, 2].map((i) => <circle key={i} cx={360 + i * 70} cy={110 + (i % 2) * 70} r="34" fill={a} opacity={0.25 + i * 0.2} />)}
      <circle cx="430" cy="250" r="56" fill="#3a2718" />
      <circle cx="430" cy="250" r="44" fill="#f4e9da" />
      <circle cx="418" cy="242" r="12" fill={a} />
      <circle cx="444" cy="258" r="9" fill="#7a9a4a" />
      <T x={28} y={34} s={12} w={800} c={a}>BANTER ROOM</T>
      <T x={28} y={92} s={24} w={700} c="#fff">Good food.</T>
      <T x={28} y={120} s={24} w={700} c="#fff">Better banter.</T>
      <T x={28} y={156} s={10} w={600} c={a}>TODAY’S SPECIALS</T>
      {[["Smoked brisket sandwich", "$18"], ["Truffle fries", "$9"], ["Maple old fashioned", "$14"]].map(([n, p], i) => (
        <g key={n}>
          <T x={28} y={180 + i * 22} s={10} w={500} c="#e9dccb">{n}</T>
          <T x={262} y={180 + i * 22} s={10} w={700} c="#fff" a="end">{p}</T>
        </g>
      ))}
      <rect x="28" y="262" width="130" height="36" rx="18" fill={a} />
      <T x={93} y={284} s={10} w={700} c="#1a120c" a="middle">Reserve a table</T>
    </Browser>
  );
}

function AppFrontend(a: string) {
  return (
    <Browser url="owlish.app">
      <rect width="560" height="350" fill="#fbfaf7" />
      <T x={28} y={34} s={13} w={800} c="#111">owlish</T>
      <rect x="430" y="20" width="102" height="22" rx="11" fill={a} />
      <T x={481} y={35} s={8} w={700} c="#fff" a="middle">Get the app</T>
      <T x={28} y={92} s={24} w={700}>Peace of mind,</T>
      <T x={28} y={120} s={24} w={700}>night after night.</T>
      <Bar x={28} y={138} w={220} />
      <Bar x={28} y={150} w={180} />
      <rect x="28" y="172" width="110" height="32" rx="16" fill="#111" />
      <T x={83} y={192} s={9} w={700} c="#fff" a="middle">Shop now</T>
      <rect x="330" y="60" width="200" height="250" rx="22" fill={a} opacity="0.14" />
      <rect x="370" y="80" width="120" height="220" rx="18" fill="#111" />
      <rect x="378" y="88" width="104" height="204" rx="12" fill="#fff" />
      <circle cx="430" cy="150" r="30" fill="none" stroke={a} strokeWidth="6" strokeDasharray="150 40" />
      <T x={430} y={154} s={12} w={800} a="middle">98%</T>
      <Bar x={392} y={200} w={76} c="#ecebe6" />
      <Bar x={392} y={212} w={56} c="#ecebe6" />
      <rect x="392" y="236" width="76" height="30" rx="8" fill={a} opacity="0.2" />
      {[0, 1, 2].map((i) => <rect key={i} x={28 + i * 92} y="240" width="84" height="70" rx="10" fill="#f0eee8" />)}
    </Browser>
  );
}

function News(a: string) {
  return (
    <Browser url="belfasteye.com">
      <rect width="560" height="350" fill="#fff" />
      <rect width="560" height="44" fill="#111" />
      <T x={28} y={28} s={13} w={800} c="#fff">BELFAST EYE</T>
      {["Home", "News", "Articles", "Contact"].map((n, i) => <T key={n} x={320 + i * 60} y={27} s={9} w={500} c="#bbb">{n}</T>)}
      <rect x="28" y="62" width="320" height="180" rx="10" fill={a} opacity="0.85" />
      <T x={44} y={210} s={18} w={700} c="#fff">Latest stories</T>
      <T x={44} y={228} s={9} w={500} c="#fff">News and opinion from Northern Ireland</T>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="366" y={62 + i * 62} width="70" height="52" rx="8" fill="#ececec" />
          <Bar x={446} y={72 + i * 62} w={86} c="#d9d9d9" />
          <Bar x={446} y={84 + i * 62} w={64} c="#e8e8e8" />
        </g>
      ))}
      {[0, 1, 2, 3].map((i) => <rect key={i} x={28 + i * 128} y="262" width="118" height="60" rx="8" fill="#f2f2f2" />)}
    </Browser>
  );
}

function VirtualTour(a: string) {
  return (
    <Browser url="positivity.it/virtual-tour">
      <rect width="560" height="350" fill="#2b2118" />
      <path d="M0 0 L560 0 L560 200 L0 200Z" fill="#d8c3a5" />
      <path d="M0 200 L560 200 L560 350 L0 350Z" fill="#8b6b4a" />
      <rect x="60" y="60" width="120" height="120" fill="#a9c7d9" />
      <rect x="118" y="60" width="4" height="120" fill="#f3ead9" />
      <rect x="60" y="118" width="120" height="4" fill="#f3ead9" />
      <rect x="260" y="130" width="180" height="70" rx="8" fill="#5e4632" />
      <rect x="250" y="190" width="200" height="16" rx="4" fill="#4a3727" />
      <circle cx="350" cy="250" r="22" fill="#fff" opacity="0.9" />
      <circle cx="350" cy="250" r="8" fill={a} />
      <circle cx="480" cy="230" r="14" fill="#fff" opacity="0.7" />
      <rect x="20" y="20" width="150" height="30" rx="15" fill="#000" opacity="0.55" />
      <T x={95} y={39} s={9} w={700} c="#fff" a="middle">360° Virtual tour</T>
      <rect x="390" y="300" width="150" height="34" rx="17" fill="#000" opacity="0.6" />
      {["◀", "⤢", "▶"].map((g, i) => <T key={g} x={420 + i * 45} y={322} s={12} w={700} c="#fff" a="middle">{g}</T>)}
    </Browser>
  );
}

function FiveSites(a: string) {
  const sites = ["Construction", "Equipment", "Renovation", "Landscaping", "Contractors"];
  return (
    <g>
      {sites.map((n, i) => {
        const x = 30 + (i % 3) * 200;
        const y = i < 3 ? 40 : 230;
        const ox = i >= 3 ? 100 : 0;
        return (
          <g key={n} transform={`translate(${x + ox} ${y})`}>
            <rect width="180" height="170" rx="10" fill="#fff" />
            <rect width="180" height="18" rx="10" fill="#efefec" />
            <rect y="10" width="180" height="8" fill="#efefec" />
            <rect x="10" y="26" width="160" height="72" rx="6" fill={a} opacity={0.35 + i * 0.12} />
            <T x={18} y={66} s={12} w={800} c="#fff">{n}</T>
            <Bar x={10} y={110} w={120} c="#e3e2dd" />
            <Bar x={10} y={122} w={90} c="#eceae5" />
            <rect x="10" y="138" width="64" height="20" rx="10" fill="#111" />
          </g>
        );
      })}
    </g>
  );
}

function Finance(a: string) {
  return (
    <Browser url="marketdata.example" dark>
      <rect width="560" height="350" fill="#0c0f14" />
      <T x={24} y={30} s={11} w={700} c="#fff">AAPL · Apple Inc.</T>
      <T x={24} y={62} s={24} w={700} c="#fff">$228.41</T>
      <T x={140} y={62} s={11} w={700} c={a}>+1.84%</T>
      {["1D", "1W", "1M", "1Y", "5Y"].map((p, i) => (
        <g key={p}>
          <rect x={360 + i * 36} y="18" width="30" height="18" rx="5" fill={i === 3 ? a : "#1a1f27"} />
          <T x={375 + i * 36} y={30} s={8} w={700} c={i === 3 ? "#0c0f14" : "#8b93a1"} a="middle">{p}</T>
        </g>
      ))}
      <polyline points="24,250 70,236 110,244 150,210 190,222 230,190 270,200 310,160 350,176 390,140 430,150 470,118 536,96" fill="none" stroke={a} strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="24,250 70,236 110,244 150,210 190,222 230,190 270,200 310,160 350,176 390,140 430,150 470,118 536,96 536,270 24,270" fill={a} opacity="0.1" />
      {[0, 1, 2, 3].map((i) => <line key={i} x1="24" x2="536" y1={100 + i * 50} y2={100 + i * 50} stroke="#1a1f27" />)}
      {[["Open", "226.10"], ["High", "229.30"], ["Low", "225.42"], ["Volume", "48.2M"]].map(([l, v], i) => (
        <g key={l}>
          <T x={24 + i * 130} y={300} s={8} w={500} c="#6b7380">{l}</T>
          <T x={24 + i * 130} y={318} s={12} w={700} c="#fff">{v}</T>
        </g>
      ))}
    </Browser>
  );
}

function Checkout(a: string) {
  return (
    <Browser url="evolurise.com/checkout">
      <rect width="560" height="350" fill="#f7f7f5" />
      <T x={28} y={34} s={14} w={700}>Checkout</T>
      {["Email", "Full name", "Card number"].map((l, i) => (
        <g key={l}>
          <T x={28} y={62 + i * 50} s={8} w={600} c="#7a7a74">{l}</T>
          <rect x="28" y={68 + i * 50} width="290" height="28" rx="7" fill="#fff" stroke="#e2e1dc" />
        </g>
      ))}
      <rect x="28" y="230" width="290" height="38" rx="9" fill={a} />
      <T x={173} y={253} s={11} w={700} c="#fff" a="middle">Pay $149.00</T>
      <rect x="340" y="40" width="192" height="240" rx="12" fill="#fff" />
      <T x={356} y={64} s={10} w={700}>Order summary</T>
      {[["Pro course", "$129"], ["Bonus pack", "$20"]].map(([n, p], i) => (
        <g key={n}>
          <rect x="356" y={78 + i * 44} width="34" height="34" rx="7" fill={a} opacity={0.25 + i * 0.25} />
          <T x={398} y={98 + i * 44} s={9} w={600}>{n}</T>
          <T x={516} y={98 + i * 44} s={9} w={700} a="end">{p}</T>
        </g>
      ))}
      <line x1="356" x2="516" y1="180" y2="180" stroke="#eee" />
      <T x={356} y={204} s={10} w={700}>Total</T>
      <T x={516} y={204} s={12} w={800} a="end">$149.00</T>
      <rect x="356" y="222" width="160" height="22" rx="6" fill="#f1f0ec" />
      <T x={364} y={237} s={8} w={600} c="#7a7a74">Coupon applied: SAVE10</T>
    </Browser>
  );
}

function Hotel(a: string) {
  return (
    <Browser url="aliahotel.com/rooms">
      <rect width="560" height="350" fill="#fbf9f6" />
      <T x={28} y={34} s={13} w={800} c="#111">ALIA HOTEL</T>
      <rect x="28" y="50" width="504" height="40" rx="10" fill="#fff" stroke="#ebe8e2" />
      {[["Check-in", "14 Jun"], ["Check-out", "17 Jun"], ["Guests", "2 adults"]].map(([l, v], i) => (
        <g key={l}>
          <T x={44 + i * 140} y={66} s={7} w={600} c="#8a8a85">{l}</T>
          <T x={44 + i * 140} y={81} s={10} w={700}>{v}</T>
        </g>
      ))}
      <rect x="444" y="57" width="80" height="26" rx="8" fill={a} />
      <T x={484} y={74} s={9} w={700} c="#fff" a="middle">Check</T>
      {[["Deluxe Sea View", "$189"], ["Junior Suite", "$249"], ["Family Room", "$219"]].map(([n, p], i) => (
        <g key={n}>
          <rect x={28 + i * 172} y="108" width="160" height="210" rx="12" fill="#fff" stroke="#ebe8e2" />
          <rect x={28 + i * 172} y="108" width="160" height="100" rx="12" fill={a} opacity={0.3 + i * 0.2} />
          <T x={40 + i * 172} y={230} s={10} w={700}>{n}</T>
          <T x={40 + i * 172} y={248} s={8} w={500} c="#8a8a85">Breakfast included</T>
          <T x={40 + i * 172} y={296} s={13} w={800}>{p}</T>
          <rect x={120 + i * 172} y="282" width="56" height="22" rx="7" fill="#111" />
          <T x={148 + i * 172} y={297} s={8} w={700} c="#fff" a="middle">Book</T>
        </g>
      ))}
    </Browser>
  );
}

const scenes: Record<string, (accent: string) => React.ReactNode> = {
  "imperium-jets": Jets,
  atlantesys: SaasPwa,
  boda: GuestApp,
  "banter-room": Restaurant,
  owlish: AppFrontend,
  "belfast-eye": News,
  "positivity-srl": VirtualTour,
  "five-business-sites": FiveSites,
  "financial-data": Finance,
  "evolurise-checkout": Checkout,
  "alia-hotel": Hotel,
};

export function hasMockup(slug: string) {
  return slug in scenes;
}

export default function ProjectMockup({ project }: { project: Project }) {
  const scene = scenes[project.slug];
  if (!scene) return null;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMin meet" className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" role="img" aria-label={`Illustrated preview of ${project.name}`}>
      {scene(project.palette[1])}
    </svg>
  );
}
