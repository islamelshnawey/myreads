import { Link } from 'react-router-dom';
import Book from './Book';
import React, { useEffect, useState } from 'react';
import * as BooksAPI from "../api/BooksAPI";

const Search = (props) => {

    const { myBooks , updateBook } = props;

    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const updateQuery = (value) => {
        console.log(value);
        setQuery(value);
        searchAbook(value.trim(), 20);
    };

    /**
    * func to search for book 
    *  @param {*} query query
    */
    const searchAbook = async (query, maxResults) => {
        // console.log(myBooks);

        if (query.length < 1) {
            setBooks([]);
            return;
        }

        await BooksAPI.search(query, maxResults)
            .then((result) => {
                if (result.error) {
                    setBooks([]);
                    return;
                }
                if (result) {
                    console.log(result);
                    const filterdBooks = result.filter((book) =>
                        book.imageLinks !== undefined 
                        && 
                        myBooks.map((myBook)=>{
                           if (myBook.id == book.id) {
                            book.shelf = myBook.shelf;
                            }
                        })
                    );

                    setBooks(filterdBooks );

                }
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <div >
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        value={query}
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">

                    {books.length > 0 ? (
                        books.map((bookItem) => (
                            <Book
                                key={bookItem.id}
                                bookItem={bookItem}
                                onUpdateBook={updateBook} />
                        ))

                    ) : (
                        <h4>No results for, "{query}"</h4>
                    )}


                </ol>
            </div>
        </div>
    );
};

export default Search;