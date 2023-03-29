import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    const productFromDb = getShoppingCart();
    const savedCart = [];
    for (const id in productFromDb) {
      const savedProduct = products.find(product => product.id === id);
      const quantity = productFromDb[id];
      if (savedProduct) {
        savedProduct.quantity = quantity;
        savedCart.push(savedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = product => {
    let newCart = [];
    const exist = cart.find(pd => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      product.quantity = product.quantity + 1;
      const newProduct = cart.filter(pd => pd.id !== product.id);
      newCart = [...newProduct, product];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
