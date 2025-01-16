import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductGrid;
