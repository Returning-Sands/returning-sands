import Image from "next/image";
import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { BrandStamp, SectionHeading, WaveLines } from "../primitives";

/** About -> The film: logline, synopsis, Ali Nour profile with his quote, director. */
export function Film({ t }: { t: SiteContent["about"]["film"] }) {
  const { ali, director } = t;
  return (
    <section className="bg-nile-900 text-sand-50 grain relative overflow-hidden">
      <PerfSeam dark />
      <WaveLines tone="white" className="opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-6 reveal-lg">
            <BrandStamp name="RS_Documentary_white" height={110} className="mb-8 -rotate-3" />
            <SectionHeading kicker={t.kicker} heading={t.heading} tone="light" id="film" />
            <p className="mt-8 text-lg leading-relaxed text-sand-100/85 max-w-prose">{t.body}</p>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8 reveal" delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-nile-800 parallax">
              <Image
                src="/img/barbers.jpg"
                alt={t.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center zoom-in"
              />
            </div>
          </Reveal>
        </div>

        {/* Ali Nour */}
        <div className="mt-20 sm:mt-28 grid gap-12 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-5 relative aspect-[4/5] overflow-hidden rounded-2xl bg-nile-800 reveal-lg parallax">
            <Image
              src="/img/gateway.jpg"
              alt={ali.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center zoom-in"
            />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 reveal" delay={120}>
            <h3 className="font-display text-4xl sm:text-5xl leading-[0.98]">{ali.name}</h3>
            <p className="mt-2 text-sm text-sand-300">
              <a href="https://theblueshield.org/" target="_blank" rel="noopener noreferrer" className="hover-underline">
                {ali.role}
              </a>
            </p>
            <p className="mt-6 text-lg leading-relaxed text-sand-100/85">{ali.p1}</p>
            <p className="mt-4 text-lg leading-relaxed text-sand-100/85">{ali.p2}</p>
            <figure className="mt-10 border-s border-sand-300/40 ps-6">
              <blockquote className="font-display text-2xl sm:text-3xl leading-snug text-sand-50">
                {ali.quote}
              </blockquote>
              <figcaption className="mt-4 kicker text-sand-300">{ali.attribution}</figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Director */}
        <Reveal className="mt-20 sm:mt-28 grid gap-8 md:grid-cols-12 border-t border-sand-100/15 pt-12 reveal" delay={80}>
          <div className="md:col-span-4">
            <p className="kicker text-sand-300 mb-3">{director.label}</p>
            <h3 className="font-display text-3xl sm:text-4xl leading-[0.98]">{director.name}</h3>
            <p className="mt-2 text-sm text-sand-100/70">{director.role}</p>
          </div>
          <blockquote className="md:col-span-7 md:col-start-6 font-display text-2xl sm:text-3xl leading-[1.3] text-sand-50">
            {director.quote}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
