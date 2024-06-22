// import data
import { getPage, getMerch } from "../lib/data";
// import components
import MerchForSale from "../../components/merch-for-sale";

//export metadata
export const metadata  = {
  title: "Merch",
  description: "Buy cool stuff from The Long Emergency",
};

export default async function MerchPage() {
  const merchPageData = await getPage("merch");
  const merch = await getMerch();



  return (
    <section className="flex justify-center items-center flex-col">
      <h2 className="expand-on-load text-2xl lg:text-4xl pb-6">{merchPageData.page_title}</h2>
      <MerchForSale merch={merch} />
    </section>
  );
}
