export const site = {
  name: "Codonist",
  url: "https://www.codonist.com",
  founder: "Hamayun Aziz",
  tagline: "Software studio for web, mobile and AI products",
  description:
    "Codonist is a software studio led by Hamayun Aziz. We design, build and maintain web applications, mobile apps, websites, WordPress, WooCommerce and Shopify stores, and Python & AI tools for businesses worldwide.",
  email: "hamayunaziz@codonist.com",
  whatsapp: "https://wa.me/923433443837",
  phone: "+92 343 3443837",
  location: "Abbottabad, Pakistan",
  links: {
    upwork: "https://www.upwork.com/freelancers/~01420abf4e161e38e4",
    github: "https://github.com/TheCodonist",
    linkedin: "https://www.linkedin.com/in/hamayunaziz/",
    codepen: "https://codepen.io/codonist",
    youtube: "https://www.youtube.com/@thecodonist",
  },
  countries: ["USA", "United Kingdom", "Canada", "Germany", "Israel", "UAE", "Italy", "Belgium", "Australia"],
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  stack: string[];
  includes: string[];
  icon: IconName;
};

export type IconName =
  | "app"
  | "mobile"
  | "code"
  | "wordpress"
  | "cart"
  | "python"
  | "design"
  | "wrench";

export const services: Service[] = [
  {
    slug: "web-applications",
    title: "Web Applications",
    short: "Custom web apps, dashboards, portals and management systems.",
    long: "From booking systems to admin dashboards and client portals, we build reliable web applications with clean architecture, solid APIs and interfaces people enjoy using.",
    stack: ["Laravel", "Vue.js", "React", "Next.js", "Inertia.js", "MySQL"],
    includes: ["Admin dashboards & CRMs", "Booking & management systems", "REST APIs & integrations", "Auth, roles & permissions"],
    icon: "app",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    short: "Cross-platform mobile apps for iOS and Android.",
    long: "One codebase, two stores. We turn your web product or idea into a polished mobile app with offline support, push notifications and native device features.",
    stack: ["Capacitor", "Cordova", "Framework7", "Vue.js", "PWA"],
    includes: ["iOS & Android apps", "Progressive web apps", "API-connected mobile front-ends", "App store preparation"],
    icon: "mobile",
  },
  {
    slug: "websites",
    title: "Websites & Custom Code",
    short: "Fast, hand-coded business websites and landing pages.",
    long: "Marketing sites, landing pages and product launches built from scratch, with modern animation, strong SEO foundations and excellent performance scores.",
    stack: ["HTML", "Tailwind CSS", "JavaScript", "TypeScript", "Next.js"],
    includes: ["Business & landing websites", "Animated product launches", "SEO & performance", "Calculators & web tools"],
    icon: "code",
  },
  {
    slug: "wordpress",
    title: "WordPress & WooCommerce",
    short: "Custom themes, plugins, stores and checkout flows.",
    long: "Custom WordPress themes and plugins, Elementor and Gutenberg builds, WooCommerce stores, checkout customisation, product filters and speed optimisation.",
    stack: ["WordPress", "WooCommerce", "Elementor", "Gutenberg", "Kadence", "PHP"],
    includes: ["Custom themes & plugins", "WooCommerce stores & checkout", "Custom product filters", "Speed & security fixes"],
    icon: "wordpress",
  },
  {
    slug: "ecommerce",
    title: "Shopify & E-commerce",
    short: "Online stores, product filters, carts and payments.",
    long: "Stores that are easy to manage and easy to buy from. Shopify and WooCommerce setups, custom storefronts, product filtering, carts and payment integrations.",
    stack: ["Shopify", "WooCommerce", "Webflow", "Payment gateways"],
    includes: ["Store setup & theming", "Product catalogues & filters", "Cart & checkout flows", "Migrations between platforms"],
    icon: "cart",
  },
  {
    slug: "python-ai",
    title: "Python & AI",
    short: "Django and Flask APIs, automation and AI features.",
    long: "Back-end services, data processing and automation in Python, plus practical AI features such as assistants, smart search and content tools inside your product.",
    stack: ["Python", "Django", "Flask", "REST APIs", "AI integrations"],
    includes: ["Django & Flask APIs", "Automation & scripts", "AI assistants & chat", "Data processing"],
    icon: "python",
  },
  {
    slug: "design-to-code",
    title: "Design to Code",
    short: "Figma, Sketch and XD to pixel-perfect, responsive UI.",
    long: "Hand us a Figma, Sketch, XD or PDF design and get back pixel-perfect, responsive, accessible front-end code in HTML, Vue, React or WordPress.",
    stack: ["Figma", "Sketch", "Adobe XD", "SCSS", "Tailwind CSS", "Vue.js"],
    includes: ["Pixel-perfect HTML/CSS", "Vue & React components", "WordPress theme builds", "Responsive & accessible"],
    icon: "design",
  },
  {
    slug: "maintenance",
    title: "Care & Maintenance",
    short: "Fixes, speed, hosting, migrations and ongoing support.",
    long: "Your site keeps working after launch. Bug fixes, updates, speed work, hosting setup, migrations and a developer you can message when something breaks.",
    stack: ["cPanel", "Hosting", "Git", "Backups", "Monitoring"],
    includes: ["Bug fixing & updates", "Hosting & deployment", "Site migrations", "Ongoing monthly support"],
    icon: "wrench",
  },
];

