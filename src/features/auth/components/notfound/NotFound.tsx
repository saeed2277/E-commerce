import { faAppleWhole, faCartShopping, faComment, faDrumstickBite, faEgg, faEnvelope, faHouse, faMagnifyingGlass, faPhone, faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-start md:items-center flex-col justify-center pt-16">
      <div className="w-full max-w-4xl">
        <div className=" rounded-2xl  p-8 md:p-12 text-center">
          <div className="relative inline-block">
            <div className="text-[120px] md:text-[160px] leading-none font-bold text-green-100">404</div>
            <div className="absolute inset-0 top-5 flex items-center justify-center pointer-events-none">
              <FontAwesomeIcon icon={faCartShopping} className="text-green-600" size="2xl" />
            </div>
          </div>

          <h1 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">Oops! Page Not Found</h1>
          <p className="mt-2 text-gray-500 max-w-md mx-auto"><span className="font-semibold">The page you're looking for seems to have gone shopping!</span> Don't worry, our fresh products are still available for you.</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="relative">
                <Link href="/" className="inline-flex items-center gap-2 bg-green-600 text-white ps-9 px-5 py-2.5 rounded-md shadow hover:bg-green-700">Back to Home</Link>
                <FontAwesomeIcon icon={faHouse} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size="sm" />
            </div>

           <div className="relative">
             <Link href="/platform/products" className="inline-flex items-center gap-2 border border-green-600 text-green-600 ps-8 px-4 py-2.5 rounded-md hover:bg-green-50">Search Products</Link>
<FontAwesomeIcon icon={faMagnifyingGlass} className="text-green-600 absolute left-3 top-1/2 transform -translate-y-1/2 "size="sm" />
           </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Or explore our popular categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white shadow-sm rounded-lg p-2 flex flex-col items-center py-4">
                <div className="bg-green-200 p-2 rounded-full  text-green-600 mb-2">
                  <FontAwesomeIcon icon={faAppleWhole} />
                </div>
                <span className="text-sm text-gray-800 flex flex-col font-semibold"><span>Fruits &</span> Vegetables</span>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-2 flex flex-col items-center py-4">
                <div className="bg-green-200 p-2 rounded-full text-green-600 mb-2">
                  <FontAwesomeIcon icon={faEgg} />
                </div>
                <span className="text-sm text-gray-800 font-semibold">Dairy &amp; Eggs</span>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-2 flex flex-col items-center py-4">
                <div className="bg-green-200 p-2 rounded-full text-green-600 mb-2">
                  <FontAwesomeIcon icon={faShirt} />
                </div>
                <span className="text-sm text-gray-800 font-semibold">Bakery &amp; Snacks</span>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-2 flex flex-col items-center py-4">
                <div className="bg-green-200 p-2 rounded-full text-green-600 mb-2">
                  <FontAwesomeIcon icon={faDrumstickBite} />
                </div>
                <span className="text-sm text-gray-800 font-semibold">Meat &amp; Seafood</span>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-green-50 border border-green-100 rounded-lg p-6 text-center">
            <h3 className="font-bold text-gray-800 text-lg">Need Help?</h3>
            <p className="mt-2 text-gray-600">Our customer support team is here to assist you 24/7</p>
            <div className="mt-3 text-sm text-gray-700 flex flex-col sm:flex-row gap-4 justify-center">
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-green-600" />
                 +1 (800) 123-4567</span>
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-green-600" />
                support@freshcart.com</span>
              <span className="inline-flex items-center gap-1">
                <FontAwesomeIcon icon={faComment} className="text-green-600" />
                 Live Chat</span>
            </div>
          </div>

          
        </div>
      </div>
      <div className="w-full mt-10 bg-green-50 p-6 flex flex-col justify-center items-center gap-8">
            <div className="flex-1 text-center mt-10">
              <h4 className="font-bold text-gray-900 text-4xl mb-4">Subscribe to our Newsletter</h4>
              <p className="text-gray-500 text-xl">Stay updated with our latest offers, recipes, and health tips.</p>
            </div>
            <form className="flex w-full justify-center items-center " action="#">
              <label className="sr-only">Email address</label>
              <input type="email" placeholder="Your email address" className="bg-white w-full sm:w-72 lg:w-1/3 px-4 py-2 rounded-l border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <button className="bg-green-600 text-white px-4 py-2 rounded-r cursor-pointer">Subscribe</button>
            </form>
          </div>
    </main>
  )
}
