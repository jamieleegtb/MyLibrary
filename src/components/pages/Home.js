import React, {Component} from 'react';

import Shelf from '../Shelf'
import OpenSearch from '../OpenSearch'

export default class Home extends Component {
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <Shelf/>
        </div>

        <OpenSearch/>

      </div>
    )
  }
}