export type Tag = "Vue" | "React / Next.js" | "Laravel / PHP" | "Python" | "WordPress" | "E-commerce" | "Design to code";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  built: string;
  client: string;
  country: string;
  year: string;
  tools: string[];
  tags: Tag[];
  status: "Live" | "Archived" | "Delivered";
  url?: string;
  quote?: string;
  featured?: boolean;
  /** Two colours for the generated preview until a real screenshot is added. */
  palette: [string, string];
  /** Optional real screenshot in /public/work. */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "athlete-iq",
    name: "Athlete IQ",
    summary: "Sports intelligence platform launch site",
    built: "Modern landing website with animated sections, dashboard mock-ups, beta sign-up and Cal.com demo booking.",
    client: "Sports intelligence startup",
    country: "Germany",
    year: "",
    tools: ["HTML", "CSS", "JavaScript", "Motion", "Cal.com"],
    tags: ["Design to code"],
    status: "Live",
    url: "https://joinathleteiq.com/",
    featured: true,
    image: "/work/athlete-iq.jpg",
    palette: ["#06121f", "#22d3ee"],
  },
  {
    slug: "imperium-jets",
    name: "Imperium Jets",
    summary: "Private jet charter booking website",
    built: "Customer-facing website built from Figma in Vue 3, covering planning, development, testing, deployment and a charter news section.",
    client: "Imperium Jets",
    country: "Israel / USA",
    year: "2022–2023",
    tools: ["Vue 3", "SCSS", "JavaScript", "Figma"],
    tags: ["Vue", "Design to code"],
    status: "Archived",
    quote: "He assisted us in planning the website from a technical point of view, in developing the website, and in testing it prior to deployment.",
    palette: ["#0c1f38", "#c9a24a"],
    featured: true,
  },
  {
    slug: "atlantesys",
    name: "Atlantesys",
    summary: "SaaS progressive web app",
    built: "Vue 3 PWA features and bug fixes, Auth0 login and REST API integration.",
    client: "Atlantesys",
    country: "United Kingdom",
    year: "2021–2022",
    tools: ["Vue 3", "PWA", "Auth0", "REST API", "Bitbucket"],
    tags: ["Vue"],
    status: "Archived",
    quote: "Excellent, high-quality work.",
    palette: ["#18153d", "#a78bfa"],
  },
  {
    slug: "boda",
    name: "BODA Guest App",
    summary: "Mobile-first guest web app",
    built: "Mobile-first app from design with an onboarding flow, calendar and PHP API integration.",
    client: "BODA",
    country: "Israel",
    year: "2022–2024",
    tools: ["Vue", "JavaScript", "PHP API", "CSS"],
    tags: ["Vue", "Laravel / PHP"],
    status: "Archived",
    palette: ["#1a0f2e", "#f472b6"],
    featured: true,
  },
  {
    slug: "banter-room",
    name: "Banter Room",
    summary: "Restaurant website",
    built: "WordPress site from Figma with menus, daily specials and reservations, for Pitch Perfect Creative agency.",
    client: "Pitch Perfect Creative",
    country: "Canada",
    year: "2022",
    tools: ["WordPress", "Kadence", "Figma"],
    tags: ["WordPress", "Design to code"],
    status: "Archived",
    quote: "He delivered high quality work and on time.",
    palette: ["#2a140a", "#f59e0b"],
  },
  {
    slug: "owlish",
    name: "Owlish",
    summary: "Long-term pixel-perfect front-end",
    built: "Long-running front-end engagement for Ink and Wink, turning product designs into pixel-perfect, responsive screens.",
    client: "Ink and Wink",
    country: "USA",
    year: "2021–2022",
    tools: ["HTML", "SCSS", "JavaScript", "Vue"],
    tags: ["Vue", "Design to code"],
    status: "Archived",
    palette: ["#0f1d17", "#34d399"],
  },
  {
    slug: "socal-premium-healthcare",
    name: "SoCal Premium Healthcare",
    summary: "In-home hospice care website",
    built: "Page updates, a new blog page and blog setup.",
    client: "In-home hospice care",
    country: "USA",
    year: "",
    tools: ["WordPress", "Elementor", "WooCommerce"],
    tags: ["WordPress"],
    status: "Live",
    url: "https://socalpremiumhealthcare.com",
    palette: ["#0b2233", "#60a5fa"],
    image: "/work/socal-premium-healthcare.jpg",
    featured: true,
  },
  {
    slug: "belfast-eye",
    name: "Belfast Eye",
    summary: "WordPress landing pages",
    built: "Landing pages built in WordPress and Elementor.",
    client: "Belfast Eye",
    country: "Northern Ireland, UK",
    year: "",
    tools: ["WordPress", "Elementor", "WooCommerce"],
    tags: ["WordPress"],
    status: "Delivered",
    palette: ["#071a1f", "#2dd4bf"],
  },
  {
    slug: "positivity-srl",
    name: "Positivity SRL",
    summary: "Virtual-tour pages and website updates",
    built: "An 11-month engagement delivering Matterport virtual-tour pages, website updates and a blog.",
    client: "Positivity SRL",
    country: "Italy",
    year: "2021–2022",
    tools: ["WordPress", "Matterport", "HTML", "CSS"],
    tags: ["WordPress"],
    status: "Delivered",
    quote: "Very professional and result-driven. Understands the challenges and provides solutions before they become issues.",
    palette: ["#1c1206", "#fb923c"],
  },
  {
    slug: "five-business-sites",
    name: "Five Business Websites",
    summary: "Construction, equipment, renovation and landscaping sites",
    built: "Five websites for one client's group of businesses, including hosting setup.",
    client: "Construction & home services group",
    country: "USA",
    year: "2023–2024",
    tools: ["WordPress", "Page builder", "Hosting"],
    tags: ["WordPress"],
    status: "Archived",
    palette: ["#14181f", "#facc15"],
  },
  {
    slug: "elevate-security",
    name: "Elevate Security",
    summary: "Excel calculator turned into a web tool",
    built: "Turned a spreadsheet calculator into a branded, interactive web tool.",
    client: "Elevate Security",
    country: "USA",
    year: "2020",
    tools: ["HTML", "CSS", "JavaScript"],
    tags: ["Design to code"],
    status: "Delivered",
    url: "https://codonist.bitbucket.io/demo/elevatesecurity/",
    palette: ["#0b1530", "#818cf8"],
    image: "/work/elevate-security.jpg",
  },
  {
    slug: "financial-data",
    name: "Financial Data Website",
    summary: "Stock and bond data platform",
    built: "Market data pages powered by the EOD Historical Data API.",
    client: "Financial data site",
    country: "USA",
    year: "2021–2022",
    tools: ["PHP", "REST API"],
    tags: ["Laravel / PHP"],
    status: "Delivered",
    palette: ["#06160f", "#4ade80"],
  },
  {
    slug: "carasti",
    name: "Carasti",
    summary: "Car subscription website",
    built: "Sketch design turned into a custom WordPress theme.",
    client: "Carasti",
    country: "UAE",
    year: "2019",
    tools: ["WordPress", "PHP", "Sketch"],
    tags: ["WordPress", "Design to code"],
    status: "Archived",
    quote: "Hamayun was absolutely perfect, great communication & went above and beyond to ensure the project was completed on time.",
    url: "https://carasti.com/",
    palette: ["#1f0a0a", "#f87171"],
    image: "/work/carasti.jpg",
  },
  {
    slug: "caa-financial",
    name: "CAA Financial",
    summary: "Insurance website front-end",
    built: "Responsive insurance website front-end with a modern build setup.",
    client: "CAA Financial",
    country: "USA",
    year: "2019",
    tools: ["HTML", "SCSS", "JavaScript", "jQuery", "Webpack"],
    tags: ["Design to code"],
    status: "Archived",
    quote: "He is my go-to guy for front end, but very knowledgeable on the backend as well.",
    url: "https://www.caafinancial.com/",
    palette: ["#0a1a2f", "#38bdf8"],
    image: "/work/caa-financial.jpg",
  },
  {
    slug: "evolurise-checkout",
    name: "Evolurise Checkout",
    summary: "WooCommerce checkout customisation",
    built: "Custom WooCommerce checkout flow and store improvements.",
    client: "Evolurise",
    country: "",
    year: "",
    tools: ["WooCommerce", "PHP", "JavaScript"],
    tags: ["WordPress", "E-commerce"],
    status: "Delivered",
    palette: ["#140a24", "#c084fc"],
  },
  {
    slug: "alia-hotel",
    name: "Alia Hotel Booking",
    summary: "Hotel booking flow",
    built: "Room booking flow built on AweBooking.",
    client: "Alia Hotel",
    country: "",
    year: "",
    tools: ["WordPress", "AweBooking"],
    tags: ["WordPress", "E-commerce"],
    status: "Delivered",
    palette: ["#0a1f1a", "#5eead4"],
  },
];

