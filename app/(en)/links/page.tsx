import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "../../content";
import { ExternalArrow, Mark, SocialIcon } from "../../components/primitives";
import { SITE_URL } from "../../routes";

// QR-code landing page. A printed QR code can only hold one URL, so it points
// here and this page fans out to Donate (Stripe), Instagram and the website.
// Kept out of search results and the sitemap: people arrive by scanning.
export const metadata: Metadata = {
  title: "Links | Returning Sands",
  description: "Donate to Returning Sands, follow us on Instagram, and explore the campaign.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/links" },
  robots: { index: false, follow: false },
};

const BASE =
  "inline-flex w-full items-center justify-center gap-2 border-ink font-mono uppercase tracking-wider focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nile-800";

// Donate is the primary action: taller, bigger, bold, with a hard ink
// "printed stamp" shadow that settles when pressed.
const DONATE = `${BASE} min-h-[64px] border-2 bg-ochre-500 px-5 py-4 text-lg font-bold text-sand-50 shadow-[5px_5px_0_var(--ink)] transition-[transform,box-shadow] hover:bg-ochre-600 active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_var(--ink)]`;

const SECONDARY = `${BASE} min-h-[52px] border bg-transparent px-5 py-3 text-base text-ink hover:bg-sand-100`;

export default function Page() {
  const t = getContent("en");
  const stripe = t.donate.uk.links.stripe;
  const instagram = t.social.networks.find((n) => n.network === "instagram");

  return (
    <main className="flex flex-1 items-start justify-center px-5 py-12 sm:py-20">
      <div className="flex w-full max-w-md flex-col items-center text-center">
        <Mark tone="black" height={160} priority className="-rotate-3" />
        <h1 className="sr-only">{t.brand.name}</h1>
        <p className="mt-6 text-lg leading-relaxed text-nile-700">Protecting Sudan&apos;s cultural heritage</p>

        <div className="mt-10 w-full">
          {stripe ? (
            <a href={stripe} target="_blank" rel="noopener noreferrer" className={DONATE}>
              <HeartIcon />
              Donate
              <ExternalArrow />
            </a>
          ) : (
            <Link href="/donate" className={DONATE}>
              <HeartIcon />
              Donate
            </Link>
          )}
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-ink/70">
            Secure card payment via Stripe
          </p>
        </div>

        <ul className="mt-8 flex w-full list-none flex-col gap-4 p-0">
          {instagram && (
            <li>
              <a href={instagram.href} target="_blank" rel="noopener noreferrer" className={SECONDARY}>
                <SocialIcon name="instagram" />
                Instagram
                <ExternalArrow />
              </a>
            </li>
          )}
          <li>
            <Link href="/" className={SECONDARY}>
              Visit our website
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.9 4.5c2.1 0 3.6 1.1 5.1 3 1.5-1.9 3-3 5.1-3 3.9 0 6 3.9 4.5 7.3C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}
