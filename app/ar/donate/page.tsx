import { DonatePage } from "../../components/pages/DonatePage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("ar", "/donate");

export default function ArabicDonate() {
  return <DonatePage t={getContent("ar")} locale="ar" />;
}
