// import data
import { getPage, getMerch } from "../lib/data";
// import components
import CdsForSale from "../components/cds-for-sale";
import MerchForSale from "../components/merch-for-sale";
import { MerchProduct } from "../lib/definitions";

// export metadata
export const metadata  = {
  title: "Merch",
  description: "Merchandise by The Long Emergency",
};

export default async function MerchPage() {
  const merchPageData = await getPage("merch");
  const merchData = await getMerch();

  const merch: MerchProduct[] = merchData.map(row => ({
    id: row.id,
    name: row.name,
    price: row.price,
    image: row.image,
    description: row.description,
  }));
  return (
    <section className="flex justify-center items-center flex-col">
      <h2 className="expand-on-load text-2xl lg:text-4xl pb-6">{merchPageData.page_title}</h2>
      {/* <CdsForSale /> */}
      <MerchForSale merch={merch} />
    </section>
  );
}
