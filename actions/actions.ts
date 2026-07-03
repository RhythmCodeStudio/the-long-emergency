"use server";
import { neon } from "@neondatabase/serverless";
import { auth } from "@/auth/server";
import { redirect } from "next/navigation";
import { User, Section, Page, TextBlock, Image, Album, Song, MerchProduct } from "@/definitions/definitions";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function signUpForMailingList(email: string) {
  await sql`
    INSERT INTO mailing_list (email)
    VALUES (${email})
    ON CONFLICT (email) DO NOTHING
  `;
}

export async function getMailingList() {
  const entries = await sql`
    SELECT * FROM mailing_list
  `;
  return entries;
}

export async function removeFromMailingList(email: string) {
  await sql`
    DELETE FROM mailing_list
    WHERE email = ${email}
  `;
}

// create calendar event
export async function createCalendarEvent(event: {
  title: string,
  startDate: Date | string,
  endDate?: Date | string,
  startTime: string,
  endTime?: string,
  allDay?: boolean,
  cost?: string,
  locationName: string,
  locationStreetAddress: string,
  locationCity: string,
  locationState: string,
  locationZip: string,
  description?: string,
  image?: string
  ticketLink?: string,
  eventLink?: string,
  venueLink?: string,
  moreInfoLink?: string
}) {
  await sql`
    INSERT INTO calendar_events (
      title,
      start_date,
      end_date,
      start_time,
      end_time,
      all_day,
      cost,
      location_name,
      location_street_address,
      location_city,
      location_state,
      location_zip,
      description,
      image,
      ticket_link,
      event_link,
      venue_link,
      more_info_link
    ) VALUES (
      ${event.title},
      ${event.startDate},
      ${event.endDate ?? null},
      ${event.startTime},
      ${event.endTime ?? null},
      ${event.allDay ?? false},
      ${event.cost ?? null},
      ${event.locationName},
      ${event.locationStreetAddress},
      ${event.locationCity},
      ${event.locationState},
      ${event.locationZip},
      ${event.description ?? null},
      ${event.image ?? null},
      ${event.ticketLink ?? null},
      ${event.eventLink ?? null},
      ${event.venueLink ?? null},
      ${event.moreInfoLink ?? null}
    )
  `;
}

// get all calendar events
export async function getCalendarEvents() {
  const events = await sql`
    SELECT * FROM calendar_events
    ORDER BY start_date, start_time
  `;
  return events;
}

// delete calendar event by id
export async function deleteCalendarEvent(id: string) {
  await sql`
    DELETE FROM calendar_events
    WHERE id = ${id}
  `;
}

// update calendar event by id
export async function updateCalendarEvent(event: {
  id: string,
  title: string,
  startDate: Date | string,
  endDate?: Date | string,
  startTime: string,
  endTime?: string,
  allDay?: boolean,
  cost?: string,
  locationName: string,
  locationStreetAddress: string,
  locationCity: string,
  locationState: string,
  locationZip: string,
  description?: string,
  image?: string,
  ticketLink?: string,
  eventLink?: string,
  venueLink?: string,
  moreInfoLink?: string
}) {
  await sql`
    UPDATE calendar_events
    SET
      title = ${event.title},
      start_date = ${event.startDate},
      end_date = ${event.endDate ?? null},
      start_time = ${event.startTime},
      end_time = ${event.endTime ?? null},
      all_day = ${event.allDay ?? false},
      cost = ${event.cost ?? null},
      location_name = ${event.locationName},
      location_street_address = ${event.locationStreetAddress},
      location_city = ${event.locationCity},
      location_state = ${event.locationState},
      location_zip = ${event.locationZip},
      description = ${event.description ?? null},
      image = ${event.image ?? null},
      ticket_link = ${event.ticketLink ?? null},
      event_link = ${event.eventLink ?? null},
      venue_link = ${event.venueLink ?? null},
      more_info_link = ${event.moreInfoLink ?? null}
    WHERE id = ${event.id}
  `;
}

export async function getSession() {
  const session = await auth.getSession();
  return session;
}

export async function signOut() {
  await auth.signOut();
  // redirect to "/"
  redirect("/");
}

export async function getAlbum(id: string) {
  try {
    const album = await sql`SELECT * FROM albums WHERE id=${id}::uuid`;
    return album[0] as Album;
  } catch (error) {
    console.error('Failed to fetch album:', error);
    throw new Error('Failed to fetch album.');
  }
};

export async function getAlbums(): Promise<Album[]> {
  try {
    const albums = (await sql`
      SELECT * FROM albums
    `) as Album[];
    return albums;
  } catch (error) {
    console.error('Failed to fetch albums:', error);
    throw new Error('Failed to fetch albums.');
  }
}


export async function getSong(id: string): Promise<Song | null> {
  try {
    const song = await sql`SELECT * FROM songs WHERE id=${id}::uuid`;
    return song[0] as Song || null;
  } catch (error) {
    console.error('Failed to fetch song:', error);
    throw new Error('Failed to fetch song.');
  }
};

export async function getSongs(): Promise<Song[]> {
  try {
    const songs = (await sql`SELECT * FROM songs`) as Song[];
    return songs;
  } catch (error) {
    console.error('Failed to fetch songs:', error);
    throw new Error('Failed to fetch songs.');
  }
};

export async function getMerch(): Promise<MerchProduct[]> {
  try {
    const merch = (await sql`SELECT * FROM merch`) as MerchProduct[];
    return merch;
  } catch (error) {
    console.error('Failed to fetch merch:', error);
    throw new Error('Failed to fetch merch.');
  }
};

export async function getUsers(): Promise<User[]> {
  try {
    const users = (await sql`SELECT * FROM users`) as User[];
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = (await sql`SELECT * FROM users WHERE email=${email}`) as User[];
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
    const pages = (await sql`SELECT * FROM public.pages`) as Page[];
    return pages;
  } catch (error) {
    console.error('Failed to fetch pages:', error);
    throw new Error('Failed to fetch pages.');
  }
}

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const page = (await sql`SELECT * FROM public.pages WHERE slug=${slug}`) as Page[];
    return page[0] || null;
  } catch (error) {
    console.error('Failed to fetch page:', error);
    throw new Error('Failed to fetch page.');
  }
}

export async function getSections(pageId: string): Promise<Section[]> {
  try {
    const sections = (await sql`SELECT * FROM sections WHERE page=${pageId}`) as Section[];
    return sections;
  } catch (error) {
    console.error('Failed to fetch sections:', error);
    throw new Error('Failed to fetch sections.');
  }
}

export async function getSection(sectionId: string): Promise<Section | null> {
  try {
    const section = (await sql`SELECT * FROM sections WHERE id=${sectionId}`) as Section[];
    return section[0] || null;
  } catch (error) {
    console.error('Failed to fetch section:', error);
    throw new Error('Failed to fetch section.');
  }
}

export async function getTextBlock(blockId: string): Promise<TextBlock | null> {
  try {
    const block = (await sql`SELECT * FROM text_blocks WHERE id=${blockId}`) as TextBlock[];
    return block[0] || null;
  } catch (error) {
    console.error('Failed to fetch text block:', error);
    throw new Error('Failed to fetch text block.');
  }
}

export async function getImage(imageUrl: string): Promise<Image | null> {
  try {
    const image = (await sql`SELECT * FROM images WHERE url=${imageUrl}`) as Image[];
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