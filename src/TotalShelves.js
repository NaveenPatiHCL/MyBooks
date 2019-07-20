import React from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf';


class TotalShelves extends React.Component {

  render() {
    // console.log(this.props.books)
    const currentlyReading = this.props.books.filter((book) => book.shelf === "currentlyReading");
    const read = this.props.books.filter(book => book.shelf === "read");
    const wantToRead = this.props.books.filter(book => book.shelf === "wantToRead");
    // console.log(currentlyReading)
    //console.log(read)
    //console.log(wantToRead)
    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf shelfboooks={currentlyReading} title={"Currently Reading"} moveBook={this.props.moveBook} shelfName={"currentlyReading"} />
            <Shelf shelfboooks={wantToRead} title={"Want To Read"} moveBook={this.props.moveBook} shelfName={"wantToRead"} />
            <Shelf shelfboooks={read} title={"Read"} moveBook={this.props.moveBook} shelfName={"read"} />

          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default TotalShelves;