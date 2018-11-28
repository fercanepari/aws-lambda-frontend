import React, { Component } from 'react';
import axios from "axios";

export default class PostItem extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
       }
      
       state = {
        name: '',
        quantity: 0,
      };

       handleSubmit(event){ 
        event.preventDefault();
        
        var postData = {
            'Name': 'test88',
            'Quantity': '3'
          };
          
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json'
            }
          };
          
          //http://localhost:60158/v1/shoppingList
          axios.post('http://localhost:60158/v1/shoppingList/', postData, axiosConfig)
          .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            alert(res);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
            alert(err);
          })

        //alert(this.props.name);
       };
      
       render () {
        return (
            <div id="postItem">
            <form onSubmit={this.handleSubmit}>
                <input ref={(ref) => {this.name = ref}} placeholder="Name" type="text" name="name"/><br />
                <input ref={(ref) => {this.quantity = ref}} placeholder="Quantity" type="text" name="quantity"/><br />
                <button type="Submit">Send</button>
            </form>
            </div>   
          );
       }
 }