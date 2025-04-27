import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const sampleProducts = [
  { id: 1, name: 'Áo thun', price: 150000 },
  { id: 2, name: 'Quần jean', price: 300000 },
  { id: 3, name: 'Giày thể thao', price: 500000 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Sản phẩm</h2>
      {sampleProducts.map(product => (
        <div key={product.id} style={{ marginBottom: 10 }}>
          <span>{product.name} - {product.price.toLocaleString()}đ</span>
          <button style={{ marginLeft: 10 }} onClick={() => dispatch(addItem(product))}>
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
