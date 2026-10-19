import { TeamPage } from "../../components/pages/TeamPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";
export const metadata = buildMetadata("ar", "/team");
export default function ArabicTeam() {
  return <TeamPage t={getContent("ar")} locale="ar" />;
}
