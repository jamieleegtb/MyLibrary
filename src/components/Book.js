import React, {Component} from 'react';
import {update} from '../BooksAPI';

export default class Book extends Component {
  /* 'e' is our target element */
  handleChange = async e => {
    try{
      const shelf = e.target.value;
      const book = this.props;
      /* "this.props" is the whole book object which is spread it out
         with curly brackets we put it back into a whole object
         then we are going to add it to a new shelf */
      /* With our results we need to update the book on the client side */
      const result = await update(book, shelf);
      this.props.moveBook(book, shelf, result);
    } catch (error) {
      console.log(error);
    }
  }
  render(){
    return(
      <li>
        <div className="book">
          <div className="book-top">
            {/* Background image is going to be a string template */}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              {/* We are going to update each book detail with its own corresponding detail */}
              {/* "value={this.props.shelf}" = Book's own shelf is highlighted */}
              <select onChange={this.handleChange} value={this.props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          {/* Author is an array */}
          <div className="book-authors">{this.props.authors[0]}</div>
        </div>
      </li>
    );
  }
}
