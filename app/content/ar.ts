import type { DeepPartial } from "./index";
import type { SiteContent } from "./types";

/**
 * Arabic copy for the /ar edition.
 *
 * STATUS: DRAFT SCAFFOLD — NOT REVIEWED BY A NATIVE SPEAKER.
 *
 * Only short interface strings are filled in here (navigation, buttons,
 * form labels, footer). They are standard vocabulary but still need a
 * native-speaker check before the edition is announced. All narrative copy
 * (headings, paragraphs, bios, event descriptions, quotes) is deliberately
 * left out so it FALLS BACK TO ENGLISH on /ar until the translation sheet
 * (Testing\Returning Sands\Translation) comes back from the translators.
 *
 * Rules
 * - This is a DeepPartial overlay on en.ts: omit a key and the English value
 *   is used. Arrays must be supplied in full (nav.links, footer.links...).
 * - Keep `href`, `email`, `phone`, `links`, `bank`, `network` identical to en.
 * - Proper nouns (SIMA, Stripe, IBAN, BIC) stay in Latin script.
 */
export const ar: DeepPartial<SiteContent> = {
  brand: {
    // Wordmark in the Arabic edition. The stamp motif already carries both.
    name: "عودة الرمال",
    arabic: "عودة الرمال",
  },

  meta: {
    title: "عودة الرمال — حملة لحماية التراث الثقافي السوداني وفيلم وثائقي",
    description:
      "حملة وفيلم وثائقي قصير لحماية الذاكرة الثقافية السودانية، من خلال فعاليات في القاهرة ولندن ونيويورك (2026–2027).",
    openGraph: {
      title: "عودة الرمال",
      description:
        "حملة لحماية التراث الثقافي السوداني وفيلم وثائقي قصير — فعاليات في القاهرة ولندن ونيويورك، 2026–2027.",
    },
    twitter: {
      title: "عودة الرمال",
      description:
        "حملة لحماية التراث الثقافي السوداني وفيلم وثائقي قصير — فعاليات في القاهرة ولندن ونيويورك، 2026–2027.",
    },
  },

  nav: {
    links: [
      { label: "ما هو على المحك", href: "#stake" },
      { label: "الحملة", href: "#campaign" },
      { label: "الفيلم", href: "#documentary" },
      { label: "الفعاليات", href: "#events" },
      { label: "الفريق", href: "#team" },
      { label: "اتصل بنا", href: "#contact" },
    ],
    donate: "تبرّع",
  },

  langSwitch: {
    toArabic: "عربي",
    toEnglish: "English",
  },

  social: {
    ariaLabel: "عودة الرمال على {network}",
  },

  donate: {
    kicker: "تبرّع",
    us: {
      kicker: "الولايات المتحدة",
      paypalButton: "تبرّع عبر SIMA",
      sponsorButton: "صفحتنا على SIMA",
    },
    uk: {
      kicker: "المملكة المتحدة وبقية العالم",
      cardButton: "تبرّع بالبطاقة",
      bankLabels: {
        accountName: "اسم الحساب",
        sortCode: "رمز الفرع (Sort code)",
        accountNumber: "رقم الحساب",
        iban: "IBAN",
        bic: "BIC",
      },
      fallback: {
        button: "راسل فريق التبرعات",
        mailSubject: "تبرع لعودة الرمال",
      },
    },
  },

  thanks: {
    heading: "شكرًا لك.",
  },

  mailingList: {
    label: "انضم إلى القائمة البريدية",
    placeholder: "you@example.com",
    join: "انضمام",
    joining: "جارٍ الانضمام…",
    errorLead: "حدث خطأ ما. يرجى المحاولة مرة أخرى، أو مراسلتنا على",
    errorTail: ".",
  },

  contact: {
    kicker: "اتصل بنا وادعمنا",
    followKicker: "تابعونا",
    mailSubject: "عودة الرمال",
  },

  footer: {
    navigateKicker: "التنقل",
    links: [
      { label: "ما هو على المحك", href: "#stake" },
      { label: "الحملة", href: "#campaign" },
      { label: "الفيلم الوثائقي", href: "#documentary" },
      { label: "الفعاليات", href: "#events" },
      { label: "الفريق", href: "#team" },
      { label: "تبرّع", href: "#donate" },
      { label: "اتصل بنا", href: "#contact" },
    ],
    partnersKicker: "الشركاء",
    cities: "نيويورك · لندن · القاهرة · الخرطوم",
  },
};
