const { db } = require('@vercel/postgres');
const { users } = require('../app/lib/placeholder-data.js');
const { pages } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

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
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedPages(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "pages" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pages (
        id INT PRIMARY KEY,
        url TEXT NOT NULL,
        name TEXT NOT NULL,
        slug TEXT NOT NULL,
        h1 TEXT NOT NULL,
        sections JSONB
      );
    `;

    console.log(`Created "pages" table`);

    // Insert data into the "pages" table
    const insertedPages = await Promise.all(
      pages.map(async (page) => {
        return client.sql`
        INSERT INTO pages (id, url, name, slug, h1, sections)
        VALUES (${page.id}, ${page.url}, ${page.name}, ${page.slug}, ${page.h1}, ${page.sections})
        ON CONFLICT (id) DO UPDATE SET url = EXCLUDED.url, name = EXCLUDED.name, slug = EXCLUDED.slug, h1 = EXCLUDED.h1, sections = EXCLUDED.sections;
      `;
      }),
    );

    console.log(`Seeded ${insertedPages.length} pages`);

    return {
      createTable,
      pages: insertedPages,
    };
  } catch (error) {
    console.error('Error seeding pages:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedPages(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});