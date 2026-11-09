import Image from "next/image";
import Link from "next/link";
import { clientSites } from "@/data/site";
import { Arrow } from "@/components/icons";

/** Slow-scrolling wall of real client website screenshots. */
export default function SitesWall() {
  const rows = [clientSites.filter((_, i) => i % 2 === 0), clientSites.filter((_, i) => i % 2 === 1)];
  return (
    <div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        {rows.map((row, r) => (
          <div key={r} className="group/row mt-4 flex w-max first:mt-0">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 gap-4 pr-4 group-hover/row:[animation-play-state:paused]"
                style={{ animation: `marquee ${90 + r * 15}s linear infinite`, animationDirection: r === 1 ? "reverse" : "normal" }}
              >
                {row.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="noopener" tabIndex={copy === 1 ? -1 : undefined} title={s.name} className="relative block aspect-[16/10] w-64 shrink-0 overflow-hidden rounded-2xl border border-line bg-raised transition hover:border-ink/40 md:w-80">
                    <Image src={s.image} alt={copy === 1 ? "" : `${s.name} website`} fill sizes="320px" className="object-cover object-top" />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-8 text-sm font-semibold text-white">{s.name}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="container mt-10 flex justify-center">
        <Link href="/work#websites" className="btn-ghost">See all {clientSites.length} client websites <Arrow className="h-4 w-4" /></Link>
      </div>
    </div>
  );
}
