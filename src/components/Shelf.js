import React, {Component} from 'react';

import Book from './Book';

export default class Shelf extends Component {
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* We are going to check if books is defined and will map over the books
               Then we will spread out all the book details into its own component
               instead of calling "this.books.... etc."  */}
            {/* We are also going to need a key which will just be a book ID. */}
            {this.props.books && this.props.books.map(book => <Book key={book.id} {...book} moveBook={this.props.moveBook}/>)}
          </ol>
        </div>
      </div>
    );
  }
}
