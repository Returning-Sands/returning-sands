import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { SectionHeading } from "../primitives";

/** Partner names as a simple grid. */
export function Partners({ t }: { t: SiteContent["about"]["partners"] }) {
  return (
    <section className="bg-sand-100 grain">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <Reveal className="reveal-lg mb-10">
          <SectionHeading heading={t.heading} id="partners" />
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {t.items.map((p, i) => (
            <Reveal as="li" key={p} className="bg-sand-100 px-8 py-6 font-display text-2xl text-ink reveal" delay={i * 60}>
              {p}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
