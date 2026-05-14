import Image from "next/image";
import Link from "next/link";

const sections = [
  { roman: "I", word: "Stake", title: "What's at Stake", anchor: "stake" },
  { roman: "II", word: "Campaign", title: "The Campaign", anchor: "campaign" },
  { roman: "III", word: "Film", title: "The Documentary", anchor: "film" },
  { roman: "IV", word: "Voices", title: "Introducing Ali Nour", anchor: "voices" },
  { roman: "V", word: "Events", title: "Cairo & London", anchor: "events" },
  { roman: "VI", word: "Time", title: "Project Timeline", anchor: "time" },
  { roman: "VII", word: "Team", title: "Core Creative Team", anchor: "team" },
  { roman: "VIII", word: "Reach", title: "Contact & Support", anchor: "reach" },
];

const creativeTeam = [
  { name: "Paris Quetzal Sistilli", role: "Project Lead · Producer", base: "New York" },
  { name: "Yusef Bushara", role: "Creative Director · Writing · Expo Coordination", base: "London" },
  { name: "Hayat Aljowaily", role: "Executive Producer · Kalam Aflam Coordinator", base: "Cairo" },
  { name: "Camilla Marchese Gonzalez", role: "Co-Producer · Creative Direction", base: "Brooklyn" },
];

const coordinators = [
  { name: "Ali Nour", role: "Sudan Blue Shield · Cairo Event Co-Organizer · Narrative Focus" },
  { name: "Jenna Khalil", role: "Event Coordination · Cairo & UNESCO" },
  { name: "Cillian", role: "Finance · Logistics · Organization" },
];

const goals = [
  "Support the documentation of endangered heritage and lived memory.",
  "Amplify the work of Sudanese heritage professionals, including emerging efforts tied to Blue Shield Sudan.",
  "Collaborate with Sudanese artists and heritage experts to tackle the issue of futurity in an interdisciplinary fashion.",
  "Enable future pathways to rebuild, recover, and sustain Sudanese cultural heritage — within the country and across the diaspora.",
  "Position culture as a core component of humanitarian and post-conflict response.",
];

const timeline = [
  { when: "April 2026", title: "Foundation", body: "Assembling team, applying for grants, establishing partnerships. Organizing ourselves as a charity / org." },
  { when: "Summer 2026", title: "Pre-Production", body: "Confirming a director and assembling the trailer. Organizing the London and Cairo events." },
  { when: "Fall 2026", title: "NYC Fundraising", body: "Pre-Production continues. NYC fundraising events build the runway for filming." },
  { when: "December 2026", title: "Cairo · Filming Begins", body: "Filming of the documentary begins. Cairo Returning Sands event — trailer screening, educational panel, art expo." },
  { when: "January 2027", title: "Post-Production", body: "Editing begins. Plans to screen and submit to festivals across SWANA and internationally." },
  { when: "Early 2027", title: "London · Campaign Launch", body: "London Returning Sands event. Trailer, education panel, and campaign launch." },
];

const events = [
  { city: "Cairo", when: "December 2026", label: "Cairo Returning Sands", threads: ["Trailer Screening", "Educational Panel", "Art Expo"], body: "Hosted in partnership with Sudan Blue Shield and Cairo-based collaborators — the first public surfacing of the project, staged where much of the heritage work is now coordinated from exile." },
  { city: "London", when: "Early 2027", label: "London Returning Sands", threads: ["Trailer", "Education Panel", "Campaign Launch"], body: "Carrying the project into the diaspora. A trailer screening, panel, and campaign launch — gathering Sudanese artists, scholars, and audiences across the UK." },
];

