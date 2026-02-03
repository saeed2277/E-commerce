import { faClock, faClockRotateLeft, faTag, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignupFooter() {
    return <>
                <div className="bg-white py-16 mt-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Why Create an Account with FreshCart?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-green-100 rounded-full">
                                   <FontAwesomeIcon icon={faTruck} className="text-green-600"size="lg" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Faster Checkout</h3>
                            <p className="text-gray-600">Save your delivery information for a quicker shopping experience.</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-green-100 rounded-full">
                                    <FontAwesomeIcon icon={faTag} className="text-green-600" size="lg" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Deals</h3>
                            <p className="text-gray-600">Get access to member-only discounts and early sale notifications.</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-green-100 rounded-full">
                                   <FontAwesomeIcon icon={faClockRotateLeft}  className="text-green-600" size="lg" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Order History</h3>
                            <p className="text-gray-600">Easily track and reorder your favorite products from past purchases.</p>
                        </div>
                    </div>
                </div>
            </div>
    
    </>
}