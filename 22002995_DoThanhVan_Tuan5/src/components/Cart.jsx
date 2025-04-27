import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <h2>Giỏ hàng của bạn</h2>
        <p>Giỏ hàng trống</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Giỏ hàng của bạn</h2>
      <div className="cart-header">
        <div className="header-block">
          <span>Sản phẩm</span>
        </div>
        <div className="header-block">
          <span>Mô tả</span>
        </div>
        <div className="header-block">
          <span>Số lượng</span>
        </div>
        <div className="header-block">
          <span>Giá</span>
        </div>
        <div className="header-block">
          <span>Xóa</span>
        </div>
      </div>
      
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      
      <div className="cart-total">
        <span>Tổng số lượng: {totalQuantity}</span>
        <span>Tổng tiền: ${totalAmount.toFixed(2)}</span>
      </div>
      
      <button className="clear-button" onClick={handleClearCart}>
        Xóa giỏ hàng
      </button>
    </div>
  );
};

export default Cart;