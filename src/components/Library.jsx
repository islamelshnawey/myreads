import React, { useEffect, useState } from 'react';
import * as BooksAPI from "../api/BooksAPI";
import Shelf from './Shelf';
import * as Constants from "../utils/Constants";

const Library = () => {

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
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Shelf
                shelfName='Currently Reading'
                shelfType={Constants.BOOK_SHELFS.CURRENTLY_READ}
                books={books}
                onUpdateBook={updateBook}
            />
            <Shelf
                shelfName='Want to Read'
                shelfType={Constants.BOOK_SHELFS.WANT_TO_READ}
                books={books}
                onUpdateBook={updateBook}
            />
            <Shelf
                shelfName='Read'
                shelfType={Constants.BOOK_SHELFS.READ}
                books={books}
                onUpdateBook={updateBook}
            />
        </div>
    );
};

export default Library;
