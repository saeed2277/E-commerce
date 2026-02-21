"use client";
import { AppState } from "@/src/store/store";
import {
  faArrowLeftLong,
  faCartShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import OrderSummary from "../components/OrderSummary";
import CardItem from "../components/cardItem";
import Swal from "sweetalert2";
import { removeAllProduct } from "../store/cart.slice";
import { deleteAllCards } from "../server/cart.action";
import { toast } from "react-toastify";
import PromoBanner from "@/src/components/ui/PromoBanners";

export default function CartScreen() {
  const { numOfCartItems, products , totalCartPrice} = useSelector(
    (state: AppState) => state.cart,
  );
  const dispatch = useDispatch();
const handleAllDelete = async()=>{
const result =await Swal.fire({
  html:`  <div class="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-200 shadow-md">
      
      <div class="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <div class="text-left">
        <h3 class="text-lg font-semibold text-red-700">Remove All Items?</h3>
      </div>

    </div>`,

    showCancelButton:true,
    showConfirmButton:true,
    confirmButtonText:'Remove',
    cancelButtonText:'Cancel',
    buttonsStyling:false,
    customClass:{
      confirmButton:'bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl duration-300 cursor-pointer',
      cancelButton:'bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl duration-300 cursor-pointer',
      htmlContainer:'p-6 m-0',
      actions:'px-6 pb-6 pt-0 gap-3 flex-row-reverse'
    }
})
if(result.isConfirmed){
    dispatch(removeAllProduct())
  await deleteAllCards()
  toast.success('Delete All Products')
}
}


 
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
              {products.map((product) => <CardItem key={product._id} info={product}/>)}
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href="/"
                  className=" text-green-600 py-2 px-4 hover:text-green-700 font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                  Continue Shopping
                </Link>
                <button className="group text-gray-400 py-2 px-4 rounded-lg hover:text-red-500 font-semibold flex items-center gap-2 cursor-pointer" onClick={() => {
                             handleAllDelete()
                            }} >
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
      <PromoBanner/>
    </>
  );
}
