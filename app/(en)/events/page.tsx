import { EventsPage } from "../../components/pages/EventsPage";
import { getContent } from "../../content";
import { buildMetadata } from "../../shell";

export const metadata = buildMetadata("en", "/events");

export default function Events() {
  return <EventsPage t={getContent("en")} locale="en" />;
}
