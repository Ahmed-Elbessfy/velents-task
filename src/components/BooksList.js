import { useContext } from "react";
import { BookContext } from "../context/index";
import Book from "./Book";

const BooksList = () => {
  const { bookList } = useContext(BookContext);

  return (
    <div className="books_list">
      {bookList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
