/**
 * Shape of all user-visible site copy. `en.ts` is the source of truth; other
 * locales overlay a DeepPartial of this onto `en` (see ./index.ts).
 *
 * Conventions
 * - One plain `heading` string per section. No split-emphasis headings.
 * - Keys named `href`, `src`, `email`, `phone`, `network`, `id`, `key`,
 *   `stamp`, `links`, `bank` and `trailerUrl` are NOT translatable and can be
 *   skipped on a translator sheet.
 * - Arrays are replaced wholesale when overlaying a locale, never merged
 *   element-by-element.
 */

import type { ThanksText } from "../Thanks";
import type { MailingListText } from "../MailingList";

import type { PageKey } from "../routes";

/** The five pages. Each exists at `/<path>` (en) and `/ar/<path>` (ar). */
export type { PageKey };

export type PageLink = { readonly key: PageKey; readonly label: string };

export type PageMeta = {
  /** Full <title> for the page. */
  readonly title: string;
  /** Meta description, 160 characters or fewer. */
  readonly description: string;
};

export type Stat = { readonly value: string; readonly label: string; readonly source?: Source };

export type ScheduleRow = { readonly label: string; readonly value: string };

export type Producer = {
  readonly name: string;
  readonly role: string;
  readonly base: string;
  readonly bio: string;
  /** Non-translatable. Omit if not public. */
  readonly email?: string;
  /** Non-translatable. Omit if not public. */
  readonly linkedin?: string;
};

export type CoreTeamMember = {
  readonly name: string;
  readonly role: string;
  /** Non-translatable. Omit if not public. */
  readonly email?: string;
  /** Non-translatable. LinkedIn profile URL; omit if not public. */
  readonly linkedin?: string;
};

/** A cited source for a figure. */
export type Source = { readonly label: string; readonly href: string };

export type EventCta = { readonly label: string; readonly href: string };

export type EventItem = {
  readonly title: string;
  readonly date: string;
  /** Null renders the "venue to be announced" placeholder. */
  readonly venue: string | null;
  readonly description: string;
  /** Non-translatable. Brand-kit stamp file name under /public/brand (no extension). */
  readonly stamp?: string;
  /** Null falls back to `events.defaultCta` (an email link). */
  readonly cta: EventCta | null;
};

export type EventCity = {
  /** Non-translatable anchor id on the Events page. */
  readonly id: "cairo" | "london" | "nyc";
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
  /** Non-translatable. Omitted when the person has no listed number. */
  readonly phone?: string;
  readonly city: string;
  /** Non-translatable. LinkedIn profile URL; omit if not public. */
  readonly linkedin?: string;
};

export type BankDetails = {
  readonly accountName: string;
  readonly sortCode: string;
  readonly accountNumber: string;
  readonly iban?: string;
  readonly bic?: string;
};

export type GalleryItem = {
  /** Non-translatable path under /public. */
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
};

/** An Instagram post shown via Instagram's own embed. `href` is the permalink. */
export type InstagramPost = {
  /** Non-translatable. */
  readonly href: string;
};

/** A partner or funder. `href` and `logo` are optional and non-translatable. */
export type Partner = {
  readonly name: string;
  readonly href?: string;
  /** Path under /public/partners to the organisation's supplied logo (SVG or PNG, dark-on-transparent). */
  readonly logo?: string;
};

