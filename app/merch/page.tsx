// import data
import { getPage, getMerch } from "@/actions/actions";
// import components
import MerchForSale from "../../ui/merch-for-sale";

//export metadata
export const metadata = {
  title: "Merch",
  description: "Buy cool stuff from The Long Emergency",
  alternates: {
    canonical: "/merch",
  },
};

export default async function MerchPage() {
  const merchPageData = await getPage("merch");
  const merch = await getMerch();

  return (
    <section className="flex justify-center items-center flex-col">
      <h3 className="font-emergency text-outline text-center text-2xl md:text-3xl lg:text-3xl p-6">
        {merchPageData?.page_title ?? "Merch"}
      </h3>
      <MerchForSale merch={merch} />
    </section>
  );
}
