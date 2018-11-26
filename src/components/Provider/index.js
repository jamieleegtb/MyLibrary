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