export type SiteContent = {
  readonly brand: {
    readonly name: string;
    readonly arabic: string;
  };

  /** Per-page <title> and description, used by buildMetadata(). */
  readonly pages: Record<PageKey, PageMeta>;

  readonly meta: {
    readonly ogImageAlt: string;
  };

  /** Visible text rendered inside app/(en)/opengraph-image.tsx. */
  readonly ogImage: {
    readonly kicker: string;
    readonly titleLead: string;
    readonly titleEmphasis: string;
    readonly byline: string;
  };

  readonly nav: {
    readonly links: readonly PageLink[];
    /** Label of the filled Donate button. */
    readonly donate: string;
    /** aria-label for the phone chip strip. */
    readonly sectionsLabel: string;
  };

  /**
   * Language switcher labels. Each is written in the TARGET language and is
   * the same in every locale file, so translators can leave these as they are.
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

  /* ------------------------------------------------------------ Home */

  readonly hero: {
    readonly imageAlt: string;
    readonly kicker: string;
    readonly titleLead: string;
    readonly titleEmphasis: string;
    readonly intro: string;
    readonly donateButton: string;
    readonly eventsButton: string;
    readonly schedule: readonly ScheduleRow[];
  };

  readonly stake: {
    readonly kicker: string;
    readonly heading: string;
    readonly body: string;
    readonly stats: readonly Stat[];
    /** Label for the sources line under the stats, e.g. "Sources". */
    readonly sourcesLabel: string;
  };

  /** Passport spread with clickable city stamps. */
  readonly cities: {
    readonly kicker: string;
    readonly heading: string;
    readonly hint: string;
    readonly alt: string;
    readonly navLabel: string;
    readonly cairo: string;
    readonly london: string;
    readonly nyc: string;
  };

  readonly filmTeaser: {
    readonly kicker: string;
    readonly heading: string;
    readonly logline: string;
    readonly body: string;
    readonly button: string;
  };

  readonly donateBand: {
    readonly heading: string;
    readonly body: string;
    readonly button: string;
  };

  readonly galleryTeaser: {
    readonly heading: string;
    readonly body: string;
    readonly button: string;
    readonly instagramButton: string;
  };

  /* ---------------------------------------------------------- Events */

  readonly events: {
    readonly kicker: string;
    readonly heading: string;
    readonly intro: string;
    readonly venueTba: string;
    /** Used when an event has `cta: null`. `{event}` is replaced with the event title. */
    readonly defaultCta: {
      readonly label: string;
      /** Non-translatable. */
      readonly email: string;
      readonly subject: string;
    };
    readonly cities: readonly EventCity[];
  };

  /* ----------------------------------------------------------- About */

  readonly about: {
    readonly who: {
      readonly kicker: string;
      readonly heading: string;
      readonly body: string;
    };
    readonly goals: {
      readonly heading: string;
      readonly items: readonly string[];
    };
    readonly film: {
      readonly kicker: string;
      readonly heading: string;
      readonly body: string;
      readonly imageAlt: string;
      readonly ali: {
        readonly imageAlt: string;
        readonly name: string;
        readonly role: string;
        readonly p1: string;
        readonly p2: string;
        readonly quote: string;
        readonly attribution: string;
      };
      readonly director: {
        readonly label: string;
        readonly name: string;
        readonly role: string;
        readonly quote: string;
      };
    };
    readonly oralHistory: {
      readonly heading: string;
      readonly imageAlt: string;
      readonly body: string;
    };
    readonly team: {
      readonly heading: string;
      readonly intro: string;
      readonly producers: readonly Producer[];
      readonly coreTeamHeading: string;
      readonly coreTeam: readonly CoreTeamMember[];
    };
    readonly partners: {
      readonly heading: string;
      readonly items: readonly Partner[];
    };
    readonly contact: {
      readonly heading: string;
      readonly bodyLead: string;
      /** Non-translatable. */
      readonly email: string;
      readonly bodyTail: string;
      readonly mailSubject: string;
      readonly followHeading: string;
      readonly people: readonly ContactPerson[];
    };
  };

  /* --------------------------------------------------------- Gallery */

  readonly gallery: {
    readonly title: string;
    readonly intro: string;
    readonly photosHeading: string;
    readonly photosIntro: string;
    readonly items: readonly GalleryItem[];
    /** Non-translatable. Embeddable video URL, or null until the trailer exists. */
    readonly trailerUrl: string | null;
    readonly trailerHeading: string;
    readonly trailerComingSoon: string;
    readonly instagramHeading: string;
    readonly instagramIntro: string;
    readonly instagramButton: string;
    /** Curated posts, newest first. Rendered with Instagram's embed script. */
    readonly instagramPosts: readonly InstagramPost[];
  };

  /* ---------------------------------------------------------- Donate */

  readonly donate: {
    readonly kicker: string;
    readonly heading: string;
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

  /* ---------------------------------------------------------- Footer */

  readonly footer: {
    readonly blurb: string;
    readonly navigateKicker: string;
    readonly links: readonly PageLink[];
    /** Rendered as `${copyrightPrefix} ${year} ${copyrightSuffix}`. */
    readonly copyrightPrefix: string;
    readonly copyrightSuffix: string;
    readonly cities: string;
  };
};
