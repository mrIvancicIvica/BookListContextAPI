import React, { useContext } from "react";
import { Context } from "../context/BookContext";

const Header = () => {
  const { books } = useContext(Context);
  return (
    <div className="ui block header">
      <h1 className="ui center aligned header purple">Booklist</h1>
      <h4 className="ui center aligned header">
        {books.length
          ? `You have more ${books.length} books to read`
          : "No more books for now ..."}
      </h4>
    </div>
  );
};

export default Header;
