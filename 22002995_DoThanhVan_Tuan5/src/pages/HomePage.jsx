import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDetailClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {status === 'loading' && <p>Đang tải dữ liệu...</p>}
      {error && <p className="text-red-500">Lỗi: {error}</p>}
      
      {items && items.length > 0 ? (
        items.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mx-auto mb-2"
            />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-green-600 font-semibold">${product.price}</p>
            <p className="line-clamp-2 text-sm text-gray-600">{product.description}</p>
            <button
              onClick={() => handleDetailClick(product.id)}
              className="mt-2 text-white bg-blue-500 px-4 py-1 rounded hover:bg-blue-600"
            >
              Chi tiết
            </button>
          </div>
        ))
      ) : (
        <p className="col-span-3 text-center">
          {status === 'loading' ? 'Đang tải...' : 'Không có sản phẩm nào.'}
        </p>
      )}
    </div>
  );
}

export default HomePage;