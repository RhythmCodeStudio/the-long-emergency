// refactor all paths to this file to use the actions directory. then delete this file


// import { sql } from "@vercel/postgres";
import postgres from 'postgres';
import { User, Section, Page, TextBlock, Image, Album, Song, MerchProduct } from "@/definitions/definitions";
import { unstable_noStore as noStore } from 'next/cache';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function getAlbum(id: number) {
  try {
    const album = await sql`SELECT * FROM albums WHERE id=${id}`;
    return album[0] as Album;
  } catch (error) {
    console.error('Failed to fetch album:', error);
    throw new Error('Failed to fetch album.');
  }
};

export async function getAlbums(): Promise<Album[]> {
  try {
    const albums = await sql<Album[]>`SELECT * FROM albums`;
    // return albums.rows as Album[];
    return albums;
    
  } catch (error) {
    console.error('Failed to fetch albums:', error);
    throw new Error('Failed to fetch albums.');
  }
};

export async function getSong(id: string): Promise<Song | null> {
  try {
    const song = await sql<Song[]>`SELECT * FROM songs WHERE id=${id}::uuid`;
    // return song.rows[0] as Song;
    return song[0] || null;
  } catch (error) {
    console.error('Failed to fetch song:', error);
    throw new Error('Failed to fetch song.');
  }
};

export async function getSongs(): Promise<Song[]> {
  try {
    const songs = await sql<Song[]>`SELECT * FROM songs`;
    return songs;
  } catch (error) {
    console.error('Failed to fetch songs:', error);
    throw new Error('Failed to fetch songs.');
  }
};

export async function getMerch(): Promise<MerchProduct[]> {
  try {
    const merch = await sql<MerchProduct[]>`SELECT * FROM merch`;
    return merch;
  } catch (error) {
    console.error('Failed to fetch merch:', error);
    throw new Error('Failed to fetch merch.');
  }
};

export async function getUsers(): Promise<User[]> {
  try {
    const users = await sql<User[]>`SELECT * FROM users`;
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0] || null;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function createUser(user: User) {
  try {
    await sql`INSERT INTO users (id, name, email, password) VALUES (${user.id}, ${user.name}, ${user.email}, ${user.password})`;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user.');
  }
}

export async function updateUser(user: User) {
  try {
    await sql`UPDATE users SET name=${user.name}, password=${user.password} WHERE id=${user.id}`;
  } catch (error) {
    console.error('Failed to update user:', error);
    throw new Error('Failed to update user.');
  }
}


export async function getPages(): Promise<Page[]> {
  try {
    const pages = await sql<Page[]>`SELECT * FROM pages`;
    return pages;
  } catch (error) {
    console.error('Failed to fetch pages:', error);
    throw new Error('Failed to fetch pages.');
  }
}

export async function getPage(slug: string): Promise<Page | null> {
  noStore();
  try {
    const page = await sql<Page[]>`SELECT * FROM pages WHERE slug=${slug}`;
    return page[0] || null;
  } catch (error) {
    console.error('Failed to fetch page:', error);
    throw new Error('Failed to fetch page.');
  }
}

export async function getSections(pageId: string): Promise<Section[]> {
  try {
    const sections = await sql<Section[]>`SELECT * FROM sections WHERE page=${pageId}`;
    return sections;
  } catch (error) {
    console.error('Failed to fetch sections:', error);
    throw new Error('Failed to fetch sections.');
  }
}

export async function getSection(sectionId: string): Promise<Section | null> {
  try {
    const section = await sql<Section[]>`SELECT * FROM sections WHERE id=${sectionId}`;
    return section[0] || null;
  } catch (error) {
    console.error('Failed to fetch section:', error);
    throw new Error('Failed to fetch section.');
  }
}

export async function getTextBlock(blockId: string): Promise<TextBlock | null> {
  try {
    const block = await sql<TextBlock[]>`SELECT * FROM text_blocks WHERE id=${blockId}`;
    return block[0] || null;
  } catch (error) {
    console.error('Failed to fetch text block:', error);
    throw new Error('Failed to fetch text block.');
  }
}

export async function getImage(imageUrl: string): Promise<Image | null> {
  try {
    const image = await sql<Image[]>`SELECT * FROM images WHERE url=${imageUrl}`;
    return image[0] || null;
  } catch (error) {
    console.error('Failed to fetch image:', error);
    throw new Error('Failed to fetch image.');
  }
}

export async function updateTextBlock(blockId: string, text: string) {
  try {
    await sql`UPDATE text_blocks SET text=${text} WHERE id=${blockId}`;
  } catch (error) {
    console.error('Failed to update text block:', error);
    throw new Error('Failed to update text block.');
  }
}

export async function updateImage(imageUrl: string, alt: string) {
  try {
    await sql`UPDATE images SET alt=${alt} WHERE url=${imageUrl}`;
  } catch (error) {
    console.error('Failed to update image:', error);
    throw new Error('Failed to update image.');
  }
}

export async function updatePage(pageId: string, page_title: string) {
  try {
    await sql`UPDATE pages SET page_title=${page_title} WHERE id=${pageId}`;
  } catch (error) {
    console.error('Failed to update page:', error);
    throw new Error('Failed to update page.');
  }
}