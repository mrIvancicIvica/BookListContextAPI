import React, { useContext } from "react";
import { Context } from "../context/BookContext";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { books } = useContext(Context);
  return (
    <div className="App">
        {books.map((book) => (
          <BookDetails book={book} key={book.id} />
        ))}
    </div>
  );
};

export default Booklist;
