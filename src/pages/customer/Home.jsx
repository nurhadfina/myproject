import React from "react";
import Header from "../../components/customer/common/Header";
import PromoBanner from "../../components/customer/common/PromoBanner";
import Footer from "../../components/customer/common/Footer";
import ProductGrid from "../../components/customer/product/ProductGrid";

// Example data
const sampleProducts = [
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
  // more sample items...
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to our Herbal Tea Shop!
            </h1>
            <p className="text-gray-600 mb-6">
              Enjoy our selection of teas curated to help you relax and rejuvenate.
            </p>
            <a
              href="/shop"
              className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* "Just In!" Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Just In!</h2>
            <ProductGrid products={sampleProducts} />
          </div>
        </section>

        {/* Additional sections: "Love our tea?" icons, bestsellers slider, etc. */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
