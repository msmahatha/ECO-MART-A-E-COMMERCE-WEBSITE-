export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  seller: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'customer' | 'seller';
  avatar?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}