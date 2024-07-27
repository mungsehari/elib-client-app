import { Book } from "@/types";
import React from "react";
import BookCard from "./book-card";

const BookList = async () => {
  const response = await fetch(`http://localhost:5050/books`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("An error occurred while fetching books");
  }
  const books = await response.json();
  console.log("books: ", books);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
      {books.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
