import React from "react";

const Book = props => {
  const url = props.book.imageLinks.smallThumbnail;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url(" + url + ")"
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={props.book.shelf}
              onChange={event => props.change(props.book, event.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors.join(", ")}</div>
      </div>
    </li>
  );
};

export default Book;
