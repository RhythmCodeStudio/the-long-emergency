import { getPage } from "../lib/data";

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  return (
    <div>
         {/* musicPageData.h1 needs to be musicPageData.page_title after re-seeding database */}
         <h2>{musicPageData.h1}</h2>
    </div>
  );
}