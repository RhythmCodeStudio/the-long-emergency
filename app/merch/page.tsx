import { getPage } from "../lib/data";

export default async function MerchPage() {
  const merchPageData = await getPage("merch");
  return (
    <div>
      <h2>{merchPageData.page_title}</h2>
    </div>
  );
}
