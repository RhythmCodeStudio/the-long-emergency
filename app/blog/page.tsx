// import data
import { getPage } from "../lib/data";
// export metadata
export const metadata = {
  title: "Blog",
  description: "The Long Emergency Blog",
};

export default async function BlogPage() {
  const blogPageData = await getPage("blog");
  return (
    <div>
      <h2>{blogPageData.page_title}</h2>
    </div>
  );
}