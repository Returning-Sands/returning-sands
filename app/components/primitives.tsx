import Image from "next/image";
import type { SiteContent } from "../content";

/** The Returning Sands oval stamp (brand logo). `tone` picks the white or black artwork. */
export function Mark({
  tone = "white",
  height = 44,
  className = "",
  priority = false,
}: {
  tone?: "white" | "black";
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  // Artwork is 1702x1134.
  const width = Math.round(height * (1702 / 1134));
  return (
    <Image
      src={tone === "white" ? "/brand/RS_logo_main_white.svg" : "/brand/RS_logo_main_blk.svg"}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
      priority={priority}
    />
  );
}

/** Event / section stamp from the brand kit (white artwork, for dark backgrounds). */
export function BrandStamp({
  name,
  height = 110,
  className = "",
  alt = "",
}: {
  name: string;
  height?: number;
  className?: string;
  alt?: string;
}) {
  const width = Math.round(height * (1531 / 1135));
  return (
    <Image
      src={`/brand/${name}.svg`}
      alt={alt}
      aria-hidden={alt === ""}
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
    />
  );
}

/** Wave-lines background texture from the brand kit. */
export function WaveLines({
  tone = "black",
  className = "",
}: {
  tone?: "black" | "white";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none absolute inset-0 bg-no-repeat bg-cover ${className}`}
      style={{
        backgroundImage: `url(/brand/Wave_lines_wide_${tone === "white" ? "white" : "blk"}.svg)`,
      }}
    />
  );
}

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="rtl:-scale-x-100">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className={`rtl:-scale-x-100 ${className}`}>
      <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  if (name === "instagram") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V17M8 7.5v.1M12 17v-4a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SocialLinks({
  t,
  tone = "light",
}: {
  t: SiteContent["social"];
  tone?: "light" | "dark";
}) {
  const base =
    tone === "light"
      ? "text-sand-100/80 hover:text-sand-50"
      : "text-ink/70 hover:text-ink";
  return (
    <ul className="flex items-center gap-5">
      {t.networks.map((s) => (
        <li key={s.network}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.ariaLabel.replace("{network}", s.label)}
            className={`inline-flex items-center gap-2 text-sm transition-colors ${base}`}
          >
            <SocialIcon name={s.network} />
            <span className="hover-underline">{s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/* Button class sets, shared so every call-to-action looks the same. */
export const btn = {
  /** Filled, for dark backgrounds. */
  lightFilled:
    "inline-flex items-center gap-3 rounded-full bg-sand-50 px-6 py-3 text-nile-900 hover:bg-sand-200 transition-colors",
  /** Outlined, for dark backgrounds. */
  lightOutline:
    "inline-flex items-center gap-3 rounded-full border border-sand-100/30 px-6 py-3 text-sand-50 hover:bg-sand-50 hover:text-nile-900 transition-colors",
  /** Filled, for light backgrounds. */
  darkFilled:
    "inline-flex items-center gap-3 rounded-full bg-ochre-600 px-6 py-3 text-sand-50 hover:bg-ochre-500 transition-colors",
  /** Outlined, for light backgrounds. */
  darkOutline:
    "inline-flex items-center gap-3 rounded-full border border-ink/25 px-6 py-3 text-ink hover:bg-ink hover:text-sand-50 transition-colors",
} as const;

/** Section heading block: small kicker (optional) + plain h2. */
export function SectionHeading({
  kicker,
  heading,
  tone = "dark",
  id,
  as: Tag = "h2",
  className = "",
}: {
  kicker?: string;
  heading: string;
  /** `dark` = dark text on light background. */
  tone?: "dark" | "light";
  id?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const kickerColour = tone === "dark" ? "text-ochre-600" : "text-sand-300";
  const headingColour = tone === "dark" ? "text-ink" : "text-sand-50";
  return (
    <div className={className}>
      {kicker && <p className={`kicker kicker-anim mb-4 ${kickerColour}`}>{kicker}</p>}
      <Tag
        id={id}
        className={`font-display text-4xl sm:text-5xl leading-[0.98] scroll-mt-28 ${headingColour}`}
      >
        {heading}
      </Tag>
    </div>
  );
}
