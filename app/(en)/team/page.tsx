import { TeamPage } from "../../components/pages/TeamPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";
export const metadata = buildMetadata("en", "/team");
export default function Team() {
  return <TeamPage t={getContent("en")} locale="en" />;
}
