"use client";
import {
  faBagShopping,
  faBoxOpen,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getUserOrder } from "../server/order.acton";
import OrderCart from "../component/OrderCart";
import { useSelector } from "react-redux";
import { AppState } from "@/src/store/store";
import { useEffect, useState } from "react";
import { OrdersResponse } from "../types/orderType";

export default function OrdersScreen() {
  const { userInfo } = useSelector((state: AppState) => state.auth);
  const [orders, setOrder] = useState<null | OrdersResponse>(null);
  if (!userInfo) {
    return;
  }
  useEffect(() => {

    
    const fetchOrders = async () => {
      const response = await getUserOrder({id: userInfo.id});
      setOrder(response);
      console.log(response)
    };
    fetchOrders();
  }, []);

  if (!orders || orders.length ===0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 mt-10">
        <div className="max-w-sm text-center">
          <div className="w-24 h-24 rounded-2xl bg-gray-100 flex items-center justify-center max-auto mb-6">
            <FontAwesomeIcon
              icon={faBoxOpen}
              className="text-4xl text-gray-400"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            No Orders yet
          </h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            when you place an order, it will appear here <br /> so you can track
            them.
          </p>
          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
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
              /
              <Link
                href="/cart"
                className="text-gray-500 hover:text-green-500 mx-1"
              >
                My Orders
              </Link>
            </div>
          </nav>
          <div className=" lg:flex items-center justify-between mb-5">
            <div className="flex justify-center items-center gap-2">
              <FontAwesomeIcon
                icon={faReceipt}
                className="w-6 h-6 p-2 rounded-xl bg-green-600 text-white mr-2 text-3xl"
              />
              <div>
                <h1 className="text-3xl font-bold flex items-center mb-2">
                  My Orders
                </h1>
                <p className="text-gray-500 text-sm mt-0.5">
                  Trach and manage your {orders.length}{" "}
                  {orders.length === 1 ? "order" : "orders"}
                </p>
              </div>
            </div>

            <span className="text-md text-green-500 hover:text-green-600 duration-300">
              <FontAwesomeIcon icon={faBagShopping} />{" "}
              <Link href="/">Contain Shoping</Link>
            </span>
          </div>
          <div className="space-y-4">
{orders
  .filter(order => order.shippingAddress?.details)
  .map((order) => (
    <OrderCart key={order._id} orderinfo={order} />
  ))}
          </div>
        </div>
      </div>
    </>
  );
}
