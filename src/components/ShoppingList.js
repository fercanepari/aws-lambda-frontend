import React from "react";
import "./ShoppingList.css";
import PropTypes from "prop-types";

function ShoppingList(props) {
    return (
        <div className="shoppingList">
          <span>{props.name}:  {props.quantity} </span>
        </div>
      );
}

ShoppingList.propTypes = {
    name: PropTypes.string.isRequired
  };
export default ShoppingList;