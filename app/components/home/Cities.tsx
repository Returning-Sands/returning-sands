import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { SectionHeading } from "../primitives";

/**
 * The passport spread from the brand kit. The three visa stamps on the right
 * page are real links to each city's block on the Events page. Hotspots are
 * positioned as percentages of the image so they track any size. The image is
 * not mirrored in RTL, so these offsets are physical on purpose.
 */
export function Cities({ t, locale }: { t: SiteContent["cities"]; locale: Locale }) {
  const hotspots = [
    { id: "cairo", label: t.cairo, left: 56.5, top: 29.6, width: 15.5, height: 15 },
    { id: "nyc", label: t.nyc, left: 66.5, top: 40, width: 12, height: 15 },
    { id: "london", label: t.london, left: 55.5, top: 56.3, width: 21, height: 10 },
  ] as const;
  return (
    <section className="bg-sand-100 grain">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <Reveal className="reveal-lg text-center flex flex-col items-center">
          <SectionHeading kicker={t.kicker} heading={t.heading} />
          <p className="mt-5 text-ink/70">{t.hint}</p>
        </Reveal>
        <Reveal className="mt-12 reveal-lg" delay={120}>
          <div className="relative mx-auto max-w-5xl">
            <Image
              src="/brand/passport-2000.webp"
              alt={t.alt}
              width={2000}
              height={1414}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto select-none"
            />
            <nav aria-label={t.navLabel} className="absolute inset-0">
              {hotspots.map((h) => (
                <Link
                  key={h.id}
                  href={pagePath(locale, "events", h.id)}
                  aria-label={h.label}
                  className="absolute rounded-xl ring-ochre-600/0 hover:ring-4 focus-visible:ring-4 ring-ochre-600/70 transition-shadow"
                  style={{
                    left: `${h.left}%`,
                    top: `${h.top}%`,
                    width: `${h.width}%`,
                    height: `${h.height}%`,
                  }}
                />
              ))}
            </nav>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
