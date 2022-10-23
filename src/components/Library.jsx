import React, { useEffect, useState } from 'react';
import * as BooksAPI from "../api/BooksAPI";
import Shelf from './Shelf';

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
                books={books}
            />
            <Shelf
                shelfName='Want to Read'
                books={books}
            />
             <Shelf
                shelfName='Read'
                books={books}
            />
        </div>
    );
};

export default Library;
