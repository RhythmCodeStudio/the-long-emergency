import { getPage } from "../lib/data";

export default async function AboutPage() {
  const aboutPageData = await getPage("about");
  return (
    <div>
      <h2>{aboutPageData.page_title}</h2>
    </div>
  );
}