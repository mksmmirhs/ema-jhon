import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let totalProduct = 0;
  for (const item of cart) {
    totalPrice = totalPrice + item.price * item.quantity;
    totalProduct = totalProduct + item.quantity;
    totalShipping = totalShipping + item.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>

      <p>Selected Items: {totalProduct}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
