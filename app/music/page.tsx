// import data
import { getPage, getAlbums, getSongs } from "../lib/data";

// import components
import MusicPlayer from "../components/music-player";

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  const albums = await getAlbums();
  console.log("albums", albums);
  return (
    <div className="flex justify-center items center flex-col">
      <h2 className="text-center text-2xl">{musicPageData.page_title}</h2>
      <div className="p-12 grid grid-cols-1 lg:grid-cols-2 flex justify-center items center text-center">
        {albums.map((album) => (
          <div key={album.id} className="p-4 m-4 -black">
            <img src={album.cover_image} alt={album.title} />
            <div className="p-2">
              <h3>{album.title}</h3>
              <p>{album.year}</p>
              <p>{album.type}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-12">
        <MusicPlayer />
      </div>
    </div>
  );
}
