import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { fetchBooks } from "../../api/FakeBookApi";
import Book from "./Book";
import MultiSelect from "./components/MultiSelect";
import Button from "@mui/material/Button";
import "./bookList.css";

const BookList = () => {
  const { books, setBooks, selectedBooks, clearFilter } =
    useContext(AppContext);

  useEffect(() => {
    const getAllBooks = async () => {
      const result = await fetchBooks();
      setBooks(result);
    };
    getAllBooks();
  }, [setBooks]);

  const handleClick = () => clearFilter();

  return (
    <div>
      <MultiSelect />
      {selectedBooks && (
        <Button
          style={{ marginTop: 30 }}
          onClick={handleClick}
          variant="contained"
        >
          clear filter
        </Button>
      )}
      <div className="list">
        {selectedBooks &&
          selectedBooks.map((el) => (
            <Book
              key={el.id}
              title={el.title}
              author={el.author}
              publishingHouse={el.publishingHouse}
              pages={el.pages}
            />
          ))}
        {!selectedBooks &&
          books &&
          books.map((el) => (
            <Book
              key={el.id}
              title={el.title}
              author={el.author}
              publishingHouse={el.publishingHouse}
              pages={el.pages}
            />
          ))}
      </div>
    </div>
  );
};

export default BookList;
