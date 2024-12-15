// import data
import { getPage } from "../lib/data";
// import components
import BlogPost from "../../components/blog-post";
// import from next
import Image from "../../components/image";
// export metadata
export const metadata = {
  title: "Blog",
  description: "Blog posts by The Long Emergency",
};

export default async function BlogPage() {
  const blogPageData = await getPage("blog");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-2">
        <h2 className="font-emergency text-center text-2xl lg:text-4xl text-outline">
          {blogPageData.page_title}
        </h2>
      </div>
      <div className="-mt-6 w-full h-auto max-w-200 expand-on-load p-16">
        <Image
          src="/images/trombone-no-text-banner.png"
          alt={blogPageData.page_title}
          width={1423}
          height={1411}
          priority
        />
      </div>
      <div>
        <BlogPost />
      </div>
    </div>
  );
}
