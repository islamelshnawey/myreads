import { Link } from 'react-router-dom';
import Book from './Book';
import React, { useEffect, useState } from 'react';
import * as BooksAPI from "../api/BooksAPI";

const Search = (props) => {

    const [books, setBooks] = useState([]);
    const { onSearchBook, onUpdateBook } = props;
    const [query, setQuery] = useState("");

    const updateQuery = (value) => {
        console.log(value);
        setQuery(value.trim());
        searchAbook(value.trim(), 20);
    };

    const clearQuery = () => {
        updateQuery("");
    };

    /**
    * func to search for book 
    *  @param {*} query query
    */
    const searchAbook = async (query, maxResults) => {
        // const res = await BooksAPI.search(query, maxResults);

        await BooksAPI.search(query, maxResults)
            .then((result) => {
                if (result.error) {

                } else {
                    if (result) {
                        console.log(result);
                        const filterdBooks = result.filter((book) =>
                            book.imageLinks !== undefined
                        );
                        setBooks(filterdBooks);
                    }
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
                    <a>Close</a>
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

                    {books ? (
                        books.map((bookItem) => (
                            <Book
                                key={bookItem.id}
                                bookItem={bookItem}
                                onUpdateBook={onUpdateBook} />
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