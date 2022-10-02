import { useContext, useState } from "react";
import { BookContext } from "../context";

const AddBook = () => {
  // component state
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [link, setLink] = useState("");

  // get addBook from context
  const { addBook, booksListLength } = useContext(BookContext);

  // handle changes in inputs
  const handleTitle = (e) => setTitle(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleLink = (e) => setLink(e.target.value);

  // submit book data
  const addNewBook = (e) => {
    // prevent submit default behavior
    e.preventDefault();

    // pass new book data to store
    addBook({
      id: booksListLength + 1,
      title: title,
      author: author,
      year: parseInt(year),
      link: link,
    });

    // empty fields after submit
    setTitle("");
    setAuthor("");
    setYear(1900);
    setLink("");
  };

  return (
    <>
      <h1>Add New Book</h1>
      <form onSubmit={addNewBook}>
        {/* Title  */}
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Lord Of The Rings"
            id="title"
            value={title}
            onChange={handleTitle}
            required
          />
        </div>
        <div>
          {/* Author  */}
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            placeholder="J. R. R. Tolkien"
            id="author"
            value={author}
            onChange={handleAuthor}
            required
          />
        </div>
        <div>
          {/* Year  */}
          <label htmlFor="year">Year: </label>
          <input
            type="number"
            name="year"
            placeholder="2001"
            max="2022"
            id="year"
            value={year}
            onChange={handleYear}
            required
          />
        </div>
        {/* Link  */}
        <div>
          <label htmlFor="link">Wiki Link: </label>
          <input
            type="link"
            name="link"
            placeholder="https://www.google.com/"
            id="link"
            value={link}
            onChange={handleLink}
            required
          />
        </div>
        <div className="submitBtn">
          <button>Add Book</button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
