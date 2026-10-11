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
                  {s.source && <sup className="text-base text-ink/40 ms-1">{i + 1}</sup>}
                </p>
                <p className="text-ink/75 leading-relaxed">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        {t.stats.some((s) => s.source) && (
          <Reveal as="ol" className="mt-8 text-xs text-ink/55 leading-relaxed space-y-1 reveal" delay={300}>
            <li className="kicker text-ink/45 mb-2 list-none">{t.sourcesLabel}</li>
            {t.stats.map((s, i) =>
              s.source ? (
                <li key={s.value} className="list-none">
                  <span className="tabular-nums me-2">{i + 1}.</span>
                  <a href={s.source.href} target="_blank" rel="noopener noreferrer" className="hover-underline">
                    {s.source.label}
                  </a>
                </li>
              ) : null,
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}
