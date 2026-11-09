import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WorkExplorer from "@/components/WorkExplorer";
import SectionHeading from "@/components/SectionHeading";
import ClientSites from "@/components/ClientSites";

export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  title: "Work",
  description: "Selected web apps, websites, WordPress and WooCommerce stores and front-end builds by Codonist for clients in the USA, UK, Europe, Australia and the Middle East.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow="[ Work ]" title="Selected work." fade="Built to perform." text="Platforms, products, stores and websites for clients around the world. Filter by technology or search by tool, country or project." />
      <section className="py-16 md:py-24">
        <div className="container"><WorkExplorer /></div>
      </section>
      <section id="websites" className="border-t border-line bg-surface py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="More work" title="Client websites." fade="Live today." text="Websites and front-end builds for healthcare, finance, retail, nonprofits and tech companies. Each card opens the live site." />
          <ClientSites />
        </div>
      </section>
    </>
  );
}
