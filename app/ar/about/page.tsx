import { AboutPage } from "../../components/pages/AboutPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("ar", "/about");

export default function ArabicAbout() {
  return <AboutPage t={getContent("ar")} locale="ar" />;
}
