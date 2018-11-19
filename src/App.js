import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home';
import Search from './components/pages/Search';

import Provider,{MyContext} from './components/Provider';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        {/* Wrapping switch with provider so we can pass down the props */}
        <Provider>
          {/* Renders the first child <Route> */}
            <Switch>
              {/* Route for Home */}
              <Route exact path={"/"} render={() => (
                <MyContext.Consumer>
                  {context => <Home {...context}/>}
                </MyContext.Consumer>
              )} />
              {/* Route for Search */}
              <Route exact path={"/search"} component={Search}/>
            </Switch>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
