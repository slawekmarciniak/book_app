import { v4 as uuidv4 } from "uuid";

export const collection = [
  {
    id: "037d0623-5f08-43bf-bf31-01adbcda29e5",
    title: "Some test book 1",
    author: "Some author 1",
    publishingHouse: "Some publishing house 1",
    pages: 234,
  },
  {
    id: "e8519bd9-4bc6-4363-be34-731f09095fdd",
    title: "Some test book 2",
    author: "Some author 1",
    publishingHouse: "Some publishing house 2",
    pages: 258,
  },
  {
    id: "f331954d-a8b2-439f-8a81-caa12f4843b8",
    title: "Some test book 3",
    author: "Some author 2",
    publishingHouse: "Some publishing house 1",
    pages: 721,
  },
  {
    id: "032c23db-89e1-4cc9-a811-6c8a4ee409d2",
    title: "Some test book 4",
    author: "Some author 3",
    publishingHouse: "Some publishing house 3",
    pages: 125,
  },
  {
    id: "ea49ccc5-5bd7-4f41-962c-db26e497053b",
    title: "Some test book 5",
    author: "Some author 4",
    publishingHouse: "Some publishing house 4",
    pages: 853,
  },
];

export const fetchBooks = () => {
  return new Promise((resolve) => resolve(collection));
};

export const addNewBook = (newBook) => {
  return new Promise((resolve) => {
    const book = { id: uuidv4(), ...newBook };
    collection.push(book);

    resolve(book);
  });
};

export const removeBook = (bookId) => {
  return new Promise((resolve) => {
    const initialLength = this._collection.length;

    this._collection = [
      ...this._collection.filter((book) => book.id !== bookId),
    ];

    resolve(this._collection.length !== initialLength);
  });
};
