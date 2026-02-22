import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCheck,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { WishlistProduct } from "../types/wishlist.type";
import { AppState, useAppDispatch } from "@/src/store/store";
import { useState } from "react";
import { addToCart, getToCart } from "../../cart/server/cart.action";
import { setCartInfo } from "../../cart/store/cart.slice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
  deleteFromWishlist,
  getLoggedUserWishlist,
} from "../server/wishlist.action";
import { setWishlistInfo } from "../store/wishlist.store";

export default function WishlistCart({ info }: { info: WishlistProduct }) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const onSale = info.priceAfterDiscount
    ? info.priceAfterDiscount < info.price
    : false;
  const discount = info.priceAfterDiscount
    ? Math.round(((info.price - info.priceAfterDiscount) / info.price) * 100)
    : 0;
  const isLowStock = info.quantity > 0 && info.quantity < 10;
  const handleAddToCart = async () => {
    if (loading) return;

    let successMessage = "";
    let isSuccess = false;

    try {
      setLoading(true);

      const response = await addToCart({ productId: info.id });

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
  const [deleteLoading, setDeleteLoading] = useState(false);
  const handleDelete = async () => {
    if (deleteLoading) return;
    try {
      setDeleteLoading(true);

      const response = await deleteFromWishlist(info.id);

      if (response.status !== "success") {
        throw new Error();
      }

      const wishlistInfo = await getLoggedUserWishlist();
      dispatch(setWishlistInfo(wishlistInfo));

      toast.success("Removed from wishlist");
    } catch (error) {
      toast.error("Failed to remove product");
    } finally {
      setDeleteLoading(false);
    }
  };
  const cartProducts = useSelector((state: AppState) => state.cart.products);
  const isInCart = cartProducts.some((item) => item.product.id === info.id);

  return (
    <>
      <div className="container mx-auto">
        <div className=" bg-white rounded-lg shadow  flex flex-col  ">
          <div className=" bg-gray-50 hidden md:grid grid-cols-1 lg:grid-cols-12 px-6 py-4  rounded-t-lg border border-gray-100 text-gray-500 text-sm">
            <div className="col-span-6">Product</div>

            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          <div className="lg:grid grid-cols-12 px-6 py-6">
            {/* product info */}
            <div className="flex items-center gap-4 md:col-span-6 ">
              <div className="relative p-4 rounded-lg border border-gray-100">
                <img
                  src={info.imageCover}
                  alt={info.title}
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <div className="flex flex-col ">
                <Link href={`/products/${info.id}`}>
                  {" "}
                  <h2 className="text-md font-semibold text-gray-800 hover:text-green-600 duration-200">
                    {info.title}
                  </h2>
                </Link>
                <span className="text-sm text-gray-500">
                  {info.category.name}
                </span>
              </div>
            </div>

            {/* price & status */}

            <div className="flex items-center md:justify-center  md:col-span-2">
              <div className="text-xl font-bold text-gray-900">
                {onSale ? (
                  <>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl font-bold text-emerald-600">
                        {info.priceAfterDiscount} EGP
                      </span>
                      <span className="text-sm text-gray-500 line-through ">
                        {info.price} EGP
                      </span>
                      <span className="bg-red-500 px-2 py-1 rounded-2xl text-white text-xs ">
                        Save {discount}%{" "}
                      </span>
                    </div>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-emerald-600">
                    {info.price} EGP
                  </span>
                )}
              </div>
            </div>
            <div className=" flex items-center md:justify-center  md:col-span-2 ">
              {info.quantity > 0 ? (
                <span
                  className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700 `}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${isLowStock ? "bg-yellow-600" : "bg-green-500"}`}
                  ></span>
                  {isLowStock
                    ? ` Only ${info.quantity} left : Order Soon!`
                    : "In Stock"}
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700">
                  <span className="w-2 h-2 rounded-full bg-red-500 "></span>
                  Out of Stock
                </span>
              )}
            </div>
            {/* actions */}
            <div className="flex items-center gap-2 md:justify-center  md:col-span-2">
              {isInCart ? (
                <Link
                  href="/cart"
                  className="flex items-center gap-2 bg-gray-100  px-4 py-2 rounded hover:bg-gray-200 duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-sm text-green-600"
                  />
                  view cart
                </Link>
              ) : (
                <button
                  onClick={handleAddToCart}
                  disabled={loading}
                  className={` flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 duration-200 cursor-pointer`}
                >
                  <FontAwesomeIcon
                    icon={loading ? faSpinner : faCartShopping}
                    className={loading ? "animate-spin" : ""}
                  />
                  {loading ? "Adding" : "Add to Cart"}
                </button>
              )}
              <button
                className="text-gray-500 bg-gray-50 border border-gray-100 hover:text-red-600 hover:border-red-300 hover:bg-red-50 p-2 rounded-xl cursor-pointer duration-200"
                onClick={handleDelete}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
