import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { Arrow, ExternalArrow, SocialIcon, btn } from "../primitives";

export function GalleryTeaser({
  t,
  items,
  instagramHref,
  locale,
}: {
  t: SiteContent["galleryTeaser"];
  items: SiteContent["gallery"]["items"];
  instagramHref: string;
  locale: Locale;
}) {
  const thumbs = items.slice(0, 6);
  const gallery = pagePath(locale, "gallery");
  return (
    <section className="bg-sand-100">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-24">
        <Reveal className="reveal-lg flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.98] text-ink">{t.heading}</h2>
            <p className="mt-3 text-ink/70">{t.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={gallery} className={btn.darkOutline}>
              {t.button}
              <Arrow />
            </Link>
            <a href={instagramHref} target="_blank" rel="noopener noreferrer" className={btn.darkOutline}>
              <SocialIcon name="instagram" className="h-4 w-4" />
              {t.instagramButton}
              <ExternalArrow />
            </a>
          </div>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {thumbs.map((img, i) => (
            <Reveal as="li" key={img.src} className="reveal" delay={i * 70}>
              <Link
                href={gallery}
                className="group relative block aspect-square overflow-hidden rounded-xl bg-ink"
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
