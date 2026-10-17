import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal } from "../../Reveal";
import { PASSPORT_CANVAS, PASSPORT_HITS, type HitShape } from "./passportMap";

/**
 * The passport spread from the brand kit, near full-width.
 *
 * The page is rendered without its three visa stamps; each stamp is a separate
 * transparent layer that "inks in" (fades + settles from a slight scale and
 * rotation) when the section scrolls into view, staggered Cairo, NYC, London.
 *
 * Every stamp is a link to that city's block on the Events page, and the
 * Returning Sands stamp on the left page links to Donate. The clickable area
 * of each is the traced outline of the ink itself (a clip-path polygon from
 * Brand/passport_map.py), not a rectangle, so the cursor only changes and the
 * stamp only lifts when you are actually over it.
 */
const STAMPS = [
  { id: "cairo", delay: 900 },
  { id: "nyc", delay: 1500 },
  { id: "london", delay: 2100 },
] as const;

function hitStyle(h: HitShape) {
  return {
    left: `${h.left}%`,
    top: `${h.top}%`,
    width: `${h.width}%`,
    height: `${h.height}%`,
    clipPath: h.clip,
  };
}

export function Passport({
  t,
  locale,
  className = "",
  priority = false,
}: {
  t: SiteContent["cities"];
  locale: Locale;
  className?: string;
  /** Preload the base image when the passport is above the fold. */
  priority?: boolean;
}) {
  const sizes = "(max-width: 1200px) 100vw, 1200px";
  return (
    /* Edge-to-edge on phones; up to 1600px wide on large screens. */
    <Reveal className={`reveal-lg passport-stage mx-auto w-full max-w-[1200px] px-3 sm:px-10 lg:px-16 ${className}`}>
      <div className="relative">
        <Image
          src="/brand/passport-base-2000.webp"
          alt={t.alt}
          width={PASSPORT_CANVAS.width}
          height={PASSPORT_CANVAS.height}
          sizes={sizes}
          priority={priority}
          /* 1428px source; stop next/image upscaling to 3840. */
          quality={85}
          className="w-full h-auto select-none"
        />
        {/* Returning Sands stamp on the left page: Donate. */}
        <Link
          href={pagePath(locale, "donate")}
          aria-label={t.donate}
          className="passport-hit absolute"
          style={hitStyle(PASSPORT_HITS.logo)}
        />
        {STAMPS.map((s) => (
          <div key={s.id} className="passport-group absolute inset-0 pointer-events-none">
            <Image
              src={`/brand/passport-stamp-${s.id}-2000.webp`}
              alt=""
              aria-hidden
              width={PASSPORT_CANVAS.width}
              height={PASSPORT_CANVAS.height}
              sizes={sizes}
              loading="eager"
              className="passport-stamp absolute inset-0 w-full h-auto select-none"
              style={{ ["--stamp-delay" as string]: `${s.delay}ms` }}
            />
            <Link
              href={pagePath(locale, "events", s.id)}
              aria-label={t[s.id]}
              className="passport-hit absolute pointer-events-auto"
              style={hitStyle(PASSPORT_HITS[s.id])}
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
