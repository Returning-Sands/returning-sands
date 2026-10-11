import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { SectionHeading, SocialIcon } from "../primitives";

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

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {t.producers.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              className="bg-sand-50 p-8 sm:p-10 flex flex-col gap-3 transition-colors hover:bg-sand-100 reveal"
              delay={i * 100}
            >
              <h3 className="font-display text-2xl sm:text-3xl leading-tight">{p.name}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
              <p className="text-sm text-ink/60 leading-relaxed">{p.bio}</p>
              <p className="kicker text-ochre-600 mt-auto pt-4">{p.base}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14">
          <Reveal as="h3" className="font-display text-3xl mb-6 reveal">{t.coreTeamHeading}</Reveal>
          <ul className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {t.coreTeam.map((p, i) => (
              <Reveal as="li" key={p.name} className="film-frame film-frame-sm reveal" delay={i * 80}>
                <div className="film-frame-inner">
                  <p className="font-display text-xl mb-1">{p.name}</p>
                  <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
                  {p.linkedin && (
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} on LinkedIn`}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-ink/60 hover:text-ink transition-colors"
                    >
                      <SocialIcon name="linkedin" className="h-3.5 w-3.5" />
                      <span className="hover-underline">LinkedIn</span>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
