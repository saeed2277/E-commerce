"use Client";

import {
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faCircleInfo,
  faCity,
  faCreditCard,
  faHouse,
  faLocationDot,
  faMoneyBill,
  faPhone,
  faShieldHalved,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckoutForm } from "../schemas/checkout.schema";
interface FormAddressProps {
  register: UseFormRegister<CheckoutForm>;
  errors: FieldErrors<CheckoutForm>;
  selected: "cash" | "card";
  changeSelected: (method: "cash" | "card") => void;
}

export default function CheckoutItem({
  register,
  errors,
  selected,
  changeSelected,
}: FormAddressProps) {
  return (
    <>
      <div className="space-y-6 p-4">
        {/* shipping address section */}
        <section className="bg-white rounded-xl shadow ">
          <div className="bg-green-600 text-xl rounded-t-xl px-6 py-2">
            <h2 className="text-white  font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faHouse} className="text-sm" />
              Shipping Address
            </h2>
            <p className="text-green-100 mt-1 text-sm">
              Where should we deliver your order?
            </p>
          </div>
          <div className="px-4 pb-4">
            <div className="border border-blue-300 bg-blue-50 rounded-lg mt-4 p-4 flex items-center gap-2">
              <span className="w-6 h-6 text-xs rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-500">
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
              <span>
                <p className="text-sm text-blue-800">Delivery Information</p>
                <p className="text-xs text-blue-700">
                  Please ensure your address is accurate for smooth delivery
                </p>
              </span>
            </div>

            <div className="mt-4 space-y-4">
              <div className="relative mb-0">
                <label className="block text-sm font-medium text-gray-700">
                  City <span className="text-red-500">*</span>
                </label>
                <FontAwesomeIcon
                  icon={faCity}
                  className="text-gray-500 text-xs w-6 h-6 p-1 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center absolute left-1 top-1/2 translate-0.5"
                />
                <input
                  type="text"
                  id="city"
                  placeholder="e.g. Cairo, Alexandria, Giza"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-green-500 outline-none pl-10"
                  {...register("city")}
                />
              </div>
              {errors.city && (
                <>
                  <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                    {errors.city.message}
                  </p>
                </>
              )}
              <div className="relative mb-0">
                <label className="block text-sm font-medium text-gray-700">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 text-xs w-6 h-6 p-1 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center absolute left-1 top-8 translate-0.5"
                />
                <textarea
                  id="details"
                  placeholder="Street name, building number, floor, apartment..."
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-green-500 outline-none pl-10"
                  {...register("details")}
                />
              </div>
              {errors.details && (
                <>
                  <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                    {errors.details.message}
                  </p>
                </>
              )}
              <div className="relative mb-0">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-gray-500 text-xs w-6 h-6 p-1 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center absolute left-1 top-1/2 translate-0.5"
                />
                <input
                  type="tel"
                  id="phone"
                  placeholder="01xxxxxxxx"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-green-500 outline-none pl-10"
                  {...register("phone")}
                />
                <p className="text-xs text-gray-400 mt-1 absolute right-3 top-1/2">
                  Egyptian numbers only
                </p>
              </div>
              {errors.phone && (
                <>
                  <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                    {errors.phone.message}
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* payment method section */}
        <section className="bg-white rounded-xl shadow ">
          <div className="bg-green-600 text-xl rounded-t-xl px-6 py-2">
            <h2 className="text-white  font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faWallet} className="text-sm" />
              Payment Method
            </h2>
            <p className="text-green-100 mt-1 text-sm">
              Choose how you'd like to pay
            </p>
          </div>

          <div className="mt-4 space-y-4 px-4 pb-4">
            <div
              className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer ${
                selected === "cash"
                  ? "bg-linear-to-r from-green-50 to-blue-50 text-white border-green-200"
                  : "border-gray-200 bg-white hover:border-green-200 hover:bg-gray-50"
              }`}
              onClick={() => {
                changeSelected("cash");
              }}
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  className="w-6 h-6 p-2 py-3 bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 rounded-lg"
                />
                <div>
                  <p className="font-medium text-gray-800">Cash on Delivery</p>
                  <p className="text-sm text-gray-700">
                    Pay when your order arrives at your doorstep
                  </p>
                </div>
              </div>
              <div
                className={`w-6 h-6 rounded-full border  flex items-center justify-center ${
                  selected === "cash" ? "bg-green-600 " : "border-gray-200"
                }
              }`}
              >
                {" "}
                {selected === "cash" && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xs text-white"
                  />
                )}
              </div>
            </div>
            <div
              className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer ${
                selected === "card"
                  ? "bg-linear-to-r from-green-50 to-blue-50 text-white border-green-200"
                  : "border-gray-200 bg-white hover:border-green-200 hover:bg-gray-50"
              }`}
              onClick={() => {
                changeSelected("card");
              }}
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="w-6 h-6 p-2 py-3 bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 rounded-lg"
                />
                <div>
                  <p className="font-medium text-gray-800">Pay Online</p>
                  <p className="text-sm text-gray-700">
                    Secure payment with Credit/Debit Card via Stripe
                  </p>
                  <div className="flex space-x-1 mt-2">
                    <FontAwesomeIcon
                      icon={faCcVisa}
                      className="text-xs text-blue-600"
                    />
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="text-xs text-blue-600"
                    />
                    <FontAwesomeIcon
                      icon={faCcPaypal}
                      className="text-xs text-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`w-6 h-6 rounded-full border  flex items-center justify-center ${
                  selected === "card" ? "bg-green-600 " : "border-gray-200"
                }
              }`}
              >
                {" "}
                {selected === "card" && (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-xs text-white"
                  />
                )}
              </div>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-lg mt-4 p-4 flex items-center gap-2">
              <span className="w-6 h-6 text-xs rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-green-500">
                <FontAwesomeIcon icon={faShieldHalved} />
              </span>
              <span>
                <p className="text-sm text-green-800">Secure & Encrypted</p>
                <p className="text-xs text-green-700">
                  Your payment info is protected with 256-bit SSL encryption
                </p>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
