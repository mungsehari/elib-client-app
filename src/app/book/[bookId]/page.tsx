import { Book } from "@/types";
import React from "react";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  console.log("params", params);
  let book: Book | null = null;

  try {
    const response = await fetch(
      `http://localhost:5050/books/${params.bookId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }
    book = await response.json();
  } catch (error: any) {
    throw new Error("Failed to Book");
  }

  if (!book) {
    throw new Error("No book found");
  }
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author}</span>
        <p className="mt-5 text-lg leading-8">{book.description}</p>
      </div>
      <div className="flex justify-end">
        <img
          src={book.imageUrl}
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
