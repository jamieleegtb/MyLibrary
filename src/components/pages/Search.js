import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../../BooksAPI';
import Book from '../Book';

import {getAll} from '../../BooksAPI';

export default class Search extends Component {
  /* We will get all the books */
  async componentDidMount(){
    try {
      const books = await getAll();
      this.props.addBooks(books);
    } catch(error){
      console.log(error);
    }
  }
  /* We'll also set the value for the change */
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books:[]
    }
  }
  /* e = a taget value for from the input */
  handleChange = async e => {
    try {
      /* e = a target value of the input button */
      const query = e.target.value;
      this.setState({query});
      /* We are going to check if the input is not empty */
      if(query.trim()){
        const results = await search(query);
        if(results.error){
          /* No books for results
             We will clear our books that will render if there is no match */
          this.setState({books:[]});
        } else {
          /* If there is matching books will populate or put array */
          this.setState({books:results});
        }
      } else {
        /* We delete the serached books list in the array when we clear the query. */
        this.setState({books:[]});
      }
    } catch(error) {
      console.log(error);
    }
  }
  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          {/* Going back to home page */}
          <Link className="close-search" to={"/"}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* Will show the searched books */}
            {/* Match the corresponding shelf with the searched book */}
            {this.state.books.length > 0 &&
              this.state.books.map(book => {
                const foundShelf = this.props.books.find(
                  searchBook => searchBook.id === book.id
                );
                if (foundShelf){
                  book.shelf = foundShelf.shelf;
                } else {
                  book.shelf = "none";
                }
              return (<Book key={book.id} {...book} moveBook={this.props.moveBook} />);
              }
            )}
            {this.state.books.length === 0 && <h1 style={{textAlign:"center"}}> No matched books or authors found </h1>}
          </ol>
        </div>
      </div>
    );
  }
}
