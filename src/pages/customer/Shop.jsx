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
{
  id :3,
  title: "Ginger Tea",
  shortDescription: "A warming and soothing tea with a spicy kick of ginger.",
  price: 10.99,
  imageURL: "https://assets.clevelandclinic.org/transform/dea27c4c-9ae5-4b01-8a8d-427473f5556c/gingerTeaBenefits-656808066_770x533_jpg",
},
{
  id: 4,
  title: "Chamomile Tea",
  shortDescription: "A calming herbal tea known for its relaxing and sleep-promoting qualities.",
  price: 9.99,
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ7J3Z-TJtXXeCCEiBknSEGQIhlXVHPbIAA&s"
},
{
  id: 5,
  title: "Detox Tea",
  shortDescription: "A refreshing blend of herbs designed to cleanse and revitalize your body.",
  price: 12.49,
  imageURL: "https://images.app.goo.gl/T1t4KNsL8Rc5mEz78"
},
{
  id: 6,
  title: "Green Tea",
  shortDescription:"This tea is known for its bright, herbal flavor and is rich in antioxidants.",
  price: 31.99,
  imageUrl: "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_799464_17363588257468830.jpg",
},
{
  id: 7,
  title: "Earl Grey Tea",
  shortDescription: "A bold black tea infused with the citrusy aroma of bergamot.",
  price: 11.49,
  imageURL: "https://images.app.goo.gl/X2y7LWw5vRJD7Ht99"
},
{
  id: 8,
  title: "Hibiscus Tea",
  shortDescription: "A tangy and refreshing tea with a vibrant crimson hue.",
  price: 9.49,
  imageURL: "https://images.app.goo.gl/kM8t3LrVNyPzD1vE7"
},
{
  id: 9,
  title: "Masala Chai",
  shortDescription: "A spiced Indian tea blend with cinnamon, cardamom, and cloves.",
  price: 10.99,
  imageURL: "https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64d26735eb45feac3f0c00d5_masala-947x1024.jpeg"
},
{
  id: 10,
  title: "Oolong Tea",
  shortDescription: "A traditional tea with a perfect balance of floral and woody flavors.",
  price: 13.99,
  imageURL: "https://images.app.goo.gl/T4F3yLKvR8pH9Jr89"
},
{
  id: 11,
  title: "White Tea",
  shortDescription: "A delicate and lightly flavored tea made from young tea leaves.",
  price: 14.99,
  imageURL: "https://images.app.goo.gl/W3N4TLrVJ2H9YFj78"
},
{
  id: 12,
  title: "Lemongrass Tea",
  shortDescription: "A citrusy and aromatic tea known for its refreshing and zesty taste.",
  price: 8.49,
  imageURL: "https://images.app.goo.gl/L1R3jXvK9JpDMFh27"
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
