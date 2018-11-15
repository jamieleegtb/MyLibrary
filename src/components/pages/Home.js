import React, {Component} from 'react';

import Shelf from '../Shelf';
import OpenSearch from '../OpenSearch';

export default class Home extends Component {
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
