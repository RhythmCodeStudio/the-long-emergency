// const { db } = require("@vercel/postgres");
// const { users } = require("../app/lib/placeholder-data.js");
// const { pages } = require("../app/lib/placeholder-data.js");
// const { albums } = require("../app/lib/placeholder-data.js");
// const { songs } = require("../app/lib/placeholder-data.js");
// const { merch } = require("../app/lib/placeholder-data.js");
import postgres from "postgres";
import bcrypt from "bcrypt";
import 'dotenv/config'; // or require('dotenv').config({ path: '.env.local' });
import { 
  users,
  pages,
  albums,
  songs,
  merch 
} from "../app/lib/initial-site-data.js";

const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });
console.log('Connecting to:', process.env.DATABASE_URL);
// const bcrypt = require("bcrypt");

async function seedSongs() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
     DROP TABLE IF EXISTS songs;
   `;
    // Create the "songs" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS songs (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
        album UUID NOT NULL,
        year INT NOT NULL,
        genre TEXT NOT NULL,
        track_number INT NOT NULL,
        src TEXT NOT NULL,
        bandcamp_url TEXT NOT NULL,
        lyrics TEXT[],
        FOREIGN KEY (album) REFERENCES albums(id)
      );
    `;
    console.log(`Created "songs" table`);

    // Insert data into the "songs" table
    const insertedSongs = await Promise.all(
      songs.map(async (song) => {
        return sql`
        INSERT INTO songs (id, title, artist, album, year, genre, track_number, src, bandcamp_url, lyrics)
        VALUES (${song.id}, ${song.title}, ${song.artist}, ${song.album}, ${song.year}, ${song.genre}, ${song.track_number}, ${song.src}, ${song.bandcamp_url}, ${song.lyrics})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );
    console.log(`Seeded ${insertedSongs.length} songs`);
    return {
      createTable,
      songs: insertedSongs,
    };
  } catch (error) {
    console.error("Error seeding songs:", error);
    throw error;
  }
}

async function seedAlbums() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    DROP TABLE IF EXISTS albums CASCADE;
    `;
    // Create the "albums" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS albums (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
        year INT NOT NULL,
        genre TEXT NOT NULL,
        cover_image TEXT NOT NULL,
        type TEXT NOT NULL,
        zip TEXT NOT NULL,
        bandcamp_url TEXT NOT NULL
      );
    `;
    console.log(`Created "albums" table`);

    // Insert data into the "albums" table
    const insertedAlbums = await Promise.all(
      albums.map(async (album) => {
        return sql`
        INSERT INTO albums (id, title, artist, year, genre, cover_image, type, zip, bandcamp_url)
        VALUES (${album.id}, ${album.title}, ${album.artist}, ${album.year}, ${album.genre}, ${album.cover_image}, ${album.type}, ${album.zip}, ${album.bandcamp_url})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );
    console.log(`Seeded ${insertedAlbums.length} albums`);
    return {
      createTable,
      albums: insertedAlbums,
    };
  } catch (error) {
    console.error("Error seeding albums:", error);
    throw error;
  }
}

async function seedUsers() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (email) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedPages() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Drop the "pages" table if it exists
    await sql`
     DROP TABLE IF EXISTS pages;
   `;
    // Create the "pages" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS pages (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        url TEXT NOT NULL,
        name TEXT NOT NULL,
        slug TEXT NOT NULL,
        page_title TEXT NOT NULL,
        sections JSONB
      );
    `;

    console.log(`Created "pages" table`);

    // Insert data into the "pages" table
    const insertedPages = await Promise.all(
      pages.map(async (page) => {
        return sql`
        INSERT INTO pages (id, url, name, slug, page_title, sections)
        VALUES (${page.id}, ${page.url}, ${page.name}, ${page.slug}, ${page.page_title}, ${page.sections})
        ON CONFLICT (id) DO UPDATE SET url = EXCLUDED.url, name = EXCLUDED.name, slug = EXCLUDED.slug, page_title = EXCLUDED.page_title, sections = EXCLUDED.sections;
      `;
      })
    );

    console.log(`Seeded ${insertedPages.length} pages`);

    return {
      createTable,
      pages: insertedPages,
    };
  } catch (error) {
    console.error("Error seeding pages:", error);
    throw error;
  }
}

async function seedMerch() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Drop the "merch" table if it exists
    await sql`
    DROP TABLE IF EXISTS merch;
  `;
    // Create the "merch" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS merch (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name TEXT NOT NULL,
        price INT NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL
      );
    `;

    console.log(`Created "merch" table`);

    // Insert data into the "merch" table
    const insertedMerch = await Promise.all(
      merch.map(async (item) => {
        return sql`
        INSERT INTO merch (id, name, price, description, image)
        VALUES (${item.id}, ${item.name}, ${item.price}, ${item.description}, ${item.image})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedMerch.length} merch items`);

    return {
      createTable,
      merch: insertedMerch,
    };
  } catch (error) {
    console.error("Error seeding merch:", error);
    throw error;
  }
}

async function main() {
  await seedUsers();
  await seedPages();
  await seedAlbums();
  await seedSongs();
  await seedMerch();
  await sql.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
