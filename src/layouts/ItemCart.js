import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EmptyItems from '../components/EmptyItems';

class Cart extends Component {

  componentDidMount() {
    console.log(this.props)
  };

  render() {
    const itemId = this.props.match.params.id;
    const item = this.props.items.find(item => item.id === itemId);

    return (
      <div className="itemCart">
        {this.props.items.length > 0 ?
          (<div className="item-cart">
          <div className="item-cart__container">

            <div className="item-cart__info">
              <img src={item.img} alt="img" className="item-cart__img"/>
              <div className="item-cart__text">
                <h4  className="item-cart__title">{item.title}</h4>
                <p className="item-cart__subtitle">{item.subtitle}</p>
                <div className="item-price">
                  Price {item.itemPrice} $
                </div>
                <Link to="/cart">back to cart</Link>
              </div>
            </div>
          </div>
        </div>) :
          (<EmptyItems/>)
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.items
  })
)(Cart);
