"use client";
import {
  faBagShopping,
  faClipboard,
  faReceipt,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import CheckoutItem from "../component/CheckoutItem";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutForm, checkoutSchema } from "../schemas/checkout.schema";
import { useState } from "react";
import { createCashOrder, createOnlineOrder } from "../server/checkout.action";
import { AppState, useAppDispatch } from "@/src/store/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { removeAllProduct } from "../../cart/store/cart.slice";

export default function CheckoutScreen() {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");
  const { cartId } = useSelector((state: AppState) => state.cart);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(checkoutSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<CheckoutForm> = async (values) => {
    try {
      if (!cartId) {
        return;
      }
      if (paymentMethod === "cash") {
        const response = await createCashOrder({
          cartId,
          shipingAddress: values,
        });
        if (response.status === "success") {
          dispatch(removeAllProduct());
          toast.success("Order created successfully");
          setTimeout(() => {
            router.push("/orders");
          }, 2000);
        }
      } else {
        const response = await createOnlineOrder({
          cartId,
          shipingAddress: values,
          url: location.origin,
        });
        console.log(response);
        if (response.status === "success") {
          dispatch(removeAllProduct());
          toast.loading("Redirecting to payment gateway");
          setTimeout(() => {
            location.href = response.session.url;
          }, 2000);
        }
      }
    } catch (error) {
      throw error;
    } 
  };
  return (
    <>
      {
        <div className="w-full bg-gray-50 py-10">
          <div className="container mx-auto px-6 ">
            <nav className="text-sm text-gray-700 mb-4 font-semibold">
              <Link
                href="/"
                className="text-gray-500 hover:text-green-500 mr-1"
              >
                Home
              </Link>
              / Shoping Cart
            </nav>
            <h1 className="text-3xl font-bold flex items-center">
              <FontAwesomeIcon
                icon={faReceipt}
                className="w-6 h-6 p-2 rounded-xl bg-green-600 text-white mr-2"
              />
              Shopping Cart
            </h1>
            <p className="text-gray-600 mt-2">
              You have
              <span className="text-green-600 font-semibold mx-0.5">
                {} {1 ? "Item" : "Items"}
              </span>{" "}
              in your cart
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <CheckoutItem
                    register={register}
                    errors={errors}
                    selected={paymentMethod}
                    changeSelected={setPaymentMethod}
                  />
                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-2xl shadow max-h-fit">
                  <div>
                    <h2 className=" mb-4 bg-green-600 text-white p-4 rounded-t-2xl flex flex-col gap-1">
                      <span className="text-md font-semibold">
                        <FontAwesomeIcon icon={faBagShopping} /> Order Summary
                      </span>
                      <span className="text-gray-300 text-sm">1 item</span>
                    </h2>
                    <div className="flex justify-between px-4 text-gray-600 font-semibold text-sm">
                      <span>Subtotal</span>
                      <span>{500} EGP</span>
                    </div>
                    <div className="flex justify-between mt-2 px-4 text-gray-600 font-semibold text-sm">
                      <span>
                        <FontAwesomeIcon
                          icon={faTruck}
                          className="text-gray-400"
                        />{" "}
                        Shipping
                      </span>
                      {/*           {shiping ? (
            <span className="text-green-600">
              Add {500 - totalPrice} EGP for Free Shiping
            </span>
          ) : (
            <span className="text-green-600">Free</span>
          )} */}
                    </div>
                    <div className="flex justify-between mt-4 font-bold text-md border-t border-gray-300 pt-2 px-4">
                      <span>Total</span>
                      <span className="text-green-600">{900} EGP</span>
                    </div>

                    
                      {" "}
                      <button className="w-full bg-green-600 text-white py-2 rounded shadow mt-6 cursor-pointer hover:bg-green-700 font-semibold flex items-center justify-center gap-2" type="submit">
                        <FontAwesomeIcon icon={faShieldHalved} />
                        Proceed to Payment
                      </button>
                    

                    <div className="px-6 pb-5 flex justify-center text-xs text-gray-500 mt-4 border-t border-gray-200 pt-2">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center space-x-1 ">
                          <FontAwesomeIcon
                            icon={faShieldHalved}
                            className=" text-green-600"
                          />
                          <span>Secure</span>
                        </span>
                        <span className="flex items-center space-x-1 border-x border-gray-200 px-4">
                          <FontAwesomeIcon
                            icon={faTruck}
                            className="text-blue-600"
                          />
                          <span>Fast Delivery</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <FontAwesomeIcon
                            icon={faClipboard}
                            className="text-orange-600"
                          />
                          <span>Easy Returns</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
}
