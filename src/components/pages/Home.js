import React, {Component} from 'react';

import Shelf from '../Shelf';
import OpenSearch from '../OpenSearch';

import {getAll} from '../../BooksAPI';

export default class Home extends Component {
  /* We will get all the books */
  /* An asynchronous function returns to the caller immediately before the completion of its processing and without blocking the calling thread. */
  async componentDidMount(){
    try {
      const books = await getAll();
      this.props.addBooks(books);

    } catch(error){
      console.log(error);
    }
  }

  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {/* We are going to enter this prop into its corresponding shelf
             Shelves receives the books that we want */}
          <Shelf title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook}/>
          <Shelf title="Want To Read" books={this.props.wantToRead} moveBook={this.props.moveBook}/>
          <Shelf title="Read" books={this.props.read} moveBook={this.props.moveBook}/>
        </div>

        <OpenSearch/>

      </div>
    );
  }
}
