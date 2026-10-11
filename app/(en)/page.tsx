import { HomePage } from "../components/pages/HomePage";
import { getContent } from "../content";
import { buildMetadata } from "../shell";

export const metadata = buildMetadata("en", "/");

export default function Home() {
  return <HomePage t={getContent("en")} locale="en" />;
}
