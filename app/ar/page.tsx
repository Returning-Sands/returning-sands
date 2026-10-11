import { HomePage } from "../components/pages/HomePage";
import { getContent } from "../content";
import { buildMetadata } from "../shell";

export const metadata = buildMetadata("ar", "/");

export default function ArabicHome() {
  return <HomePage t={getContent("ar")} locale="ar" />;
}
