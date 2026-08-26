import Image from "next/image";
import Link from "next/link";
import { Reveal, WordStagger } from "./Reveal";

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
  {
    when: "April 2026",
    title: "Foundation",
    body: "Assembling team, applying for grants, establishing partnerships. Organizing ourselves as a charity / org.",
  },
  {
    when: "Summer 2026",
    title: "Pre-Production",
    body: "Confirming a director and assembling the trailer. Organizing the London and Cairo events.",
  },
  {
    when: "Fall 2026",
    title: "NYC Fundraising",
    body: "Pre-Production continues. NYC fundraising events build the runway for filming.",
  },
  {
    when: "December 2026",
    title: "Cairo · Filming Begins",
    body: "Filming of the documentary begins. Cairo Returning Sands event — trailer screening, educational panel, art expo.",
  },
  {
    when: "January 2027",
    title: "Post-Production",
    body: "Editing begins. Plans to screen and submit to festivals across SWANA and internationally.",
  },
  {
    when: "Early 2027",
    title: "London · Campaign Launch",
    body: "London Returning Sands event. Trailer, education panel, and campaign launch.",
  },
];

const events = [
  {
    city: "Cairo",
    when: "December 2026",
    label: "Cairo Returning Sands",
    threads: ["Trailer Screening", "Educational Panel", "Art Expo"],
    body: "Hosted in partnership with Sudan Blue Shield and Cairo-based collaborators, the first public surfacing of the project — staged where much of the heritage work is now coordinated from exile.",
  },
  {
    city: "London",
    when: "Early 2027",
    label: "London Returning Sands",
    threads: ["Trailer", "Education Panel", "Campaign Launch"],
    body: "Carrying the project into the diaspora. A trailer screening, panel, and campaign launch — gathering Sudanese artists, scholars, and audiences across the UK.",
  },
];

