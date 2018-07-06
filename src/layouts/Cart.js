import React, { Component } from 'react';
import ItemsList from "../components/ItemsList";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios';


class Cart extends Component {

  componentDidMount() {
    axios.get(`https://5b3f1866c3c3fb0014742880.mockapi.io/api/v1/items`)
      .then(res => {
        const items = res.data;
        this.props.getItems(items);
      });
  };

  render() {
    const count = this.props.items.reduce((acc, item) => (acc + item.quantity * item.itemPrice), 0);

    return (
      <div className="cart">
        <ItemsList/>

        <div className="total-price">
          <p>{count} $</p>

          <Link to="/shipping">
            <button className="link-btn" disabled={!count}>BUY</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.items
  }),
  dispatch => ({
    getItems: (items) => {
      dispatch({type: 'GET_ITEMS', payload: items})
    },
  })
)(Cart);
