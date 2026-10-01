"use client";

import { useState } from "react";

const TO = "info@returningsands.org";

/**
 * Interim mailing-list sign-up. The site is fully static with no mail
 * provider yet, so the form composes a pre-filled email to info@ that the
 * visitor sends themselves. The received email is the consent record.
 * Swap the submit handler for the newsletter provider's API when chosen.
 */
export function MailingListForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const light = tone === "light";
  const input = light
    ? "bg-sand-50/[0.06] border-sand-100/25 text-sand-50 placeholder:text-sand-100/40 focus:border-sand-300"
    : "bg-white border-ink/20 text-ink placeholder:text-ink/40 focus:border-ochre-600";
  const button = light
    ? "bg-sand-50 text-nile-900 hover:bg-sand-200 disabled:opacity-40"
    : "bg-ochre-600 text-sand-50 hover:bg-ochre-500 disabled:opacity-40";
  const text = light ? "text-sand-100/70" : "text-ink/65";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed || !email) return;
    const subject = encodeURIComponent("Mailing list sign-up");
    const body = encodeURIComponent(
      `Please add ${email} to the Returning Sands mailing list.\n\n` +
        `I agree to receive occasional emails about events, the film and how donations are used. ` +
        `I understand I can unsubscribe at any time.`
    );
    window.location.href = `mailto:${TO}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p role="status" className={`text-sm leading-relaxed ${text}`}>
        Your email app should have opened with the sign-up ready to go. Hit
        send and you&rsquo;re on the list. If nothing opened, email{" "}
        <a href={`mailto:${TO}`} className="hover-underline underline">
          {TO}
        </a>{" "}
        with &ldquo;Mailing list&rdquo; in the subject.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3" noValidate={false}>
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
          disabled={!agreed || !email}
          className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm transition-colors ${button}`}
        >
          Join
        </button>
      </div>
      <label className={`flex items-start gap-3 text-xs leading-relaxed ${text}`}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#b8651f]"
        />
        <span>
          Yes, email me occasionally about events, the film and how donations
          are used. Unsubscribe any time. Returning Sands Community Interest
          Company, no. 17311689.
        </span>
      </label>
    </form>
  );
}
