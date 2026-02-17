'use client'
import Ratings from "@/src/components/ui/Ratings";
import { Product } from "../../../type/product.type";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewsTap({ product }: { product: Product }) {
  return (
    <div className="w-full bg-white p-8 ">
      <div className="grid grid-cols-1 md:grid-cols-[20%_80%] ">
        {/* Rating Summary */}
        <div className="flex flex-col items-center justify-center mb-5">
          <div className="text-6xl font-bold text-gray-900">{product.ratingsAverage}</div>
          <div className="flex gap-1 mt-2">
<Ratings rating={product.ratingsAverage} />
          </div>
          <p className="text-gray-500 text-sm mt-2">Based on {product.ratingsQuantity} reviews</p>
        </div>

        {/* Rating Breakdown */}
        <div className="col-span-1 space-y-4">
          {/* 5 Stars */}
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium w-12 text-gray-700">5 star</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600 w-8 text-right">25%</span>
          </div>

          {/* 4 Stars */}
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium w-12 text-gray-700">4 star</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-3/5 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600 w-8 text-right">60%</span>
          </div>

          {/* 3 Stars */}
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium w-12 text-gray-700">3 star</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600 w-8 text-right">25%</span>
          </div>

          {/* 2 Stars */}
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium w-12 text-gray-700">2 star</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/20 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600 w-8 text-right">5%</span>
          </div>

          {/* 1 Star */}
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium w-12 text-gray-700">1 star</span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/20 bg-yellow-400 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600 w-8 text-right">5%</span>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12 border-t border-gray-200 pt-12">
        <div className="flex flex-col items-center justify-center py-9">
          <div className="text-4xl text-gray-300 mb-4"><FontAwesomeIcon icon={faStar} /></div>
          <p className="text-gray-500 text-center text-lg">
            Customer reviews will be displayed here.
          </p>
          <button className="cursor-pointer mt-6 text-green-500 font-semibold hover:text-green-600 transition">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
}
