import type { SiteContent } from "./types";

/**
 * English copy — the source of truth for every user-visible string.
 *
 * Keys named `links`, `bank`, `href`, `src`, `email`, `phone`, `network` and
 * `id` are not translatable; everything else is. Headings that carry inline
 * emphasis are split into lead / emphasis / tail parts (the component adds
 * the separating spaces).
 */
export const en = {
  brand: {
    name: "Returning Sands",
    arabic: "عودة الرمال",
  },

  meta: {
    title: "Returning Sands — A Sudanese Cultural Heritage Campaign & Film",
    description:
      "A campaign and short documentary by Paris Sistilli, Yusef Bushara, and Camilla Marchese González, protecting Sudanese cultural memory through events in Cairo, London, and New York (2026–2027).",
    openGraph: {
      title: "Returning Sands",
      description:
        "A Sudanese cultural heritage campaign and short documentary — events in Cairo, London, and New York, 2026–2027.",
    },
    twitter: {
      title: "Returning Sands",
      description:
        "A Sudanese cultural heritage campaign and short documentary — events in Cairo, London, and New York, 2026–2027.",
    },
    ogImageAlt: "Returning Sands — A Sudanese Cultural Heritage Campaign & Film",
  },

  ogImage: {
    kicker: "A Sudanese Cultural Heritage Campaign · 2026–2027",
    titleLead: "Returning",
    titleEmphasis: "Sands",
    byline: "A campaign & short documentary by Paris Quetzal Sistilli and Yusef Bushara",
  },

  nav: {
    links: [
      { label: "At Stake", href: "#stake" },
      { label: "Campaign", href: "#campaign" },
      { label: "Film", href: "#documentary" },
      { label: "Events", href: "#events" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    donate: "Donate",
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

  hero: {
    imageAlt: "Sunrise over a bridge in Khartoum",
    kicker: "A Sudanese Cultural Heritage Campaign · 2026 – 2027",
    titleLead: "Returning",
    titleEmphasis: "Sands",
    intro:
      "A campaign and short documentary by Paris Sistilli, Yusef Bushara, and Camilla Marchese González — protecting Sudanese cultural memory amid one of the world’s most devastating and underreported conflicts.",
    schedule: [
      { label: "Cairo", value: "Dec 2026" },
      { label: "London", value: "Jan 2027" },
      { label: "New York", value: "Nov 2026 – Feb 2027" },
    ],
  },

  openingQuote: {
    imageAlt: "The pyramids of Meroë in Sudan",
    kicker: "Opening Statement",
    quote:
      "“Beneath the wreckage of homes and hospitals lies another front in this war: the systematic erasure of a nation’s cultural memory.”",
    attribution: "— Ali Nour · Blue Shield Sudan",
  },

  stake: {
    kicker: "What’s at Stake",
    headingLead: "Cultural heritage is a tangible expression of",
    headingEmphasis: "identity.",
    paragraphs: [
      "In times of conflict, that identity becomes a strategic target — a way to erode the memory, cohesion, and continuity of a people. Although commonly framed as a “civil war,” Sudan since 2023 has been in the throes of a counter-revolutionary war. The country has witnessed widespread and irreversible damage to archaeological sites, archives, and museums.",
      "Destruction in Sudan is ongoing, not confined to the past. Immediate documentation and action are essential. Heritage workers continue to operate under extreme, time-sensitive conditions with limited visibility and support — underscoring the urgent need for greater aid, technical expertise, and protective resources.",
    ],
    stats: [
      { value: "60%", label: "of Sudan National Museum holdings looted in the last three years." },
      { value: "12M+", label: "people displaced since the war began in 2023." },
      { value: "Ongoing", label: "deliberate destruction of museums, archives, and historic sites." },
    ],
  },

  campaign: {
    kicker: "Impact Campaign",
    headingLead: "Three cities,",
    headingEmphasis: "one film,",
    headingTail: "one global call.",
    p1: {
      lead: "Returning Sands is a global campaign that launches with education and art exhibition events in",
      cities: ["Cairo", "London", "New York"],
      separator: ", ",
      lastSeparator: ", and",
      tail: "— serving as both visibility platforms and fundraising catalysts for the short documentary at the heart of the project.",
    },
    p2: "The ambition extends beyond a single screening or exhibition. At its core is the production of a documentary film to be submitted to festivals across the SWANA region and internationally, fostering sustained engagement with the urgent issues of heritage preservation in Sudan and the deliberate targeting of cultural sites in conflict zones.",
    p3: "Through this work, we seek to engage Sudanese communities within the country and across the diaspora, while reaching a broader global audience — to amplify awareness and mobilize a wider call to action.",
  },

  goals: {
    kicker: "Goals of the Project",
    heading: "Five threads holding the work together.",
    items: [
      "Support the documentation of endangered heritage and lived memory.",
      "Amplify the work of Sudanese heritage professionals, including emerging efforts tied to Blue Shield Sudan.",
      "Collaborate with Sudanese artists and heritage experts to tackle the issue of futurity in an interdisciplinary fashion.",
      "Enable future pathways to rebuild, recover, and sustain Sudanese cultural heritage — within the country and across the diaspora.",
      "Position culture as a core component of humanitarian and post-conflict response.",
    ],
  },

  documentary: {
    kicker: "The Documentary",
    headingLead: "From exile in Egypt,",
    headingEmphasis: "a fight",
    headingTail: "to keep memory alive.",
    p1: "The film follows the story of Ali Nour, a Sudanese heritage professional leading efforts to protect his country’s cultural legacy amid one of the world’s most devastating and underreported conflicts — a war that has displaced over twelve million people and triggered the widespread, deliberate destruction of museums, archives, and historic sites.",
    p2Lead:
      "From Cairo, Ali and a network of displaced Sudanese experts coordinate high-risk safeguarding operations across Sudan, confronting the collapse of national infrastructure and the limits of international support. Expanding beyond preservation alone, the film also enters the lives of Sudanese artists, musicians, and scholars in exile — capturing the active creation and transmission of cultural heritage within the diaspora. Heritage stands not only as something under threat, but as a",
    p2Emphasis: "living force",
    p2Tail: ": central to identity, survival, and the future of Sudan itself.",
    imageAlt: "Archival photograph from Sudan",
    loglineKicker: "Logline",
    logline:
      "From exile in Egypt, Ali Nour coordinates Sudan’s fight to keep heritage alive. With national memory under siege, Ali and his crew of brave volunteers do everything to safeguard Sudan’s future while maintaining its thread to the past.",
  },

  aliNour: {
    imageAlt: "Architectural heritage — historic gateway in Sudan",
    kicker: "Introducing",
    heading: "Ali Nour",
    p1: "A grants-management specialist and cultural heritage advocate. Ali serves as Secretary General of Blue Shield Sudan and rapporteur of the Emergency Response Committee under Sudan’s National Corporation for Antiquities and Museums (NCAM).",
    p2: "With a background in strategic fundraising, proposal development, and crisis coordination, he supports regional and international efforts to document, stabilise, and protect heritage in Sudan.",
    quote:
      "“Heritage workers operate under constant threat amidst an active war, with civilian attacks intensifying, even in the capital, Khartoum.”",
    attribution: "— Ali Nour",
  },

  directorsNote: {
    kicker: "Director’s Note",
    name: "Aicha Cherif",
    role: "Director · 2026 Sundance x Adobe Ignite Fellow",
    quote:
      "“With Returning Sands I venture into thematics of memory and belonging, through my own experience with displacement. Fleeing gender-based violence in my homeland, Guinea, at age one, I have found solace in storytelling.”",
    bodyLead: "My intention with my forthcoming feature documentary",
    bodyTitle: "HEAT",
    bodyTail:
      "is to showcase a neighborhood filled with a rich and textured history — and with this project, I explore the same questions of identity and belonging from a different lens. As part of the creative process, I’m in open conversation with Sudanese filmmakers and creatives, as well as Ali and his community of heritage workers, to make sure to highlight their voices and stories in a collaborative manner.",
  },

  events: {
    kicker: "Events",
    headingLead: "Three cities,",
    headingEmphasis: "one thread.",
    intro:
      "Each city combines exhibitions, academic panels, and fundraising moments — open to the public, with limited capacity.",
    cities: [
      {
        city: "Cairo",
        when: "Dec 2026",
        body: "Where much of the heritage work is now coordinated from exile.",
        items: [
          {
            label: "Access Art Space Exhibit",
            when: "Dec 18–20",
            body: "Fifteen Sudanese artists, curated by Reem Aljeally, exploring memory, return, and home.",
          },
          {
            label: "Educational Panel · AUC",
            when: "Dec 16",
            body: "A half-day series with Sudanese heritage expert Dr. Amira Ahmed — a refugee focus-group conversation, then a panel with ICROM, UNESCO, Blue Shield Sudan, and the National Archives.",
          },
          {
            label: "Oral History Project",
            when: "Ongoing",
            body: "With Oral Historian Afra Elagab — cultural heritage in exile, toward a digital repository and bilingual publication.",
          },
        ],
      },
      {
        city: "London",
        when: "Jan 2027",
        body: "Carrying the project into the diaspora.",
        items: [
          {
            label: "London Exhibition",
            when: "One week · Jan",
            body: "Four artists — two Bermudian, two Sudanese — on the unlikely kinship of return. Sponsored by the Bermuda Arts Council.",
          },
          {
            label: "Culture House Fireside",
            when: "January",
            body: "A conversation on collective memory and testimony with African heritage stakeholders, hosted by Culture House.",
          },
        ],
      },
      {
        city: "New York",
        when: "Nov 2026 – Feb 2027",
        body: "The campaign's primary fundraising engine.",
        items: [
          {
            label: "Private Donor Event",
            when: "Nov 2026",
            body: "Philanthropists from the arts and culture world; impact trailer, remarks, and a silent auction of contemporary Sudanese art.",
          },
          {
            label: "Interactive Public Showcase",
            when: "Mid-Nov 2026",
            body: "With NYC-based Sudanese arts collectives — performance, mingling, and a live community-generated art installation.",
          },
          {
            label: "Exhibition",
            when: "Feb 2027",
            body: "Curated by Paris Sistilli and Fatma Yasier — Sudanese artists on memory, return, and home.",
          },
        ],
      },
    ],
  },

  oralHistory: {
    imageAlt: "Archival portrait — memory and adornment",
    kicker: "Oral History Project",
    heading: "Ten artists, in their own words.",
    p1: "In consultation with Oral Historian Afra Elagab, the project will follow ten Sudanese artists in Cairo, documenting their experiences of exile, displacement, and cultural loss — collecting personal archives of photographs, documents, artworks, and objects that go beyond the artists themselves, drawing from the wider Sudanese community in Cairo and abroad.",
    p2: "These materials will be digitized into a community-led digital archive, positioning civil-society collections as critical resources for post-conflict cultural recovery — ultimately becoming a virtual museum, making Sudanese cultural memory accessible to audiences worldwide.",
  },

  timeline: {
    kicker: "Project Timeline",
    headingLead: "A year of building,",
    headingEmphasis: "gathering,",
    headingTail: "and going to film.",
    entries: [
      {
        when: "Summer 2026",
        title: "Development Begins",
        points: [
          "Onboarded Aicha Cherif as documentary director",
          "Backed by the Sundance x Adobe Ignite Fellowship",
          "Fundraising promo video assembled; crew comes together",
          "Received fiscal sponsorship from SIMA",
        ],
      },
      {
        when: "Fall 2026",
        title: "Fundraising Begins",
        points: [
          "NYC fundraising events and private donations begin",
          "Grant application rollout continues",
        ],
      },
      {
        when: "Nov – Dec 2026",
        title: "Pre-Production · Cairo",
        points: [
          "Executing the Cairo exhibit and academic events",
          "Film crew and shoot dates locked",
          "Story arc finalized; oral history interviews begin",
        ],
      },
      {
        when: "Jan – Feb 2027",
        title: "London & New York",
        points: [
          "Executing the London exhibit and academic events",
          "Impact trailer screens; NYC exhibit and academic events",
          "Logistics finalized for the spring shoot",
        ],
      },
      {
        when: "May 2027",
        title: "Production",
        points: [
          "Crew travels to Cairo",
          "Filming conducted over a period of 2–3 weeks",
        ],
      },
      {
        when: "Fall 2027",
        title: "Post-Production",
        points: [
          "Editing, coloring, and sound are executed",
          "Festival submission strategy rolls out",
        ],
      },
    ],
  },

  closingQuote: {
    imageAlt: "Historical portrait — adornment and identity",
    kicker: "Closing Statement",
    quote:
      "“Country is more than territory, it is memory… So if you protect that now, in the middle of this chaos, then we will have a foundation through which we can rebuild.”",
    attribution: "— Ali Nour",
  },

  team: {
    kicker: "Core Creative Team",
    headingLead: "Built across",
    headingEmphasis: "three cities,",
    headingTail: "with friends.",
    intro:
      "Returning Sands is produced by Paris Quetzal Sistilli, Yusef Bushara, and Camilla Marchese González, directed by Aicha Cherif, with creative, advisory, and coordination support spanning New York, London, and Cairo. Where possible we work with friends and collaborators pro bono — the priority is paying heritage workers and contributors for their time.",
    producers: [
      {
        name: "Paris Quetzal Sistilli",
        role: "Producer · Co-Founder",
        base: "New York",
        bio: "A Mexican-American cultural heritage researcher and practitioner focused on heritage protection, cultural policy, and collective memory. She holds degrees in Middle Eastern Politics from Sciences Po and Political Science from Columbia. Her writing has appeared in the Journal of Art Crime and art-law journals at UC Berkeley and Harvard.",
      },
      {
        name: "Yusef Bushara",
        role: "Producer · Co-Founder",
        base: "London",
        bio: "A Sudanese-Bermudian editor, writer, and researcher specializing in global literatures and publishing. In 2025, he released his debut poetry collection, Good News. Yusef holds a degree in Middle Eastern politics from Sciences Po and one in English Literature from the University of Hong Kong, and earned his Master's in Comparative Literature from SOAS University of London.",
      },
      {
        name: "Camilla Marchese González",
        role: "Producer · Co-Founder",
        base: "Brooklyn",
        bio: "A Guatemalan-Italian writer and filmmaker drawn to storytelling as a means of preservation. Her short films have screened at DOC/NYC, Hamptons International Film Festival, Woodstock Film Festival, and Athens International Film Festival.",
      },
      {
        name: "Basma Khalifa",
        role: "Executive Producer",
        base: "London",
        bio: "A Sudanese creative and founder of Zola Studios, working in character-driven storytelling that foregrounds underrepresented voices. Her debut feature reached over 30 million viewers and earned a Newcomer of the Year nomination at the Edinburgh TV Festival.",
      },
    ],
    coreTeamKicker: "Core Team",
    coreTeam: [
      { name: "Jenna Khalil", role: "Cairo Impact Coordinator" },
      { name: "Afra Elagab", role: "Oral Historian" },
      { name: "Anisa Estrada", role: "Researcher · Historic Preservation" },
      { name: "Cillian Lavelle", role: "Director, Finance & Operations" },
      { name: "Micheal Isaak", role: "Researcher" },
    ],
  },

  donate: {
    kicker: "Donate",
    headingLead: "Help carry this work",
    headingEmphasis: "forward.",
    intro:
      "Every contribution goes directly into documenting endangered heritage, supporting Sudanese heritage workers, and finishing the film. Choose the route that suits where you are.",
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
      kicker: "United Kingdom & elsewhere",
      heading: "Give directly to Returning Sands CIC",
      body: "Give by card, Apple Pay or Google Pay in the amount of your choice, in pounds, euros or your own currency. Or send a bank transfer using the details below, with your name as the reference so we can thank you.",
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

  contact: {
    kicker: "Contact & Support",
    headingLead: "If this work matters to you,",
    headingEmphasis: "get in touch.",
    bodyLead:
      "We’re actively building partnerships, applying for grants, and looking for friends who can help — through funding, expertise, venues, or simply by carrying the word forward. Write to us at",
    email: "info@returningsands.org",
    bodyTail: ", or reach the producer or the creative director directly.",
    mailSubject: "Returning Sands",
    followKicker: "Follow along",
    people: [
      {
        role: "Producer",
        name: "Paris Quetzal Sistilli",
        buttonLabel: "Email the Producer",
        email: "paris@returningsands.org",
        phone: "+1 (443) 699 4957",
        city: "New York",
      },
      {
        role: "Creative Director",
        name: "Yusef Bushara",
        buttonLabel: "Email the Creative Director",
        email: "yusef@returningsands.org",
        phone: "+44 (0) 7568 946890",
        city: "London",
      },
    ],
  },

  footer: {
    blurb:
      "A Sudanese cultural heritage campaign and short documentary by Paris Quetzal Sistilli, Yusef Bushara, and Camilla Marchese González, in partnership with Blue Shield Sudan.",
    navigateKicker: "Navigate",
    links: [
      { label: "At Stake", href: "#stake" },
      { label: "Campaign", href: "#campaign" },
      { label: "Documentary", href: "#documentary" },
      { label: "Events", href: "#events" },
      { label: "Team", href: "#team" },
      { label: "Donate", href: "#donate" },
      { label: "Contact", href: "#contact" },
    ],
    partnersKicker: "Partners",
    partners: [
      "Bermuda Arts Council",
      "British Council",
      "Kalam Aflam",
      "Sundance Institute",
      "Sudan Human Rights Hub",
      "Culture House",
      "The American University in Cairo",
      "SUDAAK",
      "Blue Shield International",
    ],
    /** Rendered as `${copyrightPrefix} ${year} ${copyrightSuffix}`. */
    copyrightPrefix: "©",
    copyrightSuffix: "Returning Sands CIC",
    cities: "New York · London · Cairo · Khartoum",
  },
} as const satisfies SiteContent;
