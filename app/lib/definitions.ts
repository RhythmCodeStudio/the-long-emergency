export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
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