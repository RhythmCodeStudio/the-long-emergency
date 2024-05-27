import { sql } from "@vercel/postgres";
import { User, Section, Page, TextBlock, Image, Album, Song } from "./definitions";
import { unstable_noStore as noStore } from 'next/cache';


export async function getAlbum(id: number) {
  try {
    const album = await sql`SELECT * FROM albums WHERE id=${id}`;
    return album.rows[0] as Album;
  } catch (error) {
    console.error('Failed to fetch album:', error);
    throw new Error('Failed to fetch album.');
  }
};

export async function getAlbums() {
  try {
    const albums = await sql`SELECT * FROM albums`;
    return albums.rows as Album[];
  } catch (error) {
    console.error('Failed to fetch albums:', error);
    throw new Error('Failed to fetch albums.');
  }
};

export async function getSong(id: number) {
  try {
    const song = await sql`SELECT * FROM songs WHERE id=${id}`;
    return song.rows[0] as Song;
  } catch (error) {
    console.error('Failed to fetch song:', error);
    throw new Error('Failed to fetch song.');
  }
};

export async function getSongs() {
  try {
    const songs = await sql`SELECT * FROM songs`;
    return songs.rows as Song[];
  } catch (error) {
    console.error('Failed to fetch songs:', error);
    throw new Error('Failed to fetch songs.');
  }
};

export async function getUsers() {
  try {
    const users = await sql`SELECT * FROM users`;
    return users.rows as User[];
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
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


export async function getPages() {
  try {
    const pages = await sql`SELECT * FROM pages`;
    return pages.rows as Page[];
  } catch (error) {
    console.error('Failed to fetch pages:', error);
    throw new Error('Failed to fetch pages.');
  }
}

export async function getPage(slug: string) {
  noStore();
  try {
    const page = await sql`SELECT * FROM pages WHERE slug=${slug}`;
    return page.rows[0] as Page;
  } catch (error) {
    console.error('Failed to fetch page:', error);
    throw new Error('Failed to fetch page.');
  }
}

export async function getSections(pageId: string) {
  try {
    const sections = await sql`SELECT * FROM sections WHERE page=${pageId}`;
    return sections.rows as Section[];
  } catch (error) {
    console.error('Failed to fetch sections:', error);
    throw new Error('Failed to fetch sections.');
  }
}

export async function getSection(sectionId: string) {
  try {
    const section = await sql`SELECT * FROM sections WHERE id=${sectionId}`;
    return section.rows[0] as Section;
  } catch (error) {
    console.error('Failed to fetch section:', error);
    throw new Error('Failed to fetch section.');
  }
}

export async function getTextBlock(blockId: string) {
  try {
    const block = await sql`SELECT * FROM text_blocks WHERE id=${blockId}`;
    return block.rows[0] as TextBlock;
  } catch (error) {
    console.error('Failed to fetch text block:', error);
    throw new Error('Failed to fetch text block.');
  }
}

export async function getImage(imageUrl: string) {
  try {
    const image = await sql`SELECT * FROM images WHERE url=${imageUrl}`;
    return image.rows[0] as Image;
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