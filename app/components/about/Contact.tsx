import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { Arrow, SectionHeading, SocialIcon, SocialLinks, btn } from "../primitives";

export function Contact({
  t,
  social,
}: {
  t: SiteContent["about"]["contact"];
  social: SiteContent["social"];
}) {
  return (
    <section className="bg-sand-50 grain">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7 reveal-lg">
          <SectionHeading heading={t.heading} id="contact" />
          <p className="mt-6 text-ink/75 leading-relaxed max-w-xl text-lg">
            {t.bodyLead}{" "}
            <a href={`mailto:${t.email}`} className="hover-underline text-ink">
              {t.email}
            </a>
            {t.bodyTail}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.people.map((p, i) => (
              <a
                key={p.email}
                href={`mailto:${p.email}?subject=${encodeURIComponent(t.mailSubject)}`}
                className={i === 0 ? btn.darkFilled : btn.darkOutline}
              >
                {p.buttonLabel}
                <Arrow />
              </a>
            ))}
          </div>
          <div className="mt-10">
            <p className="kicker text-ink/55 mb-3">{t.followHeading}</p>
            <SocialLinks t={social} tone="dark" />
          </div>
        </Reveal>

        <Reveal className="md:col-span-4 md:col-start-9 reveal flex flex-col gap-8" delay={120}>
          <ul className="space-y-6">
            {t.people.map((p) => (
              <li key={p.email}>
                <p className="kicker text-ink/55 mb-1">{p.role}</p>
                <p className="font-display text-2xl">{p.name}</p>
                <a href={`mailto:${p.email}`} className="block text-sm text-ink/70 hover-underline mt-1">
                  {p.email}
                </a>
                <p className="text-sm text-ink/60 mt-1">
                  {p.phone ? `${p.phone} · ${p.city}` : p.city}
                </p>
                {p.linkedin && (
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on LinkedIn`}
                    className="mt-2 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink transition-colors"
                  >
                    <SocialIcon name="linkedin" className="h-4 w-4" />
                    <span className="hover-underline">LinkedIn</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
