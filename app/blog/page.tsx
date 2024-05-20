import { getPage } from "../lib/data";

export default async function BlogPage() {
  const blogPageData = await getPage("blog");
  return (
    <div>
      {/* blogPageData.h1 needs to be pageData.page_title after re-seeding database */}
      <h2>{blogPageData.h1}</h2>
    </div>
  );
}