import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function OrderSummary({totalPrice,numberCart}:{totalPrice : number,numberCart : number}) {

const shiping = totalPrice > 500 ? 0 : 50;

  return <>
    <div>
                    <h2 className="text-xl font-semibold mb-4 bg-black text-white p-4 rounded-t-2xl">
                Order Summary
              </h2>
              <div className="flex justify-between px-4 text-gray-600 font-semibold">
                <span>
                  Subtotal ({numberCart} {numberCart === 1 ? "Item" : "Items"})
                </span>
                <span>{totalPrice} EGP</span>
              </div>
              <div className="flex justify-between mt-2 px-4 text-gray-600 font-semibold">
                <span>Shipping</span>
                {shiping ? <span className="text-green-600">Add {500 - totalPrice} EGP for Free Shiping</span> :<span className="text-green-600">Free</span>}
              </div>
              <div className="flex justify-between mt-4 font-bold text-lg border-t border-gray-300 pt-2 px-4">
                <span>Estimated Total</span>
                <span className="text-green-600">{totalPrice + shiping} EGP</span>
              </div>

              <button className="w-full bg-green-600 text-white py-2 rounded mt-6 cursor-pointer hover:bg-green-700 font-semibold flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faUser} />
                Login to Checkout
              </button>
              <p className="text-center text-sm mt-2">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-green-600 hover:text-green-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>

              <ul className="text-xs text-gray-600 mt-4 space-y-1 border-t border-gray-300 p-4">
                <li>✓ Your cart items will be saved</li>
                <li>✓ Track your orders easily</li>
                <li>✓ Access exclusive member deals</li>
              </ul>
    </div>
  </>;
}
