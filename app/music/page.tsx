import { getPage } from "../lib/data";

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  console.log(musicPageData);
  return (
    <div>
      <h1>{musicPageData.h1}</h1>
    </div>
  );
}