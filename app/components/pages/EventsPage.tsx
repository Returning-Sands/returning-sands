import type { Locale, SiteContent } from "../../content";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { PageHero } from "../PageHero";
import { EventList } from "../events/EventList";

export function EventsPage({ t, locale }: { t: SiteContent; locale: Locale }) {
  return (
    <>
      <Nav t={t} locale={locale} current="events" />
      <main>
        <PageHero
          kicker={t.events.kicker}
          heading={t.events.heading}
          intro={t.events.intro}
          image={{ src: "/img/gateway.jpg", alt: t.gallery.items.find((i) => i.src === "/img/gateway.jpg")?.alt ?? "", position: "50% 35%" }}
        />
        <EventList t={t.events} />
      </main>
      <Footer t={t} locale={locale} current="events" />
    </>
  );
}
