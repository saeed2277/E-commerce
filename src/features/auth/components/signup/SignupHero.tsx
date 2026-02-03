import { faFeatherPointed, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../../assets/images/review-author.png";
import Image from "next/image";
export default function SignupHero() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="max-w-2xl">
                    {/* Left Side - Hero Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-800 mb-4">
                                Welcome to <span className="text-green-600">FreshCart</span>
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                        <FontAwesomeIcon icon={faFeatherPointed} className="text-green-600" size="lg"/>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Fresh & Organic</h3>
                                    <p className="text-gray-600">Premium quality products sourced directly from farms</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                        <FontAwesomeIcon icon={faTruck} className="text-green-600" size="lg"/>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Fast Delivery</h3>
                                    <p className="text-gray-600">Same-day delivery available in most areas</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                      <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" size="lg"/>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Secure Shopping</h3>
                                    <p className="text-gray-600">Your data and payments are completely secure</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-white p-6 rounded-lg shadow-md ">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 bg-gray-300 rounded-full">
                                    <Image
                                        src={Logo}
                                        alt="Testimonial User"
                                        width={48}
                                        height={48}
                                        className="rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Sarah Johnson</p>
                                    <div className="flex text-yellow-400">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "FreshCart has completely changed how I shop for groceries. The quality is amazing and delivery is always on time!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Create Account Section */}

        </div>
    );
}