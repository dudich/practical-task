import React, { Component } from 'react';
import ItemsList from "../components/ItemsList";
import { Link } from 'react-router-dom'

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <ItemsList/>
        total
        <Link to="/shipping">BUY</Link>
      </div>
    );
  }
}

export default Cart;
