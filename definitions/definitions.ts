export type Album = {
  id: string;
  title: string;
  artist: string;
  year: number;
  genre: string[];
  cover_image: string;
  type: string;
  songs: Song[];
  zip: string;
  bandcamp_url: string;
};

export type CalendarEvent = {
  id: number;
  title: string;
  startDate: Date;
  endDate?: Date;
  startTime: string;
  endTime?: string;
  allDay?: boolean;
  cost?: string;
  locationName: string;
  locationStreetAddress: string;
  locationCity: string;
  locationState: string;
  locationZip: string;
  description?: string;
  image?: string;
  ticketLink?: string;
  eventLink?: string;
  venueLink?: string;
  moreInfoLink?: string;
};

export type Image = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type MerchProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export type Page = {
  id: string;
  name: string;
  slug: string;
  sections: Section[];
  page_title: string;
  url: string;
};

export type Release = {
  id: string;
  title: string;
  artist: string;
  year: number;
  release_date: Date;
  genre: string[];
  cover_image: string;
  type: string;
  description: string;
  links: StreamingLink[];
  tracks: Song[];
};

export type Section = {
  id: string;
  page: string;
  name: string;
  type: 'text' | 'image';
  order: number;
  content: TextBlock | Image;
};

export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string[];
  track_number: number;
  src: string;
  bandcamp_url: string;
  lyrics: string[];
};

export type StreamingLink = {
  name: string;
  label: string;
  url: string;
  icon: string;
};

export type TextBlock = {
  id: string;
  page: string;
  section: string;
  text: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};