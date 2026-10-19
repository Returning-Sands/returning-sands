import Image from "next/image";
import { Reveal } from "../Reveal";

/**
 * Compact dark title band for the four sub-pages. The absolute Nav sits over
 * the top of it, so it carries enough top padding to clear the header and the
 * phone chip strip. Pass `image` for a full-bleed photograph behind the text,
 * treated the same way as the home hero (dimmed, gradient, grain).
 */
export function PageHero({
  kicker,
  heading,
  intro,
  image,
  children,
}: {
  kicker?: string;
  heading: string;
  intro?: string;
  image?: { src: string; alt: string; position?: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-nile-900 text-sand-50 grain">
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
            style={{ objectPosition: image.position ?? "50% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-nile-900/85 via-nile-900/40 to-nile-900/70" />
        </>
      )}
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
