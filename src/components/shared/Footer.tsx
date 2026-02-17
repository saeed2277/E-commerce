import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";




export default function Footer() {
  return <>
    <footer className=" py-6 px-16">
      <div className="mx-auto ">
        <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-gray-300 pb-6">
          <div>
            <h2 className="text-3xl font-bold mb-5">
              <span className="text-green-600">Fresh</span>Cart
            </h2>
            <p className="text-gray-600 text-xl">FreshCart is your one-stop destination for fresh groceries, organic products, and household essentials delivered to your doorstep.</p>
            <ul className="flex gap-4 mt-5 ">
              <li className="hover:text-blue-600 transtion-color duration-200">
                <a  href="https://www.facebook.com" target="_blank"><FontAwesomeIcon className="w-4 h-4" icon={faFacebookF} /></a>
              </li>
              <li className="hover:text-blue-400 transtion-color duration-200">
                <a href="https://twitter.com" target="_blank"><FontAwesomeIcon className="w-4 h-4" icon={faTwitter} /></a>
              </li>
              <li className="hover:text-pink-500 transtion-color duration-200">
                <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon className="w-4 h-4" icon={faInstagram} /></a>
              </li>
              <li className="hover:text-blue-700 transtion-color duration-200">
                <a href="https://www.linkedin.com" target="_blank"><FontAwesomeIcon className="w-4 h-4" icon={faPinterestP} /></a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-5">Categories</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Fruits & Vegetables</a></li>
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Dairy & Eggs</a></li>
              <li><a href="/brands" className="text-xl text-gray-600 hover:text-green-600">Bakery & Breads</a></li>
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Meat & Seafood</a></li>
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Beverages</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-5">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">About Us</a></li>
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-xl text-gray-600 hover:text-green-600">Privacy Policy</a></li>
              <li><Link href="/terms" className="text-xl text-gray-600 hover:text-green-600">Terms of Service</Link></li>
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Shipping Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-5">Customer Service</h2>
            <ul className="space-y-2">
              <li><a href="/profile" className="text-xl text-gray-600 hover:text-green-600">My Account</a></li>
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Order History</a></li>
              <li><a href="/wishlist" className="text-xl text-gray-600 hover:text-green-600">Wishlist</a></li>
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Returns & Refunds</a></li>
              <li><a href="#" className="text-xl text-gray-600 hover:text-green-600">Help Center</a></li>
            </ul>

          </div>
           </div>
        <div className="mt-6 flex justify-between items-center ">
          <span className=" text-gray-600">© 2023 FreshCart.All rights reserved.</span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6 text-green-600" />
          </span>
        </div>
      </div>
    </footer>
  </>
}