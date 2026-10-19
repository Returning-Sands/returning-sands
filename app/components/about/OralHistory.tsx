import Image from "next/image";
import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { SectionHeading } from "../primitives";

export function OralHistory({ t }: { t: SiteContent["about"]["oralHistory"] }) {
  return (
    <section className="bg-sand-100">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28 grid gap-12 md:grid-cols-12 items-center">
        <Reveal className="md:col-span-4 relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink reveal-lg parallax">
          <Image
            src="/img/woman.jpg"
            alt={t.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center zoom-in"
          />
        </Reveal>
        <Reveal className="md:col-span-7 md:col-start-6 reveal" delay={120}>
          <SectionHeading heading={t.heading} id="oral-history" />
          {/* Blank lines in the copy become separate paragraphs. */}
          {t.body.split(/\n\s*\n/).map((para) => (
            <p key={para.slice(0, 24)} className="mt-6 text-lg text-ink/80 leading-relaxed">
              {para}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
