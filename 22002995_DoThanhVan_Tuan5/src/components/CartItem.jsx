import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearItemFromCart } from '../features/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleClearItem = () => {
    dispatch(clearItemFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.title} style={{ width: '70px', height: '70px' }} />
      </div>
      <div className="item-details">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="item-quantity">
        <button onClick={handleRemoveItem}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleAddItem}>+</button>
      </div>
      <div className="item-total">
        <p>${item.totalPrice.toFixed(2)}</p>
      </div>
      <button className="remove-button" onClick={handleClearItem}>X</button>
    </div>
  );
};

export default CartItem;