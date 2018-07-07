import React, { Component } from 'react';
import FormErrors from '../components/FormErrors';
import EmptyItems from '../components/EmptyItems';
import {connect} from "react-redux";

class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      name: '',
      address: '',
      option: 'additional 15.99 pln',
      formErrors: {email: '', phone: '', name: '', address: ''},
      nameValid: false,
      emailValid: false,
      phoneValid: false,
      addressValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                    () => {this.validateField(name, value)})
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    let nameValid = this.state.nameValid;
    let addressValid = this.state.addressValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'phone':
        phoneValid = value.length === 9;
        fieldValidationErrors.phone = phoneValid ? '': ' is too short';
        break;
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break;
      case 'address':
        addressValid = value.length > 0;
        fieldValidationErrors.address = addressValid ? '': ' is required';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      phoneValid: phoneValid,
      nameValid: nameValid,
      addressValid: addressValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid &&
      this.state.phoneValid && this.state.nameValid &&
      this.state.addressValid });
  }

  componentDidMount() {
    const totalPrice = this.props.items.reduce((acc, item) => (acc + item.quantity * item.itemPrice), 0);
    const goodsCount = this.props.items.filter((item) => item.quantity > 0 ).length;

    if (totalPrice > 200 || goodsCount >= 3) {
     this.setState({option: 'FREE SHIPPING'});
    }
  }

  render() {
    const items  = this.props.items;
    return (
      <div>
        { items.length > 0 ?
          (<div className="shipping">
            <form className="shipping-form">
              <div className="input-container">
                <label htmlFor="userName">Name*</label>
                <input type="text" id="userName" name="name" value={this.state.name} onChange={this.handleUserInput} required/>
              </div>

              <div className="input-container">
                <label htmlFor="">Address*</label>
                <input type="text" id="userAddress" name="address" value={this.state.address} onChange={this.handleUserInput} required/>
              </div>

              <div className="input-container">
                <label htmlFor="userTel">Phone</label>
                <input type="tel" id="userTel" name="phone" placeholder="+48" value={this.state.phone} onChange={this.handleUserInput}/>
              </div>

              <div className="input-container">
                <label htmlFor="userEmail">Email</label>
                <input type="email" id="userEmail" name="email" value={this.state.email} onChange={this.handleUserInput}/>
              </div>

              <FormErrors formErrors={this.state.formErrors} />

              <div className="input-container">
                <label htmlFor="shippingOptions">Shipping Options</label>
                <select className="custom-select"
                        id="shippingOptions"
                        value={this.state.option}
                        name="option"
                        onChange={this.handleUserInput}
                        disabled={this.state.option === 'FREE SHIPPING'}
                >
                  { this.state.option === 'FREE SHIPPING' &&
                  <option value="FREE SHIPPING">ninjPost</option>
                  }
                  <option value="additional 15.99 pln" selected>D7L</option>
                  <option value="additional 7.99 pln">7post</option>
                </select>
                <p className="notation">{this.state.option}</p>
              </div>

              <div className="shipping-form__btn">
                <button type="button" disabled={!this.state.formValid}>PAY</button>
              </div>
            </form>
          </div>) :

          (
            <EmptyItems/>
          )
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.items
  })
)(Shipping);