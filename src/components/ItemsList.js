import React, {Component} from 'react';
import {connect} from "react-redux";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxValue: 100
    }
  }

  deleteItem (index) {
    this.props.onDeleteItem(index);
  };

  increaseQuantity = (index) => {
    this.props.onIncreaseQuantity(index);
  };

  decreaseQuantity = (index) => {
    this.props.onDecreaseQuantity(index);
  };

  handleItemClick = (id) => {
    const {history} = this.props;
    history.push(`${history.location.pathname}/${id}`)
  };

  createSelectItems() {
    let items = [];
    for (let i = 0; i <= this.state.maxValue; i++) {
      items.push(<option key={i} value={i}>{i}</option>);
    }
    return items;
  }

  dropdownSelected(index, event) {
    this.props.onDropdownSelected(event.nativeEvent.target.selectedIndex, index)
  }

  render() {
    return (
        <ul>
          {this.props.items.map((item, index) => {
            return (
              <li className="item-cart" key={index}>
                <div className="item-cart__container">

                  <div className="item-cart__info" onClick={this.handleItemClick.bind(this, item.id)}>
                    <img src={item.img} alt="img" className="item-cart__img"/>
                    <div className="item-cart__text">
                      <h4  className="item-cart__title">{item.title}</h4>
                      <p className="item-cart__subtitle">{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="item-cart__price">
                    <div className="item-cart__controls-delete">
                      <span onClick={this.deleteItem.bind(this, index)}>
                        <i className="far fa-trash-alt"></i>
                      </span>
                    </div>

                    <div className="item-cart__controls">
                      <div>
                        <button className="item-cart__controls-btn item-cart__controls-decrease"
                                onClick={this.decreaseQuantity.bind(this, index)}
                                disabled={item.quantity === 0}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <select className="item-cart__quantity" onChange={this.dropdownSelected.bind(this, index)} value={item.quantity}>
                          {this.createSelectItems()}
                        </select>

                        <button className="item-cart__controls-btn item-cart__controls-increase"
                                onClick={this.increaseQuantity.bind(this, index)}
                                disabled={item.quantity >= 100}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className="item-price">
                        {item.itemPrice} $
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          }, this)}
        </ul>
    );
  }
}

export default connect(
  state => ({
    items: state.items
  }),
  dispatch => ({
    onDeleteItem: (index) => {
      dispatch({type: 'DELETE_ITEM', payload: index})
    },

    onIncreaseQuantity: (index) => {
      dispatch({type: 'INCREASE_QUANTITY', payload: index})
    },

    onDecreaseQuantity: (index) => {
      dispatch({type: 'DECREASE_QUANTITY', payload: index})
    },
    onDropdownSelected: (value, index) => {
      dispatch({type: 'CHANGE_QUANTITY', payload: {index, value}})
    }
  })
)(ItemsList);
