import Image from "next/image";
import { useId } from "react";

export function StampBadge({
  className = "",
  size = 128,
  tilt = "-4deg",
}: {
  className?: string;
  size?: number;
  tilt?: string;
}) {
  return (
    <div
      className={`shrink-0 bg-sand-50 p-[6px] shadow-[0_10px_30px_-8px_rgba(24,19,12,0.45)] ${className}`}
      style={{ width: size, height: size * 0.84, transform: `rotate(${tilt})` }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src="/img/stamp-sudan.png"
          alt="Vintage Sudanese postage stamp — Republican Palace, 2pt"
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function Postmark({
  className = "",
  label = "RETURNING SANDS",
}: {
  className?: string;
  label?: string;
}) {
  const id = `postmark-path-${useId()}`;
  return (
    <svg
      viewBox="0 0 120 120"
      width="56"
      height="56"
      className={className}
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