export const allTags: Tag[] = ["Vue", "React / Next.js", "Laravel / PHP", "Python", "WordPress", "E-commerce", "Design to code"];

export const testimonials = [
  { quote: "Collaborating with him was an absolute pleasure. He exhibited a remarkable level of proficiency and expertise.", name: "Ron B.", company: "Imperium Jets" },
  { quote: "Hamayun became a partner for me, he's a very talented developer.", name: "Walid S.", company: "Evolurise" },
  { quote: "Delivered a pixel-perfect HTML version of the user interface… quick, prompt with communication, and also very patient.", name: "Muriuki K.", company: "The Dapper Brother" },
  { quote: "Attentive, professional work. Would hire again!", name: "Stephanie O.", company: "" },
  { quote: "An exceptional professional in the field of development.", name: "Aqib O.", company: "Graphics Panthers" },
];

export const process = [
  { title: "Discover", text: "We learn your goals, users and constraints, then agree scope, milestones and budget." },
  { title: "Design", text: "Wireframes and UI you approve, or your own Figma turned into a build-ready plan." },
  { title: "Build", text: "Clean, tested code with regular demos so you see progress every week." },
  { title: "Launch & care", text: "Deployment, monitoring and ongoing support long after go-live." },
];

export const timeline = [
  { period: "2019 – now", title: "Founder & Lead Engineer, Codonist", text: "Building web apps, websites, stores and mobile apps for clients across the USA, UK, Europe and the Middle East, through Upwork, Fiverr and direct work." },
  { period: "Agency work", title: "Developer, AlphaSquad LLC (US agency)", text: "Front-end and full-stack development on client web projects." },
  { period: "2018 – 2020", title: "Senior Web & Mobile App Developer", text: "Software house in Islamabad & Abbottabad. WordPress, Laravel, Vue.js and Cordova/Capacitor apps for clients." },
  { period: "2015 – 2017", title: "Web Developer, i-intellect", text: "Where it started: websites, themes and front-end development." },
];

