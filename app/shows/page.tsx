import { getPage } from "../lib/data";

export default async function ShowsPage() {
  const showsPageData = await getPage("shows");
  return (
    <div>
      <h1>{showsPageData.h1}</h1>
    </div>
  );
}