const partners = ["Culture House", "P21 Gallery", "Blue Shield International", "Kalam Aflam", "Sudan Memory"];

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="lg:pl-[240px]">
        <Hero />
        <Showpiece
          section={sections[0]}
          tagline="The country since 2023 has been in the throes of a counter-revolutionary war — and its cultural memory, the front line we are rarely shown."
          image="/img/meroe.jpg"
          align="bottom"
          alt="The pyramids of Meroë, Sudan"
        />
        <Stake />

        <Showpiece
          section={sections[1]}
          tagline="A global campaign that launches with two education and art expo events — in London, in Cairo — and a short documentary at its heart."
          image="/img/gateway.jpg"
          align="center"
          alt="Historic gateway architecture in Sudan"
        />
        <Campaign />

        <Showpiece
          section={sections[2]}
          tagline="The story of Ali Nour, a Sudanese heritage professional leading efforts to protect his country's cultural legacy amid one of the world's most devastating, underreported conflicts."
          image="/img/barbers.jpg"
          align="center"
          alt="Archival photograph from Sudan"
        />
        <Film />

        <Showpiece
          section={sections[3]}
          tagline="Country is more than territory, it is memory. So if you protect that now, in the middle of this chaos, then we will have a foundation through which we can rebuild."
          image="/img/portrait.jpg"
          align="right"
          alt="Historical portrait — adornment and identity"
        />
        <Voices />

        <Showpiece
          section={sections[4]}
          tagline="Two evenings, two cities. A trailer screening, an educational panel, an art expo — open to the public, with limited capacity."
          image="/img/bridge.jpg"
          align="bottom"
          alt="Sunrise over a bridge in Khartoum"
        />
        <Events />

        <SimpleHeader section={sections[5]} />
        <Timeline />

        <SimpleHeader section={sections[6]} />
        <Team />

        <SimpleHeader section={sections[7]} />
        <Reach />

        <Footer />
      </main>
    </>
  );
}

