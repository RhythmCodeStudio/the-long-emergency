// import data
import { getPage } from "@/actions/actions";
// import components
import BlogPost from "../../ui/blog-post";
// import from next
import Image from "next/image";
// export metadata
export const metadata = {
  title: "Blog",
  description: "Blog posts by The Long Emergency",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const blogPageData = await getPage("blog");
  if (!blogPageData) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="p-2">
          <h2 className="font-emergency text-center text-2xl lg:text-4xl text-outline">
            Blog page not found
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center w-full">
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
          className="shadow-md shadow-white rounded-2xl border-2 border-slate-400 m-2"
        />
      </div>
      <div>
        <BlogPost />
      </div>
    </div>
  );
}
