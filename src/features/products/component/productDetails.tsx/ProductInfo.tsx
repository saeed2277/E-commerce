'use client'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRotateLeft,
  faBolt,
  faCartShopping,
  faMinus,
  faPlus,
  faShareNodes,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../type/product.type";
import Ratings from "@/src/components/ui/Ratings";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { useState } from "react";

export default function ProductInfo({ product }: { product: Product }) {
  const {
    title,
    description,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
    quantity,
    images
  } = product;
  const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;
  const discount = priceAfterDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;
  const isLowStock = quantity > 0 && quantity < 10;

  const [count, setCount] =useState(1);
  return (
    <section className="py-6 ">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%]  gap-6">
          <div >
            <div className=" rounded-xl bg-white shadow-sm p-4 sticky top-4">
              <ImageGallery items={images.map((image)=>{
                return{
original: image,
thumbnail: image
                }
              })}
              showFullscreenButton={false}
              showNav ={false}
              showPlayButton={false}
              />
            </div>
          </div>

        
        <div className="bg-white rounded-xl shadow-sm p-6">

        

        
        <div className="flex flex-col  gap-4">
 <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-green-50 text-emerald-700 px-2 py-1 rounded-full">
                Electronics
              </span>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                Dell
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
              {title}
            </h1>

            <div className="flex flex-col  items-start mt-4 gap-4">
              <div className="flex flex-col  items-start gap-3">
                <div className="flex items-center text-yellow-400 text-sm">
                  <Ratings rating={ratingsAverage} />
                  <span className="text-gray-500 ml-2">
                    {ratingsAverage} ({ratingsQuantity} reviews)
                  </span>
                </div>
                <div className="flex lg:flex-row items-start flex-col lg:items-center gap-2">
                  {onSale ? (
                    <>
                      <span className="text-2xl font-bold text-emerald-600">
                        {priceAfterDiscount} EGP
                      </span>
                      <span className="text-sm text-gray-500 line-through ">
                        {price} EGP
                      </span>
                      <span className="bg-red-500 px-2 py-1 rounded-2xl text-white text-sm ">
                        Save {discount}%{" "}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-emerald-600">
                      {price} EGP
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                {quantity > 0 ? (
                  <span
                    className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700 `}
                  >
                   <span className={`w-2 h-2 rounded-full ${isLowStock ? "bg-yellow-600" : "bg-green-500"}`}>

                   </span>
                 {isLowStock ?` Only ${quantity} left : Order Soon!` : "In Stock"}
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700">
                    <span className="w-2 h-2 rounded-full bg-red-500 "></span>
                    Out of Stock
                  </span>
                )}
              </div>

            </div>
          </div>
          
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm text-gray-700"> Quantity</label>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden w-max">
              <button
                disabled={count <= 1}
                className="px-3 py-2 bg-white text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-green-500"
                onClick={()=>{setCount(count-1)}}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium" value={count}  min={1} onChange={(e)=>{setCount(+e.target.value)}}  />
                
              
              <button
                disabled={count >= quantity}
                className="px-3 py-2 bg-white text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-green-500"
                onClick={()=>{setCount(count+1)}}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="text-sm text-gray-500">{quantity} available</div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Total Price:</div>
          <div className="lg:text-lg lg:font-bold text-emerald-600">
            {count * (priceAfterDiscount || price)} EGP
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <button className="w-full cursor-pointer text-sm lg:text-lg lg:inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 lg:font-semibold lg:py-3 lg:px-4 rounded-md">
            <FontAwesomeIcon icon={faCartShopping} className="text-white"  /> Add
            to Cart
          </button>
          <button className="w-full cursor-pointer text-sm lg:text-lg lg:inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-2 py-1 lg:font-semibold lg:py-3 lg:px-4 rounded-md">
            <FontAwesomeIcon icon={faBolt} className="text-white" /> Buy Now
          </button>
        </div>

        <div className="flex  items-center justify-center gap-3 mt-6">
          <button className="cursor-pointer w-full border border-gray-200  text-sm text-gray-700 rounded-md p-3 bg-white hover:border-green-500 hover:text-green-500 hover:transition-colors ">
            <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
          </button>
          <button className="rounded-lg cursor-pointer  border border-gray-200  text-sm text-gray-700 px-4 p-3 bg-white hover:border-green-500 hover:text-green-500 hover:transition-colors ">
            <FontAwesomeIcon
              icon={faShareNodes}
              className="text-gray-700"
            />{" "}
          </button>
        </div>
      <div className=" mt-5 border-t border-gray-100 pt-6">
        <div className=" max-w-10/12 xl:flex justify-between items-center">
          {/* Free Shipping */}

          <div className="flex mb-3 xl:mb-0 items-start xl:justify-center gap-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-green-500"
                size="sm"
              />
            </div>

            <div className="">
              <h3 className="text-sm font-semibold text-gray-800">
                Free Shipping
              </h3>
              <p className="text-xs text-gray-600 ">On orders over 500 EGP</p>
            </div>
          </div>

          {/* Easy Returns */}

          <div className="flex mb-3 xl:mb-0 items-start justify-center gap-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
              <FontAwesomeIcon
                icon={faArrowRotateLeft}
                className="text-green-500"
                size="sm"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                Easy Returns
              </h3>
              <p className="text-xs text-gray-600">14-day return policy</p>
            </div>
          </div>

          {/* Secure Payment */}

          <div className="flex items-start justify-center gap-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-green-500"
                size="sm"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-800">
                Secure Payment
              </h3>
              <p className="text-xs text-gray-600">100% secure transactions</p>
            </div>
          </div>
        </div>
         
        </div>

</div>
        

</div>
      </div>



    </section>
  );
}
