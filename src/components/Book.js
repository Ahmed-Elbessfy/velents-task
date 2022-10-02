import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  return (
    <div className="book">
      <h1>{book.title}</h1>
      <p className="meta">
        {book.author} - {book.year}
      </p>
      <a href={book.link} target="_blank" rel="noreferrer">
        Wiki Page
      </a>
      <button className="delete">X</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
