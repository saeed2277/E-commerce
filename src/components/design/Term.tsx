import { faArrowLeft, faArrowRight, faArrowRotateLeft, faCreditCard, faEnvelope, faFileContract, faHandshake, faIdCard, faScaleBalanced, faTruck, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function Term() {
  return <>
    <div className="w-full">
      <header className="bg-gradient-to-r from-emerald-500 to-green-400 text-white py-12">
        <div className="container mx-auto px-6">
          <nav className="text-sm text-emerald-100 mb-4"><Link href="/" className="hover:text-white">Home</Link> / Terms of Service</nav>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
<FontAwesomeIcon icon={faFileContract} className="text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold ">Terms of Service</h1>
              <p className="text-sm opacity-90 mt-1">Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 mt-10 ">
        <section className="mb-8 ">
          <div className="bg-yellow-50 border border-yellow-300 rounded-2xl shadow-sm p-4 md:p-6">
            <div className="flex items-center gap-4">
              <div className=" bg-orange-400 rounded-xl p-3">
<FontAwesomeIcon icon={faFileContract} className=" text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-800">Important Notice</h3>
                <p className="text-sm text-yellow-700 mt-1">By accessing and using FreshCart, you accept and agree to be bound by the terms and provisions of this agreement. Please read these terms carefully before using our services.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
<FontAwesomeIcon icon={faHandshake} />
              </div>
              <div>
                <p className="text-xs text-emerald-400 uppercase  mb-0">Article 1</p>
                <h2 className="font-semibold text-lg">Acceptance of Terms</h2>
              </div>
            </div>
            <ol className="space-y-1 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">1.1</span>
                <span className="text-xs">By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">1.2</span>
                <span className="text-xs">If you do not agree to these Terms, you must not access or use the Service.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">1.3</span>
                <span className="text-xs">We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.</span>
              </li>
            </ol>
          </article>

          <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                <FontAwesomeIcon icon={faUserCheck} />
              </div>
              <div>
                <p className="text-xs text-emerald-400 uppercase tracking-wide mb-0">Article 2</p>
                <h2 className="font-semibold text-lg">User Eligibility</h2>
              </div>
            </div>
            <ol className="space-y-1 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">2.1</span>
                <span>The Service is intended for users who are at least eighteen (18) years of age.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">2.2</span>
                <span>By using the Service, you represent and warrant that you are of legal age to form a binding contract.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">2.3</span>
                <span>If you are accessing the Service on behalf of a legal entity, you represent that you have the authority to bind such entity.</span>
              </li>
            </ol>
          </article>

          <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                <FontAwesomeIcon icon={faIdCard} />
              </div>
              
              <div>
                <p className="text-xs text-emerald-400 uppercase tracking-wide mb-0">Article 3</p>
                <h2 className="font-semibold text-lg">Account Registration</h2>
              </div>
            </div>
            <ol className="space-y-1 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">3.1</span>
                <span>You may be required to create an account to access certain features of the Service.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">3.2</span>
                <span>You agree to provide accurate, current, and complete information during registration.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">3.3</span>
                <span>You are solely responsible for maintaining the confidentiality of your account credentials.</span>
              </li>
            </ol>
          </article>

          <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
              
              <div>
                <p className="text-xs text-emerald-400 uppercase tracking-wide mb-0">Article 4</p>
                <h2 className="font-semibold text-lg">Orders and Payments</h2>
              </div>
            </div>
            <ol className="space-y-1 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">4.1</span>
                <span>All orders placed through the Service are subject to acceptance and availability.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">4.2</span>
                <span>Prices are subject to change without notice prior to order confirmation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">4.3</span>
                <span>Payment must be made in full at the time of purchase through approved payment methods.</span>
              </li>
            </ol>
          </article>

          <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              
              <div>
                <p className="text-xs text-emerald-400 uppercase tracking-wide mb-0">Article 5</p>
                <h2 className="font-semibold text-lg">Shipping and Delivery</h2>
              </div>
            </div>
            <ol className="space-y-1 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">5.1</span>
                <span>Shipping times are estimates only and are not guaranteed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">5.2</span>
                <span>Risk of loss and title for items purchased pass to you upon delivery to the carrier.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">5.3</span>
                <span>We are not responsible for delays caused by carriers, customs, or other factors beyond our control.</span>
              </li>
            </ol>
          </article>
                    <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                <FontAwesomeIcon icon={faArrowRotateLeft} />
              </div>
              
              <div>
                <p className="text-xs text-emerald-400 uppercase tracking-wide mb-0">Article 6</p>
                <h2 className="font-semibold text-lg">Returns and Refunds</h2>
              </div>
            </div>
            <ol className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">6.1</span>
                <span>Our return policy allows returns within 14 days of delivery for most items.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">6.2</span>
                <span>Products must be unused and in original packaging.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">6.3</span>
                <span>Refunds will be processed within 5-7 business days after receiving the returned item.</span>
              </li>
            </ol>
          </article>
                    <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                <FontAwesomeIcon icon={faScaleBalanced} />
              </div>
              
              <div>
                <p className="text-xs text-emerald-400 uppercase tracking-wide mb-0">Article 7</p>
                <h2 className="font-semibold text-lg">Limitation of Liability</h2>
              </div>
            </div>
          <p className="text-sm text-slate-600">To the maximum extent permitted by applicable law, FreshCart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
          </article>
                    <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
             
              <div>
                <p className="text-xs text-emerald-400 uppercase tracking-wide mb-0">Article 8</p>
                <h2 className="font-semibold text-lg">Contact Us</h2>
              </div>
             </div>
          <p className="text-sm text-slate-600">If you have any questions about these Terms, please contact us at <a href="mailto:contact@freshcart.com" className="text-emerald-600 hover:underline">contact@freshcart.com</a></p>
          </article>





        </section>
        <div className="my-12 border-t border-gray-200 pt-8 flex items-center justify-between">
          <Link href="/">
            <span className="text-gray-800 bg-gray-100 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300"><FontAwesomeIcon icon={faArrowLeft} className="text-sm text-gray-600" /> Back to Home</span>
          </Link>
         
      <Link href="/privacy-policy">
            <span className="text-white bg-green-500 px-5 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300">View Privacy Policy <FontAwesomeIcon icon={faArrowRight} className="text-sm text-white" /></span>
          </Link>
        </div>
      </main>
    </div>
  </>
}
