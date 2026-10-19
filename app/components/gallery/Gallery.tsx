import Image from "next/image";
import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { ExternalArrow, SectionHeading, SocialIcon, btn } from "../primitives";

type Gallery = SiteContent["gallery"];

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

/**
 * Curated Instagram posts as plain image tiles that open the post. The images
 * are local copies (public/instagram), so they appear as fast as the rest of
 * the page; Instagram's embed script took several seconds and set cookies.
 */
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
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.instagramPosts.map((p, i) => (
              <Reveal as="li" key={p.href} className="reveal" delay={i * 90}>
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 end-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs text-ink shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                    <SocialIcon name="instagram" className="h-4 w-4" />
                    @returningsands
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
