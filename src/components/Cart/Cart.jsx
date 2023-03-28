import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  const calculateTotal = totalOf => {
    return cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue[totalOf],
      0
    );
  };
  const totalPrice = calculateTotal('price');
  const totalShipping = calculateTotal('shipping');
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>

      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
