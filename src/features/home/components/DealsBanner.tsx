import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function DealsBanner() {
  return <>
    <section className="max-w-9/12 mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden p-8 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white">
          <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
            <span className="text-yellow-300">🔥</span>
            Deal of the Day
          </span>

          <h3 className="mt-3 text-3xl sm:text-4xl font-bold ">Fresh Organic Fruits</h3>
          <p className="mt-3 text-md opacity-90">Get up to 40% off on selected organic fruits</p>

          <div className="mt-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-2xl sm:text-4xl font-bold">40% <span className="text-2xl sm:text-4xl font-bold">OFF</span></div>
              <div className="mt-1 text-sm opacity-90">Use code: <span className="font-bold">ORGANIC40</span></div>
            </div>

            <Link href="/categories" className="ml-auto inline-flex items-center gap-3 bg-white text-emerald-700 px-3 py-2 lg:px-5 lg:py-3 rounded-full font-medium shadow hover:bg-gray-200 hover:text-emerald-700">
              <span>Shop Now</span>
              <span className="text-emerald-500"><FontAwesomeIcon icon={faArrowRight} /></span>
            </Link>
          </div>

        </div>

        <div className="rounded-2xl overflow-hidden p-8 bg-gradient-to-r from-orange-400 to-orange-600 text-white">
          <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
            <span className="text-yellow-200">✨</span>
            New Arrivals
          </span>

          <h3 className="mt-3 text-3xl sm:text-4xl font-bold">Exotic Vegetables</h3>
          <p className="mt-3 text-md opacity-90">Discover our latest collection of premium vegetables</p>

          <div className="mt-3 ">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-2xl sm:text-4xl font-bold">25% <span className="text-2xl sm:text-4xl font-bold">OFF</span></div>
              <div className="mt-1 text-sm opacity-90">Use code: <span className="font-bold">FRESH25</span></div>
            </div>

            <Link href="/categories" className="ml-auto inline-flex items-center gap-3 bg-white text-orange-600 px-2 py-2 lg:px-5 lg:py-3 rounded-full font-medium shadow hover:bg-gray-200 hover:text-orange-600">
              <span>Explore Now</span>
              <span className="text-orange-600"><FontAwesomeIcon icon={faArrowRight} /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
}
