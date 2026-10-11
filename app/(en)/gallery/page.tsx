import { GalleryPage } from "../../components/pages/GalleryPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("en", "/gallery");

export default function Gallery() {
  return <GalleryPage t={getContent("en")} locale="en" />;
}
