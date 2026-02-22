
export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface WishlistProduct {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number;
  sold: number;
  ratingsQuantity: number;
  ratingsAverage: number;
  imageCover: string;
  images: string[];
  category: Category;
  subcategory: Subcategory[];
  brand: Brand;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface WishlistResponse {
  status: 'success' | 'error';
  count: number;
  data: WishlistProduct[];
}