import React from "react";
import Booklist from "./components/Booklist";
import BookForm from "./components/BookForm";
import Header from "./components/Header";
import BookContext from "./context/BookContext";

function App() {
  return (
      <BookContext>
        <Header />
        <Booklist />
        <BookForm />
      </BookContext>
  );
}

export default App;
