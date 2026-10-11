import type { Locale, SiteContent } from "../../content";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { PageHero } from "../PageHero";
import { DonateSection } from "../donate/DonateSection";

export function DonatePage({ t, locale }: { t: SiteContent; locale: Locale }) {
  return (
    <>
      <Nav t={t} locale={locale} current="donate" />
      <main>
        <PageHero kicker={t.donate.kicker} heading={t.donate.heading} intro={t.donate.intro} />
        <DonateSection t={t} />
      </main>
      <Footer t={t} locale={locale} current="donate" />
    </>
  );
}
