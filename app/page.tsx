import Image from "next/image";
import Link from "next/link";
import { Reveal, WordStagger } from "./Reveal";
import { StampBadge, StampWatermark, Postmark, PerfSeam } from "./Stamp";

const producers = [
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
    bio: "A Sudanese-Bermudian editor, writer, and researcher specializing in Middle Eastern politics and publishing. Based in London, he works as a non-fiction editorial assistant at Saqi Books, and released his debut poetry collection, Good News, in 2025.",
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
];

const coreTeam = [
  { name: "Jenna Khalil", role: "Cairo Impact Coordinator" },
  { name: "Afra Elagab", role: "Oral Historian" },
  { name: "Anisa Estrada", role: "Researcher · Historic Preservation" },
  { name: "Cillian Lavelle", role: "Finance Coordinator" },
  { name: "Micheal Isaak", role: "Researcher" },
];

const goals = [
  "Support the documentation of endangered heritage and lived memory.",
  "Amplify the work of Sudanese heritage professionals, including emerging efforts tied to Blue Shield Sudan.",
  "Collaborate with Sudanese artists and heritage experts to tackle the issue of futurity in an interdisciplinary fashion.",
  "Enable future pathways to rebuild, recover, and sustain Sudanese cultural heritage — within the country and across the diaspora.",
  "Position culture as a core component of humanitarian and post-conflict response.",
];

const timeline = [
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
];

const events = [
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
];

const partners = [
  "Bermuda Arts Council",
  "Kalam Aflam",
  "Sundance Institute",
  "Sudan Human Rights Hub",
  "Culture House",
  "The American University in Cairo",
  "SUDAAK",
  "Blue Shield International",
];

const donate = {
  us: {
    sponsorPage: "https://simastudios.org/fiscal-sponsorship/returning-sands/",
    paypal: "https://www.paypal.com/donate/?hosted_button_id=CU7JMGF3GWH2J",
    tagline:
      "US donations are tax-deductible to the fullest extent of the law via our fiscal sponsor, SIMA Studios (501(c)(3)).",
  },
  // UK / rest of world: Stripe Payment Link and bank details to follow.
  uk: {
    stripe: null as string | null,
    bank: null as { accountName: string; sortCode: string; accountNumber: string } | null,
  },
  note: "Returning Sands CIC is entirely not-for-profit; all funds are reinvested in the mission.",
};

const socials = [
  { label: "Instagram", handle: "@returningsands", href: "https://www.instagram.com/returningsands" },
  { label: "LinkedIn", handle: "Returning Sands", href: "https://www.linkedin.com/company/returningsands" },
];

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <OpeningQuote />
      <WhatsAtStake />
      <Campaign />
      <Goals />
      <Documentary />
      <AliNour />
      <DirectorsNote />
      <Events />
      <OralHistory />
      <Timeline />
      <ClosingQuote />
      <Team />
      <Donate />
      <Contact />
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Mark className="text-sand-50" />
          <span className="font-display text-xl tracking-tight text-sand-50">
            Returning Sands
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-sand-100/85">
          <a href="#stake" className="hover-underline">At Stake</a>
          <a href="#campaign" className="hover-underline">Campaign</a>
          <a href="#documentary" className="hover-underline">Film</a>
          <a href="#events" className="hover-underline">Events</a>
          <a href="#team" className="hover-underline">Team</a>
          <a href="#contact" className="hover-underline">Contact</a>
        </nav>
        <a
          href="#donate"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-sand-50 px-4 py-2 text-sm text-nile-900 hover:bg-sand-200 transition-colors"
        >
          Donate
          <Arrow />
        </a>
      </div>
    </header>
  );
}

