export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
  quantity: number; // Ensure quantity is always defined
}
