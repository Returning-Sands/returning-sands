import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { Arrow, btn } from "../primitives";

/**
 * "Support the project" as an admission ticket, to sit with the passport and
 * stamps: the main panel carries the message, a dashed tear line with two
 * punched notches separates the stub, and the stub holds the Returning Sands
 * stamp and the Donate button. On phones the stub sits below the tear line.
 * Notches are circles in the page colour, so they read as cut-outs.
 */
export function DonateBand({ t, locale }: { t: SiteContent["donateBand"]; locale: Locale }) {
  const notch = "pointer-events-none absolute h-8 w-8 rounded-full bg-sand-50";
  return (
    <section className="bg-sand-50">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-24">
        <Reveal className="reveal-lg">
          <div className="grain relative grid overflow-hidden rounded-3xl bg-nile-900 text-sand-50 shadow-[0_18px_40px_-24px_rgba(20,30,40,0.6)] md:grid-cols-[1fr_auto]">

            <div className="relative px-8 py-10 sm:px-12 sm:py-12">
              <h2 className="font-display text-4xl sm:text-5xl leading-[0.98]">{t.heading}</h2>
              <p className="mt-4 max-w-2xl text-lg text-sand-100/80 leading-relaxed">{t.body}</p>
            </div>

            <div className="relative flex flex-col items-center justify-center gap-6 border-t-2 border-dashed border-sand-100/30 px-8 py-10 md:w-72 md:border-t-0 md:border-s-2 md:py-12">
              {/* Phones: notches at both ends of the horizontal tear line. */}
              <span aria-hidden className={`${notch} -top-4 -start-4 md:hidden`} />
              <span aria-hidden className={`${notch} -top-4 -end-4 md:hidden`} />
              {/* Desktop: notches at the top and bottom of the vertical tear line. */}
              <span aria-hidden className={`${notch} -top-4 -start-4 hidden md:block`} />
              <span aria-hidden className={`${notch} -bottom-4 -start-4 hidden md:block`} />
              <Image
                src="/brand/RS_logo_main_white.svg"
                alt=""
                aria-hidden
                width={160}
                height={100}
                unoptimized
                className="w-36 h-auto -rotate-6 opacity-90"
              />
              <Link href={pagePath(locale, "donate")} className={btn.lightFilled}>
                {t.button}
                <Arrow />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
