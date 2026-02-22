"use client";
import PromoBanner from "@/src/components/ui/PromoBanners";
import {
  faArrowLeftLong,
  faBagShopping,
  faCartShopping,
  faHeart,
  faReceipt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import WishlistCart from "../component/WishlistCart";
import {useSelector } from "react-redux";
import { AppState } from "@/src/store/store";

export default function WishlistScreen() {
  const {data,count} = useSelector(
    (state: AppState) => state.wishlist
  );
  
  return (
    <>
      <div className="w-full bg-gray-50 py-10">
        <div className="container mx-auto px-6 ">
          <nav className="text-sm text-gray-700 mb-4 font-semibold">
            <div>
              <Link
                href="/"
                className="text-gray-500 hover:text-green-500 mr-1"
              >
                Home
              </Link>
              /<span className="text-gray-500 mx-1">Wishlist</span>
            </div>
          </nav>
          <div className=" lg:flex items-center  mb-5">
            <div className="flex  items-center gap-2">
              <FontAwesomeIcon
                icon={faHeart}
                className="w-6 h-6 p-2 rounded-xl bg-red-100 text-red-600 mr-2 text-2xl"
              />
              <div>
                <h1 className="text-3xl font-bold flex items-center mb-2">
                  My Wishlist
                </h1>
                <p className="text-gray-500 text-sm mt-0.5">
                   {data.length}{" "}
                  {data.length === 1 ? "item" : "items"} saved
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 ">
            <div className="lg:col-span-2 space-y-6">
              {/* Item 1 */}
{data.length > 0 ? (
      data.map(product => <WishlistCart key={product._id} info={product} />)
    ) : (
      <>
      <div className="flex items-center justify-center">
      <p className=" px-4 py-2 bg-red-100 text-red-600 rounded-xl">No products in wishlist</p>

      </div>
      </>
    )}

              <div className="mt-4 flex items-center justify-between">
                <Link
                  href="/"
                  className=" text-green-600 py-2 px-4 hover:text-green-700 font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PromoBanner />
    </>
  );
}
