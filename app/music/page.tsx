// import data
import { getPage, getAlbums, getSongs } from "../lib/data";

// import components
import MusicPlayer from "../components/music-player";

export default async function MusicPage() {
  const musicPageData = await getPage("music");
  const albums = await getAlbums();
  console.log('albums',albums)
  return (
    <div className="flex justify-center items center flex-col">
      <h2 className="text-center">{musicPageData.page_title}</h2>
      <div className="p-12 grid grid-cols-1">
        {albums.map((album) => (
          <div key={album.id}>
            <h3>{album.title}</h3>
            <p>{album.year}</p>
            <p>{album.type}</p>
            <img src={album.cover_image} alt={album.title} />
            </div>
        ))}
      </div>
      <MusicPlayer />
    </div>
  );
}
