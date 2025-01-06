"use client";

import { Book } from "@/types";
import React, { useEffect, useState } from "react";

const SingleBookPage = ({ params }: { params: { bookId: string } }) => {
  console.log("params", params);
  const [book, setBooks] = useState<Book>();

  const featchBook = async () => {
    try {
      const response = await fetch(
        `http://localhost:5501/api/books/${params.bookId}`,
        {
          method: "PATCH",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch book");
      }
      let book = await response.json();
      console.log(book);
      setBooks(book);
    } catch (error: any) {
      console.log(error);
      throw new Error("Failed to Book");
    }
  };

  useEffect(() => {
    featchBook();
  }, []);

  if (!book) return <div>Book Not Found</div>;

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
      </div>
      <div className="flex justify-end">
        <img
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
