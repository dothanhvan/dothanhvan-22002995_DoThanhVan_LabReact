import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      {product.image && (
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      )}
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm text-gray-500">{product.description?.slice(0, 50)}...</p>
      <Link to={`/product/${product.id}`} className="mt-2 inline-block text-blue-600">
        Chi tiết
      </Link>
    </div>
  );
};

export default ProductCard;