import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { Arrow, BrandStamp, SectionHeading, btn } from "../primitives";

export function FilmTeaser({
  t,
  imageAlt,
  locale,
}: {
  t: SiteContent["filmTeaser"];
  imageAlt: string;
  locale: Locale;
}) {
  return (
    <section className="bg-nile-900 text-sand-50 grain relative overflow-hidden">
      <PerfSeam dark />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl bg-nile-800 reveal parallax">
            <Image
              src="/img/barbers.jpg"
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center zoom-in"
            />
          </Reveal>
          <Reveal className="md:col-span-6 reveal-lg" delay={120}>
            <BrandStamp name="RS_Documentary_white" height={110} className="mb-8 -rotate-3" />
            <SectionHeading kicker={t.kicker} heading={t.heading} tone="light" />
            <blockquote className="mt-6 font-display text-2xl sm:text-3xl leading-[1.2] text-sand-50">
              {t.logline}
            </blockquote>
            <p className="mt-6 text-sand-100/80 leading-relaxed">{t.body}</p>
            <Link href={pagePath(locale, "about", "film")} className={`${btn.lightOutline} mt-8`}>
              {t.button}
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
