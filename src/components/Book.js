import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BookContext } from "../context";

const Book = ({ book }) => {
  const { deleteBook } = useContext(BookContext);

  // delete book
  const dispatchDelete = () => {
    deleteBook(book.id);
  };

  return (
    <div className="book">
      <h1>{book.title}</h1>
      <p className="meta">
        {book.author} - {book.year}
      </p>
      <a href={book.link} target="_blank" rel="noreferrer">
        Wiki Page
      </a>
      <button className="delete" onClick={dispatchDelete}>
        X
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
