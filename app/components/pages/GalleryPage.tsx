import type { Locale, SiteContent } from "../../content";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import { PageHero } from "../PageHero";
import { Trailer, InstagramBlock } from "../gallery/Gallery";

export function GalleryPage({ t, locale }: { t: SiteContent; locale: Locale }) {
  const g = t.gallery;
  const instagram = t.social.networks.find((n) => n.network === "instagram")?.href ?? "#";
  return (
    <>
      <Nav t={t} locale={locale} current="gallery" />
      <main>
        <PageHero
          heading={g.title}
          intro={g.intro}
          image={{ src: "/img/bridge.jpg", alt: t.hero.imageAlt, position: "50% 65%" }}
        />
        <InstagramBlock t={g} href={instagram} />
        <Trailer t={g} />
      </main>
      <Footer t={t} locale={locale} current="gallery" />
    </>
  );
}
