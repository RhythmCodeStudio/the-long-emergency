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
  pages,
  releases,
  songs,
  merch 
} from "../app/lib/initial-site-data.js";

const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });
// console.log('Connecting to:', process.env.DATABASE_URL);
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
        release UUID NOT NULL,
        year INT NOT NULL,
        genre TEXT[] NOT NULL,
        track_number INT NOT NULL,
        src TEXT NOT NULL,
        lyrics TEXT[],
        FOREIGN KEY (release) REFERENCES releases(id)
      );
    `;
    console.log(`Created "songs" table`);

    // Insert data into the "songs" table
    const insertedSongs = await Promise.all(
      songs.map(async (song) => {
        return sql`
        INSERT INTO songs (id, title, artist, release, year, genre, track_number, src, lyrics)
        VALUES (${song.id}, ${song.title}, ${song.artist}, ${song.release}, ${song.year}, ${song.genre}, ${song.track_number}, ${song.src}, ${song.lyrics})
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

async function seedReleases() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
    DROP TABLE IF EXISTS releases CASCADE;
    `;
    // Create the "releases" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS releases (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
        year INT NOT NULL,
        release_date DATE,
        genre TEXT[] NOT NULL,
        cover_image TEXT NOT NULL,
        release_type TEXT NOT NULL,
        zip_file TEXT NOT NULL
      );
    `;
    console.log(`Created "releases" table`);

    // Insert data into the "releases" table
    const insertedReleases = await Promise.all(
      releases.map(async (release) => {
        return sql`
        INSERT INTO releases (id, title, artist, year, genre, cover_image, release_type, zip_file)
        VALUES (${release.id}, ${release.title}, ${release.artist}, ${release.year}, ${release.genre}, ${release.cover_image}, ${release.release_type}, ${release.zip_file})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );
    console.log(`Seeded ${insertedReleases.length} releases`);
    return {
      createTable,
      releases: insertedReleases,
    };
  } catch (error) {
    console.error("Error seeding releases:", error);
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
  await seedPages();
  await seedReleases();
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
