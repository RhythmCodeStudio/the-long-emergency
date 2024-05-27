import { getPage } from "../lib/data";

export default async function BlogPage() {
  const blogPageData = await getPage("blog");
  return (
    <div>
      <h2>{blogPageData.page_title}</h2>
    </div>
  );
}