import { Suspense } from "react";
import Banner from "./components/banner";
import BookList from "./components/book-list";
import Loading from "@/components/loading";

export default async function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </>
  );
}
