"use client";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../type/product.type";
import Link from "next/link";
import Ratings from "@/src/components/ui/Ratings";
import { addToCart, getToCart } from "../../cart/server/cart.action";
import { toast } from "react-toastify";
import { setCartInfo } from "../../cart/store/cart.slice";
import { useAppDispatch } from "@/src/store/store";
import { useState } from "react";

export default function ProductCaart({ info }: { info: Product }) {
  const {
    id,
    category,
    title,
    imageCover,
    ratingsAverage,
    ratingsQuantity,
    price,
    priceAfterDiscount,
  } = info;
  const dispatch = useAppDispatch();
  const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;
  const discount = priceAfterDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    if (loading) return;

    let successMessage = "";
    let isSuccess = false;

    try {
      setLoading(true);

      const response = await addToCart({ productId: id });

      if (response.status === "success") {
        isSuccess = true;
        successMessage = response.message;

        const cartInfo = await getToCart();
        dispatch(setCartInfo(cartInfo));
      }
    } catch (error) {
      isSuccess = false;
    } finally {
      setLoading(false);
    }

    if (isSuccess) {
      toast.success(successMessage);
    } else {
      toast.error("Failed to add product to cart");
    }
  };
  return (
    <article className="  bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden relative hover:shadow-lg transition-shadow hover:scale-[1.02] hover:transition-transform">
      <div className="p-4">
        <div className="relative">
          <img
            src={imageCover}
            alt={title}
            className="w-full h-60 object-contain bg-white"
          />
          <div className="absolute top-3 left-3 ">
            {onSale && (
              <span className=" bg-red-500 text-white text-xs  px-2 py-1 rounded">
                -{discount}%
              </span>
            )}
          </div>
          <div className="absolute right-0 top-0 flex flex-col gap-3">
            <button
              aria-label="wishlist"
              className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-green-500 transition-color cursor-pointer"
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <button
              aria-label="refresh"
              className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-green-500 transition-color cursor-pointer"
            >
              <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
            <Link href={`/products/${id}`}>
              <button
                aria-label="view"
                className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-green-500 transition-color cursor-pointer"
              >
                <FontAwesomeIcon icon={faEye} />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs text-gray-400">{category.name}</p>
          <Link
            href={`/products/${id}`}
            className="text-lg text-gray-800 mt-1 cursor-pointer line-clamp-2"
          >
            {title}
          </Link>

          <div className="flex items-center mt-3">
            <div className="flex items-center text-yellow-400">
              <Ratings rating={ratingsAverage} />
            </div>
            <span className="text-sm text-gray-500 ml-2">
              {ratingsAverage}({ratingsQuantity} reviews)
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            {onSale ? (
              <>
                <div>
                  <span className="text-xl font-semibold text-green-600">
                    {priceAfterDiscount} EGP
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {price}
                  </span>
                </div>
              </>
            ) : (
              <span className="text-xl font-semibold text-green-600">
                {price} EGP
              </span>
            )}
            <button
              onClick={handleAddToCart}
              disabled={loading}
              aria-label="add"
              className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
