import { HomePage } from "../Home";
import { getContent } from "../content";

export default function ArabicHome() {
  return <HomePage t={getContent("ar")} locale="ar" />;
}
