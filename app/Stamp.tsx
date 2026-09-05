import Image from "next/image";
import { useId } from "react";

const STAMPS = {
  sudan: {
    src: "/img/stamp-sudan.png",
    alt: "Vintage Sudanese postage stamp — Republican Palace, 2pt",
    aspect: 893 / 752,
  },
  magazine: {
    src: "/img/stamp-magazine.png",
    alt: "Masthead of a vintage Sudanese magazine, Majallat al-Nahda al-Sudaniyya",
    aspect: 766 / 195,
  },
} as const;

export function StampBadge({
  className = "",
  variant = "sudan",
  size = 128,
  tilt = "-4deg",
  sway = true,
  interactive = true,
}: {
  className?: string;
  variant?: keyof typeof STAMPS;
  size?: number;
  tilt?: string;
  sway?: boolean;
  interactive?: boolean;
}) {
  const stamp = STAMPS[variant];
  return (
    <div className={`shrink-0 ${className}`}>
      <div
        className={sway ? "stamp-sway" : ""}
        style={{
          ["--tilt" as string]: tilt,
          transform: sway ? undefined : `rotate(${tilt})`,
        }}
      >
        <div
          className={`bg-sand-50 p-[6px] shadow-[0_10px_30px_-8px_rgba(24,19,12,0.45)] ${
            interactive ? "stamp-hover" : ""
          }`}
          style={{ width: size, height: size / stamp.aspect }}
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={stamp.src}
              alt={stamp.alt}
              fill
              sizes={`${size}px`}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function StampWatermark({
  className = "",
  variant = "sudan",
  size = 640,
  tilt = "-8deg",
  mode = "multiply",
  opacity = 0.06,
}: {
  className?: string;
  variant?: keyof typeof STAMPS;
  size?: number;
  tilt?: string;
  mode?: "multiply" | "screen";
  opacity?: number;
}) {
  const stamp = STAMPS[variant];
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none absolute ${
        mode === "screen" ? "mix-blend-screen" : "mix-blend-multiply"
      } ${className}`}
      style={{
        width: size,
        height: size / stamp.aspect,
        transform: `rotate(${tilt})`,
        opacity,
      }}
    >
      <Image
        src={stamp.src}
        alt=""
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
}

export function Postmark({
  className = "",
  label = "RETURNING SANDS",
  animate = false,
}: {
  className?: string;
  label?: string;
  animate?: boolean;
}) {
  const id = `postmark-path-${useId()}`;
  return (
    <svg
      viewBox="0 0 120 120"
      width="56"
      height="56"
      className={`${animate ? "postmark-draw" : ""} ${className}`}
      aria-hidden
    >
      <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {label && (
        <>
          <path
            id={id}
            fill="none"
            d="M 60,25 A 35,35 0 0 1 60,95 A 35,35 0 0 1 60,25"
          />
          <text fontSize="8.2" letterSpacing="2.4" fill="currentColor" opacity="0.85">
            <textPath href={`#${id}`} startOffset="2%">
              {label} • {label} •
            </textPath>
          </text>
        </>
      )}
      <line x1="20" y1="42" x2="100" y2="78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <line x1="22" y1="55" x2="98" y2="88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function PerfSeam({ dark = false }: { dark?: boolean }) {
  return <div className={`perf-seam ${dark ? "on-dark" : ""}`} aria-hidden />;
}
