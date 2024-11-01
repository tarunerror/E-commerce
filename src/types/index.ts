export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  email: string;
  name: string;
}

export interface CheckoutForm {
  email: string;
  name: string;
  address: string;
  city: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}