export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Section = {
  id: string;
  page: string;
  name: string;
  type: 'text' | 'image';
  order: number;
  content: TextBlock | Image;
};

export type Page = {
  id: string;
  name: string;
  slug: string;
  sections: Section[];
  page_title: string;
  url: string;
};

export type TextBlock = {
  id: string;
  page: string;
  section: string;
  text: string;
};

export type Image = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type Song = {
  id: number;
  title: string;
  artist: string;
  album: number;
  year: number;
  genre: string[];
  track_number: number;
  src: string;
};

export type Album = {
  id: number;
  title: string;
  artist: string;
  year: number;
  genre: string;
  cover_image: string;
  type: string;
  songs: Song[];
  zip: string;
};