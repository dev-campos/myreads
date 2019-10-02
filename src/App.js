import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Library from "./components/Library/Library";
import Search from "./components/Search/Search";

const BooksApp = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await BooksAPI.getAll();
      setBooks(result);
    };
    fetchData();
  }, []);

  const handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf);
    const newBooks = books.map(oldBook => {
      if (oldBook.id === book.id) {
        book.shelf = shelf;
        return book;
      } else {
        return oldBook;
      }
    });
    setBooks(newBooks);
  };

  return (
    <div className="app">
      <Route path="/search">
        <Search />
      </Route>
      <Route exact path="/">
        <Library books={books} change={handleShelfChange} />
      </Route>
    </div>
  );
};

export default BooksApp;
