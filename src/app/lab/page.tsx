import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import WorkExplorer from "@/components/WorkExplorer";
import { BookingDemo, CartDemo, ChatDemo, DataTableDemo, QuoteDemo, RtlDemo, UIKitDemo } from "@/components/lab/Demos";
import { labDemos } from "@/data/lab";
import { Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Lab: live demos",
  description: "Try working demos of the features clients ask for most: filters, data tables, booking calendars, carts, multi-step forms, AI chat, UI components and RTL.",
};

const render: Record<string, React.ReactNode> = {
  filters: <WorkExplorer limit={3} compact />,
  table: <DataTableDemo />,
  booking: <BookingDemo />,
  cart: <CartDemo />,
  quote: <QuoteDemo />,
  chat: <ChatDemo />,
  ui: <UIKitDemo />,
  rtl: <RtlDemo />,
};

export default function LabPage() {
  return (
    <>
      <PageHeader eyebrow="[ Codonist Lab ]" title="Don’t take our word for it." fade="Click it." text="Every client asks for something different: filters, bookings, carts, dashboards, AI. Here are working versions you can try right now, all built in-house.">
        <div className="mt-10 flex flex-wrap gap-2">
          {labDemos.map((d) => <a key={d.id} href={`#${d.id}`} className="chip !px-4 !py-2 !text-sm hover:border-ink/40 hover:text-ink">{d.title}</a>)}
        </div>
      </PageHeader>
      <div className="container space-y-6 py-16 md:py-24">
        {labDemos.map((d, i) => (
          <section key={d.id} id={d.id} className="card scroll-mt-24 overflow-hidden">
            <div className="flex flex-col justify-between gap-3 border-b border-line px-6 py-5 md:flex-row md:items-center md:px-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Demo {String(i + 1).padStart(2, "0")} · {d.tag}</p>
                <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">{d.title}</h2>
              </div>
              <p className="max-w-sm text-sm text-muted md:text-right">{d.text}</p>
            </div>
            <div className="bg-bg/40 p-6 md:p-8">{render[d.id]}</div>
          </section>
        ))}
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand p-8 text-brand-ink md:flex-row md:items-center md:p-12">
          <p className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight">Need something that isn’t here? We’ll build it for you.</p>
          <Link href="/contact" className="btn bg-brand-ink text-white">Start a project <Arrow /></Link>
        </div>
      </div>
    </>
  );
}
