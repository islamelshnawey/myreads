import '../App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "../api/BooksAPI";

import Library from './Library';
import Search from './Search';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  /**
   * func to fetch books
   */
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  /**
   * func to change book shelf
   * @param {*} book book Item
   * @param {*} shelf desired Shelf
   */
  const updateBook = async (book, shelf) => {
    const res = await BooksAPI.update(book, shelf);
    if (res) {
      console.log(res);
      getBooks();
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Library books={books} updateBook={updateBook} />
        }
      />
      <Route
        path="/search"
        element={
          <Search myBooks={books} updateBook={updateBook} />
        }
      />
    </Routes>
  );
}

export default App;
