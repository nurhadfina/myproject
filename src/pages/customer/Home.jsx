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
