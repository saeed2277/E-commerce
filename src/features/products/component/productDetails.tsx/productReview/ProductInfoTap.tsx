'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../../type/product.type";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ProductInfoTap({ product }: { product: Product }) {
  return (
    <div className="w-full py-8 px-6">
      {/* About this Product */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">About this Product</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          {product.description}
        </p>
      </div>

      {/* Product Information and Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Information */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-md font-semibold text-gray-900 mb-2">Product Information</h3>
          <div className="space-y-1">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-gray-600 text-sm font-medium">Category</span>
              <span className="text-gray-900 font-semibold text-sm">{product.category.name}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-gray-600 text-sm font-medium">Subcategory</span>
              <span className="text-gray-900 font-semibold text-sm">{product.subcategory.map((subcat) => subcat.name).join(', ')}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-gray-600 text-sm font-medium">Brand</span>
              <span className="text-gray-900 font-semibold text-sm">{product.brand.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm font-medium">Items Sold</span>
              <span className="text-gray-900 font-semibold text-sm">{product.sold}</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-md font-semibold text-gray-900 mb-2">Key Features</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-1">
              <span className="text-green-500 text-lg font-bold mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Premium Quality Product</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-green-500 text-lg font-bold mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">100% Authentic Guarantee</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-green-500 text-lg font-bold mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Fast & Secure Packaging</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-green-500 text-lg font-bold mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Quality Tested</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
