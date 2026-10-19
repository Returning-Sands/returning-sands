import type { SiteContent } from "./types";

/**
 * English copy: the source of truth for every user-visible string.
 *
 * Keys named `href`, `src`, `email`, `phone`, `network`, `id`, `key`, `stamp`,
 * `links`, `bank` and `trailerUrl` are not translatable; everything else is.
 * Headings are plain, descriptive strings. No em or en dashes as punctuation.
 */
export const en = {
  brand: {
    name: "Returning Sands",
    arabic: "عودة الرمال",
  },

  pages: {
    home: {
      title: "Returning Sands: A Sudanese Cultural Heritage Campaign and Film",
      description:
        "A campaign and documentary protecting Sudanese cultural memory, with events in Cairo, London, and New York from November 2026 to February 2027.",
    },
    events: {
      title: "Events · Returning Sands",
      description:
        "Exhibitions, panels, and fundraising events in Cairo, London, and New York, November 2026 to February 2027.",
    },
    about: {
      title: "About · Returning Sands",
      description:
        "Who we are, what we are working toward, the documentary about Ali Nour, and the oral history project.",
    },
    team: {
      title: "Team and partners · Returning Sands",
      description:
        "The producers and core team behind Returning Sands, our partners and supporters, and how to get in touch.",
    },
    gallery: {
      title: "Gallery · Returning Sands",
      description:
        "Archival photographs from Sudan, the trailer, and Returning Sands on Instagram.",
    },
    donate: {
      title: "Donate · Returning Sands",
      description:
        "Give through SIMA Studios in the United States (tax-deductible) or directly to Returning Sands CIC by card or bank transfer.",
    },
    privacy: {
      title: "Privacy · Returning Sands",
      description:
        "How Returning Sands CIC handles personal information from the mailing list, donations and this website.",
    },
  },

  meta: {
    ogImageAlt: "Returning Sands: A Sudanese Cultural Heritage Campaign and Film",
  },

  ogImage: {
    kicker: "A Sudanese Cultural Heritage Campaign · 2026 to 2027",
    titleLead: "Returning",
    titleEmphasis: "Sands",
    byline: "A campaign and documentary by Paris Quetzal Sistilli, Yusef Bushara, and Camilla Marchese González",
  },

  nav: {
    links: [
      { key: "home", label: "Home" },
      { key: "events", label: "Events" },
      { key: "about", label: "About" },
      { key: "team", label: "Team" },
      { key: "gallery", label: "Gallery" },
      { key: "donate", label: "Donate" },
    ],
    donate: "Donate",
    sectionsLabel: "Pages",
  },

  langSwitch: {
    toArabic: "عربي",
    toEnglish: "English",
  },

  social: {
    ariaLabel: "Returning Sands on {network}",
    networks: [
      {
        network: "instagram",
        label: "Instagram",
        handle: "@returningsands",
        href: "https://www.instagram.com/returningsands",
      },
      {
        network: "linkedin",
        label: "LinkedIn",
        handle: "Returning Sands",
        href: "https://www.linkedin.com/company/returningsands",
      },
    ],
  },

  /* ------------------------------------------------------------ Home */

  hero: {
    imageAlt: "Sunrise over a bridge in Khartoum",
    kicker: "A Sudanese Cultural Heritage Campaign · 2026 to 2027",
    titleLead: "Returning",
    titleEmphasis: "Sands",
    intro:
      "A campaign and documentary protecting Sudanese cultural memory during one of the world’s most devastating and underreported wars.",
    donateButton: "Donate",
    eventsButton: "See the events",
    schedule: [
      { label: "Cairo", value: "Dec 2026" },
      { label: "London", value: "Jan 2027" },
      { label: "New York", value: "Nov 2026 to Feb 2027" },
    ],
  },

  stake: {
    kicker: "Context",
    heading: "What’s at stake",
    body:
      "Cultural heritage is a tangible expression of identity. In conflict it becomes a target: a way to erode a people’s memory, cohesion, and continuity. Since 2023, Sudan has seen widespread and irreversible damage to archaeological sites, archives, and museums. The destruction is ongoing. Heritage workers operate under extreme conditions with little visibility or support, and they need aid, expertise, and protective resources now.",
    stats: [
      {
        value: "60%",
        label: "of Sudan National Museum holdings looted during the occupation of Khartoum.",
        source: {
          label: "NBC News, March 2026, quoting the General Authority for Antiquities and Museums",
          href: "https://www.nbcnews.com/world/africa/museums-looted-priceless-artifacts-sudan-counts-cost-deadly-conflict-rcna260473",
        },
      },
      {
        value: "12M+",
        label: "people displaced at the height of the war that began in April 2023.",
        source: {
          label: "IOM, April 2026",
          href: "https://www.iom.int/news/aid-system-under-pressure-needs-continue-grow-three-years-sudan-war",
        },
      },
      {
        value: "20+",
        label: "museums damaged, with looting and trafficking of collections confirmed.",
        source: {
          label: "UNESCO, 2025 to 2026",
          href: "https://www.unesco.org/en/culture-emergencies/heritage-emergency-fund/urgent-safeguarding-response-damaged-collections-sudan-national-museum",
        },
      },
    ],
    sourcesLabel: "Sources",
  },

  cities: {
    hint: "Tap a city stamp to see its events, or the Returning Sands stamp to donate.",
    alt: "An open passport: the Returning Sands stamp on the left page, and visa stamps for Cairo, NYC and London on the right",
    cairo: "Cairo events",
    london: "London events",
    nyc: "New York events",
    donate: "Donate",
  },

  filmTeaser: {
    kicker: "Documentary",
    heading: "The film",
    logline:
      "From exile in Egypt, Ali Nour coordinates Sudan’s fight to keep heritage alive. With national memory under siege, Ali and his crew of brave volunteers do everything to safeguard Sudan’s future while maintaining its thread to the past.",
    body:
      "Directed by Aicha Cherif, the film follows Ali Nour and a network of displaced Sudanese heritage workers protecting their country’s memory from Cairo.",
    button: "About the film",
  },

  donateBand: {
    heading: "Support the project",
    body:
      "Every contribution goes directly into documenting endangered heritage, supporting Sudanese heritage workers, and finishing the film.",
    button: "Donate",
  },

  galleryTeaser: {
    heading: "Gallery",
    body: "Archival photographs from Sudan, and the trailer when it is ready.",
    button: "See the gallery",
    instagramButton: "Follow on Instagram",
  },

  /* ---------------------------------------------------------- Events */

  events: {
    kicker: "2026 to 2027",
    heading: "Events",
    intro:
      "Exhibitions, panels, and fundraising events in three cities. Open to the public, capacity limited.",
    venueTba: "Venue to be announced",
    defaultCta: {
      label: "Email us about this event",
      email: "info@returningsands.org",
      subject: "Returning Sands: {event}",
    },
    cities: [
      {
        id: "cairo",
        city: "Cairo",
        when: "Dec 2026",
        body: "Where much of the heritage work is now coordinated from exile.",
        items: [
          {
            title: "Access Art Space Exhibit",
            stamp: "RS_Access_art_cairo_white",
            date: "Dec 18 to 20, 2026",
            venue: "Access Art Space, Cairo",
            description:
              "Fifteen Sudanese artists, curated by Reem Aljeally, on memory, return, and home.",
            cta: null,
          },
          {
            title: "Educational Panel · AUC",
            stamp: "RS_AU_cairo_white",
            date: "Dec 16, 2026",
            venue: "The American University in Cairo",
            description:
              "A half-day series with Dr. Amira Ahmed: a refugee focus group, then a panel with ICCROM, UNESCO, Blue Shield Sudan, and the National Archives.",
            cta: null,
          },
          {
            title: "Oral History Project",
            date: "Ongoing",
            venue: null,
            description:
              "With Oral Historian Afra Elagab: heritage in exile, toward a digital repository and a bilingual publication.",
            cta: null,
          },
        ],
      },
      {
        id: "london",
        city: "London",
        when: "Jan 2027",
        body: null,
        items: [
          {
            title: "London Exhibition",
            stamp: "RS_Ruby_cruel_london_white",
            date: "One week in January 2027",
            venue: null,
            description:
              "Four artists, two Bermudian and two Sudanese, on the unlikely kinship of return. Sponsored by the Bermuda Arts Council.",
            cta: null,
          },
          {
            title: "Culture House Fireside",
            stamp: "RS_Culture_house_london_white",
            date: "January 2027",
            venue: "Culture House, London",
            description:
              "A conversation on collective memory and testimony with African heritage stakeholders.",
            cta: null,
          },
        ],
      },
      {
        id: "nyc",
        city: "New York",
        when: "Nov 2026 to Feb 2027",
        body: null,
        items: [
          {
            title: "Private Donor Event",
            stamp: "RS_Exclusive_NYC_white",
            date: "Nov 2026",
            venue: null,
            description:
              "For arts and culture philanthropists: impact trailer, remarks, and a silent auction of contemporary Sudanese art.",
            cta: null,
          },
          {
            title: "Interactive Public Showcase",
            stamp: "RS_PN_ABB_NYC_white",
            date: "Mid-Nov 2026",
            venue: null,
            description:
              "With NYC-based Sudanese arts collectives: performance and a live community-made art installation.",
            cta: null,
          },
          {
            title: "Exhibition",
            stamp: "RS_Space360_NYC_white",
            date: "Feb 2027",
            venue: null,
            description:
              "Curated by Paris Sistilli and Fatma Yasier: Sudanese artists on memory, return, and home.",
            cta: null,
          },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------- About */

  teamPage: {
    heading: "Team and partners",
    intro:
      "The producers and core team behind Returning Sands, the organisations supporting the work, and how to reach us.",
  },

  about: {
    who: {
      kicker: "About",
      heading: "Who we are",
      body:
        "Returning Sands is a Sudanese cultural heritage campaign and documentary, run by Returning Sands CIC, a not-for-profit community interest company. It launches with exhibitions, panels, and fundraising events in Cairo, London, and New York between November 2026 and February 2027. At its centre is a documentary about Ali Nour and the Sudanese heritage workers protecting their country’s memory from exile. The film will go to festivals across the SWANA region and internationally, reaching Sudanese communities at home and in the diaspora, and a wider global audience.",
    },
    goals: {
      heading: "What we’re working toward",
      items: [
        "Support the documentation of endangered heritage and lived memory.",
        "Raise the profile of Sudanese heritage professionals, including Blue Shield Sudan.",
        "Work with Sudanese artists and heritage experts on what comes next.",
        "Open pathways to rebuild and sustain Sudanese heritage, at home and in the diaspora.",
        "Make culture part of humanitarian and post-conflict response.",
      ],
    },
    film: {
      kicker: "Documentary",
      heading: "The film",
      body:
        "From exile in Egypt, Ali Nour coordinates Sudan’s fight to keep its heritage alive. With national memory under siege, he and a network of displaced Sudanese experts run high-risk safeguarding operations across the country, facing collapsed infrastructure and limited international support. The film also enters the lives of Sudanese artists, musicians, and scholars in exile, where heritage is still being made and passed on.",
      imageAlt: "Archival photograph of a barber at work in Sudan",
      ali: {
        imageAlt: "Ali Nour seated in an armchair in a gallery, paintings on the stone wall behind him",
        name: "Ali Nour",
        role: "Secretary General, Blue Shield Sudan",
        p1: "Ali is Secretary General of Blue Shield Sudan and rapporteur of the Emergency Response Committee under Sudan’s National Corporation for Antiquities and Museums (NCAM).",
        p2: "A grants-management specialist, he supports regional and international efforts to document, stabilise, and protect heritage in Sudan.",
        quote:
          "“Beneath the wreckage of homes and hospitals lies another front in this war: the systematic erasure of a nation’s cultural memory.”",
        attribution: "Ali Nour, Blue Shield Sudan",
      },
      director: {
        label: "Director",
        name: "Aicha Cherif",
        role: "Director · 2026 Sundance x Adobe Ignite Fellow",
        quote:
          "“With Returning Sands I venture into thematics of memory and belonging, through my own experience with displacement.”",
      },
    },
    oralHistory: {
      heading: "Oral history project",
      imageAlt: "Archival portrait of a woman with a comb",
      body:
        "With Oral Historian Afra Elagab, the project will follow ten Sudanese artists in Cairo and document their experiences of exile, displacement, and cultural loss, collecting photographs, documents, artworks, and objects from the wider Sudanese community in Cairo and abroad. These materials will be digitised into a community-led archive and, in time, a virtual museum open to audiences worldwide.",
    },
    team: {
      heading: "The team",
      intro:
        "Where possible we work with friends pro bono, so that heritage workers and contributors are paid for their time.",
      producers: [
        {
          name: "Paris Quetzal Sistilli",
          role: "Producer · Co-Founder",
          base: "New York",
          email: "paris@returningsands.org",
          linkedin: "https://www.linkedin.com/in/paris-quetzal-sistilli-960b341b2/",
          bio: "A Mexican-American cultural heritage researcher focused on heritage protection, cultural policy, and collective memory. Degrees from Sciences Po and Columbia. Published in the Journal of Art Crime and art-law journals at UC Berkeley and Harvard.",
        },
        {
          name: "Yusef Bushara",
          role: "Producer · Co-Founder",
          base: "London",
          email: "yusef@returningsands.org",
          linkedin: "https://www.linkedin.com/in/yusefbushara/",
          bio: "A Sudanese-Bermudian editor, writer, and researcher in global literatures and publishing. His debut poetry collection, Good News, came out in 2025. Degrees from Sciences Po, the University of Hong Kong, and SOAS.",
        },
        {
          name: "Camilla Marchese González",
          role: "Producer · Co-Founder",
          base: "New York",
          email: "camilla@returningsands.org",
          linkedin: "https://www.linkedin.com/in/camilla-marchese-gonzalez/",
          bio: "A Guatemalan-Italian writer and filmmaker drawn to storytelling as a means of preservation. Her short films have screened at DOC/NYC, Hamptons, Woodstock, and Athens International Film Festival.",
        },
        {
          name: "Basma Khalifa",
          role: "Executive Producer",
          base: "London",
          bio: "A Sudanese creative and founder of Zola Studios, making character-driven stories that centre underrepresented voices. Her debut feature reached over 30 million viewers and earned a Newcomer of the Year nomination at the Edinburgh TV Festival.",
        },
      ],
      coreTeamHeading: "Core team",
      coreTeam: [
        { name: "Jenna Khalil", role: "Cairo Impact Coordinator", linkedin: "https://www.linkedin.com/in/jenna-khalil/" },
        { name: "Afra Elagab", role: "Oral Historian" },
        { name: "Anisa Estrada", role: "Researcher · Historic Preservation", linkedin: "https://www.linkedin.com/in/anisa-estrada-9a23b22b1/" },
        { name: "Cillian Lavelle", role: "Director, Finance & Operations", email: "cillian@returningsands.org", linkedin: "https://www.linkedin.com/in/cillian-lavelle/" },
        { name: "Micheal Isaak", role: "Researcher" },
      ],
    },
    partners: {
      heading: "Partners and supporters",
      items: [
        { name: "British Council, Cultural Protection Fund", href: "https://www.britishcouncil.org/arts/culture-development/cultural-protection-fund" },
        { name: "SIMA Studios", href: "https://simastudios.org/" },
        { name: "Sundance Institute", href: "https://www.sundance.org/" },
        { name: "Blue Shield International", href: "https://theblueshield.org/" },
        { name: "Bermuda Arts Council", href: "https://culture.bm/arts/" },
        { name: "The American University in Cairo", href: "https://www.aucegypt.edu/" },
        { name: "Culture House", href: "https://culturehouse.org.uk/" },
        { name: "SUDAAK", href: "https://sudaak.org/" },
        { name: "Sudan Human Rights Hub", href: "https://sudanhrh.org/" },
        { name: "Kalam Aflam", href: "https://kalamaflam.com/" },
      ],
    },
    contact: {
      heading: "Get in touch",
      bodyLead: "For partnerships, grants, venues, or press, write to",
      email: "info@returningsands.org",
      bodyTail: " or reach a producer directly.",
      mailSubject: "Returning Sands",
      followHeading: "Follow",
      people: [
        {
          role: "Producer",
          name: "Paris Quetzal Sistilli",
          buttonLabel: "Email Paris",
          email: "paris@returningsands.org",
          city: "New York",
          linkedin: "https://www.linkedin.com/in/paris-quetzal-sistilli-960b341b2/",
        },
        {
          role: "Producer",
          name: "Yusef Bushara",
          buttonLabel: "Email Yusef",
          email: "yusef@returningsands.org",
          city: "London",
          linkedin: "https://www.linkedin.com/in/yusefbushara/",
        },
        {
          role: "Producer",
          name: "Camilla Marchese González",
          buttonLabel: "Email Camilla",
          email: "camilla@returningsands.org",
          city: "New York",
          linkedin: "https://www.linkedin.com/in/camilla-marchese-gonzalez/",
        },
      ],
    },
  },

  /* --------------------------------------------------------- Gallery */

  gallery: {
    title: "Gallery",
    intro: "Recent posts, the trailer when it is ready, and archival photographs from Sudan.",
    photosHeading: "Archive",
    photosIntro: "Archival photographs from Sudan used across the campaign.",
    items: [
      {
        src: "/img/bridge.jpg",
        alt: "Sunrise over a bridge in Khartoum",
        caption: "Sunrise over a bridge in Khartoum.",
      },
      {
        src: "/img/meroe.jpg",
        alt: "The pyramids of Meroë in Sudan",
        caption: "The pyramids of Meroë.",
      },
      {
        src: "/img/gateway.jpg",
        alt: "Historic stone gateway with two towers in Sudan",
        caption: "A historic gateway, with a man and a donkey in the foreground.",
      },
      {
        src: "/img/barbers.jpg",
        alt: "Archival photograph of a barber cutting a customer’s hair",
        caption: "A barber at work. Archival photograph.",
      },
      {
        src: "/img/portrait.jpg",
        alt: "Sepia portrait of a woman wearing silver head and nose jewellery",
        caption: "Portrait of a woman in silver jewellery. Archival photograph.",
      },
      {
        src: "/img/woman.jpg",
        alt: "Archival film still of a woman holding a comb",
        caption: "A woman with a comb. Archival film still.",
      },
      {
        src: "/img/ali.jpg",
        alt: "Ali Nour seated in an armchair in a gallery, paintings on the stone wall behind him",
        caption: "Ali Nour, Secretary General of Blue Shield Sudan.",
      },
    ],
    trailerUrl: null as string | null,
    trailerHeading: "Trailer",
    trailerComingSoon: "Trailer coming soon",
    instagramHeading: "Instagram",
    instagramIntro: "Recent posts from @returningsands.",
    instagramButton: "Follow @returningsands",
    instagramPosts: [
      { href: "https://www.instagram.com/p/Dd67U-WuAT8/" },
      { href: "https://www.instagram.com/p/Dd67GhUOzIZ/" },
      { href: "https://www.instagram.com/p/Dd62y7NRTn_/" },
    ],
  },

  /* ---------------------------------------------------------- Donate */

  donate: {
    kicker: "Donate",
    heading: "Support the project",
    intro:
      "Every contribution goes directly into documenting endangered heritage, supporting Sudanese heritage workers, and finishing the film.",
    us: {
      kicker: "United States",
      heading: "Give through SIMA Studios",
      tagline:
        "US donations are tax-deductible to the fullest extent of the law via our fiscal sponsor, SIMA Studios (501(c)(3)).",
      paypalButton: "Donate via SIMA",
      sponsorButton: "Our SIMA page",
      links: {
        sponsorPage: "https://simastudios.org/fiscal-sponsorship/returning-sands/",
        paypal: "https://www.paypal.com/donate/?hosted_button_id=CU7JMGF3GWH2J",
      },
    },
    // UK / rest of world: Stripe Payment Link (donor chooses amount) + Co-op bank transfer.
    uk: {
      kicker: "United Kingdom and elsewhere",
      heading: "Give directly to Returning Sands CIC",
      body: "Give by card, Apple Pay or Google Pay in any amount and currency, or send a bank transfer using the details below, with your name as the reference so we can thank you.",
      cardButton: "Donate by card",
      bankLabels: {
        accountName: "Account name",
        sortCode: "Sort code",
        accountNumber: "Account number",
        iban: "IBAN",
        bic: "BIC",
      },
      fallback: {
        bodyLead:
          "Card payments in GBP and bank transfer details are coming shortly. In the meantime, email",
        bodyTail: "and we’ll send you the details directly.",
        button: "Email the donations team",
        mailSubject: "Donation to Returning Sands",
      },
      links: {
        stripe: "https://donate.stripe.com/bJeaEW9qC7Kudizgvw8EM00" as string | null,
        donationsEmail: "donations@returningsands.org",
      },
      bank: {
        accountName: "Returning Sands Community Interest Company",
        sortCode: "08-92-99",
        accountNumber: "67540396",
        iban: "GB83 CPBK 0892 9967 5403 96",
        bic: "CPBKGB22",
      } as {
        accountName: string;
        sortCode: string;
        accountNumber: string;
        iban?: string;
        bic?: string;
      } | null,
    },
    note: "Returning Sands CIC is entirely not-for-profit; all funds are reinvested in the mission.",
  },

  thanks: {
    heading: "Thank you.",
    body: "Your donation has gone through and a receipt is on its way to your inbox. Every gift goes directly into documenting endangered heritage and finishing the film.",
  },

  mailingList: {
    label: "Join the mailing list",
    placeholder: "you@example.com",
    join: "Join",
    joining: "Joining…",
    consent:
      "Yes, email me occasionally about events, the film and how donations are used. Unsubscribe any time.",
    consentSuffix: "Returning Sands Community Interest Company, no. 17311689.",
    success:
      "You’re on the list. Thank you, we’ll be in touch about events, the film and how donations are being used.",
    errorLead: "Something went wrong. Please try again, or email",
    errorTail: ".",
  },

  /* ---------------------------------------------------------- Footer */

  footer: {
    blurb:
      "A Sudanese cultural heritage campaign and documentary, in partnership with Blue Shield Sudan.",
    navigateKicker: "Pages",
    links: [
      { key: "home", label: "Home" },
      { key: "events", label: "Events" },
      { key: "about", label: "About" },
      { key: "team", label: "Team" },
      { key: "gallery", label: "Gallery" },
      { key: "donate", label: "Donate" },
    ],
    copyrightPrefix: "©",
    copyrightSuffix: "Returning Sands CIC",
    cities: "New York · London · Cairo · Khartoum",
    legal:
      "Returning Sands Community Interest Company, registered in England and Wales, no. 17311689. Registered office: 5 Brayford Square, London E1 0SG.",
    privacyLabel: "Privacy",
  },

  /* --------------------------------------------------------- Privacy */

  privacy: {
    heading: "Privacy",
    intro: "How Returning Sands CIC handles the small amount of personal information this website collects.",
    updated: "Last updated October 2026.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "Returning Sands Community Interest Company (company no. 17311689, registered office 5 Brayford Square, London E1 0SG) runs this website and is the data controller for the information described here.",
        ],
      },
      {
        heading: "What we collect and why",
        paragraphs: [
          "Mailing list: if you join, we keep your email address and the date and wording of your consent so we can send occasional updates about events, the film and how donations are used. The form is processed by Web3Forms, which forwards your submission to our inbox. You can unsubscribe at any time by replying to any email or writing to the address below.",
          "Donations: card payments are handled by Stripe and US donations by PayPal on behalf of our fiscal sponsor, SIMA Studios. We receive your name, email address, donation amount and, if you choose, your mailing list preference. We do not see or store card details. Stripe and PayPal process your data under their own privacy policies.",
          "Bank transfers: if you donate by bank transfer we see the name and reference that your bank sends with the payment.",
          "Email: if you write to us, we keep the correspondence for as long as needed to deal with it.",
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "This site uses Vercel Analytics, which counts visits without cookies or personal identifiers. The Gallery page embeds posts from Instagram; when that page loads, Instagram may set its own cookies under Meta's privacy policy. No other tracking is used.",
        ],
      },
      {
        heading: "Legal basis and retention",
        paragraphs: [
          "We rely on your consent for the mailing list, on our legitimate interests in running the organisation for donation records and correspondence, and on legal obligation for financial records, which we keep for six years as required by UK law. Mailing list data is deleted when you unsubscribe.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under UK GDPR you can ask to see, correct or delete the personal information we hold about you, and object to or restrict how we use it. You can also complain to the Information Commissioner's Office at ico.org.uk.",
        ],
      },
    ],
    contactLead: "Questions about this notice, or to exercise any of these rights, email",
    contactEmail: "info@returningsands.org",
  },
} as const satisfies SiteContent;
