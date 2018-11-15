import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home';
import Search from './components/pages/Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
      {/* Renders the first child <Route> */}
      <Switch>
        {/* Route for Home */}
        <Route exact path={"/"} component={Home}/>
        {/* Route for Search */}
        <Route exact path={"/search"} component={Search}/>
      </Switch>
      </div>
    );
  }
}

export default BooksApp;
