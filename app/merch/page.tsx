import { getPage } from "../lib/data";

export default async function MerchPage() {
  const merchPageData = await getPage("merch");
  return (
    <div>
      <h1>{merchPageData.h1}</h1>
    </div>
  );
}