import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { ExternalArrow, SectionHeading } from "../primitives";

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
                  className="group flex h-full items-start justify-between gap-4 rounded-2xl px-8 py-6 font-display text-2xl text-ink hover:bg-sand-50 transition-colors"
                >
                  <span>{p.name}</span>
                  <ExternalArrow className="mt-2 shrink-0 text-ink/40 group-hover:text-ochre-600 transition-colors" />
                </a>
              ) : (
                <span className="block px-8 py-6 font-display text-2xl text-ink">{p.name}</span>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
