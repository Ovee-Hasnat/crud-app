import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "The Adventures of Huckleberry Finn",
      author: "Mark Twain",
    },
    {
      id: uuidv4(),
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      id: uuidv4(),
      title: "Anna Karenina",
      author: "Leo Tolstoy",
    },
    {
      id: uuidv4(),
      title: "Madame Bovary",
      author: "Gustave Flaubert",
    },
    {
      id: uuidv4(),
      title: "Moby Dick",
      author: "Herman Melville",
    },
    {
      id: uuidv4(),
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquezd",
    },
    {
      id: uuidv4(),
      title: "1984",
      author: "George Orwell",
    },
    {
      id: uuidv4(),
      title: "Brave New World",
      author: "Aldous Huxley",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const bookExist = state.books.filter((book) => book.id === id);
      if (bookExist) {
        bookExist[0].title = title;
        bookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;

export default booksSlice.reducer;
