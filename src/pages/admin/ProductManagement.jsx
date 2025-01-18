// src/pages/admin/ProductManagement.jsx
import React, { useState } from 'react';

export default function ProductManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Peppermint Tea', price: 9.99, image: 'https://www.yorktest.com/wp-content/uploads/2024/08/shutterstock_2474293205.jpg' },
    { id: 2, name: 'Rooibos Tea', price: 12.99, image: 'https://images.ctfassets.net/e8bhhtr91vp3/3KkzPBFBJAMsFtfyJVOm7A/9b67f3721d6210dc030e24f0e2a502cd/Rooibos_morrocan_tea.webp?w=980&h=980&q=80' },
    { id: 3, name: 'Ginger Tea', price: 10.99, image: 'https://assets.clevelandclinic.org/transform/dea27c4c-9ae5-4b01-8a8d-427473f5556c/gingerTeaBenefits-656808066_770x533_jpg' },
    { id: 4, name: 'Chamomile Tea', price: 9.99, image: 'https://bonnieplants.com/cdn/shop/products/052022_T118630_202010_Bonnie_Chamomile_ALT_01.jpg?v=1655326422&width=1200' },
    { id: 5, name: 'Detox Tea', price: 12.49, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdgUwJn1j4R2XT5Bd24kwVS9BYQAgHz5I-w&s' },
    { id: 6, name: 'Green Tea', price:31.99, image: 'https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_799464_17363588257468830.jpg' },
    { id: 7, name: 'Earl Grey Tea', price: 11.49, image: 'https://shottbeverages.com/wp-content/uploads/2020/07/Earl_Grey_Tea_Infusion-720x720-c-default.jpg' },
    { id: 8, name: 'Hibiscus Tea', price: 9.49, image: 'https://www.hotteamama.com/cdn/shop/articles/Take_a_look_at_my_Canva_design_3.png?v=1686737100' },
    { id: 9, name: 'Masala Chai', price: 10.99, image: 'https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64d26735eb45feac3f0c00d5_masala-947x1024.jpeg' },
    { id: 10, name: 'Oolong Tea', price: 13.99, image: 'https://sakiproducts.com/cdn/shop/articles/20221031112901-oolong-tea-recipe_98aeef4f-4c3e-4958-a358-0fbf28eddb72_1920x1080.jpg?v=1667216317' },
    { id: 11, name: 'White Tea', price: 14.99, image: 'https://twinings.co.uk/cdn/shop/articles/feature_what-is-white-tea_1939640d-a864-4ed6-89e5-d8a49a305e00_1080x.progressive.jpg?v=1648138091' },
    { id: 12, name: 'Lemongrass Tea', price: 8.49, image: 'https://goodlfe.com/cdn/shop/articles/20241001192423-lfe-20recipe-20cover-20images-20-7.png?v=1729011813&width=800' },
  ]);

  // For the new product, we’ll store name, price, and *file* (instead of just a string).
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductFile, setNewProductFile] = useState(null);

  // We'll keep a preview URL so we can show a small image preview.
  const [imagePreview, setImagePreview] = useState(null);

  // Handle file selection and create a preview URL
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return; // If user cancels the file dialog
    setNewProductFile(file);

    // Create a temporary URL to preview the image in the browser
    setImagePreview(URL.createObjectURL(file));
  };

  // Handle adding a product to the table
  const handleAddProduct = (e) => {
    e.preventDefault();

    // In a real app, you might send the file to the server using FormData or similar
    // For this demo, we'll just store the object in local state.
    const newId = Date.now();
    setProducts((prev) => [
      ...prev,
      {
        id: newId,
        name: newProductName,
        price: Number(newProductPrice),
        // For local state, we might store the local preview or keep the file if you want to upload later
        image: imagePreview || '',
      },
    ]);

    // Reset fields
    setNewProductName('');
    setNewProductPrice('');
    setNewProductFile(null);
    setImagePreview(null);
  };

  // Handle removing product
  const handleRemoveProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 mt-4">
        Product Management
      </h1>

      {/* Add Product Form */}
      <form
        onSubmit={handleAddProduct}
        className="mb-6 flex flex-col gap-4 w-full max-w-md bg-white p-6 shadow-md rounded-md"
      >
        {/* Product Name */}
        <div>
          <label htmlFor="productName" className="block font-semibold mb-1">
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600
                       focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        {/* Product Price */}
        <div>
          <label htmlFor="productPrice" className="block font-semibold mb-1">
            Price
          </label>
          <input
            id="productPrice"
            type="number"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        {/* Product Image (File Input) */}
        <div>
          <label htmlFor="productImage" className="block font-semibold mb-1">
            Product Image
          </label>
          <input
            id="productImage"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          {/* Preview if an image is selected */}
          {imagePreview && (
            <div className="mt-3">
              <p className="text-sm text-gray-500">Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-1 max-h-20 object-cover rounded-md border"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded 
                     hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <div className="w-full overflow-x-auto bg-white shadow-md rounded-md">
        <table className="table-auto w-full">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left text-blue-700">ID</th>
              <th className="px-4 py-2 text-left text-blue-700">Name</th>
              <th className="px-4 py-2 text-left text-blue-700">Price</th>
              <th className="px-4 py-2 text-left text-blue-700">Image</th>
              <th className="px-4 py-2 text-left text-blue-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b last:border-b-0 hover:bg-blue-50"
              >
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-10 w-10 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-500">No image</span>
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
