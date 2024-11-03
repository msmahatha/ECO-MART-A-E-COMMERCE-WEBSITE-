import React from 'react';
import { useStore } from '../store';
import { Trash2, CreditCard } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart } = useStore();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600">Start shopping to add items to your cart.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center space-x-4 py-4 border-b last:border-0"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-20 w-20 object-cover rounded"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-gray-600 text-sm">{item.product.description}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${item.product.price}</p>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-600 hover:text-red-500 mt-2"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition flex items-center justify-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Proceed to Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}