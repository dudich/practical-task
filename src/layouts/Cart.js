import React, { Component } from 'react';
import ItemsList from "../components/ItemsList";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchItems from '../redux/actions/fetchItems';

class Cart extends Component {

  componentDidMount() {
    this.props.fetchItems();
  };

  render() {
    const count = this.props.items.reduce((acc, item) => (acc + item.quantity * item.itemPrice), 0);
    const items  = this.props.items;

    return (
      <div>
        {items.length > 0 &&
        <div className="cart">

          <ItemsList/>

          <div className="total-price">
            <p>{count} $</p>

            <Link to="/shipping">
              <button className="link-btn" disabled={!count}>BUY</button>
            </Link>
          </div>
        </div>}
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.items
  }),
  dispatch => ({
    fetchItems: () => {
      dispatch(fetchItems());
    },
  })
)(Cart);
