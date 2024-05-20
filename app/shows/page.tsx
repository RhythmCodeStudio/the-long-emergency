import { getPage } from "../lib/data";

export default async function ShowsPage() {
  const showsPageData = await getPage("shows");
  return (
    <div>
         {/* showsPageData.h1 needs to be showsPageData.page_title after re-seeding database */}
         <h2>{showsPageData.h1}</h2>
    </div>
  );
}