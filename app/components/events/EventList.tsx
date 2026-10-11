import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { Arrow, BrandStamp, btn } from "../primitives";

type Events = SiteContent["events"];
type Item = Events["cities"][number]["items"][number];

function ctaFor(t: Events, item: Item) {
  if (item.cta) return item.cta;
  const subject = t.defaultCta.subject.replace("{event}", item.title);
  return {
    label: t.defaultCta.label,
    href: `mailto:${t.defaultCta.email}?subject=${encodeURIComponent(subject)}`,
  };
}

/** The three city blocks (Cairo, London, New York), each with an anchor id. */
export function EventList({ t }: { t: Events }) {
  return (
    <section className="bg-nile-900 text-sand-50 grain">
      <PerfSeam dark />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28 flex flex-col gap-20 sm:gap-28">
        {t.cities.map((c) => (
          <Reveal as="section" key={c.id} id={c.id} className="scroll-mt-28 reveal-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b border-sand-100/15 pb-6">
              <div>
                <p className="kicker text-sand-300 mb-3">{c.when}</p>
                <h2 className="font-display text-5xl sm:text-6xl leading-none">{c.city}</h2>
              </div>
              {c.body ? <p className="text-sand-100/70 max-w-md">{c.body}</p> : null}
            </div>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.items.map((it, i) => {
                const cta = ctaFor(t, it);
                return (
                  <Reveal
                    as="li"
                    key={it.title}
                    className="rounded-2xl border border-sand-100/15 bg-sand-50/[0.04] p-8 flex flex-col gap-4 reveal"
                    delay={i * 100}
                  >
                    {it.stamp && (
                      <BrandStamp name={it.stamp} height={82} className="-rotate-2 mb-2" />
                    )}
                    <h3 className="font-display text-2xl text-sand-50">{it.title}</h3>
                    <p className="text-sand-300 uppercase tracking-[0.14em] text-[0.7rem]">{it.date}</p>
                    <p className={`text-sm ${it.venue ? "text-sand-100/75" : "italic text-sand-100/55"}`}>
                      {it.venue ?? t.venueTba}
                    </p>
                    <p className="text-sand-100/80 text-sm leading-relaxed flex-1">{it.description}</p>
                    <a href={cta.href} className={`${btn.lightOutline} text-sm self-start mt-2`}>
                      {cta.label}
                      <Arrow />
                    </a>
                  </Reveal>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
