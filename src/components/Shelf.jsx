import React, { useEffect, useState } from 'react';
import Book from './Book';

const Shelf = (props) => {

    const [query, setQuery] = useState("");

    useEffect(() => {

    }, []);

    const showingBooks =
        query === ""
            ? props.books
            : props.books.filter((c) =>
                c.name.toLowerCase().includes(query.toLowerCase())
            );

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {showingBooks.map((bookItem) => (
                        <Book
                            key={bookItem.id}
                            bookItem={bookItem} />
                    ))}

                </ol>
            </div>
        </div>
    );
};

export default Shelf;