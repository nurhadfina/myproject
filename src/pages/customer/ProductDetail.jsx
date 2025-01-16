import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/customer/common/Header";
import Footer from "../../components/customer/common/Footer";
import ProductCard from "../../components/customer/product/ProductCard"; // for "Shop Similar"
import PromoBanner from "../../components/customer/common/PromoBanner";

const sampleProduct = {
  id: 123,
  title: "Green Tea",
  description:
    "This tea is known for its bright, herbal flavor and is rich in antioxidants.",
  price: 31.0,
  imageUrl: "https://via.placeholder.com/400x300?text=Green+Tea",
};

const ProductDetail = () => {
  const { id } = useParams();
  // In a real app, you'd fetch the product by `id`

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt; <span>Green Tea</span>
        </nav>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <img
              src={sampleProduct.imageUrl}
              alt={sampleProduct.title}
              className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {sampleProduct.title}
            </h1>
            <p className="text-gray-500 mb-4">Strong & Energizing | ★★★★☆</p>
            <p className="text-gray-700 mb-6">{sampleProduct.description}</p>
            
            {/* Variant Selection (example) */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Select Type
              </label>
              <select className="border rounded px-2 py-1">
                <option>Loose Leaf</option>
                <option>Tea Bags</option>
              </select>
            </div>

            {/* Quantity / Price */}
            <div className="flex items-center space-x-4 mb-4">
              <label className="text-gray-700">Quantity</label>
              <input
                type="number"
                defaultValue={1}
                min="1"
                className="w-16 border rounded px-2 py-1"
              />
              <span className="text-2xl font-semibold text-green-600">
                ${sampleProduct.price}
              </span>
            </div>

            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Add to Bag
            </button>
          </div>
        </div>

        {/* Shop Similar */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Shop Similar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Hard-coded similar products */}
            <ProductCard 
              product={{
                id: 99,
                title: "Jasmine Green Tea",
                shortDescription: "A floral twist on green tea.",
                price: 25.0,
                imageUrl: "https://via.placeholder.com/300x200?text=Jasmine+Green+Tea",
              }} 
            />
            {/* ... more ProductCard components */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
