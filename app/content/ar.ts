import type { DeepPartial } from "./index";
import type { SiteContent } from "./types";

/**
 * Arabic copy for the /ar edition.
 *
 * Narrative copy re-translated after the English rewrite is approved.
 *
 * STATUS: PARTIAL. Only keys whose English did not change in the five-page
 * restructure are kept here (navigation, labels, stats, donation details,
 * the verbatim Ali Nour quotation). Everything else falls back to English
 * until the new narrative copy is translated and reviewed by a native speaker.
 *
 * Rules
 * - DeepPartial overlay on en.ts: a missing key falls back to English. Arrays
 *   must be supplied in full (nav.links, footer.links, stake.stats...).
 * - `href`, `email`, `phone`, `key`, `links`, `bank`, `network` are identical to en.
 * - Proper nouns (people, SIMA, Stripe, IBAN, BIC, Sundance, Blue Shield) are
 *   left in Latin script or transliterated; the reviewer decides which.
 * - Western numerals kept throughout (2026, 60%).
 */
export const ar: DeepPartial<SiteContent> = {
  brand: {
    name: "عودة الرمال",
    arabic: "عودة الرمال",
  },

  ogImage: {
    titleLead: "عودة",
    titleEmphasis: "الرمال",
  },

  nav: {
    links: [
      { key: "home", label: "الرئيسية" },
      { key: "events", label: "الفعاليات" },
      { key: "about", label: "من نحن" },
      { key: "gallery", label: "المعرض" },
      { key: "donate", label: "تبرّع" },
    ],
    donate: "تبرّع",
    sectionsLabel: "الصفحات",
  },

  langSwitch: {
    toArabic: "عربي",
    toEnglish: "English",
  },

  social: {
    ariaLabel: "عودة الرمال على {network}",
    networks: [
      {
        network: "instagram",
        label: "إنستغرام",
        handle: "@returningsands",
        href: "https://www.instagram.com/returningsands",
      },
      {
        network: "linkedin",
        label: "لينكدإن",
        handle: "Returning Sands",
        href: "https://www.linkedin.com/company/returningsands",
      },
    ],
  },

  hero: {
    imageAlt: "شروق الشمس فوق جسر في الخرطوم",
    titleLead: "عودة",
    titleEmphasis: "الرمال",
    donateButton: "تبرّع",
  },

  stake: {
    stats: [
      { value: "60%", label: "من مقتنيات المتحف القومي السوداني نُهبت خلال السنوات الثلاث الأخيرة." },
      { value: "+12 مليون", label: "شخص نزحوا منذ بداية الحرب في 2023." },
      { value: "مستمر", label: "تدمير متعمد للمتاحف والأرشيفات والمواقع التاريخية." },
    ],
  },

  cities: {
    alt: "جواز سفر مفتوح: ختم عودة الرمال على الصفحة اليسرى، وأختام تأشيرات القاهرة ونيويورك ولندن على الصفحة اليمنى",
    navLabel: "الفعاليات حسب المدينة",
    cairo: "فعاليات القاهرة",
    london: "فعاليات لندن",
    nyc: "فعاليات نيويورك",
  },

  filmTeaser: {
    logline:
      "من المنفى في مصر، ينسّق علي نور معركة السودان لإبقاء تراثه حيًّا. وبينما تحاصَر الذاكرة الوطنية، يبذل علي وفريقه من المتطوعين الشجعان كل ما في وسعهم لحماية مستقبل السودان مع الحفاظ على خيطه الممتد إلى الماضي.",
  },

  donateBand: {
    button: "تبرّع",
  },

  about: {
    film: {
      loglineLabel: "ملخص الفيلم",
      logline:
        "من المنفى في مصر، ينسّق علي نور معركة السودان لإبقاء تراثه حيًّا. وبينما تحاصَر الذاكرة الوطنية، يبذل علي وفريقه من المتطوعين الشجعان كل ما في وسعهم لحماية مستقبل السودان مع الحفاظ على خيطه الممتد إلى الماضي.",
      ali: {
        name: "علي نور",
        quote:
          "«تحت أنقاض المنازل والمستشفيات تكمن جبهة أخرى في هذه الحرب: المحو المنهجي للذاكرة الثقافية لأمة بأكملها.»",
      },
      director: {
        name: "عائشة شريف",
        role: "مخرجة · زميلة Sundance x Adobe Ignite لعام 2026",
      },
    },
    team: {
      coreTeam: [
        { name: "جنى خليل", role: "منسقة الأثر · القاهرة" },
        { name: "عفراء العقب", role: "مؤرخة التاريخ الشفوي" },
        { name: "أنيسة إسترادا", role: "باحثة · الحفاظ على التراث التاريخي" },
        { name: "كيليان لافيل", role: "مدير المالية والعمليات" },
        { name: "مايكل إسحاق", role: "باحث" },
      ],
    },
    partners: {
      items: [
        "مجلس الفنون في برمودا",
        "المجلس الثقافي البريطاني",
        "كلام أفلام",
        "معهد Sundance",
        "Sudan Human Rights Hub",
        "Culture House",
        "الجامعة الأمريكية بالقاهرة",
        "SUDAAK",
        "الدرع الأزرق الدولي",
      ],
    },
    contact: {
      mailSubject: "عودة الرمال",
    },
  },

  donate: {
    kicker: "تبرّع",
    us: {
      kicker: "الولايات المتحدة",
      heading: "تبرّع عبر SIMA Studios",
      tagline:
        "التبرعات من الولايات المتحدة معفاة من الضرائب إلى أقصى حد يسمح به القانون عبر راعينا المالي SIMA Studios (منظمة 501(c)(3)).",
      paypalButton: "تبرّع عبر SIMA",
      sponsorButton: "صفحتنا على SIMA",
    },
    uk: {
      heading: "تبرّع مباشرةً لشركة Returning Sands CIC",
      cardButton: "تبرّع بالبطاقة",
      bankLabels: {
        accountName: "اسم الحساب",
        sortCode: "رمز الفرع (Sort code)",
        accountNumber: "رقم الحساب",
        iban: "IBAN",
        bic: "BIC",
      },
      fallback: {
        bodyLead: "الدفع بالبطاقة بالجنيه الإسترليني وبيانات التحويل البنكي قادمة قريبًا. في هذه الأثناء، راسلنا على",
        bodyTail: "وسنرسل لك البيانات مباشرةً.",
        button: "راسل فريق التبرعات",
        mailSubject: "تبرع لعودة الرمال",
      },
    },
    note: "Returning Sands CIC شركة غير ربحية بالكامل؛ تُعاد جميع الأموال إلى خدمة المهمة.",
  },

  thanks: {
    heading: "شكرًا لك.",
    body: "تم تبرعك بنجاح، والإيصال في طريقه إلى بريدك. كل هبة تذهب مباشرةً إلى توثيق التراث المهدَّد وإتمام الفيلم.",
  },

  mailingList: {
    label: "انضم إلى القائمة البريدية",
    placeholder: "you@example.com",
    join: "انضمام",
    joining: "جارٍ الانضمام…",
    consent:
      "نعم، أرسلوا لي من حين لآخر أخبار الفعاليات والفيلم وكيفية استخدام التبرعات. يمكنني إلغاء الاشتراك في أي وقت.",
    consentSuffix: "Returning Sands Community Interest Company، رقم السجل 17311689.",
    success:
      "أصبحت على القائمة. شكرًا لك، سنتواصل معك بشأن الفعاليات والفيلم وكيفية استخدام التبرعات.",
    errorLead: "حدث خطأ ما. يرجى المحاولة مرة أخرى، أو مراسلتنا على",
    errorTail: ".",
  },

  footer: {
    navigateKicker: "الصفحات",
    links: [
      { key: "home", label: "الرئيسية" },
      { key: "events", label: "الفعاليات" },
      { key: "about", label: "من نحن" },
      { key: "gallery", label: "المعرض" },
      { key: "donate", label: "تبرّع" },
    ],
    copyrightPrefix: "©",
    copyrightSuffix: "Returning Sands CIC",
    cities: "نيويورك · لندن · القاهرة · الخرطوم",
  },
};
