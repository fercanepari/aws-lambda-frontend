import React, { Component } from 'react';
import axios from "axios";

export default class PostItemSimple extends Component {
    state = {
      name: [],
      quantity: []
    }  
    
    handleChange = event =>{
      this.setState({name: event.target.value});            
    };

    handleQtyChange = event =>{
      this.setState({quantity: event.target.value});              
    };

    handleSubmit = event =>{
      event.preventDefault();

    //Optional values  
    //http://localhost:60158/v1/shoppingList
    //https://0ni5h012ze.execute-api.sa-east-1.amazonaws.com/Prod/v1/shoppingList
    axios.post('https://0ni5h012ze.execute-api.sa-east-1.amazonaws.com/Prod/v1/shoppingList',
    {
      'Name' : this.state.name,
      'Quantity': this.state.quantity
    })
      .then((res) => {
        console.log(res);
        //alert(res.data);
      })
      .catch((err) => {
        alert(err);
      })
    }

    render () {
    return (
        <form onSubmit={this.handleSubmit}>
            <br></br>
            <label>
              Name:
              <input type="text" name="name" onChange={this.handleChange}></input>
            </label><br></br>
            <br></br>
            <label>
              Quantity:
              <input type="number" name="quantity" onChange={this.handleQtyChange}></input>
            </label><br></br>
            <br></br>
            <button type="submit">Send</button>
        </form>   
      );
    }
 }