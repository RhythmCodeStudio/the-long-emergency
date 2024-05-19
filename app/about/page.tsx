import { getPage } from "../lib/data";

export default async function AboutPage() {
  const aboutPageData = await getPage("about");
  return (
    <div>
      <h1>{aboutPageData.h1}</h1>
    </div>
  );
}