import { getPage } from "../lib/data";

export default async function AboutPage() {
  const aboutPageData = await getPage("about");
  return (
    <div>
      {/* aboutPageData.h1 needs to be aboutPageData.page_title after re-seeding database */}
      <h2>{aboutPageData.h1}</h2>
    </div>
  );
}