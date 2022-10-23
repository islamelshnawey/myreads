import React, { useEffect, useState } from 'react';
import Book from './Book';

const Shelf = (props) => {

    const { shelfName, shelfType, books, onUpdateBook } = props;

    const showingBooks =
        books.filter((book) =>
            book.shelf == shelfType
        );

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {showingBooks.map((bookItem) => (
                        <Book
                            key={bookItem.id}
                            bookItem={bookItem}
                            onUpdateBook={onUpdateBook} />
                    ))}

                </ol>
            </div>
        </div>
    );
};

export default Shelf;