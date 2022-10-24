import '../App.css';
import React, { useEffect, useState } from 'react';
import * as BooksAPI from "../api/BooksAPI";
import { Route, Routes, useNavigate } from "react-router-dom";

import Library from './Library';
import Search from './Search';

function App() {

  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

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
      setBooks(res);
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Library
            books={books}
            onUpdateBook={updateBook} />
        }
      />
      <Route
        path="/search"
        element={
          <Search
            onUpdateBook={updateBook} />
        }
      />
    </Routes>
  );
}

export default App;
