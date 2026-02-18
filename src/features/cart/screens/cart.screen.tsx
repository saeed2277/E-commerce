"use client";
import { AppState } from "@/src/store/store";
import {
  faArrowLeftLong,
  faCartShopping,
  faMinus,
  faPlus,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { id } from "zod/v4/locales";
import OrderSummary from "../components/OrderSummary";

export default function CartScreen() {
  const { numOfCartItems, products, totalCartPrice } = useSelector(
    (state: AppState) => state.cart,
  );

  const [count, setCount] = useState(1);
  return (
    <>
      <div className="w-full bg-gray-50 py-10">
        <div className="container mx-auto px-6 ">
          <nav className="text-sm text-gray-700 mb-4 font-semibold">
            <Link href="/" className="text-gray-500 hover:text-green-500 mr-1">
              Home
            </Link>
            / Shoping Cart
          </nav>
          <h1 className="text-3xl font-bold flex items-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-6 h-6 p-2 rounded-xl bg-green-600 text-white mr-2"
            />
            Shopping Cart
          </h1>
          <p className="text-gray-600 mt-2">
            You have
            <span className="text-green-600 font-semibold mx-0.5">
              {numOfCartItems} {numOfCartItems === 1 ? "Item" : "Items"}
            </span>{" "}
            in your cart
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Item 1 */}
              {products.map((product) => (
                <>
                  <div className="flex bg-white rounded-lg shadow-md p-4">
                    <div className="bg-gray-50 rounded-2xl shadow flex items-center justify-center w-35 h-35">
                      <Image
                        src={product.product.imageCover}
                        alt={product.product.title}
                        height={80}
                        width={80}
                      />
                    </div>
                    <div className="ml-8 flex flex-col w-full">
                      <div className="flex items-start flex-col gap-2">
                        <Link href={`/products/${product.product.id}`} className="hover:text-green-600 duration-300">
                          {" "}
                          <h2 className="font-semibold">
                            {product.product.title}
                          </h2>
                        </Link>
                        <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-xl">
                          {product.product.category.name}
                        </span>
                        <p className="text-lg font-bold mt-2 text-green-700">
                          {product.price} EGP
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-lg px-1 py-1 bg-gray-50 border-gray-300 gap-2">
                          <button
                            className="px-2 py-2 bg-white rounded-lg shadow flex items-center justify-center cursor-pointer text-gray-400 hover:text-gray-600 duration-300"
                            disabled={count <= 1}
                            onClick={() => {
                              setCount(count - 1);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faMinus}
                              className=" text-xs"
                            />
                          </button>
                          <span className="px-2">{product.count}</span>
                          <button
                            className="px-2 py-2 bg-green-600 rounded-lg shadow flex items-center justify-center cursor-pointer text-white hover:bg-green-700 duration-300"
                            disabled={count >= product.product.quantity}
                            onClick={() => {
                              setCount(count + 1);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faPlus}
                              className=" text-xs"
                            />
                          </button>
                        </div>
                        <div className=" ">
                          <h3 className="font-semibold text-gray-400 mb-0">
                            Total
                          </h3>
                          <div className="flex items-center gap-4 justify-center">
                            <p className="text-lg font-bold mt-2 text-green-700">
                              {product.price * product.count} EGP
                            </p>
                            <button className="px-3 py-3 rounded-lg shadow flex items-center justify-center bg-red-100 cursor-pointer text-red-500  hover:bg-red-500 hover:text-white duration-300">
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href="/"
                  className=" text-green-600 py-2 px-4 hover:text-green-700 font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                  Continue Shopping
                </Link>
                <button className="group text-gray-400 py-2 px-4 rounded-lg hover:text-red-500 font-semibold flex items-center gap-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-xs group-hover:text-sm"
                  />
                  Clear all Items
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow max-h-96">
<OrderSummary totalPrice={totalCartPrice} numberCart={numOfCartItems}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
