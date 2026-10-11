import { AboutPage } from "../../components/pages/AboutPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("en", "/about");

export default function About() {
  return <AboutPage t={getContent("en")} locale="en" />;
}
