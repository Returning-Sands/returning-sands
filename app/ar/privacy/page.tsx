import { PrivacyPage } from "../../components/pages/PrivacyPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("ar", "/privacy");

export default function Page() {
  return <PrivacyPage t={getContent("ar")} locale="ar" />;
}
