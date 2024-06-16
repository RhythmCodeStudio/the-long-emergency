// import data
import { getPage } from "../lib/data";
// export metadata
export const meta = {
  title: "Merch",
  description: "Merchandise by The Long Emergency",
};

export default async function MerchPage() {
  const merchPageData = await getPage("merch");
  return (
    <div>
      <h2>{merchPageData.page_title}</h2>
    </div>
  );
}
