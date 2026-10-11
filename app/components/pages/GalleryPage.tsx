import type { Locale, SiteContent } from "../../content";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { PageHero } from "../PageHero";
import { PhotoGrid, Trailer, InstagramBlock } from "../gallery/Gallery";

export function GalleryPage({ t, locale }: { t: SiteContent; locale: Locale }) {
  const g = t.gallery;
  const instagram = t.social.networks.find((n) => n.network === "instagram")?.href ?? "#";
  return (
    <>
      <Nav t={t} locale={locale} current="gallery" />
      <main>
        <PageHero heading={g.title} intro={g.intro} />
        <PhotoGrid items={g.items} />
        <Trailer t={g} />
        <InstagramBlock t={g} href={instagram} />
      </main>
      <Footer t={t} locale={locale} current="gallery" />
    </>
  );
}
