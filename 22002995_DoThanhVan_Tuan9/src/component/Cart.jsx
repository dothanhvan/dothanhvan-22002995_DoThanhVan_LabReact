import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', textAlign: 'center' }}>
      <h2>🛒 Giỏ hàng</h2>
      {items.length === 0 ? <p>Không có sản phẩm nào</p> : (
        <>
          <table style={{ width: '100%', marginBottom: 20 }}>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()}đ</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                      }
                      style={{ width: 60 }}
                    />
                  </td>
                  <td>{(item.price * item.quantity).toLocaleString()}đ</td>
                  <td>
                    <button onClick={() => dispatch(removeItem(item.id))}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Tổng số lượng: {totalQuantity}</h3>
          <h3>Tổng tiền: {totalPrice.toLocaleString()}đ</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
