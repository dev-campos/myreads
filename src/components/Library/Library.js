import React from "react";
import {Link} from "react-router-dom";
import Shelf from "./Shelf/Shelf";

const Library = props => {
  console.log(props.books);
  const shelves = [
    {name: "Currently Reading", code: "currentlyReading"},
    {name: "Want to Read", code: "wantToRead"},
    {name: "Read", code: "read"}
  ];

  let organizedShelves = null;

  if (props.books) {
    organizedShelves = shelves.map(shelf => {
      const filterBooks = props.books.filter(book => {
        return book.shelf === shelf.code;
      });
      return (
        <Shelf
          key={shelf.code}
          shelf={shelf}
          books={filterBooks}
          change={props.change}
        />
      );
    });
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {organizedShelves}
        <Link to="/search" className="open-search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default Library;
