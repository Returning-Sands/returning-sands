import { EventsPage } from "../../components/pages/EventsPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("ar", "/events");

export default function ArabicEvents() {
  return <EventsPage t={getContent("ar")} locale="ar" />;
}
