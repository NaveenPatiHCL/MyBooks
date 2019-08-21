import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import TotalShelves from "./TotalShelves"
import SearchBook from './SearchBook';
class BooksApp extends React.Component {
  state = {
    books: []

  }

  getBooksinShelves = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    }
    )
  }

  componentDidMount() {
    console.log("component mounted");
    this.getBooksinShelves();

  }

  componentDidUpdate(){
    this.getBooksinShelves();
  }
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.getBooksinShelves();
  }
  render() {
    // console.log(this.state.books)
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <TotalShelves
            books={this.state.books}
            moveBook={this.moveBook}
          />

        )} />

        <Route exact path="/search" render={() => (
          <SearchBook
            moveBook={this.moveBook}
            books={this.state.books}
          />
        )} />

      </div>
    )
  }
}

export default BooksApp
