/**
 * Shape of all user-visible site copy. `en.ts` is the source of truth; other
 * locales overlay a DeepPartial of this onto `en` (see ./index.ts).
 *
 * Conventions
 * - Headings with inline emphasis are split into `headingLead` /
 *   `headingEmphasis` / `headingTail` rather than embedding markup.
 * - Keys named `links`, `bank`, `href`, `src`, `email`, `phone`, `network`
 *   and `id` are NOT translatable and can be skipped on a translator sheet.
 * - Arrays are replaced wholesale when overlaying a locale, never merged
 *   element-by-element.
 */

import type { ThanksText } from "../Thanks";
import type { MailingListText } from "../MailingList";

export type LinkItem = { readonly label: string; readonly href: string };

export type Stat = { readonly value: string; readonly label: string };

export type ScheduleRow = { readonly label: string; readonly value: string };

export type Producer = {
  readonly name: string;
  readonly role: string;
  readonly base: string;
  readonly bio: string;
};

export type CoreTeamMember = { readonly name: string; readonly role: string };

export type TimelineEntry = {
  readonly when: string;
  readonly title: string;
  readonly points: readonly string[];
};

export type EventItem = {
  readonly label: string;
  readonly when: string;
  readonly body: string;
};

export type EventCity = {
  readonly city: string;
  readonly when: string;
  readonly body: string;
  readonly items: readonly EventItem[];
};

export type SocialNetwork = {
  /** Non-translatable id used to pick the icon. */
  readonly network: "instagram" | "linkedin";
  readonly label: string;
  readonly handle: string;
  readonly href: string;
};

export type ContactPerson = {
  readonly role: string;
  readonly name: string;
  readonly buttonLabel: string;
  /** Non-translatable. */
  readonly email: string;
  /** Non-translatable. */
  readonly phone: string;
  readonly city: string;
};

export type BankDetails = {
  readonly accountName: string;
  readonly sortCode: string;
  readonly accountNumber: string;
  readonly iban?: string;
  readonly bic?: string;
};

