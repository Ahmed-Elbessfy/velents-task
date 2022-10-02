import { createContext, useReducer } from "react";

// initiate state
const bookState = {
  bookList: [
    {
      id: 1,
      author: "Chinua Achebe",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      title: "Things Fall Apart",
      year: 1958,
    },
    {
      id: 2,
      author: "Hans Christian Andersen",
      link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      title: "Fairy tales",
      year: 1836,
    },
    {
      id: 3,
      author: "Dante Alighieri",
      link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      title: "The Divine Comedy",
      year: 1315,
    },
    {
      id: 4,
      author: "Unknown",
      link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      title: "The Epic Of Gilgamesh",
      year: -1700,
    },
    {
      id: 5,
      author: "Unknown",
      link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
      title: "The Book Of Job",
      year: -600,
    },
    {
      id: 6,
      author: "Unknown",
      link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      title: "One Thousand and One Nights",
      year: 1200,
    },
    {
      id: 7,
      author: "Unknown",
      link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      title: "Nj\u00e1l's Saga",
      year: 1350,
    },
    {
      id: 8,
      author: "Jane Austen",
      link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      title: "Pride and Prejudice",
      year: 1813,
    },
    {
      id: 9,
      author: "Honor\u00e9 de Balzac",
      link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      title: "Le P\u00e8re Goriot",
      year: 1835,
    },
  ],
};

// initiate reducer
const bookReducer = (state, action) => {
  switch (action.type) {
    // delete book  mutation
    case "DELETE_BOOK":
      return {
        ...state,
        bookList: state.bookList.filter(
          (book) => book.id !== action.payload.id
        ),
      };
    // add book  mutation
    case "ADD_BOOK":
      console.log("mutatio n : ", action.payload);
      return {
        ...state,
        bookList: [...state.bookList, action.payload.book],
      };
    default:
      return state;
  }
};

// initiate context
export const BookContext = createContext(bookState);

// initiate provider
export const BookProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(bookReducer, bookState);

  // delete book
  const deleteBook = (id) => {
    dispatch({ type: "DELETE_BOOK", payload: { id: id } });
  };

  // delete book
  const addBook = (book) => {
    console.log("function ", book);
    dispatch({ type: "ADD_BOOK", payload: { book: book } });
  };

  return (
    <BookContext.Provider
      value={{
        bookList: state.bookList,
        deleteBook,
        addBook,
        booksListLength: state.bookList.length,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
