import React, { useState } from 'react';
import { useStore } from '../store';
import { User, Package, Mail, UserCircle } from 'lucide-react';

export default function Profile() {
  const { user, setUser } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'customer' as 'customer' | 'seller'
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setUser({
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        type: formData.type,
        avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`
      });
    }
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex justify-center mb-8">
              <UserCircle className="h-16 w-16 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-center mb-8">Join EcoMart</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`mt-1 block w-full rounded-md shadow-sm px-3 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`mt-1 block w-full rounded-md shadow-sm px-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'customer' })}
                    className={`p-4 border-2 rounded-lg flex flex-col items-center justify-center space-y-2 transition ${
                      formData.type === 'customer'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <User className={`h-6 w-6 ${formData.type === 'customer' ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <span className={formData.type === 'customer' ? 'text-indigo-600' : 'text-gray-500'}>
                      Customer
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'seller' })}
                    className={`p-4 border-2 rounded-lg flex flex-col items-center justify-center space-y-2 transition ${
                      formData.type === 'seller'
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <Package className={`h-6 w-6 ${formData.type === 'seller' ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <span className={formData.type === 'seller' ? 'text-indigo-600' : 'text-gray-500'}>
                      Seller
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-500 transition flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Create Account</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center space-x-4 mb-8">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-indigo-600 capitalize">{user.type}</p>
            </div>
          </div>
          
          {user.type === 'seller' ? (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Seller Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold">Total Products</h4>
                  <p className="text-2xl font-bold mt-2">12</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold">Total Sales</h4>
                  <p className="text-2xl font-bold mt-2">$1,234</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold">Active Orders</h4>
                  <p className="text-2xl font-bold mt-2">3</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Order History</h3>
              <p className="text-gray-600">No orders yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}