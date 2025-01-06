"use client";
import { Book } from "@/types";
import React, { useEffect, useState } from "react";
import BookCard from "./book-card";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await fetch(`http://localhost:5501/api/books`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("An error occurred while fetching books");
    }
    const books = await response.json();
    console.log("books: ", books);
    setBooks(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
      {(books || []).map((book: Book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
