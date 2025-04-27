import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../features/productSlice';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedProduct, productStatus, productError } = useSelector(
    (state) => state.products
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const handleBackClick = () => {
    navigate('/');
  };

  if (productStatus === 'loading') {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-lg">Đang tải thông tin sản phẩm...</p>
      </div>
    );
  }

  if (productError) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{productError}</p>
        </div>
        <button
          onClick={handleBackClick}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Quay lại
        </button>
      </div>
    );
  }

  if (!selectedProduct) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-center text-lg">Không tìm thấy sản phẩm</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleBackClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-100">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="max-h-96 object-contain"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-2">{selectedProduct.title}</h1>
          <p className="text-gray-500 mb-2">Danh mục: {selectedProduct.category}</p>
          
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{selectedProduct.rating?.rate || 0}</span>
            <span className="text-gray-500 ml-2">
              ({selectedProduct.rating?.count || 0} đánh giá)
            </span>
          </div>
          
          <div className="text-3xl font-bold text-green-600 mb-4">
            ${selectedProduct.price}
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Mô tả sản phẩm:</h2>
            <p className="text-gray-700">{selectedProduct.description}</p>
          </div>
          
          <div className="flex space-x-4">
            <button onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex-1">
              Thêm vào giỏ hàng
            </button>
            <button
              onClick={handleBackClick}
              className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg text-white"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;