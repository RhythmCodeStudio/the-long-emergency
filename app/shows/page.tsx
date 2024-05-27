import { getPage } from "../lib/data";

export default async function ShowsPage() {
  const showsPageData = await getPage("shows");
  return (
    <div>
      <h2>{showsPageData.page_title}</h2>
    </div>
  );
}
