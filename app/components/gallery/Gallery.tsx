import Image from "next/image";
import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { ExternalArrow, SectionHeading, SocialIcon, btn } from "../primitives";
import { InstagramEmbed } from "./InstagramEmbed";

type Gallery = SiteContent["gallery"];

export function PhotoGrid({ items, heading, intro }: { items: Gallery["items"]; heading: string; intro: string }) {
  return (
    <section className="bg-sand-50">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-24">
        <Reveal className="reveal-lg mb-10">
          <SectionHeading heading={heading} id="photographs" />
          <p className="mt-3 text-ink/70">{intro}</p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((img, i) => (
            <Reveal as="li" key={img.src} className="reveal" delay={(i % 3) * 90}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-ink/65 leading-relaxed">{img.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Trailer({ t }: { t: Gallery }) {
  return (
    <section className="bg-nile-900 text-sand-50 grain">
      <PerfSeam dark />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <Reveal className="reveal-lg mb-8">
          <SectionHeading heading={t.trailerHeading} tone="light" id="trailer" />
        </Reveal>
        <Reveal className="reveal" delay={100}>
          {t.trailerUrl ? (
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-nile-800">
              <iframe
                src={t.trailerUrl}
                title={t.trailerHeading}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : (
            <div className="aspect-video rounded-2xl border border-dashed border-sand-100/30 bg-sand-50/[0.04] flex items-center justify-center">
              <p className="font-display text-3xl sm:text-4xl text-sand-100/80">{t.trailerComingSoon}</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function InstagramBlock({ t, href }: { t: Gallery; href: string }) {
  return (
    <section className="bg-sand-100">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">
        <Reveal className="reveal-lg flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <SectionHeading heading={t.instagramHeading} id="instagram" />
            <p className="mt-3 text-ink/70">{t.instagramIntro}</p>
          </div>
          <a href={href} target="_blank" rel="noopener noreferrer" className={`${btn.darkFilled} self-start sm:self-auto`}>
            <SocialIcon name="instagram" />
            {t.instagramButton}
            <ExternalArrow />
          </a>
        </Reveal>
        {t.instagramPosts.length > 0 && (
          <Reveal className="reveal" delay={100}>
            <InstagramEmbed posts={t.instagramPosts} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
