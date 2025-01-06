export type Book = {
  _id: string;
  title: string;
  author: Author;
  description: string;
  coverImage: string;
  price: number;
};

export type Author = {
  name: string;
};
