import { sql } from "@vercel/postgres";
import { User, Section, Page, TextBlock, Image } from "./definitions";
import { unstable_noStore as noStore } from 'next/cache';

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
  console.log(`Fetching page with slug: ${slug}`);
  try {
    const page = await sql`SELECT * FROM pages WHERE slug=${slug}`;
    console.log(`Fetched page: ${page.rows[0]}`);
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

export async function updatePage(pageId: string, h1: string) {
  try {
    await sql`UPDATE pages SET h1=${h1} WHERE id=${pageId}`;
  } catch (error) {
    console.error('Failed to update page:', error);
    throw new Error('Failed to update page.');
  }
}