export type SiteContent = {
  readonly brand: {
    readonly name: string;
    readonly arabic: string;
  };

  /** Strings for app/layout.tsx metadata (layout.tsx is not wired up yet). */
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly openGraph: { readonly title: string; readonly description: string };
    readonly twitter: { readonly title: string; readonly description: string };
    readonly ogImageAlt: string;
  };

  /** Visible text rendered inside app/opengraph-image.tsx. */
  readonly ogImage: {
    readonly kicker: string;
    readonly titleLead: string;
    readonly titleEmphasis: string;
    readonly byline: string;
  };

  readonly nav: {
    readonly links: readonly LinkItem[];
    readonly donate: string;
  };

  /**
   * Language switcher labels. Each is written in the TARGET language and is
   * the same in every locale file (the English site shows "عربي", the Arabic
   * site shows "English"), so translators can leave these as they are.
   */
  readonly langSwitch: {
    readonly toArabic: string;
    readonly toEnglish: string;
  };

  readonly social: {
    /** `{network}` is replaced with the network label. */
    readonly ariaLabel: string;
    readonly networks: readonly SocialNetwork[];
  };

  readonly hero: {
    readonly imageAlt: string;
    readonly kicker: string;
    readonly titleLead: string;
    readonly titleEmphasis: string;
    readonly intro: string;
    readonly schedule: readonly ScheduleRow[];
  };

  readonly openingQuote: {
    readonly imageAlt: string;
    readonly kicker: string;
    readonly quote: string;
    readonly attribution: string;
  };

  readonly stake: {
    readonly kicker: string;
    readonly headingLead: string;
    readonly headingEmphasis: string;
    readonly paragraphs: readonly string[];
    readonly stats: readonly Stat[];
  };

  readonly campaign: {
    readonly kicker: string;
    readonly headingLead: string;
    readonly headingEmphasis: string;
    readonly headingTail: string;
    /** "…events in <b>Cairo</b>, <b>London</b>, and <b>New York</b> — serving…" */
    readonly p1: {
      readonly lead: string;
      readonly cities: readonly [string, string, string];
      readonly separator: string;
      readonly lastSeparator: string;
      readonly tail: string;
    };
    readonly p2: string;
    readonly p3: string;
  };

  readonly goals: {
    readonly kicker: string;
    readonly heading: string;
    readonly items: readonly string[];
  };

  readonly documentary: {
    readonly kicker: string;
    readonly headingLead: string;
    readonly headingEmphasis: string;
    readonly headingTail: string;
    readonly p1: string;
    readonly p2Lead: string;
    readonly p2Emphasis: string;
    readonly p2Tail: string;
    readonly imageAlt: string;
    readonly loglineKicker: string;
    readonly logline: string;
  };

  readonly aliNour: {
    readonly imageAlt: string;
    readonly kicker: string;
    readonly heading: string;
    readonly p1: string;
    readonly p2: string;
    readonly quote: string;
    readonly attribution: string;
  };

  readonly directorsNote: {
    readonly kicker: string;
    readonly name: string;
    readonly role: string;
    readonly quote: string;
    readonly bodyLead: string;
    readonly bodyTitle: string;
    readonly bodyTail: string;
  };

  readonly events: {
    readonly kicker: string;
    readonly headingLead: string;
    readonly headingEmphasis: string;
    readonly intro: string;
    readonly cities: readonly EventCity[];
  };

  readonly oralHistory: {
    readonly imageAlt: string;
    readonly kicker: string;
    readonly heading: string;
    readonly p1: string;
    readonly p2: string;
  };

  readonly timeline: {
    readonly kicker: string;
    readonly headingLead: string;
    readonly headingEmphasis: string;
    readonly headingTail: string;
    readonly entries: readonly TimelineEntry[];
  };

  readonly closingQuote: {
    readonly imageAlt: string;
    readonly kicker: string;
    readonly quote: string;
    readonly attribution: string;
  };

  readonly team: {
    readonly kicker: string;
    readonly headingLead: string;
    readonly headingEmphasis: string;
    readonly headingTail: string;
    readonly intro: string;
    readonly producers: readonly Producer[];
    readonly coreTeamKicker: string;
    readonly coreTeam: readonly CoreTeamMember[];
  };

  readonly donate: {
    readonly kicker: string;
    readonly headingLead: string;
    readonly headingEmphasis: string;
    readonly intro: string;
    readonly us: {
      readonly kicker: string;
      readonly heading: string;
      readonly tagline: string;
      readonly paypalButton: string;
      readonly sponsorButton: string;
      /** Non-translatable. */
      readonly links: {
        readonly sponsorPage: string;
        readonly paypal: string;
      };
    };
    readonly uk: {
      readonly kicker: string;
      readonly heading: string;
      readonly body: string;
      readonly cardButton: string;
      readonly bankLabels: {
        readonly accountName: string;
        readonly sortCode: string;
        readonly accountNumber: string;
        readonly iban: string;
        readonly bic: string;
      };
      /** Shown when neither a Stripe link nor bank details are configured. */
      readonly fallback: {
        readonly bodyLead: string;
        readonly bodyTail: string;
        readonly button: string;
        readonly mailSubject: string;
      };
      /** Non-translatable. */
      readonly links: {
        readonly stripe: string | null;
        readonly donationsEmail: string;
      };
      /** Non-translatable. */
      readonly bank: BankDetails | null;
    };
    readonly note: string;
  };

  readonly thanks: ThanksText;

  readonly mailingList: MailingListText;

  readonly contact: {
    readonly kicker: string;
    readonly headingLead: string;
    readonly headingEmphasis: string;
    readonly bodyLead: string;
    /** Non-translatable. */
    readonly email: string;
    readonly bodyTail: string;
    readonly mailSubject: string;
    readonly followKicker: string;
    readonly people: readonly [ContactPerson, ContactPerson];
  };

  readonly footer: {
    readonly blurb: string;
    readonly navigateKicker: string;
    readonly links: readonly LinkItem[];
    readonly partnersKicker: string;
    readonly partners: readonly string[];
    /** Rendered as `${copyrightPrefix} ${year} ${copyrightSuffix}`. */
    readonly copyrightPrefix: string;
    readonly copyrightSuffix: string;
    readonly cities: string;
  };
};
