"use client";
import {
  faAngleDown,
  faAngleUp,
  faCalendar,
  faCalendarDays,
  faCircleCheck,
  faClock,
  faCreditCard,
  faLocationDot,
  faMoneyBill,
  faPhone,
  faReceipt,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Order } from "../types/orderType";
import { useState } from "react";

export default function OrderCart({ orderinfo }: { orderinfo: Order }) {
  const [isExpanded, setIsExpanded] = useState(false);
  function getStates() {
    if (orderinfo.isDelivered) {
      return {
        label: "Deliverd",
        icon: faCircleCheck,
        color: {
          background: "bg-green-100",
          text: "text-green-600",
          border: "border-green-300",
        },
      };
    }
    if (orderinfo.isPaid) {
      return {
        label: "On the way",
        icon: faTruck,
        color: {
          background: "bg-blue-100",
          text: "text-blue-600",
          border: "border-blue-300",
        },
      };
    }

    return {
      label: "Processing",
      icon: faClock,
      color: {
        background: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-300",
      },
    };
  }
  const status = getStates();
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden border border-gray-200">
      {/* header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative p-4 rounded-lg border border-gray-100">
            {orderinfo.cartItems && (
              <img
                src={orderinfo.cartItems[0].product.imageCover}
                alt={orderinfo.cartItems[0].product.title}
                className="h-16 w-16 rounded "
              />
            )}
            {orderinfo.cartItems.length > 1 ? (
              <span className="absolute -top-2 -right-2 bg-black border border-gray-100 text-white text-xs rounded-full px-1">
                {orderinfo.cartItems.length - 1}
              </span>
            ) : null}
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className={`text-xs ${status.color.text} ${status.color.background} px-2 py-1 rounded-full`}
                >
                  <FontAwesomeIcon icon={status.icon} /> {status.label}
                </span>
              </div>
            </div>
            <div className="text-lg font-semibold">
              <span className="text-gray-400"># </span>
              {orderinfo.id}
            </div>
            <div className="text-xs text-gray-400 flex items-center space-x-2">
              {new Date(orderinfo.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="inline-block w-1 h-1 bg-gray-300 rounded-full" />
              {orderinfo.cartItems.reduce((acc, el) => (acc += el.count), 0)}
              <FontAwesomeIcon icon={faCalendar} />
              <span className="inline-block w-1 h-1 bg-gray-300 rounded-full" />
              {orderinfo.shippingAddress.city}
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="text-sm">city</span>
            </div>

            <div className="text-xl font-bold">
              total order price
              <span className="text-sm text-gray-400 ml-2">
                {orderinfo.totalOrderPrice} EGP
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <span
            className={`${orderinfo.paymentMethodType === "card" ? "bg-green-100" : "bg-gray-100"} px-2 py-1 rounded-xl text-lg`}
          >
            <FontAwesomeIcon
              icon={
                orderinfo.paymentMethodType === "card"
                  ? faCreditCard
                  : faMoneyBill
              }
              className={
                orderinfo.paymentMethodType === "card"
                  ? "text-green-600"
                  : "text-gray-600"
              }
            />
          </span>
          <div className="p-2 bg-purple-100 rounded-full">
            <svg
              className="h-6 w-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3…"></path>
            </svg>
          </div>
          <button
            className={`px-2 py-1 rounded-xl  flex items-center justify-center  cursor-pointer ${isExpanded ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-50 hover:bg-gray-100"} `}
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Hiden" : "Details"}
            <FontAwesomeIcon
              icon={isExpanded ? faAngleUp : faAngleDown}
              className={` text-xs transition-transform duration-300 `}
            />
          </button>
        </div>
      </div>

      {/* body */}
      {isExpanded && (
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="p-4 flex flex-col gap-8">
            <div>
              <h3 className="flex items-center text-sm font-medium text-green-600">
                <FontAwesomeIcon
                  icon={faReceipt}
                  className="w-4 h-4 p-2 rounded-xl bg-green-50 text-green-600 mr-2 text-lg"
                />
                Order Items
              </h3>
              <div className="space-y-3">
                {orderinfo.cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gray-50 p-2 shrink-0">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {item.product.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        <span className="font-medium text-gray-700">
                          {item.count}
                        </span>{" "}
                        × {item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-lg font-bold text-gray-900">
                        {(item.count * item.price).toLocaleString()}
                      </p>
                      <p className="text-sx text-gray-400">EGP</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4">
                <h3 className="flex items-center text-sm font-medium text-blue-600">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 h-4 p-2 rounded-xl bg-blue-50 mr-2 text-md"
                  />
                  Delivery Address
                </h3>
                <p className="text-md text-gray-800 font-semibold">
                  {orderinfo.shippingAddress.city}
                </p>
                <p className="text-sm text-gray-800">
                  {orderinfo.shippingAddress.details}
                </p>
                <p className="text-sm text-gray-400 flex flex-items mt-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-3 h-3 p-1 rounded-md bg-gray-50 mr-2 text-xs"
                  />
                  {orderinfo.shippingAddress.phone}
                </p>
              </div>
              <div className="md:w-1/3 bg-blue-50 rounded-xl p-4">
                <h3 className="flex items-center text-sm font-medium text-gray-700">
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="w-4 h-4 p-2 rounded-xl bg-blue-600 text-white mr-2 text-md"
                  />
                  Order Summary
                </h3>
                <div className="mt-3 space-y-2 text-sm text-gray-800">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{orderinfo.totalOrderPrice} EGP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {orderinfo.shippingPrice === 0
                        ? "Free"
                        : orderinfo.shippingPrice + "EGP"}
                    </span>
                  </div>
                  <div className=" pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>
                      {orderinfo.totalOrderPrice + orderinfo.shippingPrice} EGP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
