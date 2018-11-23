import React, { Component } from 'react';
import PostItem from './views/PostItem';
import PostItemSimple from './views/PostItemSimple';
import ShoppingList from './views/ShoppingList';
//import Home from './views/Home';
import Header from './views/Header';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header /> 
          <Route exact={true} path='/postItem' render={() => (
            <div className="App">
              <PostItem />
            </div>
          )}/>
          <Route exact={true} path='/postItemsimple' render={() => (
            <div className="App">
              <PostItemSimple />
            </div>
          )}/>
          <Route exact={true} path='/shoppingList' render={() => (
            <div className="App">
              <ShoppingList />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
