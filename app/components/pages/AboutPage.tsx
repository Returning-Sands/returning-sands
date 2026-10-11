import type { Locale, SiteContent } from "../../content";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { PageHero } from "../PageHero";
import { Goals } from "../about/Goals";
import { Film } from "../about/Film";
import { OralHistory } from "../about/OralHistory";
import { Team } from "../about/Team";
import { Partners } from "../about/Partners";
import { Contact } from "../about/Contact";

export function AboutPage({ t, locale }: { t: SiteContent; locale: Locale }) {
  const a = t.about;
  return (
    <>
      <Nav t={t} locale={locale} current="about" />
      <main>
        <PageHero
          kicker={a.who.kicker}
          heading={a.who.heading}
          intro={a.who.body}
          image={{ src: "/img/meroe.jpg", alt: t.gallery.items.find((i) => i.src === "/img/meroe.jpg")?.alt ?? "", position: "50% 60%" }}
        />
        <Goals t={a.goals} />
        <Film t={a.film} />
        <OralHistory t={a.oralHistory} />
        <Team t={a.team} />
        <Partners t={a.partners} />
        <Contact t={a.contact} social={t.social} />
      </main>
      <Footer t={t} locale={locale} current="about" />
    </>
  );
}
