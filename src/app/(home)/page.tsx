import Banner from "./components/banner";
import BookList from "./components/book-list";

export default async function Home() {
  const response = await fetch(`http://localhost:5050/books`);
  if (!response.ok) {
    throw new Error("An error occurred while fetching books");
  }
  const books = await response.json();
  console.log("books: ", books);

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
