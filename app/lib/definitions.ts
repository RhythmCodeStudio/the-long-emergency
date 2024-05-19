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
  h1: string;
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