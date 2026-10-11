import { Reveal } from "../Reveal";
import { WaveLines } from "./primitives";

/**
 * Compact dark title band for the four sub-pages. The absolute Nav sits over
 * the top of it, so it carries enough top padding to clear the header and the
 * phone chip strip.
 */
export function PageHero({
  kicker,
  heading,
  intro,
  children,
}: {
  kicker?: string;
  heading: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-nile-900 text-sand-50 grain">
      <WaveLines tone="white" className="opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 pt-36 sm:pt-44 pb-14 sm:pb-20">
        <Reveal className="reveal-lg max-w-3xl">
          {kicker && <p className="kicker kicker-anim text-sand-300 mb-5">{kicker}</p>}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.92] text-sand-50">
            {heading}
          </h1>
          {intro && (
            <p className="mt-6 text-lg md:text-xl text-sand-100/85 font-light leading-relaxed max-w-prose">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
