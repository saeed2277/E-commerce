import { faCircleQuestion, faClock, faTruck } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/home-slider-1.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function LoginHero() {
    return <>
        <div className="">
            <div className="w-full flex items-center justify-center py-10 px-6  flex-col">
                            <div className="">
                                <Image src={Logo} alt="Logo" className="w-lg h-80 rounded-2xl" />
                            </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-white rounded-lg  p-8 w-full max-w-lg">

                            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">Fresh Groceries Delivered</h3>
                            <p className="text-center text-gray-600">Join thousands of happy customers who trust FreshCart for their daily grocery needs.</p>

                            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faTruck} className="w-5 h-5 text-green-500" />
                                    <span>Free Delivery</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCircleQuestion} className="w-5 h-5 text-green-500" />
                                    <span>Secure Payment</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-green-500" />
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
     
</>
}