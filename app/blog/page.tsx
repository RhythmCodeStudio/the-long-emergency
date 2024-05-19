import { getPage } from "../lib/data";

export default async function BlogPage() {
  const blogPageData = await getPage("blog");
  return (
    <div>
      <h1>{blogPageData.h1}</h1>
    </div>
  );
}