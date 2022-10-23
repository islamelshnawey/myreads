import React from 'react';
import * as Constants from "../utils/Constants";

const Book = (props) => {

    const { bookItem, onUpdateBook } = props;

    /**
     * func to call the onUpdateBook func in parent compontent
     * after decide the selected shelf 
     * @param {*} index select index
     */
    const onChangeOption = (index) => {
        switch (index) {
            case 1:
                onUpdateBook(bookItem, Constants.BOOK_SHELFS.CURRENTLY_READ);
                break;
            case 2:
                onUpdateBook(bookItem, Constants.BOOK_SHELFS.WANT_TO_READ);
                break;
            case 3:
                onUpdateBook(bookItem, Constants.BOOK_SHELFS.READ);
                break;
            default:
                break;
        }
    }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${bookItem.imageLinks.smallThumbnail})`
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select
                        defaultValue={bookItem.shelf}
                        onChange={event => onChangeOption(event.target.options.selectedIndex)}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option
                            value="wantToRead">
                            Want to Read
                        </option>
                        <option
                            value="read">
                            Read
                        </option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{bookItem.title}</div>
            {
                bookItem.authors.map((author, index) => (
                    <div
                        key={index}
                        className="book-authors">{author}</div>
                ))
            }
        </div >
    );
};

export default Book;