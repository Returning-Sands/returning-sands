import type { Locale, SiteContent } from "../../content";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { PageHero } from "../PageHero";
import { Team } from "../about/Team";
import { Partners } from "../about/Partners";
import { Contact } from "../about/Contact";

/** Team and partners: producers and core team, partners, contacts. Split out of About. */
export function TeamPage({ t, locale }: { t: SiteContent; locale: Locale }) {
  const a = t.about;
  return (
    <>
      <Nav t={t} locale={locale} current="team" />
      <main>
        <PageHero
          heading={t.teamPage.heading}
          intro={t.teamPage.intro}
          image={{
            src: "/img/portrait.jpg",
            alt: t.gallery.items.find((i) => i.src === "/img/portrait.jpg")?.alt ?? "",
            position: "50% 35%",
          }}
        />
        <Team t={a.team} />
        <Partners t={a.partners} />
        <Contact t={a.contact} social={t.social} />
      </main>
      <Footer t={t} locale={locale} current="team" />
    </>
  );
}
