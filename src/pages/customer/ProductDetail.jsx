import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/customer/common/Header";
import Footer from "../../components/customer/common/Footer";
import ProductCard from "../../components/customer/product/ProductCard"; // for "Shop Similar"
import PromoBanner from "../../components/customer/common/PromoBanner";
import { addToCart } from '../../api/cartApi';

const products = [
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

const ProductDetail = () => {
  const { id } = useParams();
  const sampleProduct = products.find((product) => product.id === parseInt(id, 10));

  // Cart state with localStorage fallback
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [] // Get cart from localStorage
  );

  // Quantity state for the input field
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10) || 1); // Ensure the quantity is always a positive number
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(sampleProduct.id, 1);
      const existingProductIndex = cart.findIndex(item => item.id === sampleProduct.id);
  
      let updatedCart;
      if (existingProductIndex > -1) {
        // If product already exists, update quantity
        updatedCart = cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product to cart
        updatedCart = [...cart, { ...sampleProduct, quantity: 1 }];
      }
  
      setCart(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      alert(`${sampleProduct.title} has been added to your cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Succesfully added item to cart. Congratulation!");
    }
  };
  

  if (!sampleProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Product not found</p>
      </div>
    );
  }

  // Get similar products (exclude the current product)
  const similarProducts = products.filter(
    (product) => product.category === sampleProduct.category && product.id !== sampleProduct.id
  );

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-4">
          <a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt; <span>{sampleProduct.title}</span>
        </nav>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <img
              src={sampleProduct.imageUrl}
              alt={sampleProduct.title}
              className="w-full h-auto object-cover rounded"
            />
          </div>

          <div className="md:w-1/2 flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{sampleProduct.title}</h1>
            <p className="text-gray-600 mb-4">Strong & Energizing | ★★★★☆</p>
            <p className="text-gray-700 mb-6">{sampleProduct.shortDescription}</p>

            <div className="flex items-center space-x-4 mb-4">
              <label className="text-gray-700">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-16 border rounded px-2 py-1 text-gray-800"
              />
              <span className="text-2xl font-semibold text-green-700">
                ${sampleProduct.price.toFixed(2)}
              </span>
            </div>

            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      {/* Shop Similar Section */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Shop Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;