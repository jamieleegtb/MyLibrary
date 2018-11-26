/* React Context API
   Context provides a way to pass data through the component tree without having to pass props down manually at every level. */
import React, {Component} from 'react';
/* This will just handle the state to a higher level
   Pass our state down as props */
export const MyContext = React.createContext();

export default class index extends Component {
  /* Render will need to make instructor
     We want our provider to handle is books and shelf categories */
  constructor(){
    super();
    this.state = {
      books:[],
      currentlyReading:[],
      wantToRead:[],
      read:[],
      /* We cannot mutate the state. That's why we'll need a function to update this.state */
      addBooks: books => {
        /* Books will be from getAll
           We'll just pass it to this function which will be a prop */
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
        const wantToRead = books.filter(book => book.shelf === "wantToRead");
        const read = books.filter(book => book.shelf === "read");
        /* We'll set the all books we are geeting  */
        this.setState({books, currentlyReading, read, wantToRead});
      },
      /* When the user changes the books shelf category the book is going to move to the shelf selected. */
      moveBook: (book, newShelf, allShelves) => {
        console.log(newShelf);
        /* We are going to map over all the books */
        const newBooks = this.state.books.map(allBooks => {
          /* The results from the update function return to three shelves and with all its corresponding book IDs
             Next we want to find the new shelf that we moved the book to.
             We select the shelf and we find the ID corresponding with the looped over books */
          const foundID = allShelves[newShelf].find(
            bookID => bookID === allBooks.id
          );
          /* If we find the ID corresponding with the looped over books then we will set the shelf to the new self */
          if(foundID){
            allBooks.shelf = newShelf;
          }
          /* Then we return to the modified object
             Which will store it in the newBooks and we pass newBooks to addBooks
             Like what we did with getAll books from the server */
          return allBooks;
        });
        /*  For the new books and for all the books
            We'll just come back up to the addBooks and call allBooks
            allBooks will filter out each shelf */
        this.state.addBooks(newBooks);
      }
    }
  }

  render(){
    return(
      <MyContext.Provider value={{...this.state}}>
        {/*We'll pass the value to all the children*/}
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
