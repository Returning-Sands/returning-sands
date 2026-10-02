import { HomePage } from "../Home";
import { getContent } from "../content";

export default function Home() {
  return <HomePage t={getContent("en")} locale="en" />;
}
