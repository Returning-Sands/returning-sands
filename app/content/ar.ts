import type { DeepPartial } from "./index";
import type { SiteContent } from "./types";

/**
 * Arabic copy for the /ar edition. Complete overlay for the five-page site.
 *
 * STATUS: FULL DRAFT, AI-ASSISTED, PENDING NATIVE-SPEAKER REVIEW.
 * Review copy: Testing\Returning Sands\Translation (regenerate the sheet from en.ts).
 *
 * Rules
 * - DeepPartial overlay on en.ts; arrays must be supplied in full.
 * - href / email / src / stamp / id / key / links / bank are identical to en.
 * - Proper nouns (people, SIMA, Stripe, IBAN, BIC, Sundance, Blue Shield) are
 *   transliterated or left in Latin script; the reviewer decides which.
 * - Western numerals throughout.
 */
export const ar: DeepPartial<SiteContent> = {
  brand: { name: "عودة الرمال", arabic: "عودة الرمال" },

  pages: {
    home: {
      title: "عودة الرمال: حملة لحماية التراث الثقافي السوداني وفيلم وثائقي",
      description:
        "حملة وفيلم وثائقي لحماية التراث الثقافي السوداني، مع فعاليات في القاهرة ولندن ونيويورك من نوفمبر 2026 إلى فبراير 2027.",
    },
    events: {
      title: "الفعاليات · عودة الرمال",
      description: "معارض وندوات وفعاليات لجمع التبرعات في القاهرة ولندن ونيويورك، من نوفمبر 2026 إلى فبراير 2027.",
    },
    about: {
      title: "من نحن · عودة الرمال",
      description: "من نحن، وما نعمل من أجله، والفيلم الوثائقي عن علي نور، ومشروع التاريخ الشفوي.",
    },
    team: {
      title: "الفريق والشركاء · عودة الرمال",
      description: "المنتجون والفريق الأساسي وراء عودة الرمال، وشركاؤنا وداعمونا، وكيفية التواصل معنا.",
    },
    gallery: {
      title: "المعرض · عودة الرمال",
      description: "صور أرشيفية من السودان، والإعلان التشويقي، وعودة الرمال على إنستغرام.",
    },
    donate: {
      title: "تبرّع · عودة الرمال",
      description: "تبرّع عبر SIMA Studios في الولايات المتحدة (معفى من الضرائب) أو مباشرةً لشركة Returning Sands CIC بالبطاقة أو التحويل البنكي.",
    },
    privacy: {
      title: "الخصوصية · عودة الرمال",
      description: "كيف تتعامل Returning Sands CIC مع المعلومات الشخصية من القائمة البريدية والتبرعات وهذا الموقع.",
    },
  },

  meta: { ogImageAlt: "عودة الرمال: حملة لحماية التراث الثقافي السوداني وفيلم وثائقي" },

  ogImage: {
    kicker: "حملة لحماية التراث الثقافي السوداني · 2026 إلى 2027",
    titleLead: "عودة",
    titleEmphasis: "الرمال",
    byline: "حملة وفيلم وثائقي من إنتاج باريس كيتزال سيستيلي ويوسف بشارة وكاميلا ماركيزي غونزاليس",
  },

  nav: {
    links: [
      { key: "home", label: "الرئيسية" },
      { key: "events", label: "الفعاليات" },
      { key: "about", label: "من نحن" },
      { key: "team", label: "الفريق" },
      { key: "gallery", label: "المعرض" },
      { key: "donate", label: "تبرّع" },
    ],
    donate: "تبرّع",
    sectionsLabel: "الصفحات",
  },

  langSwitch: { toArabic: "عربي", toEnglish: "English" },

  social: {
    ariaLabel: "عودة الرمال على {network}",
    networks: [
      { network: "instagram", label: "إنستغرام", handle: "@returningsands", href: "https://www.instagram.com/returningsands" },
      { network: "linkedin", label: "لينكدإن", handle: "Returning Sands", href: "https://www.linkedin.com/company/returningsands" },
    ],
  },

  /* ------------------------------------------------------------ Home */

  hero: {
    imageAlt: "شروق الشمس فوق جسر في الخرطوم",
    kicker: "حملة لحماية التراث الثقافي السوداني · 2026 إلى 2027",
    titleLead: "عودة",
    titleEmphasis: "الرمال",
    intro: "حملة وفيلم وثائقي لحماية التراث الثقافي السوداني في خضمّ واحدة من أكثر حروب العالم تدميرًا وأقلّها حضورًا في الإعلام.",
    donateButton: "تبرّع",
    eventsButton: "اطّلع على الفعاليات",
    schedule: [
      { label: "القاهرة", value: "ديسمبر 2026" },
      { label: "لندن", value: "يناير 2027" },
      { label: "نيويورك", value: "نوفمبر 2026 إلى فبراير 2027" },
    ],
  },

  stake: {
    kicker: "السياق",
    heading: "ما هو على المحك",
    body:
      "التراث الثقافي تعبير ملموس عن الهوية. وفي النزاع يتحول إلى هدف: وسيلة لتفكيك ذاكرة شعب وتماسكه واستمراريته. منذ 2023 شهد السودان أضرارًا واسعة لا يمكن إصلاحها في مواقعه الأثرية وأرشيفاته ومتاحفه. والتدمير مستمر. يعمل العاملون في مجال التراث في ظروف بالغة القسوة مع قلة في الظهور والدعم، وهم بحاجة إلى المساعدة والخبرة وموارد الحماية الآن.",
    stats: [
      {
        value: "60%",
        label: "من مقتنيات المتحف القومي السوداني نُهبت خلال احتلال الخرطوم.",
        source: { label: "NBC News، مارس 2026، نقلًا عن الهيئة العامة للآثار والمتاحف", href: "https://www.nbcnews.com/world/africa/museums-looted-priceless-artifacts-sudan-counts-cost-deadly-conflict-rcna260473" },
      },
      {
        value: "+12 مليون",
        label: "شخص نزحوا في ذروة الحرب التي بدأت في أبريل 2023.",
        source: { label: "المنظمة الدولية للهجرة، أبريل 2026", href: "https://www.iom.int/news/aid-system-under-pressure-needs-continue-grow-three-years-sudan-war" },
      },
      {
        value: "+20",
        label: "متحفًا تضررت، مع تأكيد نهب المجموعات وتهريبها.",
        source: { label: "اليونسكو، 2025 إلى 2026", href: "https://www.unesco.org/en/culture-emergencies/heritage-emergency-fund/urgent-safeguarding-response-damaged-collections-sudan-national-museum" },
      },
    ],
    sourcesLabel: "المصادر",
  },

  cities: {
    hint: "اضغط على ختم مدينة لعرض فعالياتها، أو على ختم عودة الرمال للتبرع.",
    alt: "جواز سفر مفتوح: ختم عودة الرمال على الصفحة اليسرى، وأختام تأشيرات القاهرة ونيويورك ولندن على الصفحة اليمنى",
    cairo: "فعاليات القاهرة",
    london: "فعاليات لندن",
    nyc: "فعاليات نيويورك",
    donate: "تبرّع",
  },

  filmTeaser: {
    kicker: "الفيلم الوثائقي",
    heading: "الفيلم",
    logline:
      "من المنفى في مصر، ينسّق علي نور معركة السودان لإبقاء تراثه حيًّا. وبينما تحاصَر الذاكرة الوطنية، يبذل علي وفريقه من المتطوعين الشجعان كل ما في وسعهم لحماية مستقبل السودان مع الحفاظ على خيطه الممتد إلى الماضي.",
    body: "من إخراج عائشة شريف، يتتبع الفيلم علي نور وشبكة من العاملين السودانيين النازحين في مجال التراث وهم يحمون ذاكرة بلادهم من القاهرة.",
    button: "عن الفيلم",
  },

  donateBand: {
    heading: "ادعم المشروع",
    body: "كل مساهمة تذهب مباشرةً إلى توثيق التراث المهدَّد، ودعم العاملين السودانيين في التراث، وإتمام الفيلم.",
    button: "تبرّع",
  },

  galleryTeaser: {
    heading: "المعرض",
    body: "صور أرشيفية من السودان، والإعلان التشويقي عندما يكون جاهزًا.",
    button: "اذهب إلى المعرض",
    instagramButton: "تابعونا على إنستغرام",
  },

  /* ---------------------------------------------------------- Events */

  events: {
    kicker: "2026 إلى 2027",
    heading: "الفعاليات",
    intro: "معارض وندوات وفعاليات لجمع التبرعات في ثلاث مدن. مفتوحة للجمهور، بأعداد محدودة.",
    venueTba: "سيُعلَن عن المكان لاحقًا",
    defaultCta: { label: "راسلنا بشأن هذه الفعالية", email: "info@returningsands.org", subject: "عودة الرمال: {event}" },
    cities: [
      {
        id: "cairo",
        city: "القاهرة",
        when: "ديسمبر 2026",
        body: "حيث يُنسَّق اليوم جزء كبير من العمل على التراث من المنفى.",
        items: [
          {
            title: "معرض Access Art Space",
            stamp: "RS_Access_art_cairo_white",
            date: "18 إلى 20 ديسمبر 2026",
            venue: "Access Art Space، القاهرة",
            description: "خمسة عشر فنانًا سودانيًا، بتنسيق ريم الجيلي، عن الذاكرة والعودة والوطن.",
            cta: null,
          },
          {
            title: "ندوة تعليمية · الجامعة الأمريكية بالقاهرة",
            stamp: "RS_AU_cairo_white",
            date: "16 ديسمبر 2026",
            venue: "الجامعة الأمريكية بالقاهرة",
            description: "سلسلة نصف يوم مع د. أميرة أحمد: حلقة نقاش مع لاجئين، ثم ندوة بمشاركة ICCROM واليونسكو والدرع الأزرق السودان ودار الوثائق القومية.",
            cta: null,
          },
          {
            title: "مشروع التاريخ الشفوي",
            date: "مستمر",
            venue: null,
            description: "مع مؤرخة التاريخ الشفوي عفراء العقب: التراث في المنفى، نحو مستودع رقمي ومنشور ثنائي اللغة.",
            cta: null,
          },
        ],
      },
      {
        id: "london",
        city: "لندن",
        when: "يناير 2027",
        body: null,
        items: [
          {
            title: "معرض لندن",
            stamp: "RS_Ruby_cruel_london_white",
            date: "أسبوع واحد في يناير 2027",
            venue: null,
            description: "أربعة فنانين، اثنان من برمودا واثنان من السودان، عن القرابة غير المتوقعة في العودة. برعاية مجلس الفنون في برمودا.",
            cta: null,
          },
          {
            title: "جلسة حوارية في Culture House",
            stamp: "RS_Culture_house_london_white",
            date: "يناير 2027",
            venue: "Culture House، لندن",
            description: "حوار عن الذاكرة الجماعية والشهادة مع فاعلين في التراث الأفريقي.",
            cta: null,
          },
        ],
      },
      {
        id: "nyc",
        city: "نيويورك",
        when: "نوفمبر 2026 إلى فبراير 2027",
        body: null,
        items: [
          {
            title: "فعالية خاصة للمتبرعين",
            stamp: "RS_Exclusive_NYC_white",
            date: "نوفمبر 2026",
            venue: null,
            description: "لمحسنين من عالم الفنون والثقافة: عرض الإعلان التشويقي، كلمات، ومزاد صامت لأعمال فنية سودانية معاصرة.",
            cta: null,
          },
          {
            title: "عرض عام تفاعلي",
            stamp: "RS_PN_ABB_NYC_white",
            date: "منتصف نوفمبر 2026",
            venue: null,
            description: "مع تجمعات فنية سودانية في نيويورك: أداء حيّ وعمل فني تركيبي يصنعه الجمهور.",
            cta: null,
          },
          {
            title: "معرض",
            stamp: "RS_Space360_NYC_white",
            date: "فبراير 2027",
            venue: null,
            description: "بتنسيق باريس سيستيلي وفاطمة ياسر: فنانون سودانيون عن الذاكرة والعودة والوطن.",
            cta: null,
          },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------- About */

  teamPage: {
    heading: "الفريق والشركاء",
    intro: "المنتجون والفريق الأساسي وراء عودة الرمال، والمؤسسات التي تدعم العمل، وكيفية التواصل معنا.",
  },

  about: {
    who: {
      kicker: "من نحن",
      heading: "من نحن",
      body:
        "«عودة الرمال» حملة لحماية التراث الثقافي السوداني وفيلم وثائقي، تديرها Returning Sands CIC، وهي شركة مصلحة مجتمعية غير ربحية. تُقام فعالياتها في القاهرة ولندن ونيويورك من نوفمبر 2026 إلى فبراير 2027.",
    },
    goals: {
      heading: "ما نعمل من أجله",
      items: [
        "دعم توثيق التراث المهدَّد والذاكرة الحيّة.",
        "إبراز عمل المختصين السودانيين في مجال التراث، بما في ذلك الدرع الأزرق السودان.",
        "العمل مع الفنانين السودانيين وخبراء التراث على ما هو آتٍ.",
        "فتح مسارات لإعادة بناء التراث السوداني والحفاظ عليه، في الداخل والشتات.",
        "جعل الثقافة جزءًا من الاستجابة الإنسانية وما بعد النزاع.",
      ],
    },
    film: {
      kicker: "الفيلم الوثائقي",
      heading: "الفيلم",
      body:
        "من المنفى في مصر، ينسّق علي نور معركة السودان لإبقاء تراثه حيًّا. وبينما تحاصَر الذاكرة الوطنية، يدير هو وشبكة من الخبراء السودانيين النازحين عمليات حماية عالية الخطورة في أنحاء البلاد، في مواجهة بنية منهارة ودعم دولي محدود. ويدخل الفيلم أيضًا حياة الفنانين والموسيقيين والباحثين السودانيين في المنفى، حيث لا يزال التراث يُصنَع ويُنقَل. وسيُعرض الفيلم في مهرجانات بمنطقة جنوب غرب آسيا وشمال أفريقيا وعلى المستوى الدولي.",
      imageAlt: "صورة أرشيفية لحلّاق يعمل في السودان",
      ali: {
        imageAlt: "علي نور جالسًا على مقعد في صالة عرض، وخلفه لوحات على جدار حجري",
        name: "علي نور",
        role: "الأمين العام، الدرع الأزرق السودان",
        p1: "علي هو الأمين العام للدرع الأزرق السودان ومقرر لجنة الاستجابة للطوارئ التابعة للهيئة القومية للآثار والمتاحف في السودان (NCAM).",
        p2: "مختص في إدارة المنح، يدعم الجهود الإقليمية والدولية لتوثيق التراث في السودان وتثبيته وحمايته.",
        quote: "«تحت أنقاض المنازل والمستشفيات تكمن جبهة أخرى في هذه الحرب: المحو المنهجي للذاكرة الثقافية لأمة بأكملها.»",
        attribution: "علي نور، الدرع الأزرق السودان",
      },
      director: {
        label: "المخرجة",
        name: "عائشة شريف",
        role: "مخرجة · زميلة Sundance x Adobe Ignite لعام 2026",
        quote: "«مع «عودة الرمال» أغوص في موضوعات الذاكرة والانتماء من خلال تجربتي الشخصية مع النزوح.»",
      },
    },
    oralHistory: {
      heading: "مشروع التاريخ الشفوي",
      imageAlt: "صورة أرشيفية لامرأة تحمل مشطًا",
      body:
        "مع مؤرخة التاريخ الشفوي عفراء العقب، يتابع المشروع عشرة فنانين سودانيين في القاهرة ويوثّق تجاربهم مع المنفى والنزوح والخسارة الثقافية، جامعًا صورًا ووثائق وأعمالًا فنية ومقتنيات من المجتمع السوداني الأوسع في القاهرة والخارج. ستُرقمَن هذه المواد في أرشيف يقوده المجتمع، ومع الوقت في متحف افتراضي مفتوح لجمهور حول العالم.",
    },
    team: {
      heading: "الفريق",
      intro: "نعمل حيثما أمكن مع أصدقاء دون مقابل، حتى يُدفَع للعاملين في التراث والمساهمين أجرُ وقتهم.",
      producers: [
        {
          name: "باريس كيتزال سيستيلي",
          role: "منتجة · شريكة مؤسسة",
          base: "نيويورك",
          email: "paris@returningsands.org",
          linkedin: "https://www.linkedin.com/in/paris-quetzal-sistilli-960b341b2/",
          bio: "باحثة مكسيكية-أمريكية في التراث الثقافي، تركّز على حماية التراث والسياسات الثقافية والذاكرة الجماعية. شهادات من Sciences Po وجامعة كولومبيا. نُشرت كتاباتها في Journal of Art Crime ودوريات قانون الفن بجامعتَي كاليفورنيا بيركلي وهارفارد.",
        },
        {
          name: "يوسف بشارة",
          role: "منتج · شريك مؤسس",
          base: "لندن",
          email: "yusef@returningsands.org",
          linkedin: "https://www.linkedin.com/in/yusefbushara/",
          bio: "محرر وكاتب وباحث سوداني-برمودي في الآداب العالمية والنشر. صدر ديوانه الشعري الأول Good News في 2025. شهادات من Sciences Po وجامعة هونغ كونغ وSOAS.",
        },
        {
          name: "كاميلا ماركيزي غونزاليس",
          role: "منتجة · شريكة مؤسسة",
          base: "نيويورك",
          email: "camilla@returningsands.org",
          linkedin: "https://www.linkedin.com/in/camilla-marchese-gonzalez/",
          bio: "كاتبة وصانعة أفلام غواتيمالية-إيطالية تجد في الحكاية وسيلة للحفظ. عُرضت أفلامها القصيرة في DOC/NYC ومهرجانات هامبتونز ووودستوك وأثينا السينمائي الدولي.",
        },
        {
          name: "بسمة خليفة",
          role: "منتجة منفذة",
          base: "لندن",
          bio: "مبدعة سودانية ومؤسسة Zola Studios، تصنع قصصًا تقوم على الشخصيات وتقدّم الأصوات غير الممثَّلة. وصل فيلمها الطويل الأول إلى أكثر من 30 مليون مشاهد ورُشّحت لجائزة الوافد الجديد للعام في مهرجان إدنبرة التلفزيوني.",
        },
        {
          name: "عائشة شريف",
          role: "مخرجة · كاتبة",
          bio: "مخرجة فيلم «عودة الرمال» وكاتبته، وزميلة برنامج Sundance x Adobe Ignite لعام 2026. تستكشف في الفيلم الذاكرة والانتماء انطلاقًا من تجربتها الشخصية مع النزوح.",
        },
      ],
      coreTeamHeading: "الفريق الأساسي",
      coreTeam: [
        { name: "جنى خليل", role: "منسقة الأثر · القاهرة", linkedin: "https://www.linkedin.com/in/jenna-khalil/" },
        { name: "عفراء العقب", role: "مؤرخة التاريخ الشفوي" },
        { name: "أنيسة إسترادا", role: "باحثة · الحفاظ على التراث التاريخي", linkedin: "https://www.linkedin.com/in/anisa-estrada-9a23b22b1/" },
        { name: "كيليان لافيل", role: "مدير المالية والعمليات", email: "cillian@returningsands.org", linkedin: "https://www.linkedin.com/in/cillian-lavelle/" },
        { name: "مايكل إسحاق", role: "باحث" },
      ],
    },
    partners: {
      heading: "الشركاء والداعمون",
      items: [
        { name: "المجلس الثقافي البريطاني، صندوق حماية الثقافة", href: "https://www.britishcouncil.org/arts/culture-development/cultural-protection-fund" },
        { name: "SIMA Studios", href: "https://simastudios.org/", logo: "/partners/sima-studios.png" },
        { name: "معهد Sundance", href: "https://www.sundance.org/", logo: "/partners/sundance-institute.png" },
        { name: "الدرع الأزرق الدولي", href: "https://theblueshield.org/", logo: "/partners/blue-shield-international.png" },
        { name: "مجلس الفنون في برمودا", href: "https://culture.bm/arts/" },
        { name: "الجامعة الأمريكية بالقاهرة", href: "https://www.aucegypt.edu/", logo: "/partners/auc.svg" },
        { name: "Culture House", href: "https://culturehouse.org.uk/", logo: "/partners/culture-house.svg" },
        { name: "SUDAAK", href: "https://sudaak.org/" },
        { name: "Sudan Human Rights Hub", href: "https://sudanhrh.org/", logo: "/partners/sudan-human-rights-hub.png" },
        { name: "كلام أفلام", href: "https://kalamaflam.com/" },
      ],
    },
    contact: {
      heading: "تواصل معنا",
      bodyLead: "للشراكات أو المنح أو الأماكن أو الصحافة، راسلونا على",
      email: "info@returningsands.org",
      bodyTail: " أو تواصلوا مباشرةً مع أحد المنتجين.",
      mailSubject: "عودة الرمال",
      followHeading: "تابعونا",
      people: [
        { role: "منتجة", name: "باريس كيتزال سيستيلي", buttonLabel: "راسل باريس", email: "paris@returningsands.org", city: "نيويورك", linkedin: "https://www.linkedin.com/in/paris-quetzal-sistilli-960b341b2/" },
        { role: "منتج", name: "يوسف بشارة", buttonLabel: "راسل يوسف", email: "yusef@returningsands.org", city: "لندن", linkedin: "https://www.linkedin.com/in/yusefbushara/" },
        { role: "منتجة", name: "كاميلا ماركيزي غونزاليس", buttonLabel: "راسل كاميلا", email: "camilla@returningsands.org", city: "نيويورك", linkedin: "https://www.linkedin.com/in/camilla-marchese-gonzalez/" },
      ],
    },
  },

  /* --------------------------------------------------------- Gallery */

  gallery: {
    title: "المعرض",
    intro: "أحدث المنشورات، والإعلان التشويقي عندما يكون جاهزًا، وصور أرشيفية من السودان.",
    photosHeading: "الأرشيف",
    photosIntro: "صور أرشيفية من السودان استُخدمت في الحملة.",
    items: [
      { src: "/img/bridge.jpg", alt: "شروق الشمس فوق جسر في الخرطوم", caption: "شروق الشمس فوق جسر في الخرطوم." },
      { src: "/img/meroe.jpg", alt: "أهرامات مروي في السودان", caption: "أهرامات مروي." },
      { src: "/img/gateway.jpg", alt: "بوابة حجرية تاريخية ببرجين في السودان", caption: "بوابة تاريخية، وفي المقدمة رجل وحمار." },
      { src: "/img/barbers.jpg", alt: "صورة أرشيفية لحلّاق يقصّ شعر زبون", caption: "حلّاق في عمله. صورة أرشيفية." },
      { src: "/img/portrait.jpg", alt: "صورة بنّية لامرأة تضع حُليًّا فضية على رأسها وأنفها", caption: "صورة لامرأة بحُليّ فضية. صورة أرشيفية." },
      { src: "/img/woman.jpg", alt: "لقطة من فيلم أرشيفي لامرأة تحمل مشطًا", caption: "امرأة تحمل مشطًا. لقطة من فيلم أرشيفي." },
      { src: "/img/ali.jpg", alt: "علي نور جالسًا على مقعد في صالة عرض، وخلفه لوحات على جدار حجري", caption: "علي نور، الأمين العام للدرع الأزرق السودان." },
    ],
    trailerUrl: null,
    trailerHeading: "الإعلان التشويقي",
    trailerComingSoon: "الإعلان التشويقي قريبًا",
    instagramHeading: "إنستغرام",
    instagramIntro: "أحدث المنشورات من @returningsands.",
    instagramButton: "تابعوا @returningsands",
    instagramPosts: [
      { href: "https://www.instagram.com/p/Dd67U-WuAT8/" },
      { href: "https://www.instagram.com/p/Dd67GhUOzIZ/" },
      { href: "https://www.instagram.com/p/Dd62y7NRTn_/" },
    ],
  },

  /* ---------------------------------------------------------- Donate */

  donate: {
    kicker: "تبرّع",
    heading: "ادعم المشروع",
    intro: "كل مساهمة تذهب مباشرةً إلى توثيق التراث المهدَّد، ودعم العاملين السودانيين في التراث، وإتمام الفيلم.",
    us: {
      kicker: "الولايات المتحدة",
      heading: "تبرّع عبر SIMA Studios",
      tagline: "التبرعات من الولايات المتحدة معفاة من الضرائب إلى أقصى حد يسمح به القانون عبر راعينا المالي SIMA Studios (منظمة 501(c)(3)).",
      paypalButton: "تبرّع عبر SIMA",
      sponsorButton: "صفحتنا على SIMA",
    },
    uk: {
      kicker: "المملكة المتحدة وبقية العالم",
      heading: "تبرّع مباشرةً لشركة Returning Sands CIC",
      body: "تبرّع بالبطاقة أو Apple Pay أو Google Pay بأي مبلغ وبأي عملة، أو أرسل تحويلًا بنكيًا باستخدام البيانات أدناه، مع كتابة اسمك في خانة المرجع حتى نتمكن من شكرك.",
      cardButton: "تبرّع بالبطاقة",
      bankLabels: { accountName: "اسم الحساب", sortCode: "رمز الفرع (Sort code)", accountNumber: "رقم الحساب", iban: "IBAN", bic: "BIC" },
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
    consent: "نعم، أرسلوا لي من حين لآخر أخبار الفعاليات والفيلم وكيفية استخدام التبرعات. يمكنني إلغاء الاشتراك في أي وقت.",
    consentSuffix: "Returning Sands Community Interest Company، رقم السجل 17311689.",
    success: "أصبحت على القائمة. شكرًا لك، سنتواصل معك بشأن الفعاليات والفيلم وكيفية استخدام التبرعات.",
    errorLead: "حدث خطأ ما. يرجى المحاولة مرة أخرى، أو مراسلتنا على",
    errorTail: ".",
  },

  /* ---------------------------------------------------------- Footer */

  footer: {
    blurb: "حملة لحماية التراث الثقافي السوداني وفيلم وثائقي، بالشراكة مع الدرع الأزرق السودان.",
    navigateKicker: "الصفحات",
    links: [
      { key: "home", label: "الرئيسية" },
      { key: "events", label: "الفعاليات" },
      { key: "about", label: "من نحن" },
      { key: "team", label: "الفريق" },
      { key: "gallery", label: "المعرض" },
      { key: "donate", label: "تبرّع" },
    ],
    copyrightPrefix: "©",
    copyrightSuffix: "Returning Sands CIC",
    cities: "نيويورك · لندن · القاهرة · الخرطوم",
    legal: "Returning Sands Community Interest Company، مسجلة في إنجلترا وويلز برقم 17311689. المكتب المسجل: 5 Brayford Square, London E1 0SG.",
    privacyLabel: "الخصوصية",
  },

  /* --------------------------------------------------------- Privacy */

  privacy: {
    heading: "الخصوصية",
    intro: "كيف تتعامل Returning Sands CIC مع القدر القليل من المعلومات الشخصية التي يجمعها هذا الموقع.",
    updated: "آخر تحديث: أكتوبر 2026.",
    sections: [
      {
        heading: "من نحن",
        paragraphs: [
          "تدير Returning Sands Community Interest Company (رقم الشركة 17311689، المكتب المسجل 5 Brayford Square, London E1 0SG) هذا الموقع، وهي المتحكم في البيانات المذكورة هنا.",
        ],
      },
      {
        heading: "ما نجمعه ولماذا",
        paragraphs: [
          "القائمة البريدية: إذا انضممت، نحتفظ بعنوان بريدك الإلكتروني وتاريخ موافقتك ونصّها كي نرسل لك من حين لآخر أخبار الفعاليات والفيلم وكيفية استخدام التبرعات. تُعالَج الاستمارة عبر Web3Forms التي تحوّل طلبك إلى بريدنا. يمكنك إلغاء الاشتراك في أي وقت بالرد على أي رسالة أو بمراسلتنا على العنوان أدناه.",
          "التبرعات: تُعالَج مدفوعات البطاقات عبر Stripe، والتبرعات من الولايات المتحدة عبر PayPal باسم راعينا المالي SIMA Studios. نتلقى اسمك وبريدك الإلكتروني ومبلغ تبرعك، وإن اخترت، تفضيلك بشأن القائمة البريدية. لا نرى بيانات بطاقتك ولا نخزّنها. تعالج Stripe وPayPal بياناتك وفق سياسات الخصوصية الخاصة بهما.",
          "التحويلات البنكية: إذا تبرعت بالتحويل البنكي نرى الاسم والمرجع اللذين يرسلهما بنكك مع الدفعة.",
          "البريد الإلكتروني: إذا راسلتنا نحتفظ بالمراسلة طوال المدة اللازمة للتعامل معها.",
        ],
      },
      {
        heading: "ملفات تعريف الارتباط والتحليلات",
        paragraphs: [
          "يستخدم هذا الموقع Vercel Analytics الذي يحصي الزيارات دون ملفات تعريف ارتباط أو معرّفات شخصية. تعرض صفحة المعرض منشورات مضمَّنة من إنستغرام؛ وعند تحميل تلك الصفحة قد يضع إنستغرام ملفات تعريف الارتباط الخاصة به وفق سياسة خصوصية Meta. لا تُستخدم أي وسائل تتبّع أخرى.",
        ],
      },
      {
        heading: "الأساس القانوني ومدة الاحتفاظ",
        paragraphs: [
          "نعتمد على موافقتك فيما يخص القائمة البريدية، وعلى مصلحتنا المشروعة في إدارة المنظمة فيما يخص سجلات التبرعات والمراسلات، وعلى الالتزام القانوني فيما يخص السجلات المالية التي نحتفظ بها ست سنوات كما يقتضي قانون المملكة المتحدة. تُحذف بيانات القائمة البريدية عند إلغاء اشتراكك.",
        ],
      },
      {
        heading: "حقوقك",
        paragraphs: [
          "بموجب لائحة حماية البيانات في المملكة المتحدة (UK GDPR) يمكنك طلب الاطّلاع على معلوماتك الشخصية التي نحتفظ بها أو تصحيحها أو حذفها، والاعتراض على طريقة استخدامها أو تقييدها. ويمكنك أيضًا تقديم شكوى إلى مكتب مفوض المعلومات على ico.org.uk.",
        ],
      },
    ],
    contactLead: "للاستفسار عن هذا الإشعار أو لممارسة أي من هذه الحقوق، راسلونا على",
    contactEmail: "info@returningsands.org",
  },
};
