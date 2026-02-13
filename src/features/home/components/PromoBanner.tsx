import {
  faArrowRotateLeft,
  faHeadset,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PromoBanner() {
  return (
    <>
      <div className="bg-white py-12 px-4">
        <div className="max-w-9/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Shipping */}
            <div className="max-h-20 rounded-xl shadow p-4 border border-gray-100  hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50">
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="text-blue-500"
                    size="lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-md font-semibold text-gray-800">
                    Free Shipping
                  </h3>
                  <p className="text-xs text-gray-600 ">
                    On orders over 500 EGP
                  </p>
                </div>
              </div>
            </div>

            {/* Secure Payment */}
            <div className="max-h-20 rounded-xl shadow p-4 border border-gray-100  hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-50">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="text-green-500"
                    size="lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-md font-semibold text-gray-800">
                    Secure Payment
                  </h3>
                  <p className="text-xs text-gray-600">
                    100% secure transactions
                  </p>
                </div>
              </div>
            </div>

            {/* Easy Returns */}
            <div className="max-h-20 rounded-xl shadow p-4 border border-gray-100  hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-50">
                  <FontAwesomeIcon
                    icon={faArrowRotateLeft}
                    className="text-orange-500"
                    size="lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-md font-semibold text-gray-800">
                    Easy Returns
                  </h3>
                  <p className="text-xs text-gray-600">14-day return policy</p>
                </div>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="max-h-20 rounded-xl shadow p-4 border border-gray-100  hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-50">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="text-purple-500"
                    size="lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-md font-semibold text-gray-800">
                    24/7 Support
                  </h3>
                  <p className="text-xs text-gray-600">
                    Dedicated support team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
