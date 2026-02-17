'use client'
import { faBriefcase, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ProductInfoTap from "../productReview/ProductInfoTap";
import ReviewsTap from "../productReview/ReviewsTap";
import ShipingTap from "../productReview/ShipingTap";
import { Product } from "../../../type/product.type";


export default function ProductReview({ product }: { product: Product }) {
const [activeTab, setActiveTab] = useState("details");
function ActiveTabContent(){
  switch(activeTab){
    case "details":
      return <ProductInfoTap product={product}/>;
    case "reviews":
      return <ReviewsTap  product={product}/>;
    case "shipping":
      return <ShipingTap/>;
    default:
      return <ProductInfoTap product={product}/>;
  }
}



  return <>
  <div className="py-8">
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
        <div className="border-b border-gray-200">
          <div className="flex border-b border-gray-200 ">
            <button className={`cursor-pointer px-4 py-4 text-sm font-medium ${activeTab === "details" ? "text-green-600 border-b border-green-600" : "text-gray-600"}  hover:bg-gray-100 `}
            onClick={()=>setActiveTab("details")}>
              <FontAwesomeIcon icon={faBriefcase} /> Product Details
            </button>
            <button className={`cursor-pointer px-4 py-4 text-sm font-medium ${activeTab === "reviews" ? "text-green-600 border-b border-green-600" : "text-gray-600"}  hover:bg-gray-100 `}
            onClick={()=>setActiveTab("reviews")}>
             <FontAwesomeIcon icon={faStar} />  Reviews ({product.ratingsQuantity})
            </button>
            <button className={`cursor-pointer px-4 py-4 text-sm font-medium ${activeTab === "shipping" ? "text-green-600 border-b border-green-600" : "text-gray-600"}  hover:bg-gray-100 `}
            onClick={()=>setActiveTab("shipping")}>
              <FontAwesomeIcon icon={faTruck} /> Shiping & Returns
            </button>
          </div>
<div className="">{ActiveTabContent()}</div>

        </div>

          </div>

        </div>
      </div>

  </>
}
