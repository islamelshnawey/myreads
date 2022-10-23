import React, { useEffect, useState } from 'react';
import * as BooksAPI from "../api/BooksAPI";
import Shelf from './Shelf';
import * as Constants from "../utils/Constants";

const Library = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
        };

        getBooks();
    }, []);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Shelf
                shelfName='Currently Reading'
                shelfType={Constants.BOOK_SHELFS.CURRENTLY_READ}
                books={books}
            />
            <Shelf
                shelfName='Want to Read'
                shelfType={Constants.BOOK_SHELFS.WANT_TO_READ}
                books={books}
            />
            <Shelf
                shelfName='Read'
                shelfType={Constants.BOOK_SHELFS.READ}
                books={books}
            />
        </div>
    );
};

export default Library;
