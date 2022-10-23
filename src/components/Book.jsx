import React from 'react';

const Book = (props) => {
    console.log(props.bookItem.title);
    return (
        <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${props.bookItem.imageLinks.smallThumbnail})`}}
                ></div>
                <div className="book-shelf-changer">
                    <select>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.bookItem.title}</div>
            <div className="book-authors">Harper Lee</div>
        </div>
    );
};

export default Book;