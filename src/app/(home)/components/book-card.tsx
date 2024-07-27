import { Book } from "@/types";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded">
      <img
        src={book.imageUrl}
        alt={book.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "12rem" }}
      />
      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-orange-500 text-balance ">
          {book.title}
        </h2>
        <p className="font-bold mt-1"> {book.author} </p>
        <Link
          href={`/book/${book.id}`}
          className="py-1 px-2 rounded border border-orange-500 mt-4 inline-block text-orange-400 text-sm font-medium hover:border-orange-300 hover:bg-orange-100 transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
