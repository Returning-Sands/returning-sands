import { SocialIcon } from "../primitives";

/** Small round email / LinkedIn buttons shown under a team member's name. */
export function PersonLinks({
  name,
  email,
  linkedin,
  size = "md",
}: {
  name: string;
  email?: string;
  linkedin?: string;
  size?: "sm" | "md";
}) {
  if (!email && !linkedin) return null;
  const dim = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const base = `inline-flex items-center justify-center rounded-full border border-ink/20 text-ink/70 hover:bg-ink hover:text-sand-50 hover:border-ink transition-colors ${dim}`;
  return (
    <div className="flex items-center gap-2">
      {email && (
        <a href={`mailto:${email}`} aria-label={`Email ${name}`} title={email} className={base}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className={icon}>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="m3.5 6.5 8.5 6.5 8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className={base}
        >
          <SocialIcon name="linkedin" className={icon} />
        </a>
      )}
    </div>
  );
}
