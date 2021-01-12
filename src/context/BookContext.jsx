import React, { useState, createContext } from "react";
import uuid from "uuid/dist/v4";

export const Context = createContext();

const BookContext = ({ children }) => {
  const initialState = {
    Books: [
      { title: "Vlak U Snijegu", author: "Mato Lovrak", id: 1 },
      { title: "Mali Princ", author: "Antoine de Saint-Exupéry", id: 2 },
    ],
  };

  const { Books } = initialState;

  const [books, setBooks] = useState(Books);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Context.Provider value={{ books, removeBook, addBook }}>
      {children}
    </Context.Provider>
  );
};

export default BookContext;