function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[240px] z-50 flex-col justify-between p-8 pointer-events-none">
      <div className="sidebar-blend pointer-events-auto">
        <Link href="#" className="block">
          <p className="kicker-sm mb-3">The</p>
          <p className="font-display text-2xl leading-[0.95]">
            Returning<br />
            <em className="not-italic font-display-italic">Sands</em>
            <br />
            Project
          </p>
        </Link>
      </div>

      <nav className="sidebar-blend pointer-events-auto">
        <ul className="space-y-[7px] text-[13px] tabular-nums">
          {sections.map((s) => (
            <li key={s.roman}>
              <a
                href={`#${s.anchor}`}
                className="flex justify-between gap-4 group"
              >
                <span className="hover-underline">{s.word}</span>
                <span className="opacity-70">{s.roman}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-blend pointer-events-auto text-[11px] leading-relaxed opacity-75">
        © Returning Sands<br />
        <Link href="mailto:pqsistilli@gmail.com" className="hover-underline">
          Press &amp; Inquiries
        </Link>
      </div>
    </aside>
  );
}

function MobileNav() {
  return (
    <header className="lg:hidden sticky top-0 z-40 bg-night/85 backdrop-blur-md border-b border-paper-50/10">
      <div className="flex items-center justify-between px-5 py-4 text-paper-50">
        <Link href="#" className="font-display text-lg leading-none">
          Returning <em>Sands</em>
        </Link>
        <a
          href="#reach"
          className="text-xs uppercase tracking-[0.18em] border border-paper-50/40 rounded-full px-3 py-1.5"
        >
          Contribute
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-night overflow-hidden">
      <Image
        src="/img/bridge.jpg"
        alt="Sunrise over a bridge in Khartoum"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/75" />
      <div className="absolute inset-0 grain" />

      <MobileNav />

      <div className="relative min-h-[100svh] flex items-center justify-center px-6 py-24">
        <div className="border border-paper-50/85 bg-black/25 backdrop-blur-md p-10 sm:p-12 max-w-md w-full text-paper-50">
          <p className="kicker-sm mb-6 opacity-80">
            The
          </p>
          <h1 className="font-display text-[3.2rem] sm:text-[4rem] leading-[0.92] tracking-tight">
            Returning<br />
            <em className="font-display-italic">Sands</em><br />
            Edition
          </h1>
          <p className="mt-6 text-sm opacity-85 leading-relaxed font-display-italic">
            A Sudanese cultural heritage campaign &amp; short documentary by Paris Quetzal Sistilli and Yusef Bushara.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] tabular-nums">
            {sections.map((s) => (
              <li key={s.roman}>
                <a href={`#${s.anchor}`} className="flex justify-between hover-underline opacity-90">
                  <span>{s.word}</span>
                  <span className="opacity-70">{s.roman}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Showpiece({
  section,
  tagline,
  image,
  alt,
  align,
}: {
  section: (typeof sections)[number];
  tagline: string;
  image: string;
  alt: string;
  align: "top" | "center" | "bottom" | "right";
}) {
  const objectPos = {
    top: "object-top",
    center: "object-center",
    bottom: "object-bottom",
    right: "object-right",
  }[align];

  return (
    <section
      id={section.anchor}
      className="relative min-h-[100svh] bg-night overflow-hidden flex flex-col"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) calc(100vw - 240px), 100vw"
        className={`object-cover ${objectPos}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/85" />
      <div className="absolute inset-0 grain" />

      <div className="relative flex-1 flex flex-col justify-end px-6 sm:px-12 lg:px-20 py-12 lg:py-20 text-paper-50">
        <div className="absolute top-8 lg:top-12 right-6 sm:right-12 lg:right-20 kicker-sm opacity-85">
          {section.roman} · {section.title}
        </div>
        <h2 className="font-grotesk text-[19vw] lg:text-[15rem] leading-[0.82] -mb-3 lg:-mb-5">
          {section.word}
        </h2>
        <p className="font-display-italic text-2xl sm:text-3xl lg:text-4xl leading-[1.15] max-w-3xl text-paper-50/95 mt-8 dropcap">
          {tagline}
        </p>
      </div>
    </section>
  );
}

function SimpleHeader({ section }: { section: (typeof sections)[number] }) {
  return (
    <section
      id={section.anchor}
      className="relative bg-night text-paper-50 border-t border-paper-50/10"
    >
      <div className="px-6 sm:px-12 lg:px-20 pt-24 lg:pt-32 pb-6">
        <div className="flex items-baseline justify-between mb-2">
          <p className="kicker-sm opacity-75">{section.roman} · {section.title}</p>
        </div>
        <h2 className="font-grotesk text-[18vw] lg:text-[12rem] leading-[0.85]">
          {section.word}
        </h2>
      </div>
    </section>
  );
}

function PaperSection({
  children,
  variant = "paper",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "paper" | "dark";
  className?: string;
}) {
  const bg = variant === "paper" ? "bg-paper-50 text-ink" : "bg-night text-paper-50";
  return (
    <section className={`relative ${bg} ${className}`}>
      <div className="px-6 sm:px-12 lg:px-20 py-24 lg:py-36">{children}</div>
    </section>
  );
}

function Stake() {
  const stats = [
    { value: "60%", label: "of Sudan National Museum holdings looted in the last three years." },
    { value: "12M+", label: "people displaced since the war began in 2023." },
    { value: "Ongoing", label: "deliberate destruction of museums, archives, and historic sites." },
  ];
  return (
    <PaperSection>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        <div className="lg:col-span-5">
          <p className="kicker-sm text-ochre-600 mb-5">A note on the war</p>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Cultural heritage is a tangible expression of
            <em className="font-display-italic text-ochre-600"> identity.</em>
          </h3>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            In times of conflict, that identity becomes a strategic target —
            a way to erode the memory, cohesion, and continuity of a
            people. Although commonly framed as a &ldquo;civil war,&rdquo;
            Sudan since 2023 has been in the throes of a counter-revolutionary
            war. The country has witnessed widespread and irreversible damage
            to archaeological sites, archives, and museums.
          </p>
          <p>
            Destruction in Sudan is ongoing, not confined to the past.
            Immediate documentation and action are essential. Heritage
            workers continue to operate under extreme, time-sensitive
            conditions with limited visibility and support.
          </p>
        </div>
      </div>

      <ul className="grid sm:grid-cols-3 gap-px bg-ink/15">
        {stats.map((s) => (
          <li key={s.value} className="bg-paper-50 p-8 sm:p-10">
            <p className="font-grotesk text-7xl sm:text-8xl text-ochre-600 leading-none mb-5">
              {s.value}
            </p>
            <p className="text-ink/75 leading-relaxed">{s.label}</p>
          </li>
        ))}
      </ul>
    </PaperSection>
  );
}

function Campaign() {
  return (
    <PaperSection>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="kicker-sm text-ochre-600 mb-5">The Campaign</p>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Two events,
            <em className="font-display-italic text-ochre-600"> one film,</em> one global call.
          </h3>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            Returning Sands launches with two education and art expo events
            in <strong>London</strong> and <strong>Cairo</strong> — both
            visibility platforms and fundraising catalysts for the short
            documentary at the heart of the project.
          </p>
          <p>
            At its core is a film to be submitted to festivals across the
            SWANA region and internationally — fostering sustained engagement
            with the urgent issues of heritage preservation in Sudan and the
            deliberate targeting of cultural sites in conflict.
          </p>
        </div>
      </div>

      <div className="mt-24">
        <p className="kicker-sm text-ochre-600 mb-8">Five goals holding the work together</p>
        <ol className="grid gap-px bg-ink/15 lg:grid-cols-2 border border-ink/15">
          {goals.map((g, i) => (
            <li key={i} className="bg-paper-50 p-8 sm:p-10 flex gap-6 items-start">
              <span className="font-grotesk text-3xl text-ochre-600 leading-none mt-1 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-ink/80 leading-relaxed text-lg">{g}</p>
            </li>
          ))}
        </ol>
      </div>
    </PaperSection>
  );
}

function Film() {
  return (
    <PaperSection>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
        <div className="lg:col-span-5">
          <p className="kicker-sm text-ochre-600 mb-5">The Documentary</p>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            From exile in Egypt,
            <em className="font-display-italic text-ochre-600"> a fight</em> to keep memory alive.
          </h3>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-lg leading-relaxed text-ink/80">
          <p>
            The film follows Ali Nour, a Sudanese heritage professional
            leading efforts to protect his country&rsquo;s cultural legacy.
            From Cairo, Ali and a network of displaced Sudanese experts
            coordinate high-risk safeguarding operations across Sudan —
            confronting the collapse of national infrastructure and the
            limits of international support.
          </p>
          <p>
            Expanding beyond preservation alone, the film enters the lives
            of Sudanese artists, musicians, and scholars in exile — capturing
            the active creation and transmission of cultural heritage within
            the diaspora. It positions heritage not only as something under
            threat, but as a <em>living force</em>: central to identity,
            survival, and the future of Sudan itself.
          </p>
        </div>
      </div>

      <figure className="border-y border-ink/20 py-12 sm:py-16">
        <p className="kicker-sm text-ochre-600 mb-5">Logline</p>
        <blockquote className="font-display-italic text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-4xl dropcap">
          From exile in Egypt, Ali Nour coordinates Sudan&rsquo;s fight to
          keep heritage alive. With national memory under siege, Ali and his
          crew of brave volunteers do everything to safeguard Sudan&rsquo;s
          future while maintaining its thread to the past.
        </blockquote>
      </figure>
    </PaperSection>
  );
}

function Voices() {
  return (
    <PaperSection>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="kicker-sm text-ochre-600 mb-5">Introducing</p>
          <h3 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            Ali <em className="font-display-italic">Nour.</em>
          </h3>
          <p className="mt-8 text-lg leading-relaxed text-ink/80 max-w-md">
            A grants-management specialist and cultural heritage advocate.
            Ali serves as Secretary General of <strong>Blue Shield Sudan</strong> and
            rapporteur of the Emergency Response Committee under Sudan&rsquo;s
            National Corporation for Antiquities and Museums (NCAM).
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80 max-w-md">
            With a background in strategic fundraising, proposal development,
            and crisis coordination, he supports regional and international
            efforts to document, stabilise, and protect heritage in Sudan.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <figure className="border-l-2 border-ochre-600 pl-8 py-2 max-w-xl">
            <blockquote className="font-display-italic text-3xl sm:text-4xl leading-[1.15] text-ink">
              Heritage workers operate under constant threat amidst an active
              war, with civilian attacks intensifying, even in the capital,
              Khartoum.
            </blockquote>
            <figcaption className="mt-5 kicker-sm text-ink/60">— Ali Nour</figcaption>
          </figure>
          <figure className="mt-12 pl-8 py-2 max-w-xl">
            <blockquote className="font-display-italic text-3xl sm:text-4xl leading-[1.15] text-ink">
              Beneath the wreckage of homes and hospitals lies another front
              in this war: the systematic erasure of a nation&rsquo;s cultural
              memory.
            </blockquote>
            <figcaption className="mt-5 kicker-sm text-ink/60">— Ali Nour, Sudan Blue Shield</figcaption>
          </figure>
        </div>
      </div>
    </PaperSection>
  );
}

function Events() {
  return (
    <PaperSection variant="paper">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-14">
        <div className="lg:col-span-5">
          <p className="kicker-sm text-ochre-600 mb-5">The Events</p>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Two cities,
            <em className="font-display-italic text-ochre-600"> one thread.</em>
          </h3>
        </div>
        <p className="lg:col-span-6 lg:col-start-7 text-lg leading-relaxed text-ink/80 max-w-xl">
          Each evening combines a trailer screening, an educational panel,
          and an art expo — open to the public, with limited capacity.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-px bg-ink/20 border border-ink/20">
        {events.map((e) => (
          <article key={e.city} className="bg-paper-50 p-10 sm:p-14">
            <div className="flex items-baseline justify-between mb-8">
              <span className="kicker-sm text-ochre-600">{e.label}</span>
              <span className="kicker-sm text-ink/55">{e.when}</span>
            </div>
            <h4 className="font-grotesk text-7xl sm:text-8xl leading-[0.9] text-ink">
              {e.city}.
            </h4>
            <p className="mt-8 text-ink/80 text-lg leading-relaxed max-w-md">
              {e.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {e.threads.map((t) => (
                <span
                  key={t}
                  className="text-[11px] uppercase tracking-[0.16em] border border-ink/35 rounded-full px-3 py-1 text-ink/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </PaperSection>
  );
}

function Timeline() {
  return (
    <section className="bg-night text-paper-50">
      <div className="px-6 sm:px-12 lg:px-20 pb-24 lg:pb-32">
        <ol className="relative border-l border-paper-50/25 pl-8 sm:pl-12 space-y-14 lg:space-y-16 max-w-3xl">
          {timeline.map((t) => (
            <li key={t.when} className="relative">
              <span className="absolute -left-[2.6rem] sm:-left-[3.6rem] top-3 h-3 w-3 rounded-full bg-ochre-500 ring-4 ring-night" />
              <p className="kicker-sm text-sand-300 mb-3">{t.when}</p>
              <h4 className="font-display text-3xl sm:text-4xl leading-tight mb-3">
                {t.title}
              </h4>
              <p className="text-paper-50/75 leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Team() {
  return (
    <PaperSection>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
        {creativeTeam.map((p, i) => (
          <li key={p.name} className="bg-paper-50 p-8 sm:p-10 flex flex-col gap-3">
            <span className="kicker-sm text-ink/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="font-display text-3xl leading-tight">{p.name}</h4>
            <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
            <p className="kicker-sm text-ochre-600 mt-auto pt-4">{p.base}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <p className="kicker-sm text-ochre-600 mb-6">Coordination &amp; Collaborators</p>
        <ul className="grid sm:grid-cols-3 gap-6">
          {coordinators.map((p) => (
            <li
              key={p.name}
              className="border border-ink/15 rounded-xl p-6 bg-paper-100/40"
            >
              <h5 className="font-display text-xl mb-1">{p.name}</h5>
              <p className="text-sm text-ink/65 leading-relaxed">{p.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </PaperSection>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Reach() {
  return (
    <PaperSection>
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="kicker-sm text-ochre-600 mb-5">Get in Touch</p>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mb-8">
            If this work matters to you,
            <em className="font-display-italic text-ochre-600"> write to us.</em>
          </h3>
          <p className="text-ink/75 leading-relaxed mb-10 max-w-xl text-lg">
            We&rsquo;re actively building partnerships, applying for grants,
            and looking for friends who can help — through funding,
            expertise, venues, or by carrying the word forward.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:pqsistilli@gmail.com?subject=Returning%20Sands"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-paper-50 hover:bg-ochre-600 transition-colors"
            >
              Email the Producer
              <Arrow />
            </a>
            <a
              href="mailto:ysbushara@gmail.com?subject=Returning%20Sands"
              className="inline-flex items-center gap-3 rounded-full border border-ink/30 px-6 py-3 text-ink hover:bg-ink hover:text-paper-50 transition-colors"
            >
              Email the Creative Director
              <Arrow />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <p className="kicker-sm text-ink/50 mb-5">Direct</p>
          <div className="space-y-7">
            <div>
              <p className="kicker-sm text-ink/55 mb-1">Producer</p>
              <p className="font-display text-2xl">Paris Quetzal Sistilli</p>
              <a href="mailto:pqsistilli@gmail.com" className="block text-sm text-ink/70 hover-underline mt-1">
                pqsistilli@gmail.com
              </a>
              <p className="text-sm text-ink/60 mt-1">+1 (443) 699 4957 · New York</p>
            </div>
            <div>
              <p className="kicker-sm text-ink/55 mb-1">Creative Director</p>
              <p className="font-display text-2xl">Yusef Bushara</p>
              <a href="mailto:ysbushara@gmail.com" className="block text-sm text-ink/70 hover-underline mt-1">
                ysbushara@gmail.com
              </a>
              <p className="text-sm text-ink/60 mt-1">+44 (0) 7568 946890 · London</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-12 border-t border-ink/15">
        <p className="kicker-sm text-ochre-600 mb-5">Partners</p>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 font-display text-2xl text-ink/85">
          {partners.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </PaperSection>
  );
}

function Footer() {
  return (
    <footer className="bg-night text-paper-50 border-t border-paper-50/10">
      <div className="px-6 sm:px-12 lg:px-20 py-14 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <p className="font-display text-2xl leading-tight mb-3">
            Returning <em className="font-display-italic">Sands</em>
          </p>
          <p className="text-paper-50/65 max-w-xs leading-relaxed">
            A Sudanese cultural heritage campaign &amp; short documentary.
          </p>
        </div>
        <div>
          <p className="kicker-sm text-sand-300 mb-3">Reach</p>
          <a href="mailto:pqsistilli@gmail.com" className="block hover-underline">
            pqsistilli@gmail.com
          </a>
          <a href="mailto:ysbushara@gmail.com" className="block hover-underline mt-1">
            ysbushara@gmail.com
          </a>
        </div>
        <div className="sm:text-right">
          <p className="text-paper-50/60 text-xs">
            New York · London · Cairo · Khartoum
          </p>
          <p className="text-paper-50/40 text-xs mt-2">
            © {new Date().getFullYear()} Returning Sands
          </p>
        </div>
      </div>
    </footer>
  );
}
