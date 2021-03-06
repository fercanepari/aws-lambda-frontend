import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import DemoCarousel from './DemoCarousel';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
        };
    } 

    render() {

        const list = this.state.location === "list" ? "active" : "";
        const postSimple = this.state.location === "postSimple" ? "active" : "";
        //const post = this.state.location === "post" ? "active" : "";
        const formk = this.state.location === "formk" ? "active" : "";
        const carousel = this.state.location === "carousel" ? "active" : "";
        //<Link className={post} to="PostItem" onClick={() => this.setState({location: 'post'})} >Post</Link> 
        
        if(carousel !== "active"){
            //Clear the carousel div on index.html page if the selected menu is anotherone
            ReactDOM.render(<div></div>, document.getElementById('carousel')); 
        }
        else{
            ReactDOM.render(<DemoCarousel/>, document.getElementById('carousel')); 
        }

        return (
            <div id='container' className="topnav">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" /> 
                    <h1 className="App-title">AWS Lambda function</h1>
                </header>
                <Link className={list} to="ShoppingList" onClick={() => this.setState({location: 'list'})} >List</Link>
                <Link className={postSimple} to="PostItemSimple" onClick={() => this.setState({location: 'postSimple'})} >Post Simple</Link>                   
                <Link className={formk} to="Formk" onClick={() => this.setState({location: 'formk'})} >Form</Link>   
                <Link className={carousel} to="Carousel" onClick={() => this.setState({location: 'carousel'})} >Carousel</Link>  
                
            </div>
            
        )
    }
}