import React from 'react';
import Shelf from './Shelf';
import * as Constants from "../utils/Constants";
import { Link } from 'react-router-dom';

const Library = (props) => {

    const { books, updateBook } = props;

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
            <div className="open-search">
                <Link to="/search" className="add-contact">
                    Search book
                </Link>
            </div>
        </div>
    );
};

export default Library;
