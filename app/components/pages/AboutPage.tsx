import Link from "next/link";
import type { Locale, SiteContent } from "../../content";
import { pagePath } from "../../routes";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { PageHero } from "../PageHero";
import { Goals } from "../about/Goals";
import { Film } from "../about/Film";
import { OralHistory } from "../about/OralHistory";
import { Arrow, btn } from "../primitives";

/** About: who we are, goals, the film, the oral history project. Team, partners and contacts live on /team. */
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
        <section className="bg-sand-50 border-t border-ink/10">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 py-14 flex justify-center">
            <Link href={pagePath(locale, "team")} className={btn.darkOutline}>
              {t.teamPage.heading}
              <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <Footer t={t} locale={locale} current="about" />
    </>
  );
}
