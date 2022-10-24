import '../App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import Library from './Library';
import Search from './Search';

function App() {

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Library />
        }
      />
      <Route
        path="/search"
        element={
          <Search />
        }
      />
    </Routes>
  );
}

export default App;
