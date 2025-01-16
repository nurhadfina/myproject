import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md shadow-sm p-4 flex flex-col bg-cyan-50">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover mb-2 rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
      <p className="text-sm text-gray-600 my-1">{product.shortDescription}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-xl font-bold text-green-600">${product.price}</span>
        <a
          href={`/product/${product.id}`}
          className="inline-block bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
