"use client";

import { useState } from "react";

// Web3Forms access key: public by design, only lets the site submit to the
// form that forwards to info@returningsands.org.
const WEB3FORMS_KEY = "b24cc743-7a95-4a52-9fcc-5427cf5e251b";
const ENDPOINT = "https://api.web3forms.com/submit";
const CONSENT_TEXT =
  "Yes, email me occasionally about events, the film and how donations are used. Unsubscribe any time.";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Mailing-list sign-up. Posts to Web3Forms, which emails the submission to
 * info@returningsands.org. That email (address + consent statement + time)
 * is the consent record. Swap ENDPOINT for the newsletter provider's API
 * when one is chosen.
 */
export function MailingListForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const light = tone === "light";
  const input = light
    ? "bg-sand-50/[0.06] border-sand-100/25 text-sand-50 placeholder:text-sand-100/40 focus:border-sand-300"
    : "bg-white border-ink/20 text-ink placeholder:text-ink/40 focus:border-ochre-600";
  const button = light
    ? "bg-sand-50 text-nile-900 hover:bg-sand-200 disabled:opacity-40"
    : "bg-ochre-600 text-sand-50 hover:bg-ochre-500 disabled:opacity-40";
  const text = light ? "text-sand-100/70" : "text-ink/65";

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed || !email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Mailing list sign-up — returningsands.org",
          from_name: "Returning Sands website",
          email,
          consent: CONSENT_TEXT,
          source: typeof window !== "undefined" ? window.location.href : "returningsands.org",
          botcheck: "",
        }),
      });
      const data = (await res.json()) as { success?: boolean };
      setStatus(data.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className={`text-sm leading-relaxed ${text}`}>
        You&rsquo;re on the list. Thank you, we&rsquo;ll be in touch about
        events, the film and how donations are being used.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <label htmlFor={`ml-email-${tone}`} className={`text-sm ${text}`}>
        Join the mailing list
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id={`ml-email-${tone}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 rounded-full border px-5 py-2.5 text-sm outline-none transition-colors ${input}`}
        />
        <button
          type="submit"
          disabled={!agreed || !email || status === "sending"}
          className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm transition-colors ${button}`}
        >
          {status === "sending" ? "Joining…" : "Join"}
        </button>
      </div>
      {/* Honeypot for bots; Web3Forms ignores submissions where this is filled. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden />
      <label className={`flex items-start gap-3 text-xs leading-relaxed ${text}`}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#b8651f]"
        />
        <span>
          {CONSENT_TEXT} Returning Sands Community Interest Company, no.
          17311689.
        </span>
      </label>
      {status === "error" && (
        <p role="alert" className={`text-xs ${text}`}>
          Something went wrong. Please try again, or email{" "}
          <a href="mailto:info@returningsands.org" className="underline">
            info@returningsands.org
          </a>
          .
        </p>
      )}
    </form>
  );
}
