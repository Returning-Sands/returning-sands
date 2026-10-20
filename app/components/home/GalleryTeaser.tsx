import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { Arrow, ExternalArrow, SocialIcon, btn } from "../primitives";

/**
 * Home page gallery strip: the curated Instagram posts as square tiles, each
 * opening the post. Four across on desktop; while there are only three posts
 * the last slot holds the Returning Sands stamp, linking to the profile.
 */
export function GalleryTeaser({
  t,
  posts,
  instagramHref,
  brandName,
  locale,
}: {
  t: SiteContent["galleryTeaser"];
  posts: SiteContent["gallery"]["instagramPosts"];
  instagramHref: string;
  brandName: string;
  locale: Locale;
}) {
  const shown = posts.slice(0, 4);
  const placeholders = Math.max(0, 4 - shown.length);
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
            <Link href={pagePath(locale, "gallery")} className={btn.darkOutline}>
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
        <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {shown.map((p, i) => (
            <Reveal as="li" key={p.href} className="reveal" delay={i * 80}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </a>
            </Reveal>
          ))}
          {Array.from({ length: placeholders }, (_, k) => (
            <Reveal as="li" key={`placeholder-${k}`} className="reveal" delay={(shown.length + k) * 80}>
              {/* Static logo, no frame or link, until there is a fourth post. */}
              <div className="flex aspect-square items-center justify-center">
                <Image
                  src="/brand/RS_logo_main_blk.svg"
                  alt={brandName}
                  width={240}
                  height={150}
                  unoptimized
                  className="w-3/5 h-auto opacity-85"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
