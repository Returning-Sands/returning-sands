import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { SectionHeading } from "../primitives";

export function Stake({ t }: { t: SiteContent["stake"] }) {
  return (
    <section className="bg-sand-50">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5 reveal-lg">
            <SectionHeading kicker={t.kicker} heading={t.heading} />
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6 text-lg leading-relaxed text-ink/80 reveal" delay={120}>
            <p>{t.body}</p>
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-3 gap-6 mt-14 reveal-stagger">
          {t.stats.map((s, i) => (
            <Reveal as="li" key={s.value} className="film-frame reveal" delay={i * 110}>
              <div className="film-frame-inner">
                <p className="font-display text-6xl sm:text-7xl text-ochre-600 leading-none mb-4">
                  {s.value}
                </p>
                <p className="text-ink/75 leading-relaxed">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
