// CartItem.js
import React from "react";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center border-b py-4">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-16 h-16 object-cover mr-4 rounded"
      />
      <div className="flex flex-col flex-grow">
        <span className="font-semibold text-gray-700">{item.title}</span>
        <span className="text-green-800">${item.price}</span>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="bg-gray-200 px-2 rounded-l text-gray-700 hover:bg-gray-300"
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 px-2 rounded-r text-gray-700 hover:bg-gray-300"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
