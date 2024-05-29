const { db } = require("@vercel/postgres");
const { users } = require("../app/lib/placeholder-data.js");
const { pages } = require("../app/lib/placeholder-data.js");
const { albums } = require("../app/lib/placeholder-data.js");
const { songs } = require("../app/lib/placeholder-data.js");

const bcrypt = require("bcrypt");

async function seedSongs(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
     DROP TABLE IF EXISTS songs;
   `;
    // Create the "songs" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS songs (
        id INT PRIMARY KEY,
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
        album INT NOT NULL,
        year INT NOT NULL,
        genre TEXT NOT NULL,
        track_number INT NOT NULL,
        src TEXT NOT NULL,
        FOREIGN KEY (album) REFERENCES albums(id)
      );
    `;
    console.log(`Created "songs" table`);

    // Insert data into the "songs" table
    const insertedSongs = await Promise.all(
      songs.map(async (song) => {
        return client.sql`
        INSERT INTO songs (id, title, artist, album, year, genre, track_number, src)
        VALUES (${song.id}, ${song.title}, ${song.artist}, ${song.album}, ${song.year}, ${song.genre}, ${song.track_number}, ${song.src})
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

async function seedAlbums(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
    DROP TABLE IF EXISTS albums CASCADE;
    `;
    // Create the "albums" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS albums (
        id INT PRIMARY KEY,
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
        year INT NOT NULL,
        genre TEXT NOT NULL,
        cover_image TEXT NOT NULL,
        type TEXT NOT NULL
      );
    `;
    console.log(`Created "albums" table`);

    // Insert data into the "albums" table
    const insertedAlbums = await Promise.all(
      albums.map(async (album) => {
        return client.sql`
        INSERT INTO albums (id, title, artist, year, genre, cover_image, type)
        VALUES (${album.id}, ${album.title}, ${album.artist}, ${album.year}, ${album.genre}, ${album.cover_image}, ${album.type})
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


async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY,
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
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
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

async function seedPages(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
     // Drop the "pages" table if it exists
     await client.sql`
     DROP TABLE IF EXISTS pages;
   `;
    // Create the "pages" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pages (
        id INT PRIMARY KEY,
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
        return client.sql`
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

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedPages(client);
  await seedAlbums(client);
  await seedSongs(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
