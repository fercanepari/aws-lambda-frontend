import React from "react";
import ShoppingList from "./ShoppingList";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <div>
        {props.items.map(c => <ShoppingList key={c.id} name={c.name} quantity={c.quantity}  />)}
    </div>
  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;