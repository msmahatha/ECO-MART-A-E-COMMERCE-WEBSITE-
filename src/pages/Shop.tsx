import React from 'react';
import { useStore } from '../store';
import { Package } from 'lucide-react';

const CATEGORIES = ['Electronics', 'Fashion', 'Home', 'Books'];
const PRODUCTS = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    seller: 'Tech Store',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Leather Backpack',
    price: 79.99,
    description: 'Stylish and durable leather backpack',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    seller: 'Fashion Hub',
    category: 'Fashion'
  },
  {
    id: '3',
    name: 'Smart Watch',
    price: 199.99,
    description: 'Feature-rich smartwatch with health tracking',
    image: 'https://images.unsplash.com/photo-1523206217435-c833583c87b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    seller: 'Tech Store',
    category: 'Electronics'
  }
];

export default function Shop() {
  const { addToCart } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Categories Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <ul className="space-y-2">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <button className="w-full text-left px-2 py-1 rounded hover:bg-indigo-50 hover:text-indigo-600">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                  <p className="text-sm text-gray-500 mt-1">Seller: {product.seller}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-lg">${product.price}</span>
                    <button
                      onClick={() => addToCart({ product, quantity: 1 })}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-500 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}