import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, UserCircle, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to EcoMart
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
              Your one-stop destination for all your shopping needs. Join as a buyer or seller today!
            </p>
            <div className="mt-10 flex justify-center space-x-6">
              <Link
                to="/shop"
                className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition"
              >
                Start Shopping
              </Link>
              <Link
                to="/profile"
                className="bg-indigo-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-400 transition"
              >
                Become a Seller
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <ShoppingBag className="h-12 w-12 text-indigo-600 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Wide Selection</h3>
            <p className="mt-2 text-gray-600">
              Browse through thousands of products from verified sellers
            </p>
          </div>
          <div className="text-center">
            <UserCircle className="h-12 w-12 text-indigo-600 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Seller Dashboard</h3>
            <p className="mt-2 text-gray-600">
              Manage your products and track sales with our intuitive dashboard
            </p>
          </div>
          <div className="text-center">
            <CreditCard className="h-12 w-12 text-indigo-600 mx-auto" />
            <h3 className="mt-6 text-xl font-semibold">Secure Payments</h3>
            <p className="mt-2 text-gray-600">
              Shop with confidence using our secure payment gateway
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${i === 1 ? '1523275335684-37898b6baf30' : i === 2 ? '1505740420928-5e560c06d30e' : i === 3 ? '1523206217435-c833583c87b9' : '1542291026-7eec264c27ff'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Premium Product {i}</h3>
                <p className="text-gray-600 text-sm mt-1">High-quality item</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-lg">${(19.99 * i).toFixed(2)}</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-500 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}