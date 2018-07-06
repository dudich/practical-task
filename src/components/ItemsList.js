import React, { Component } from 'react';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'The Lorem ipsum dolor sit',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, minima!',
          img: 'http://placekitten.com/100/100',
          quantity: 0,
          itemPrice: 75
        },
        {
          title: 'The Lorem ipsum dolor sit',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, minima!',
          img: 'http://placekitten.com/100/100',
          quantity: 0,
          itemPrice: 75
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <ul>
            {this.state.items.map((item) => {
              return (
                <li className="item-cart">
                  <div className="item-cart__container">
                    <div className="item-cart__info">
                      <img src={item.img} alt="img" className="item-cart__img"/>
                      <div className="item-cart__text">
                        <h4  className="item-cart__title">{item.title}</h4>
                        <p className="item-cart__subtitle">{item.subtitle}</p>
                      </div>
                    </div>

                    <div className="item-cart__price">
                      <div className="item-cart__controls-delete">
                        <i className="far fa-trash-alt"></i>
                      </div>

                      <div className="item-cart__controls">
                        <div>
                          <button className="item-cart__controls-btn item-cart__controls-decrease">
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className="item-cart__quantity">{item.quantity}</span>
                          <button className="item-cart__controls-btn item-cart__controls-increase">
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
      </div>
    );
  }
}

export default ItemsList;
