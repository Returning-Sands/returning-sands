import type { Locale, SiteContent } from "../../content";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { Hero } from "../home/Hero";
import { Stake } from "../home/Stake";
import { FilmTeaser } from "../home/FilmTeaser";
import { DonateBand } from "../home/DonateBand";
import { GalleryTeaser } from "../home/GalleryTeaser";

export function HomePage({ t, locale }: { t: SiteContent; locale: Locale }) {
  const instagram = t.social.networks.find((n) => n.network === "instagram")?.href ?? "#";
  return (
    <>
      <Nav t={t} locale={locale} current="home" tone="dark" />
      <main>
        <Hero t={t.hero} cities={t.cities} locale={locale} />
        <Stake t={t.stake} />
        <FilmTeaser t={t.filmTeaser} imageAlt={t.about.film.imageAlt} locale={locale} />
        <DonateBand t={t.donateBand} locale={locale} />
        <GalleryTeaser t={t.galleryTeaser} items={t.gallery.items} instagramHref={instagram} locale={locale} />
      </main>
      <Footer t={t} locale={locale} current="home" />
    </>
  );
}
