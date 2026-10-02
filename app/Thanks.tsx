"use client";

import { useEffect, useState } from "react";

/** Copy for the banner; supplied by the server from app/content. */
export type ThanksText = {
  readonly heading: string;
  readonly body: string;
};

/**
 * Shows a thank-you note when a donor is redirected back from Stripe
 * (the payment link returns to /?thanks=1#donate). Reads the query string
 * on the client so the page itself stays fully static.
 */
export function ThanksBanner({ text }: { text: ThanksText }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("thanks") === "1") {
      setShow(true);
      // Tidy the URL so a refresh doesn't re-show the banner.
      window.history.replaceState(null, "", `${window.location.pathname}#donate`);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      role="status"
      className="mb-12 rounded-2xl border border-sand-300/40 bg-sand-50/[0.08] px-6 py-5 text-sand-50 max-w-3xl"
    >
      <p className="font-display text-2xl mb-1">{text.heading}</p>
      <p className="text-sand-100/80 leading-relaxed">{text.body}</p>
    </div>
  );
}
