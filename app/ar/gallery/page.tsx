import { GalleryPage } from "../../components/pages/GalleryPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("ar", "/gallery");

export default function ArabicGallery() {
  return <GalleryPage t={getContent("ar")} locale="ar" />;
}
