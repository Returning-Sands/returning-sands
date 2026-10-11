import type { Locale, SiteContent } from "../../content";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { PageHero } from "../PageHero";
import { PerfSeam } from "../../Stamp";

/** Privacy notice. Plain prose from content; sections are heading + paragraphs. */
export function PrivacyPage({ t, locale }: { t: SiteContent; locale: Locale }) {
  const p = t.privacy;
  return (
    <>
      <Nav t={t} locale={locale} current="privacy" />
      <main>
        <PageHero heading={p.heading} intro={p.intro} />
        <section className="bg-sand-50">
          <PerfSeam />
          <div className="mx-auto max-w-3xl px-6 sm:px-10 py-16 sm:py-24">
            <p className="text-sm text-ink/55 mb-10">{p.updated}</p>
            {p.sections.map((s) => (
              <div key={s.heading} className="mb-10">
                <h2 className="font-display text-3xl text-ink mb-4">{s.heading}</h2>
                {s.paragraphs.map((para, i) => (
                  <p key={i} className="text-ink/75 leading-relaxed mb-3">
                    {para}
                  </p>
                ))}
              </div>
            ))}
            <p className="text-ink/75 leading-relaxed">
              {p.contactLead}{" "}
              <a href={`mailto:${p.contactEmail}`} className="hover-underline text-ink">
                {p.contactEmail}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer t={t} locale={locale} current="privacy" />
    </>
  );
}
