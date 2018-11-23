import React, { Component } from 'react';
import '../App.css';

import ItemList from "../components/ItemList";
import axios from "axios";

class ShoppingList extends Component {

  // default State object
  state = {
    items: []
  };

  //https://jsonplaceholder.typicode.com/users
  //https://0ni5h012ze.execute-api.sa-east-1.amazonaws.com/Prod/v1/shoppingList
  //http://localhost:60158/v1/shoppingList
  
  componentDidMount() {
    axios
      .get("https://0ni5h012ze.execute-api.sa-east-1.amazonaws.com/Prod/v1/shoppingList")
      .then(response => {
        const newItems = response.data.map(i => {
          return {
           id: i.id,
           name: i.name,
           quantity: i.quantity
          };
          
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          items: newItems
        });
      
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  
  render() {
      return (
        <div className="App">
          <ItemList items={this.state.items} />
        </div>
      );
    }
}

export default ShoppingList;