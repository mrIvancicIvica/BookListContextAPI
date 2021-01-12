import React, { useContext, useState } from "react";
import { Context } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(Context);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="ui center aligned grid">
      <form className="ui form" onSubmit={submit}>
        <div className=" two fields" style={{ marginTop: 60 }}>
          <div className="field">
            <label>Input Book</label>
            <input
              type="text"
              placeholder="Input book"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Input Author</label>
            <input
              type="text"
              placeholder="Input Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="ui button inline">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
