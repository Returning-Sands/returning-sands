import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { SectionHeading } from "../primitives";

export function Goals({ t }: { t: SiteContent["about"]["goals"] }) {
  return (
    <section className="bg-sand-50">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4 reveal-lg">
          <SectionHeading heading={t.heading} id="goals" />
        </Reveal>
        <Reveal as="ul" className="md:col-span-7 md:col-start-6 space-y-4 reveal" delay={100}>
          {t.items.map((g, i) => (
            <li key={g} className="flex gap-5 items-start text-lg text-ink/80 leading-relaxed">
              <span className="font-display text-2xl text-ochre-600 leading-none mt-1 tabular-nums shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{g}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
