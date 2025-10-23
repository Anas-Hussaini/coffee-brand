export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'beans' | 'ground' | 'instant' | 'pods';
  roast: 'light' | 'medium' | 'dark';
  origin: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

