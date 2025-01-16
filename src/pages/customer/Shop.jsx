import React, { useState } from "react";
import Header from "../../components/customer/common/Header";
import PromoBanner from "../../components/customer/common/PromoBanner";
import Footer from "../../components/customer/common/Footer";
import ProductGrid from "../../components/customer/product/ProductGrid";

const initialProducts = [
  {
    id: 1,
    title: "Peppermint Tea",
    shortDescription: "A refreshing blend of peppermint leaves.",
    price: 9.99,
    imageUrl: "https://www.yorktest.com/wp-content/uploads/2024/08/shutterstock_2474293205.jpg",
  },
  {
    id: 2,
    title: "Rooibos Tea",
    shortDescription: "Delicious red tea with a hint of sweetness.",
    price: 12.99,
    imageUrl: "https://images.ctfassets.net/e8bhhtr91vp3/3KkzPBFBJAMsFtfyJVOm7A/9b67f3721d6210dc030e24f0e2a502cd/Rooibos_morrocan_tea.webp?w=980&h=980&q=80",
  },
  // similar to sample data in Home.jsx
];

const Shop = () => {
  const [products, setProducts] = useState(initialProducts);
  
  // Example filter logic or sorting could be here
  // For brevity, we won't show the entire filter/sort handling

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Filter / Sort Controls */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between">
          {/* Filter bar / Sort dropdown, etc. */}
          <div>
            <label className="block text-gray-700 mb-1">Filter by type:</label>
            <select className="border rounded px-2 py-1">
              <option>All</option>
              <option>Green Tea</option>
              <option>Black Tea</option>
              <option>Herbal</option>
              {/* ... */}
            </select>
          </div>
          {/* Sort dropdown, etc. */}
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} />
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
