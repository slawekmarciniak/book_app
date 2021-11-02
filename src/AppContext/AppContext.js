import { createContext, useState } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState(null);
  const [filter, setFilter] = useState("");

  const selectBooks = (selectedPublishingHouse) => {
    const filteredBooks = books.filter(
      (el) => el.publishingHouse === selectedPublishingHouse
    );
    setSelectedBooks(filteredBooks);
  };

  const clearFilter = () => {
    setSelectedBooks(null);
    setFilter("");
  };

  return (
    <AppContext.Provider
      value={{
        books,
        setBooks,
        selectedBooks,
        setSelectedBooks,
        selectBooks,
        clearFilter,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
