import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class SearchBook extends React.Component {



    state = {
        searchBookName: '',
        searchedBooks: []
    }
    getSearchedBooks(searchBookName) {

        this.setState({
            searchBookName: searchBookName
        })

        if (searchBookName !== '') {
            BooksAPI.search(searchBookName).then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ searchedBooks: [] });
                } else {

                    this.setState({ searchedBooks: searchedBooks })

                }
            })
        } else {
            this.setState({ searchedBooks: [] });
        }
    }


    render() {
        //  console.log(this.props.books)
        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link  to="/"  className="close-search">
                      Close
                        </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchBookName}
                            onChange={(event) => this.getSearchedBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks.map(searchBook => {
                                console.log(searchBook)
                                let shelf = "none"
                                this.props.books.map(book => (
                                    book.id === searchBook.id ? shelf = book.shelf : ''
                                ))
                                return (
                                    <li key={searchBook.id}>
                                        <Book
                                            book={searchBook}
                                            moveBook={this.props.moveBook}
                                            currentShelf={shelf}
                                        />
                                    </li>
                                )
                            })
                        }

                    </ol>
                </div>
            </div>
        );
    }


}
export default SearchBook;