import { DonatePage } from "../../components/pages/DonatePage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("en", "/donate");

export default function Donate() {
  return <DonatePage t={getContent("en")} locale="en" />;
}
