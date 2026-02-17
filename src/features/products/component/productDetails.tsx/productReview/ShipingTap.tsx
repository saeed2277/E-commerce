import { faArrowRotateLeft, faCheck, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShipingTap() {
  return <>
    <div className="py-8 container mx-auto px-6">
      {/* Shipping & Returns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Shipping Information */}
        <div className="bg-green-50 rounded-lg p-6 border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faTruck} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Shipping Information</h3>
          </div>
          
          <ul className="space-y-1">
            <li className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500 mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Free shipping on orders over 550</span>
            </li>
            <li className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500 mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Standard delivery: 3-5 business days</span>
            </li>
            <li className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500 mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Express delivery available (1-2 business days)</span>
            </li>
            <li className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500 mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Track your order in real-time</span>
            </li>
          </ul>
        </div>

        {/* Returns & Refunds */}
        <div className="bg-green-50 rounded-lg p-6 border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
             <FontAwesomeIcon icon={faArrowRotateLeft} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Returns & Refunds</h3>
          </div>
          
          <ul className="space-y-1">
            <li className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500 mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">30-day hassle-free returns</span>
            </li>
            <li className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500 mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Full refund or exchange available</span>
            </li>
            <li className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500 mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Free return shipping on defective items</span>
            </li>
            <li className="flex items-center gap-1 text-gray-700">
              <span className="text-green-500 mt-0.5"><FontAwesomeIcon icon={faCheck} size="sm"/></span>
              <span className="text-gray-700 text-sm">Easy online return process</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Buyer Protection Guarantee */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center ">
          <FontAwesomeIcon icon={faShieldHalved} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Buyer Protection Guarantee</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Get a full refund if your order doesn't arrive or isn't as described. We ensure your shopping experience is safe and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>;
}