function Mark({ className = "text-ochre-600" }: { className?: string }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      className={className}
    >
      <path d="M2 30 C 10 22, 14 22, 20 28 S 32 34, 38 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 24 C 10 16, 14 16, 20 22 S 32 28, 38 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <path d="M2 18 C 10 10, 14 10, 20 16 S 32 22, 38 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M4 10 10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ name, className = "" }: { name: string; className?: string }) {
  if (name === "Instagram") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V17M8 7.5v.1M12 17v-4a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const base =
    tone === "light"
      ? "text-sand-100/80 hover:text-sand-50"
      : "text-ink/70 hover:text-ink";
  return (
    <ul className="flex items-center gap-5">
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Returning Sands on ${s.label}`}
            className={`inline-flex items-center gap-2 text-sm transition-colors ${base}`}
          >
            <SocialIcon name={s.label} />
            <span className="hover-underline">{s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-nile-900 text-sand-50">
      <Image
        src="/img/bridge.jpg"
        alt="Sunrise over a bridge in Khartoum"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nile-900/70 via-nile-900/20 to-nile-900/85" />
      <div className="absolute inset-0 grain" />
      <StampBadge
        size={104}
        tilt="7deg"
        className="hidden sm:block absolute top-28 right-6 sm:right-10 z-10"
      />
      <StampBadge
        variant="magazine"
        size={190}
        tilt="-6deg"
        className="hidden md:block absolute top-28 left-6 lg:left-10 z-10"
      />
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 pt-40 pb-20 sm:pb-28">
        <Reveal className="kicker-anim kicker text-sand-300 mb-6 flex items-center gap-3">
          <span className="stamp-chip">A Sudanese Cultural Heritage Campaign · 2026 – 2027</span>
        </Reveal>
        <h1 className="font-display text-[18vw] leading-[0.86] sm:text-[14vw] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] text-sand-50">
          <WordStagger as="span" text="Returning" />
          <span className="block italic text-sand-300">
            <WordStagger as="span" text="Sands" />
          </span>
        </h1>
        <Reveal className="mt-10 grid gap-8 md:grid-cols-12 items-end reveal-lg" delay={150}>
          <p className="md:col-span-7 md:col-start-1 max-w-prose text-lg md:text-xl text-sand-100/90 font-light leading-relaxed">
            A campaign and short documentary by Paris Sistilli, Yusef
            Bushara, and Camilla Marchese González — protecting Sudanese
            cultural memory amid one of the world&rsquo;s most devastating
            and underreported conflicts.
          </p>
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-2 text-sm reveal-stagger">
            <Row label="Cairo" value="Dec 2026" />
            <Row label="London" value="Jan 2027" />
            <Row label="New York" value="Nov 2026 – Feb 2027" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-sand-50/25 pb-2">
      <span className="kicker text-sand-300">{label}</span>
      <span className="font-display text-lg text-sand-50">{value}</span>
    </div>
  );
}

function OpeningQuote() {
  return (
    <section className="relative bg-nile-900 text-sand-50 overflow-hidden">
      <div className="relative h-[70svh] min-h-[480px] parallax">
        <div className="parallax-layer">
          <Image
            src="/img/meroe.jpg"
            alt="The pyramids of Meroë in Sudan"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-nile-900/90 via-nile-900/50 to-nile-900/10" />
        <div className="relative h-full mx-auto max-w-7xl px-6 sm:px-10 flex items-center">
          <Reveal as="figure" className="max-w-2xl reveal-lg">
            <p className="kicker text-sand-300 mb-6">Opening Statement</p>
            <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-sand-50">
              &ldquo;Beneath the wreckage of homes and hospitals lies another
              front in this war: the systematic erasure of a
              nation&rsquo;s cultural memory.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sand-300 kicker">
              — Ali Nour · Blue Shield Sudan
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatsAtStake() {
  const stats = [
    { value: "60%", label: "of Sudan National Museum holdings looted in the last three years." },
    { value: "12M+", label: "people displaced since the war began in 2023." },
    { value: "Ongoing", label: "deliberate destruction of museums, archives, and historic sites." },
  ];
  return (
    <section id="stake" className="bg-sand-50">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5 reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-4">What&rsquo;s at Stake</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] rule-draw pb-6">
              Cultural heritage is a tangible expression of
              <span className="italic text-ochre-600"> identity.</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-ink/80 reveal" delay={120}>
            <p>
              In times of conflict, that identity becomes a strategic target —
              a way to erode the memory, cohesion, and continuity of a people.
              Although commonly framed as a &ldquo;civil war,&rdquo; Sudan
              since 2023 has been in the throes of a counter-revolutionary
              war. The country has witnessed widespread and irreversible
              damage to archaeological sites, archives, and museums.
            </p>
            <p>
              Destruction in Sudan is ongoing, not confined to the past.
              Immediate documentation and action are essential. Heritage
              workers continue to operate under extreme, time-sensitive
              conditions with limited visibility and support — underscoring
              the urgent need for greater aid, technical expertise, and
              protective resources.
            </p>
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-3 gap-6 mt-16 reveal-stagger">
          {stats.map((s, i) => (
            <Reveal
              as="li"
              key={s.value}
              className="perf bg-sand-100 p-8 sm:p-10 reveal"
              style={{ ["--perf-bg" as string]: "var(--sand-50)" }}
              delay={i * 110}
            >
              <p className="font-display text-6xl sm:text-7xl text-ochre-600 leading-none mb-4">
                {s.value}
              </p>
              <p className="text-ink/75 leading-relaxed">{s.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Campaign() {
  return (
    <section id="campaign" className="bg-sand-100 grain">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5 reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-4">Impact Campaign</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
              Three cities,
              <span className="italic text-ochre-600"> one film,</span> one
              global call.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-ink/80 reveal" delay={120}>
            <p>
              Returning Sands is a global campaign that launches with
              education and art exhibition events in{" "}
              <strong>Cairo</strong>, <strong>London</strong>, and{" "}
              <strong>New York</strong> — serving as both visibility
              platforms and fundraising catalysts for the short documentary
              at the heart of the project.
            </p>
            <p>
              The ambition extends beyond a single screening or exhibition.
              At its core is the production of a documentary film to be
              submitted to festivals across the SWANA region and
              internationally, fostering sustained engagement with the urgent
              issues of heritage preservation in Sudan and the deliberate
              targeting of cultural sites in conflict zones.
            </p>
            <p>
              Through this work, we seek to engage Sudanese communities
              within the country and across the diaspora, while reaching a
              broader global audience — to amplify awareness and mobilize a
              wider call to action.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Goals() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      <PerfSeam />
      <StampWatermark
        variant="sudan"
        size={520}
        tilt="9deg"
        className="-top-24 -right-24 hidden lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <Reveal className="reveal-lg flex items-start justify-between gap-6">
          <div className="flex-1">
            <p className="kicker kicker-anim text-ochre-600 mb-6">Goals of the Project</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] mb-14 max-w-3xl rule-draw pb-6">
              Five threads holding the work together.
            </h2>
          </div>
          <StampBadge
            variant="magazine"
            size={140}
            tilt="4deg"
            className="hidden sm:block mt-2"
          />
        </Reveal>
        <ol className="grid gap-px bg-ink/15 rounded-2xl overflow-hidden md:grid-cols-2">
          {goals.map((g, i) => (
            <Reveal
              as="li"
              key={i}
              className="bg-sand-50 p-8 sm:p-10 flex gap-6 items-start reveal"
              delay={i * 90}
            >
              <span className="font-display text-3xl text-ochre-600 leading-none mt-1 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-ink/80 leading-relaxed text-lg">{g}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Documentary() {
  return (
    <section id="documentary" className="bg-nile-900 text-sand-50 grain relative">
      <PerfSeam dark />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12 mb-16">
          <Reveal className="md:col-span-5 reveal-lg">
            <p className="kicker kicker-anim text-sand-300 mb-4">The Documentary</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
              From exile in Egypt,
              <span className="italic text-sand-300"> a fight</span> to keep
              memory alive.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-sand-100/85 reveal" delay={120}>
            <p>
              The film follows the story of Ali Nour, a Sudanese heritage
              professional leading efforts to protect his country&rsquo;s
              cultural legacy amid one of the world&rsquo;s most devastating
              and underreported conflicts — a war that has displaced over
              twelve million people and triggered the widespread, deliberate
              destruction of museums, archives, and historic sites.
            </p>
            <p>
              From Cairo, Ali and a network of displaced Sudanese experts
              coordinate high-risk safeguarding operations across Sudan,
              confronting the collapse of national infrastructure and the
              limits of international support. Expanding beyond preservation
              alone, the film also enters the lives of Sudanese artists,
              musicians, and scholars in exile — capturing the active
              creation and transmission of cultural heritage within the
              diaspora. Heritage stands not only as something under threat,
              but as a <em>living force</em>: central to identity, survival,
              and the future of Sudan itself.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          <Reveal className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-2xl bg-nile-800 reveal parallax">
            <Image
              src="/img/barbers.jpg"
              alt="Archival photograph from Sudan"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center zoom-in"
            />
          </Reveal>
          <Reveal as="figure" className="md:col-span-5 bg-nile-800 p-10 sm:p-12 rounded-2xl flex flex-col justify-center reveal" delay={140}>
            <p className="kicker text-sand-300 mb-4">Logline</p>
            <blockquote className="font-display text-2xl sm:text-3xl leading-[1.2] text-sand-50">
              From exile in Egypt, Ali Nour coordinates Sudan&rsquo;s fight
              to keep heritage alive. With national memory under siege, Ali
              and his crew of brave volunteers do everything to safeguard
              Sudan&rsquo;s future while maintaining its thread to the past.
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AliNour() {
  return (
    <section className="bg-sand-100">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-5 relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink reveal-lg parallax">
            <Image
              src="/img/gateway.jpg"
              alt="Architectural heritage — historic gateway in Sudan"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center zoom-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 reveal" delay={140}>
            <p className="kicker kicker-anim text-ochre-600 mb-4">Introducing</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-6">
              Ali Nour
            </h2>
            <p className="text-lg text-ink/80 leading-relaxed mb-6">
              A grants-management specialist and cultural heritage advocate.
              Ali serves as Secretary General of Blue Shield Sudan and
              rapporteur of the Emergency Response Committee under
              Sudan&rsquo;s National Corporation for Antiquities and Museums
              (NCAM).
            </p>
            <p className="text-lg text-ink/80 leading-relaxed">
              With a background in strategic fundraising, proposal
              development, and crisis coordination, he supports regional and
              international efforts to document, stabilise, and protect
              heritage in Sudan.
            </p>
            <div className="mt-10 divider-rule" />
            <figure className="mt-10">
              <blockquote className="font-display text-2xl sm:text-3xl leading-snug text-ink">
                &ldquo;Heritage workers operate under constant threat amidst
                an active war, with civilian attacks intensifying, even in
                the capital, Khartoum.&rdquo;
              </blockquote>
              <figcaption className="mt-4 kicker text-ink/55">
                — Ali Nour
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DirectorsNote() {
  return (
    <section className="bg-sand-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4 reveal-lg flex items-start gap-6">
            <StampBadge size={92} tilt="-5deg" className="mt-1" />
            <div>
              <p className="kicker kicker-anim text-ochre-600 mb-4">Director&rsquo;s Note</p>
              <h2 className="font-display text-4xl leading-[0.95]">
                Aicha Cherif
              </h2>
              <p className="mt-3 text-sm text-ink/60">
                Director · 2026 Sundance x Adobe Ignite Fellow
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6 reveal" delay={120}>
            <blockquote className="font-display text-2xl sm:text-3xl leading-[1.3] text-ink mb-6">
              &ldquo;With Returning Sands I venture into thematics of memory
              and belonging, through my own experience with displacement.
              Fleeing gender-based violence in my homeland, Guinea, at age
              one, I have found solace in storytelling.&rdquo;
            </blockquote>
            <p className="text-lg text-ink/75 leading-relaxed">
              My intention with my forthcoming feature documentary{" "}
              <em>HEAT</em>{" "}is to showcase a neighborhood filled with a rich
              and textured history — and with this project, I explore the
              same questions of identity and belonging from a different
              lens. As part of the creative process, I&rsquo;m in open
              conversation with Sudanese filmmakers and creatives, as well
              as Ali and his community of heritage workers, to make sure to
              highlight their voices and stories in a collaborative manner.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-nile-900 text-sand-50 grain">
      <PerfSeam dark />
      <StampBadge
        variant="magazine"
        size={170}
        tilt="5deg"
        className="hidden lg:block absolute top-24 right-10 z-10 opacity-90"
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal className="reveal-lg flex items-start gap-5">
            <Postmark animate className="text-sand-300 mt-1 shrink-0" label="" />
            <div>
              <p className="kicker kicker-anim text-sand-300 mb-4">Events</p>
              <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
                Three cities,
                <span className="italic text-sand-300"> one thread.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal as="p" className="max-w-md text-sand-100/80 leading-relaxed reveal" delay={140}>
            Each city combines exhibitions, academic panels, and fundraising
            moments — open to the public, with limited capacity.
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-sand-50/10 rounded-2xl overflow-hidden">
          {events.map((e, i) => (
            <Reveal
              as="article"
              key={e.city}
              className="bg-nile-900 p-8 sm:p-10 flex flex-col gap-6 transition-colors hover:bg-nile-800 reveal-lg"
              delay={i * 140}
            >
              <div className="flex items-baseline justify-between">
                <span className="kicker text-sand-300">{e.when}</span>
              </div>
              <h3 className="font-display text-5xl leading-none">
                {e.city}
              </h3>
              <p className="text-sand-100/70 text-sm leading-relaxed">
                {e.body}
              </p>
              <ul className="mt-2 flex flex-col gap-5 border-t border-sand-100/15 pt-6">
                {e.items.map((it) => (
                  <li key={it.label}>
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="font-display text-lg text-sand-50">
                        {it.label}
                      </span>
                      <span className="text-[0.65rem] uppercase tracking-[0.14em] text-sand-300 whitespace-nowrap">
                        {it.when}
                      </span>
                    </div>
                    <p className="text-sand-100/75 text-sm leading-relaxed">
                      {it.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OralHistory() {
  return (
    <section className="bg-sand-100">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12 items-center">
          <div className="md:col-span-5 relative">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink reveal-lg parallax">
              <Image
                src="/img/woman.jpg"
                alt="Archival portrait — memory and adornment"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center zoom-in"
              />
            </Reveal>
            <StampBadge
              variant="magazine"
              size={210}
              tilt="-3deg"
              className="hidden sm:block absolute -bottom-8 -right-8 z-10"
            />
          </div>
          <Reveal className="md:col-span-6 md:col-start-7 reveal" delay={140}>
            <p className="kicker kicker-anim text-ochre-600 mb-4">Oral History Project</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] mb-6">
              Ten artists, in their own words.
            </h2>
            <p className="text-lg text-ink/80 leading-relaxed mb-6">
              In consultation with Oral Historian Afra Elagab, the project
              will follow ten Sudanese artists in Cairo, documenting their
              experiences of exile, displacement, and cultural loss —
              collecting personal archives of photographs, documents,
              artworks, and objects that go beyond the artists themselves,
              drawing from the wider Sudanese community in Cairo and abroad.
            </p>
            <p className="text-lg text-ink/80 leading-relaxed">
              These materials will be digitized into a community-led digital
              archive, positioning civil-society collections as critical
              resources for post-conflict cultural recovery — ultimately
              becoming a virtual museum, making Sudanese cultural memory
              accessible to audiences worldwide.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative bg-sand-50 overflow-hidden">
      <PerfSeam />
      <StampWatermark
        variant="magazine"
        size={900}
        tilt="-3deg"
        className="top-1/3 -right-40 hidden xl:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <Reveal className="reveal-lg flex items-start justify-between gap-6">
          <div>
            <p className="kicker kicker-anim text-ochre-600 mb-4">Project Timeline</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-16 max-w-3xl">
              A year of building,
              <span className="italic text-ochre-600"> gathering,</span> and going
              to film.
            </h2>
          </div>
          <StampBadge size={110} tilt="6deg" className="hidden sm:block" />
        </Reveal>
        <ol className="relative border-l border-ink/20 pl-8 sm:pl-12 space-y-12">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.when} className="relative reveal" delay={i * 100}>
              <span className="absolute -left-[2.6rem] sm:-left-[3.6rem] top-2 h-3 w-3 rounded-full bg-ochre-600 ring-4 ring-sand-50" />
              <p className="kicker text-ochre-600 mb-2">{t.when}</p>
              <h3 className="font-display text-3xl sm:text-4xl mb-3">
                {t.title}
              </h3>
              <ul className="text-ink/75 leading-relaxed max-w-xl space-y-1.5">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-ochre-600/70 mt-[0.55em] h-1 w-1 rounded-full bg-current shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ClosingQuote() {
  return (
    <section className="relative bg-sand-100">
      <div className="relative h-[80svh] min-h-[520px] overflow-hidden parallax">
        <div className="parallax-layer">
          <Image
            src="/img/portrait.jpg"
            alt="Historical portrait — adornment and identity"
            fill
            sizes="100vw"
            style={{ objectPosition: "85% center" }}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-sand-100 via-sand-100/85 to-transparent" />
        <div className="relative h-full mx-auto max-w-7xl px-6 sm:px-10 flex items-center">
          <Reveal as="figure" className="max-w-xl reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-6">Closing Statement</p>
            <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-ink">
              &ldquo;Country is more than territory, it is memory… So if you
              protect that now, in the middle of this chaos, then we will
              have a foundation through which we can rebuild.&rdquo;
            </blockquote>
            <figcaption className="mt-6 kicker text-ink/65">
              — Ali Nour
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-sand-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-10 md:grid-cols-12 mb-16">
          <Reveal className="md:col-span-5 reveal-lg flex items-start gap-5">
            <StampBadge size={86} tilt="-8deg" className="mt-1 shrink-0" />
            <div>
              <p className="kicker kicker-anim text-ochre-600 mb-4">Core Creative Team</p>
              <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
                Built across
                <span className="italic text-ochre-600"> three cities,</span>
                with friends.
              </h2>
            </div>
          </Reveal>
          <Reveal as="p" className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-ink/75 reveal" delay={140}>
            Returning Sands is produced by Paris Quetzal Sistilli, Yusef
            Bushara, and Camilla Marchese González, directed by Aicha
            Cherif, with creative, advisory, and coordination support
            spanning New York, London, and Cairo. Where possible we work
            with friends and collaborators pro bono — the priority is paying
            heritage workers and contributors for their time.
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {producers.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              className="bg-sand-100 p-8 sm:p-10 flex flex-col gap-3 transition-colors hover:bg-sand-50 reveal"
              delay={i * 110}
            >
              <span className="kicker text-ink/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl leading-tight">
                {p.name}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
              <p className="text-xs text-ink/55 leading-relaxed">{p.bio}</p>
              <p className="kicker text-ochre-600 mt-auto pt-4">{p.base}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <Reveal as="p" className="kicker kicker-anim text-ochre-600 mb-6">Core Team</Reveal>
          <ul className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreTeam.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                className="perf border border-ink/15 p-6 bg-sand-50/60 reveal"
                style={{ ["--perf-bg" as string]: "var(--sand-100)" }}
                delay={i * 90}
              >
                <h3 className="font-display text-xl mb-1">{p.name}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Donate() {
  const { us, uk, note } = donate;
  return (
    <section id="donate" className="relative overflow-hidden bg-nile-900 text-sand-50 grain">
      <PerfSeam dark />
      <StampWatermark
        variant="magazine"
        mode="screen"
        opacity={0.06}
        size={520}
        tilt="-7deg"
        className="-top-16 right-[4%] hidden lg:block"
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <Reveal className="reveal-lg max-w-3xl">
          <p className="kicker kicker-anim text-sand-300 mb-4">Donate</p>
          <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-8">
            Help carry this work
            <span className="italic text-sand-300"> forward.</span>
          </h2>
          <p className="text-sand-100/75 leading-relaxed text-lg max-w-2xl">
            Every contribution goes directly into documenting endangered
            heritage, supporting Sudanese heritage workers, and finishing the
            film. Choose the route that suits where you are.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal className="reveal" delay={80}>
            <div className="h-full rounded-2xl border border-sand-100/15 bg-sand-50/[0.04] p-8 sm:p-10 flex flex-col">
              <p className="kicker text-sand-300 mb-3">United States</p>
              <h3 className="font-display text-3xl mb-4">Give through SIMA Studios</h3>
              <p className="text-sand-100/75 leading-relaxed mb-8 flex-1">
                {us.tagline}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={us.paypal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-sand-50 px-6 py-3 text-nile-900 hover:bg-sand-200 transition-colors"
                >
                  Donate in USD
                  <ExternalArrow />
                </a>
                <a
                  href={us.sponsorPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-sand-100/30 px-6 py-3 text-sand-50 hover:bg-sand-50 hover:text-nile-900 transition-colors"
                >
                  Our SIMA page
                  <ExternalArrow />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="reveal" delay={160}>
            <div className="h-full rounded-2xl border border-sand-100/15 bg-sand-50/[0.04] p-8 sm:p-10 flex flex-col">
              <p className="kicker text-sand-300 mb-3">United Kingdom &amp; elsewhere</p>
              <h3 className="font-display text-3xl mb-4">Give directly to Returning Sands CIC</h3>
              {uk.stripe || uk.bank ? (
                <>
                  <p className="text-sand-100/75 leading-relaxed mb-8 flex-1">
                    Give by card in GBP, or by bank transfer using the details
                    below. Please use your name as the payment reference.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {uk.stripe && (
                      <a
                        href={uk.stripe}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-sand-50 px-6 py-3 text-nile-900 hover:bg-sand-200 transition-colors"
                      >
                        Donate in GBP
                        <ExternalArrow />
                      </a>
                    )}
                  </div>
                  {uk.bank && (
                    <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm text-sand-100/80">
                      <dt className="text-sand-300">Account name</dt>
                      <dd>{uk.bank.accountName}</dd>
                      <dt className="text-sand-300">Sort code</dt>
                      <dd>{uk.bank.sortCode}</dd>
                      <dt className="text-sand-300">Account number</dt>
                      <dd>{uk.bank.accountNumber}</dd>
                    </dl>
                  )}
                </>
              ) : (
                <>
                  <p className="text-sand-100/75 leading-relaxed mb-8 flex-1">
                    Card payments in GBP and bank transfer details are coming
                    shortly. In the meantime, email us and we&rsquo;ll send you
                    the details directly.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-3 rounded-full border border-sand-100/30 px-6 py-3 text-sand-50 hover:bg-sand-50 hover:text-nile-900 transition-colors"
                    >
                      Get in touch
                      <Arrow />
                    </a>
                  </div>
                </>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="reveal mt-12" delay={220}>
          <p className="text-sm text-sand-100/60 max-w-2xl leading-relaxed">
            {note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-sand-50 grain">
      <PerfSeam />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7 reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-4">Contact &amp; Support</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-8">
              If this work matters to you,
              <span className="italic text-ochre-600"> get in touch.</span>
            </h2>
            <p className="text-ink/75 leading-relaxed mb-10 max-w-xl text-lg">
              We&rsquo;re actively building partnerships, applying for grants,
              and looking for friends who can help — through funding,
              expertise, venues, or simply by carrying the word forward.
              Reach out to the producer or the creative director directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:pqsistilli@gmail.com?subject=Returning%20Sands"
                className="inline-flex items-center gap-3 rounded-full bg-ochre-600 px-6 py-3 text-sand-50 hover:bg-ochre-500 transition-colors"
              >
                Email the Producer
                <Arrow />
              </a>
              <a
                href="mailto:ysbushara@gmail.com?subject=Returning%20Sands"
                className="inline-flex items-center gap-3 rounded-full border border-ink/25 px-6 py-3 text-ink hover:bg-ink hover:text-sand-50 transition-colors"
              >
                Email the Creative Director
                <Arrow />
              </a>
            </div>
            <div className="mt-10">
              <p className="kicker text-ink/55 mb-3">Follow along</p>
              <SocialLinks tone="dark" />
            </div>
          </Reveal>

          <Reveal className="md:col-span-4 md:col-start-9 reveal flex flex-col gap-10" delay={140}>
            <div className="flex items-start gap-4 self-end sm:self-start">
              <StampBadge size={122} tilt="-3deg" />
              <StampBadge variant="magazine" size={150} tilt="5deg" className="mt-6" />
            </div>
            <div className="space-y-6">
              <div>
                <p className="kicker text-ink/55 mb-1">Producer</p>
                <p className="font-display text-2xl">Paris Quetzal Sistilli</p>
                <a
                  href="mailto:pqsistilli@gmail.com"
                  className="block text-sm text-ink/70 hover-underline mt-1"
                >
                  pqsistilli@gmail.com
                </a>
                <p className="text-sm text-ink/60 mt-1">
                  +1 (443) 699 4957 · New York
                </p>
              </div>
              <div>
                <p className="kicker text-ink/55 mb-1">Creative Director</p>
                <p className="font-display text-2xl">Yusef Bushara</p>
                <a
                  href="mailto:ysbushara@gmail.com"
                  className="block text-sm text-ink/70 hover-underline mt-1"
                >
                  ysbushara@gmail.com
                </a>
                <p className="text-sm text-ink/60 mt-1">
                  +44 (0) 7568 946890 · London
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const marqueeItems = [...partners, ...partners];
  return (
    <footer className="relative overflow-hidden bg-nile-900 text-sand-100">
      <PerfSeam dark />
      <StampWatermark
        variant="sudan"
        mode="screen"
        opacity={0.05}
        size={560}
        tilt="6deg"
        className="bottom-10 right-[8%] hidden lg:block"
      />
      <div className="marquee-wrap overflow-hidden border-y border-sand-100/10 py-8">
        <div className="marquee">
          {marqueeItems.map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl text-sand-100/80 whitespace-nowrap flex items-center gap-12"
            >
              {p}
              <Postmark className="text-ochre-500/50 h-6 w-6" label="" />
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Mark className="text-sand-300" />
            <span className="font-display text-2xl">Returning Sands</span>
          </div>
          <p className="text-sand-100/70 max-w-sm leading-relaxed">
            A Sudanese cultural heritage campaign and short documentary by
            Paris Quetzal Sistilli, Yusef Bushara, and Camilla Marchese
            González, in partnership with Blue Shield Sudan.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker text-sand-300 mb-3">Navigate</p>
          <ul className="space-y-2 text-sand-100/80">
            <li><a href="#stake" className="hover-underline">At Stake</a></li>
            <li><a href="#campaign" className="hover-underline">Campaign</a></li>
            <li><a href="#documentary" className="hover-underline">Documentary</a></li>
            <li><a href="#events" className="hover-underline">Events</a></li>
            <li><a href="#team" className="hover-underline">Team</a></li>
            <li><a href="#donate" className="hover-underline">Donate</a></li>
            <li><a href="#contact" className="hover-underline">Contact</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker text-sand-300 mb-3">Partners</p>
          <ul className="space-y-2 text-sand-100/80">
            {partners.map((p) => (
              <li key={p} className="font-display text-lg">{p}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-100/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-sand-100/55">
          <span>© {new Date().getFullYear()} Returning Sands CIC</span>
          <SocialLinks />
          <span>New York · London · Cairo · Khartoum</span>
        </div>
      </div>
    </footer>
  );
}
