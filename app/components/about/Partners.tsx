import Image from "next/image";
import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { ExternalArrow, SectionHeading } from "../primitives";

/** Logo when the organisation has supplied one, otherwise its name in the display face. */
function PartnerMark({ p }: { p: SiteContent["about"]["partners"]["items"][number] }) {
  if (p.logo) {
    return (
      <span className="relative block h-12 w-full max-w-[220px]">
        <Image src={p.logo} alt={p.name} fill sizes="220px" className="object-contain object-left rtl:object-right" />
      </span>
    );
  }
  return <span className="font-display text-2xl">{p.name}</span>;
}

/** Partners and funders as a grid; each links out to the organisation. */
export function Partners({ t }: { t: SiteContent["about"]["partners"] }) {
  return (
    <section className="bg-sand-100 grain">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <Reveal className="reveal-lg mb-10">
          <SectionHeading heading={t.heading} id="partners" />
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {t.items.map((p, i) => (
            <Reveal as="li" key={p.name} className="rounded-2xl border border-ink/10 bg-sand-50/60 reveal" delay={i * 60}>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl px-8 py-6 text-ink hover:bg-sand-50 transition-colors"
                >
                  <PartnerMark p={p} />
                  <ExternalArrow className="shrink-0 text-ink/40 group-hover:text-ochre-600 transition-colors" />
                </a>
              ) : (
                <div className="flex h-full items-center px-8 py-6 text-ink">
                  <PartnerMark p={p} />
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
