import React, {Component} from 'react';

import Shelf from '../Shelf';
import OpenSearch from '../OpenSearch';

import {getAll} from '../../BooksAPI';

export default class Home extends Component {
  // We will get all the books
  /* An asynchronous function returns to the caller immediately before the completion of its processing and without blocking the calling thread. */
  async componentDidMount(){
    try {
      const books = await getAll();
      console.log(books);
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
          <Shelf title="Currently Reading"/>
          <Shelf title="Want To Read"/>
          <Shelf title="Read"/>
        </div>

        <OpenSearch/>

      </div>
    );
  }
}
