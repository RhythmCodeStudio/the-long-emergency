import { getPage } from "../lib/data";

export default async function MerchPage() {
  const merchPageData = await getPage("merch");
  return (
    <div>
         {/* merchPageData.h1 needs to be merchPageData.page_title after re-seeding database */}
         <h2>{merchPageData.h1}</h2>
    </div>
  );
}