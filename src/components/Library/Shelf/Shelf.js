import React from "react";
import Book from "../../Book/Book";

const Shelf = props => {
  const books = props.books.map(book => {
    return <Book key={book.id} book={book} change={props.change} />;
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{books}</ol>
      </div>
    </div>
  );
};

export default Shelf;
