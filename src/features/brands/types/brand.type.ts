export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface BrandsMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
  prevPage?: number;
}
export interface BrandsResponse {
  results: number;
  metadata: BrandsMetadata;
  data: Brand[];
}
export interface SingleBrandsResponse {
  data: Brand;
}