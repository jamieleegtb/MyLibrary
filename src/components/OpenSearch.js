import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class OpenSearch extends Component {
  render(){
    return(
      <div className="open-search">
        {/* It will open search page */}
        <Link to={"/search"}>Add a Book</Link>
      </div>
    );
  }
}
