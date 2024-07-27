import { Book } from "@/types";
import React from "react";
import BookCard from "./book-card";

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
        // <div key={book._id} className="mb-8">
        //   <h2>{book.title}</h2>
        //   <p>{book.description}</p>
        //   <img src={book.imageUrl} alt={book.title} />
        //   <p>Author: {book.author.name}</p>
        //   <p>Price: ${book.price.toFixed(2)}</p>
        // </div>
      ))}
    </div>
  );
};

export default BookList;
