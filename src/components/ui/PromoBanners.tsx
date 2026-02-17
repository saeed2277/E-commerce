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
      <div className="bg-green-50 py-2 px-4">
        <div className="container px-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Shipping */}
            <div className=" p-4 ">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100">
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="text-green-600"
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

          

            {/* Easy Returns */}
            <div className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100">
                  <FontAwesomeIcon
                    icon={faArrowRotateLeft}
                    className="text-green-600"
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
              {/* Secure Payment */}
            <div className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="text-green-600"
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

            {/* 24/7 Support */}
            <div className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-100">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="text-green-600"
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
