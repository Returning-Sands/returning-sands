import Image from "next/image";
import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { SectionHeading } from "../primitives";
import { PersonLinks } from "./PersonLinks";

/** Arch-topped headshot, the same shape the deck uses. */
function Headshot({ src, name, className = "", sizes }: { src: string; name: string; className?: string; sizes: string }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-xl bg-ink/10 ${className}`}>
      <Image src={src} alt={name} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

/** Producers grid, then the core team in small film frames. */
export function Team({ t }: { t: SiteContent["about"]["team"] }) {
  return (
    <section className="bg-sand-50">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <div className="grid gap-10 md:grid-cols-12 mb-14">
          <Reveal className="md:col-span-4 reveal-lg">
            <SectionHeading heading={t.heading} id="team" />
          </Reveal>
          <Reveal as="p" className="md:col-span-7 md:col-start-6 text-lg leading-relaxed text-ink/75 reveal" delay={100}>
            {t.intro}
          </Reveal>
        </div>

        {/* Six-column grid on desktop: three cards per row, and when a row is
            left with two they each take half the width, so there is never an
            empty cell. On tablets, an odd last card spans both columns. */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-6 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {t.producers.map((p, i) => {
            const n = t.producers.length;
            const lastRowOfTwo = n % 3 === 2 && i >= n - 2;
            const lastOddOnTablet = n % 2 === 1 && i === n - 1;
            return (
              <Reveal
                as="li"
                key={p.name}
                className={`bg-sand-50 p-8 sm:p-10 flex flex-col gap-3 transition-colors hover:bg-sand-100 reveal ${lastRowOfTwo ? "lg:col-span-3" : "lg:col-span-2"} ${lastOddOnTablet ? "sm:col-span-2" : ""}`}
                delay={i * 100}
              >
                {p.photo && (
                  <Headshot src={p.photo} name={p.name} className="w-full max-w-[240px] mx-auto mb-4" sizes="240px" />
                )}
                <h3 className="font-display text-2xl sm:text-3xl leading-tight">{p.name}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
                <p className="text-sm text-ink/60 leading-relaxed">{p.bio}</p>
                <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                  {p.base ? <p className="kicker text-ochre-600">{p.base}</p> : <span />}
                  <PersonLinks name={p.name} email={p.email} linkedin={p.linkedin} />
                </div>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-14">
          <Reveal as="h3" className="font-display text-3xl mb-6 reveal">{t.coreTeamHeading}</Reveal>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.coreTeam.map((p, i) => (
              <Reveal as="li" key={p.name} className="film-frame film-frame-sm reveal" delay={i * 80}>
                <div className="film-frame-inner">
                  {p.photo && <Headshot src={p.photo} name={p.name} className="w-full mb-4" sizes="(max-width: 640px) 45vw, 200px" />}
                  <p className="font-display text-xl mb-1">{p.name}</p>
                  <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
                  <div className="mt-3">
                    <PersonLinks name={p.name} email={p.email} linkedin={p.linkedin} size="sm" />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
