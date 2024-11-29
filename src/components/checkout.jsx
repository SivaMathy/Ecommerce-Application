import React, { Component } from 'react'
import './checkout.css'
export default class Checkout extends Component {
  render() {
    return (
      <div className='checkout-wrapper'>
        <h3>Totla Items In Your Cart : 10</h3>
        <h3>Yout Bill : 100.Rs</h3>
        <button className='btn'>Check Out</button>
      </div>
    )
  }
}
