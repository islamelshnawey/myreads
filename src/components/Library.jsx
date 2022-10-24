import React, { useEffect, useState } from 'react';
import * as BooksAPI from "../api/BooksAPI";
import Shelf from './Shelf';
import * as Constants from "../utils/Constants";
import { Link } from 'react-router-dom';

const Library = (props) => {

    const { onUpdateBook } = props;
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

    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf
                    shelfName='Currently Reading'
                    shelfType={Constants.BOOK_SHELFS.CURRENTLY_READ}
                    books={books}
                    onUpdateBook={onUpdateBook}
                />
                <Shelf
                    shelfName='Want to Read'
                    shelfType={Constants.BOOK_SHELFS.WANT_TO_READ}
                    books={books}
                    onUpdateBook={onUpdateBook}
                />
                <Shelf
                    shelfName='Read'
                    shelfType={Constants.BOOK_SHELFS.READ}
                    books={books}
                    onUpdateBook={onUpdateBook}
                />
            </div>
            <div className="open-search">
                <Link to="/search" className="add-contact">
                    <a>Search book</a>
                </Link>
            </div>
        </div>
    );
};

export default Library;
