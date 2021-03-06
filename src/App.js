import React, { Component } from 'react';
import PostItem from './views/PostItem';
import PostItemSimple from './views/PostItemSimple';
import ShoppingList from './views/ShoppingList';
import Formk from './views/Formk';
import Header from './views/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import DemoCarousel from './views/DemoCarousel';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div id='body'>
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
          <Route exact={true} path='/Formk' render={() => (
            <div className="App">
              <Formk />
            </div>
          )}/>
          <Route exact={true} path='/Democarousel' render={() => (
            <div className="App">
              <DemoCarousel/>
            </div>
          )}/>        
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