const partners = [
  "Culture House",
  "P21 Gallery",
  "Blue Shield International",
  "Kalam Aflam",
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
      <Events />
      <Timeline />
      <ClosingQuote />
      <Team />
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
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-sand-50 px-4 py-2 text-sm text-nile-900 hover:bg-sand-200 transition-colors"
        >
          Contribute
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
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 pt-40 pb-20 sm:pb-28">
        <Reveal className="kicker-anim kicker text-sand-300 mb-6">
          A Sudanese Cultural Heritage Campaign · 2026 – 2027
        </Reveal>
        <h1 className="font-display text-[18vw] leading-[0.86] sm:text-[14vw] md:text-[11rem] lg:text-[13rem] xl:text-[15rem] text-sand-50">
          <WordStagger as="span" text="Returning" />
          <span className="block italic text-sand-300">
            <WordStagger as="span" text="Sands" />
          </span>
        </h1>
        <Reveal className="mt-10 grid gap-8 md:grid-cols-12 items-end reveal-lg" delay={150}>
          <p className="md:col-span-7 md:col-start-1 max-w-prose text-lg md:text-xl text-sand-100/90 font-light leading-relaxed">
            A campaign and short documentary by Paris Quetzal Sistilli and
            Yusef Bushara — protecting Sudanese cultural memory amid one of
            the world&rsquo;s most devastating and underreported conflicts.
          </p>
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-2 text-sm reveal-stagger">
            <Row label="Cairo" value="Dec 2026" />
            <Row label="London" value="Early 2027" />
            <Row label="Film" value="In development" />
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
              — Ali Nour · Sudan Blue Shield
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

        <ul className="grid sm:grid-cols-3 gap-px mt-16 bg-ink/15 rounded-2xl overflow-hidden reveal-stagger">
          {stats.map((s, i) => (
            <Reveal
              as="li"
              key={s.value}
              className="bg-sand-50 p-8 sm:p-10 reveal"
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
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5 reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-4">Impact Campaign</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
              Two events,
              <span className="italic text-ochre-600"> one film,</span> one
              global call.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-ink/80 reveal" delay={120}>
            <p>
              Returning Sands is a global campaign that launches with two
              education and art expo events in <strong>London</strong> and{" "}
              <strong>Cairo</strong> — serving as both visibility platforms
              and fundraising catalysts for the short documentary at the
              heart of the project.
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
    <section className="bg-sand-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <Reveal className="reveal-lg">
          <p className="kicker kicker-anim text-ochre-600 mb-6">Goals of the Project</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] mb-14 max-w-3xl rule-draw pb-6">
            Five threads holding the work together.
          </h2>
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
              cultural legacy. From Cairo, Ali and a network of displaced
              Sudanese experts coordinate high-risk safeguarding operations
              across Sudan — confronting the collapse of national
              infrastructure and the limits of international support.
            </p>
            <p>
              Expanding beyond preservation alone, the film also enters the
              lives of Sudanese artists, musicians, and scholars in exile —
              capturing the active creation and transmission of cultural
              heritage within the diaspora. By interweaving frontline
              protection efforts with stories of cultural resilience and
              reinvention, the project positions heritage not only as
              something under threat, but as a <em>living force</em>: central
              to identity, survival, and the future of Sudan itself.
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

function Events() {
  return (
    <section id="events" className="relative bg-nile-900 text-sand-50 grain">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal className="reveal-lg">
            <p className="kicker kicker-anim text-sand-300 mb-4">Events</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
              Two cities,
              <span className="italic text-sand-300"> one thread.</span>
            </h2>
          </Reveal>
          <Reveal as="p" className="max-w-md text-sand-100/80 leading-relaxed reveal" delay={140}>
            Each evening combines a trailer screening, an educational panel,
            and an art expo — open to the public, with limited capacity.
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-sand-50/10 rounded-2xl overflow-hidden">
          {events.map((e, i) => (
            <Reveal
              as="article"
              key={e.city}
              className="bg-nile-900 p-10 sm:p-14 flex flex-col gap-6 transition-colors hover:bg-nile-800 reveal-lg"
              delay={i * 160}
            >
              <div className="flex items-baseline justify-between">
                <span className="kicker text-sand-300">{e.label}</span>
                <span className="kicker text-sand-300">{e.when}</span>
              </div>
              <h3 className="font-display text-7xl sm:text-8xl leading-none">
                {e.city}
              </h3>
              <p className="text-sand-100/85 text-lg leading-relaxed max-w-md">
                {e.body}
              </p>
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {e.threads.map((t) => (
                  <span
                    key={t}
                    className="text-xs uppercase tracking-[0.18em] border border-sand-100/30 rounded-full px-3 py-1 text-sand-100/85"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="relative bg-sand-50 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <Reveal className="reveal-lg">
          <p className="kicker kicker-anim text-ochre-600 mb-4">Project Timeline</p>
          <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-16 max-w-3xl">
            A year of building,
            <span className="italic text-ochre-600"> gathering,</span> and going
            to film.
          </h2>
        </Reveal>
        <ol className="relative border-l border-ink/20 pl-8 sm:pl-12 space-y-12">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.when} className="relative reveal" delay={i * 100}>
              <span className="absolute -left-[2.6rem] sm:-left-[3.6rem] top-2 h-3 w-3 rounded-full bg-ochre-600 ring-4 ring-sand-50" />
              <p className="kicker text-ochre-600 mb-2">{t.when}</p>
              <h3 className="font-display text-3xl sm:text-4xl mb-3">
                {t.title}
              </h3>
              <p className="text-ink/75 leading-relaxed max-w-xl">{t.body}</p>
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
    <section id="team" className="bg-sand-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-28 sm:py-36">
        <div className="grid gap-10 md:grid-cols-12 mb-16">
          <Reveal className="md:col-span-5 reveal-lg">
            <p className="kicker kicker-anim text-ochre-600 mb-4">Core Creative Team</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">
              Built across
              <span className="italic text-ochre-600"> three cities,</span>
              with friends.
            </h2>
          </Reveal>
          <Reveal as="p" className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-ink/75 reveal" delay={140}>
            Returning Sands is produced by Paris Quetzal Sistilli and Yusef
            Bushara, with creative, advisory, and coordination support
            spanning New York, London, and Cairo. Where possible we work
            with friends and collaborators pro bono — the priority is paying
            heritage workers and contributors for their time.
          </Reveal>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden">
          {creativeTeam.map((p, i) => (
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
              <p className="kicker text-ochre-600 mt-auto pt-4">{p.base}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <Reveal as="p" className="kicker kicker-anim text-ochre-600 mb-6">Coordination &amp; Partners</Reveal>
          <ul className="grid sm:grid-cols-3 gap-6">
            {coordinators.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                className="border border-ink/15 rounded-xl p-6 bg-sand-50/60 reveal"
                delay={i * 110}
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

function Contact() {
  return (
    <section id="contact" className="bg-sand-50 grain">
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
          </Reveal>

          <Reveal className="md:col-span-4 md:col-start-9 reveal" delay={140}>
            <p className="kicker text-ink/50 mb-4">Direct</p>
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
    <footer className="bg-nile-900 text-sand-100">
      <div className="marquee-wrap overflow-hidden border-y border-sand-100/10 py-8">
        <div className="marquee">
          {marqueeItems.map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl text-sand-100/80 whitespace-nowrap flex items-center gap-12"
            >
              {p}
              <span className="text-ochre-500/60" aria-hidden>
                ✦
              </span>
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
            Paris Quetzal Sistilli and Yusef Bushara, in partnership with
            Sudan Blue Shield.
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
          <span>© {new Date().getFullYear()} Returning Sands</span>
          <span>New York · London · Cairo · Khartoum</span>
        </div>
      </div>
    </footer>
  );
}
