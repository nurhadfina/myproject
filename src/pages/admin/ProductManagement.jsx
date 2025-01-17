// src/pages/admin/ProductManagement.jsx
import React, { useState } from 'react';

export default function ProductManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Example Product 1', price: 100, image: '' },
    { id: 2, name: 'Example Product 2', price: 200, image: '' },
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
