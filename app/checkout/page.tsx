// import data
// import { getPage } from "../lib/data";
// import components
// import BlogPost from "../../components/blog-post";
import CheckoutForm from "@/components/checkout-form";
// import from next
import Image from "next/image";
// export metadata
// export const metadata = {
//   title: "Blog",
//   description: "Blog posts by The Long Emergency",
// };

export default async function BlogPage() {
  // const blogPageData = await getPage("blog");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-2">
        <h2 className="text-center text-2xl lg:text-4xl">Checkout</h2>
      </div>
    </div>
  );
}
