import React, { Component } from 'react';

class Shipping extends Component {
  render() {
    return (
      <div className="shipping">
        <div className="shipping-form">
          <div className="input-container">
            <label htmlFor="userName">Name*</label>
            <input type="text" id="userName" required pattern="[0-9]{3}"/>
          </div>

          <div className="input-container">
            <label htmlFor="">Address*</label>
            <input type="text" id="userAddress" required/>
          </div>

          <div className="input-container">
            <label htmlFor="userTel">Phone</label>
            <input type="tel" id="userTel" placeholder="+48" pattern="[0-9]{9}"/>
          </div>

          <div className="input-container">
            <label htmlFor="userEmail">Email</label>
            <input type="email" id="userEmail"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Shipping;