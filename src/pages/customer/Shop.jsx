import React, { useState } from "react";
import Header from "../../components/customer/common/Header";
import PromoBanner from "../../components/customer/common/PromoBanner";
import Footer from "../../components/customer/common/Footer";
import ProductGrid from "../../components/customer/product/ProductGrid";

const initialProducts = [
  {
    id: 1,
    title: "Peppermint Tea",
    category: "Herbal",
    price: 9.99,
    shortDescription: "A refreshing blend of peppermint leaves.",
    imageUrl: "https://www.yorktest.com/wp-content/uploads/2024/08/shutterstock_2474293205.jpg",
  },
  {
    id: 2,
    title: "Rooibos Tea",
    category: "Herbal",
    price: 12.99,
    shortDescription: "Delicious red tea with a hint of sweetness.",
    imageUrl: "https://images.ctfassets.net/e8bhhtr91vp3/3KkzPBFBJAMsFtfyJVOm7A/9b67f3721d6210dc030e24f0e2a502cd/Rooibos_morrocan_tea.webp?w=980&h=980&q=80",
  },
  {
    id: 3,
    title: "Ginger Tea",
    category: "Spicy",
    price: 10.99,
    shortDescription: "A warming and soothing tea with a spicy kick of ginger.",
    imageUrl: "https://assets.clevelandclinic.org/transform/dea27c4c-9ae5-4b01-8a8d-427473f5556c/gingerTeaBenefits-656808066_770x533_jpg",
  },
  {
    id: 4,
    title: "Chamomile Tea",
    category: "Herbal",
    price: 9.99,
    shortDescription: "A calming herbal tea known for its relaxing qualities.",
    imageUrl: "https://bonnieplants.com/cdn/shop/products/052022_T118630_202010_Bonnie_Chamomile_ALT_01.jpg?v=1655326422&width=1200",
  },
  {
    id: 5,
    title: "Detox Tea",
    category: "Wellness",
    price: 12.49,
    shortDescription: "A refreshing blend of herbs designed to cleanse and revitalize.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdgUwJn1j4R2XT5Bd24kwVS9BYQAgHz5I-w&s",
  },
  {
    id: 6,
    title: "Green Tea",
    category: "Wellness",
    shortDescription:"This tea is known for its bright, herbal flavor and is rich in antioxidants.",
    price: 31.99,
    imageUrl: "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_799464_17363588257468830.jpg",
  },
  {
    id: 7,
    title: "Earl Grey Tea",
    category: "Flavoured",
    shortDescription: "A bold black tea infused with the citrusy aroma of bergamot.",
    price: 11.49,
    imageUrl: "https://shottbeverages.com/wp-content/uploads/2020/07/Earl_Grey_Tea_Infusion-720x720-c-default.jpg"
  },
  {
    id: 8,
    title: "Hibiscus Tea",
    category: "Herbal",
    shortDescription: "A tangy and refreshing tea with a vibrant crimson hue.",
    price: 9.49,
    imageUrl: "https://www.hotteamama.com/cdn/shop/articles/Take_a_look_at_my_Canva_design_3.png?v=1686737100"
  },
  {
    id: 9,
    title: "Masala Chai",
    category: "Spicy",
    shortDescription: "A spiced Indian tea blend with cinnamon, cardamom, and cloves.",
    price: 10.99,
    imageUrl: "https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64d26735eb45feac3f0c00d5_masala-947x1024.jpeg"
  },
  {
    id: 10,
    title: "Oolong Tea",
    category: "Flavoured",
    shortDescription: "A traditional tea with a perfect balance of floral and woody flavors.",
    price: 13.99,
    imageUrl: "https://sakiproducts.com/cdn/shop/articles/20221031112901-oolong-tea-recipe_98aeef4f-4c3e-4958-a358-0fbf28eddb72_1920x1080.jpg?v=1667216317"
  },
  {
    id: 11,
    title: "White Tea",
    category: "Light",
    shortDescription: "A delicate and lightly flavored tea made from young tea leaves.",
    price: 14.99,
    imageUrl: "https://twinings.co.uk/cdn/shop/articles/feature_what-is-white-tea_1939640d-a864-4ed6-89e5-d8a49a305e00_1080x.progressive.jpg?v=1648138091"
  },
  {
    id: 12,
    title: "Lemongrass Tea",
    category: "Spicy",
    shortDescription: "A citrusy and aromatic tea known for its refreshing and zesty taste.",
    price: 8.49,
    imageUrl: "https://goodlfe.com/cdn/shop/articles/20241001192423-lfe-20recipe-20cover-20images-20-7.png?v=1729011813&width=800"
  },
];

const Shop = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);

    if (selected === "All") {
      setProducts(initialProducts);
    } else {
      setProducts(initialProducts.filter(product => product.category === selected));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Filter / Sort Controls */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between">
          {/* Filter bar */}
          <div>
            <label className="block text-gray-700 mb-1">Filter by type:</label>
            <select
              className="border rounded px-2 py-1"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="All">All</option>
              <option value="Herbal">Herbal</option>
              <option value="Spicy">Spicy</option>
              <option value="Wellness">Wellness</option>
              <option value="Flavoured">Flavoured</option>
              <option value="Light">Light</option>
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
