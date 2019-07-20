import React from 'react';
import Book from './Book'

class Shelf extends React.Component {

  render() {
    //  console.log(this.props.shelfboooks)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.shelfboooks.map(book => (

              <li key={book.id}>

                <Book
                  book={book}
                  moveBook={this.props.moveBook}
                  currentShelf={this.props.shelfName}
                />

              </li>

            ))}

          </ol>
        </div>
      </div>
    );
  }
}
export default Shelf;