export const skillGroups = [
  { name: "Front-end", items: ["Vue.js 2/3", "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Inertia.js", "Alpine.js", "Tailwind CSS", "SASS/SCSS", "Bootstrap", "Pinia / Vuex", "Vuetify", "Quasar", "PWA", "Motion"] },
  { name: "Back-end", items: ["PHP", "Laravel", "CodeIgniter", "Python", "Django", "Flask", "REST APIs", "Auth0", "API integrations"] },
  { name: "Data", items: ["MySQL", "SQL", "MongoDB", "Oracle", "Database design"] },
  { name: "CMS & commerce", items: ["WordPress", "WooCommerce", "Elementor", "Gutenberg", "Divi", "WPBakery", "Kadence", "Shopify", "Webflow"] },
  { name: "Mobile", items: ["Capacitor", "Cordova", "Framework7"] },
  { name: "Tools & design", items: ["Git", "GitHub", "Bitbucket", "Vite", "Webpack", "Laravel Mix", "Gulp", "cPanel", "Figma", "Sketch", "Adobe XD", "Photoshop"] },
];

export const techMarquee = ["Laravel", "Vue.js", "React", "Next.js", "Python", "Django", "Flask", "WordPress", "WooCommerce", "Shopify", "Tailwind CSS", "TypeScript", "MySQL", "Capacitor", "Figma"];

