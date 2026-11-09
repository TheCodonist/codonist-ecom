import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WorkExplorer from "@/components/WorkExplorer";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected web apps, websites, WordPress and WooCommerce stores and front-end builds by Codonist for clients in the USA, UK, Europe and the Middle East.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow="[ Work ]" title="Selected work." fade="Built to perform." text="Platforms, products, stores and websites for clients around the world. Filter by technology or search by tool, country or project." />
      <section className="py-16 md:py-24">
        <div className="container"><WorkExplorer /></div>
      </section>
    </>
  );
}
