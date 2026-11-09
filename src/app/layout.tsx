import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["300", "400", "600", "700"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Codonist | Web, Mobile & AI Software Studio by Hamayun Aziz",
    template: "%s | Codonist",
  },
  description: site.description,
  keywords: ["Laravel developer", "Vue.js developer", "full stack developer", "WordPress developer", "WooCommerce", "Shopify", "Python Django developer", "mobile app developer", "Codonist", "Hamayun Aziz"],
  authors: [{ name: site.founder, url: site.url }],
  openGraph: {
    type: "website",
    siteName: "Codonist",
    title: "Codonist | Web, Mobile & AI Software Studio",
    description: site.description,
    url: site.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "{Codonist} software studio" }],
  },
  twitter: { card: "summary_large_image", title: "Codonist | Software Studio", description: site.description, images: ["/og.png"] },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#080809" },
  ],
};

// Runs before paint so the theme never flashes. Uses the saved choice, else the device setting.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Codonist",
  url: site.url,
  email: site.email,
  founder: { "@type": "Person", name: site.founder, sameAs: Object.values(site.links) },
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressLocality: "Abbottabad", addressCountry: "PK" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-ink">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