/* ------------------------------------------------------------------ */
/* Client websites gallery (screenshots in /public/work)               */
/* ------------------------------------------------------------------ */

export type SiteCategory = "Healthcare" | "Business & finance" | "E-commerce" | "Nonprofit & policy" | "Tech & SaaS";

export type ClientSite = {
  name: string;
  about: string;
  category: SiteCategory;
  country: string;
  url: string;
  image: string;
  /** Front-end build hosted on Codonist's own demo server. */
  demo?: boolean;
};

export const siteCategories: SiteCategory[] = ["Healthcare", "Business & finance", "E-commerce", "Nonprofit & policy", "Tech & SaaS"];

export const clientSites: ClientSite[] = [
  { name: "Rapid Med Urgent Care", about: "Urgent care clinics in Argyle and Highland Village, Texas.", category: "Healthcare", country: "USA", url: "https://rapidmed.com/", image: "/work/rapidmed-com.jpg" },
  { name: "Augusto Digital", about: "AI activation consultancy for mid-size organizations.", category: "Tech & SaaS", country: "USA", url: "https://augusto.digital/", image: "/work/augusto-digital.jpg" },
  { name: "Hello Laundry", about: "Laundry and dry-cleaning pickup service with online booking.", category: "Business & finance", country: "UK", url: "https://hellolaundry.co.uk/", image: "/work/hellolaundry-co-uk.jpg" },
  { name: "Graina", about: "Bulk and organic food online store.", category: "E-commerce", country: "Australia", url: "https://graina.com.au/", image: "/work/graina-com-au.jpg" },
  { name: "Party Rental Studio", about: "Software for party and event rental businesses.", category: "Tech & SaaS", country: "USA", url: "https://partyrentalstudio.com/", image: "/work/partyrentalstudio-com.jpg" },
  { name: "Danimer Scientific", about: "Biodegradable materials company.", category: "Business & finance", country: "USA", url: "https://danimerscientific.com/", image: "/work/danimerscientific-com.jpg" },
  { name: "ConcertoCare", about: "Home-based healthcare services.", category: "Healthcare", country: "USA", url: "https://concertocare.com/", image: "/work/concertocare-com.jpg" },
  { name: "Go Fitness", about: "Activewear online store.", category: "E-commerce", country: "Brazil", url: "https://gofitness.club/", image: "/work/gofitness-club.jpg" },
  { name: "ALEC", about: "American Legislative Exchange Council, policy organization.", category: "Nonprofit & policy", country: "USA", url: "https://www.alec.org/", image: "/work/alec-org.jpg" },
  { name: "Atomicorp", about: "Workload security platform built on OSSEC.", category: "Tech & SaaS", country: "USA", url: "https://atomicorp.com/", image: "/work/atomicorp-com.jpg" },
  { name: "Modern Trust", about: "Online living trust and estate planning.", category: "Business & finance", country: "USA", url: "https://moderntrust.com/", image: "/work/moderntrust-com.jpg" },
  { name: "Shimlee", about: "Custom photo prints on wood, online store.", category: "E-commerce", country: "USA", url: "https://www.shimlee.com/", image: "/work/shimlee-com.jpg" },
  { name: "Cherry Blossom PACE", about: "All-inclusive care program for the elderly.", category: "Healthcare", country: "USA", url: "https://cherryblossompace.com/", image: "/work/cherryblossompace-com.jpg" },
  { name: "The Hub", about: "Creator marketplace for UGC photo and video content (Webflow).", category: "Tech & SaaS", country: "USA", url: "https://marketplace-002-6492289f70179456e1dfdc4.webflow.io/", image: "/work/the-hub.jpg" },
  { name: "Closehaul Capital", about: "Finance and investment firm.", category: "Business & finance", country: "USA", url: "https://closehaulcapital.com/", image: "/work/closehaulcapital-com.jpg" },
  { name: "Resilient Ventures", about: "Venture capital access for African American founders.", category: "Nonprofit & policy", country: "USA", url: "https://resilientventures.org/", image: "/work/resilientventures-org.jpg" },
  { name: "PeopleSpace", about: "Workplace interiors and furniture company.", category: "Business & finance", country: "USA", url: "https://www.peoplespace.com/", image: "/work/peoplespace-com.jpg" },
  { name: "The Yoga Tree", about: "Online yoga community and class library.", category: "Healthcare", country: "Ireland", url: "https://theyogatree.ie/", image: "/work/theyogatree-ie.jpg" },
  { name: "Australian Opal Association", about: "Industry association site with a member directory.", category: "Nonprofit & policy", country: "Australia", url: "https://www.opal.asn.au/", image: "/work/opal-asn-au.jpg" },
  { name: "Word & Brown Companies", about: "Health insurance company corporate site.", category: "Business & finance", country: "USA", url: "https://www.wbcompanies.com/", image: "/work/wbcompanies-com.jpg" },
  { name: "Greensky Games", about: "Indie VR game studio.", category: "Tech & SaaS", country: "USA", url: "https://www.greensky.games/", image: "/work/greensky-games.jpg" },
  { name: "The Circle", about: "EU program for entrepreneurs in Italy, Spain and Romania.", category: "Nonprofit & policy", country: "EU", url: "https://jointhecircle.eu/", image: "/work/jointhecircle-eu.jpg" },
  { name: "Women's Wellness Institute", about: "Women's health clinic in Dallas.", category: "Healthcare", country: "USA", url: "https://womenswellnessinstitute.com/", image: "/work/womenswellnessinstitute-com.jpg" },
  { name: "Absolum", about: "Managed IT services company.", category: "Tech & SaaS", country: "Netherlands", url: "https://absolum.nl/", image: "/work/absolum-nl.jpg" },
  { name: "Valteo Tech", about: "IT and operations services for political-reform nonprofits.", category: "Tech & SaaS", country: "USA", url: "https://www.valteotech.com/", image: "/work/valteotech-com.jpg" },
  { name: "Wise Up", about: "Health information site with a statistics dashboard.", category: "Healthcare", country: "UK", url: "https://wiseupni.com/", image: "/work/wiseupni-com.jpg" },
  { name: "Algoos Consulting", about: "Hotel consulting firm with a filterable team page.", category: "Business & finance", country: "USA", url: "https://www.algoosconsulting.com/our-team-filter/", image: "/work/algoosconsulting-com.jpg" },
  { name: "David Chow Foundation", about: "Humanitarian award foundation.", category: "Nonprofit & policy", country: "USA", url: "https://davidchowfoundation.org/", image: "/work/davidchowfoundation-org.jpg" },
  { name: "Qatar National Day", about: "Content site about Qatar National Day.", category: "Nonprofit & policy", country: "Qatar", url: "https://qatarnationalday.net/", image: "/work/qatarnationalday-net.jpg" },
  { name: "Builders Risk", about: "Insurance quote form, front-end build.", category: "Business & finance", country: "USA", url: "https://codonist.bitbucket.io/demo/builder-risk-v1-ui/", image: "/work/demo-builder-risk-v1-ui.jpg", demo: true },
  { name: "Drafteam", about: "Sports ticket and membership app UI, front-end build.", category: "Tech & SaaS", country: "Portugal", url: "https://codonist.bitbucket.io/demo/drafteam/", image: "/work/demo-drafteam.jpg", demo: true },
  { name: "Virginia Democrats", about: "Campaign homepage, front-end build.", category: "Nonprofit & policy", country: "USA", url: "https://codonist.bitbucket.io/demo/vadems/", image: "/work/demo-vadems.jpg", demo: true },
  { name: "Too Good", about: "Youth prevention education program, front-end build.", category: "Nonprofit & policy", country: "USA", url: "https://codonist.bitbucket.io/demo/toogood/", image: "/work/demo-toogood.jpg", demo: true },
];
