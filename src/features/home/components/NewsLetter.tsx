import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faCheck,
  faSquare,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewsLetter() {
  return (
    <>
      <section className="max-w-11/12 lg:max-w-9/12 mx-auto bg-green-50 rounded-2xl p-8 md:p-12 shadow-2xl shadow-green-50 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/60 rounded-lg shadow-inner">
                <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
              </div>
              <div>
                <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wide">
                  Newsletter
                </p>
                <p className="text-xs text-gray-400">50,000+ subscribers</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold  text-gray-900 mb-3">
              Get the Freshest Updates{" "}
              <span className="text-emerald-600">Delivered Free</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="flex items-center gap-2 bg-white/80 border border-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm">
                <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                Fresh Picks Weekly
              </span>
              <span className="flex items-center gap-2 bg-white/80 border border-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm">
                <FontAwesomeIcon icon={faTruck} className="text-green-500" />
                Free Delivery Codes
              </span>
              <span className="flex items-center gap-2 bg-white/80 border border-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm">
                <FontAwesomeIcon icon={faUser} className="text-green-500" />
                Members-Only Deals
              </span>
            </div>

            <form className=" md:flex items-center gap-1 lg:max-w-xl">
              <input
                aria-label="email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 mb-1.5 rounded-xl bg-white border border-emerald-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
              <button
                type="button"
                className="cursor-pointer inline-flex items-center gap-3 bg-emerald-600 text-white px-3 py-3 rounded-lg shadow hover:bg-emerald-700"
              >
                Subscribe
<FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-3 flex items-center gap-2">
              <span className="text-yellow-400">✦</span> Unsubscribe anytime. No
              spam, ever.
            </p>
          </div>

          <div className="hidden md:block md:col-span-1 border-l border-emerald-100 h-64 mx-4"></div>

          <div className="md:col-span-4">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm uppercase bg-emerald-700/20 text-emerald-300 px-3 py-1 rounded-full">
                  Mobile App
                </div>
                <div className="text-sm text-emerald-300">
                  Shop Faster on Our App
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6">
                Get app-exclusive deals & 15% off your first order.
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 bg-white/6 px-4 py-3 rounded-lg">
                  <FontAwesomeIcon icon={faApple} />
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Download on</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/6 px-4 py-3 rounded-lg">
                  <FontAwesomeIcon icon={faSquare} />
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <div className="text-yellow-400 flex items-center gap-0">
                  <FontAwesomeIcon icon={faStar} size="sm" />
                  <FontAwesomeIcon icon={faStar} size="sm" />
                  <FontAwesomeIcon icon={faStar} size="sm" />
                  <FontAwesomeIcon icon={faStar} size="sm" />
                  <FontAwesomeIcon icon={faStar} size="sm" />
                </div>
                <div className="text-slate-300 text-sm">
                  4.9 · 100k+ downloads
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
