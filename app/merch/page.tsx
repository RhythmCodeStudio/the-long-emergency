// import data
import { getPage } from "../lib/data";
// import components
import CdsForSale from "../components/cds-for-sale";
// export metadata
export const meta = {
  title: "Merch",
  description: "Merchandise by The Long Emergency",
};

export default async function MerchPage() {
  const merchPageData = await getPage("merch");
  return (
    <section className="flex justify-center items-center flex-col">
      <h2 className="expand-on-load text-2xl lg:text-4xl pb-6">{merchPageData.page_title}</h2>
      
      <CdsForSale />
    </section>
  );
}
