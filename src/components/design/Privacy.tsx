import {
  faArrowLeft,
  faArrowRight,
  faArrowRotateLeft,
  faClock,
  faCookie,
  faEnvelope,
  faLayerGroup,
  faLock,
  faScaleBalanced,
  faShareAlt,
  faShieldHalved,
  faUserCheck,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <div className="w-full">
        <header className="bg-gradient-to-b from-emerald-600 to-green-500 text-white py-15">
          <div className="container mx-auto px-6">
            <nav className="text-sm text-white mb-4 font-semibold">
              <Link href="/" className="text-gray-300 hover:text-white mr-1">
                Home
              </Link>
              / Privacy Policy
            </nav>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-3xl text-white"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold ">Privacy Policy</h1>
                <p className="text-lg opacity-90 mt-2">
                  Last updated: February 2026
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 mt-10 ">
          <section className="mb-8 ">
            <div className="bg-green-50 border border-green-300 rounded-2xl shadow-sm p-4 md:p-8">
              <div className="flex items-center gap-4">
                <div className=" bg-green-500 rounded-xl p-3">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className=" text-white"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-900">
                    Your Privacy Matters
                  </h3>
                  <p className="text-lg font-semibold text-green-800 mt-1">
                    This Privacy Policy describes how FreshCart collects, uses,
                    and protects your personal information when you use our
                    services. We are committed to ensuring that your privacy is
                    protected.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                <div>
                  <p className="text-xs text-emerald-700 uppercase  mb-0">
                    Article 1
                  </p>
                  <h2 className="font-bold text-lg">Information We Collect</h2>
                </div>
              </div>
              <ol className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    1.1
                  </span>
                  <span className="text-md">
                    <span className="font-bold">Personal Data:</span> Name,
                    email address, phone number, and shipping address.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    1.2
                  </span>
                  <span className="text-md">
                    <span className="font-bold">Payment Data:</span> Credit card
                    information processed securely through our payment
                    providers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    1.3
                  </span>
                  <span className="text-md">
                    <span className="font-bold">Technical Data:</span> IP
                    address, browser type, device information, and access times.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    1.4
                  </span>
                  <span className="text-md">
                    <span className="font-bold">Usage Data:</span> Pages viewed,
                    products browsed, and actions taken within our platform.
                  </span>
                </li>
              </ol>
            </article>

            <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                  <FontAwesomeIcon icon={faUserShield} />
                </div>
                <div>
                  <p className="text-xs text-emerald-700 uppercase tracking-wide mb-0">
                    Article 2
                  </p>
                  <h2 className="font-semibold text-xl">
                    How We Use Your Information
                  </h2>
                </div>
              </div>
              <ol className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    2.1
                  </span>
                  <span>To process and fulfill your orders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    2.2
                  </span>
                  <span>To send order confirmations and shipping updates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    2.3
                  </span>
                  <span>
                    To provide customer support and respond to inquiries.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    2.4
                  </span>
                  <span>
                    To improve our products, services, and user experience.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    2.5
                  </span>
                  <span>
                    To send promotional communications (with your consent).
                  </span>
                </li>
              </ol>
            </article>

            <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                  <FontAwesomeIcon icon={faLock} />
                </div>

                <div>
                  <p className="text-xs text-emerald-700 uppercase tracking-wide mb-0">
                    Article 3
                  </p>
                  <h2 className="font-bold text-xl">Data Protection</h2>
                </div>
              </div>
              <ol className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    3.1
                  </span>
                  <span>
                    We implement industry-standard encryption (SSL/TLS) for all
                    data transfers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    3.2
                  </span>
                  <span>
                    Payment information is processed by PCI-compliant payment
                    providers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    3.3
                  </span>
                  <span>
                    We conduct regular security audits and vulnerability
                    assessments.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    3.4
                  </span>
                  <span>
                    Access to personal data is restricted to authorized
                    personnel only.
                  </span>
                </li>
              </ol>
            </article>

            <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                  <FontAwesomeIcon icon={faShareAlt} />
                </div>

                <div>
                  <p className="text-xs text-emerald-700 uppercase tracking-wide mb-0">
                    Article 4
                  </p>
                  <h2 className="font-bold text-xl">Information Sharing</h2>
                </div>
              </div>
              <ol className="space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    4.1
                  </span>
                  <span>
                    We do not sell, trade, or rent your personal information to
                    third parties.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    4.2
                  </span>
                  <span>
                    We may share data with trusted service providers who assist
                    in our operations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    4.3
                  </span>
                  <span>
                    We may disclose information when required by law or to
                    protect our rights.
                  </span>
                </li>
              </ol>
            </article>

            <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                  <FontAwesomeIcon icon={faUserCheck} />
                </div>

                <div>
                  <p className="text-xs text-emerald-700 uppercase tracking-wide mb-0">
                    Article 5
                  </p>
                  <h2 className="font-bold text-xl">Your Rights</h2>
                </div>
              </div>
              <ol className="space-y-1 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    5.1
                  </span>
                  <span>
                    <span className="font-bold">Access:</span> Request a copy of
                    your personal data.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    5.2
                  </span>
                  <span>
                    <span className="font-bold">Rectification:</span> Request
                    correction of inaccurate data.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    5.3
                  </span>
                  <span>
                    <span className="font-bold">Erasure:</span> Request deletion
                    of your personal data.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    5.4
                  </span>
                  <span>
                    <span className="font-bold">Portability:</span> Request your
                    data in a portable format.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs font-semibold">
                    5.5
                  </span>
                  <span>
                    <span className="font-bold">Opt-out:</span> Unsubscribe from
                    marketing communications at any time.
                  </span>
                </li>
              </ol>
            </article>
            <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                  <FontAwesomeIcon icon={faCookie} />
                </div>

                <div>
                  <p className="text-xs text-emerald-700 uppercase tracking-wide mb-0">
                    Article 6
                  </p>
                  <h2 className="font-bold text-xl">Cookies</h2>
                </div>
              </div>
              <ol className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">
                    6.1
                  </span>
                  <span>
                    We use cookies to enhance your browsing experience and
                    remember preferences.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">
                    6.2
                  </span>
                  <span>
                    You can control cookie settings through your browser
                    preferences.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-none w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xs">
                    6.3
                  </span>
                  <span>
                    Disabling cookies may affect the functionality of certain
                    features.
                  </span>
                </li>
              </ol>
            </article>
            <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                  <FontAwesomeIcon icon={faClock} />
                </div>

                <div>
                  <p className="text-xs text-emerald-700 uppercase tracking-wide mb-0">
                    Article 7
                  </p>
                  <h2 className="font-bold text-xl">Data Retention</h2>
                </div>
              </div>
              <p className="text-md text-slate-600">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy, or as
                required by law. Account data is deleted within 30 days of
                account closure upon request.
              </p>
            </article>
            <article className="group bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center group-hover:text-white group-hover:bg-emerald-500 duration-300 justify-center text-emerald-600">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div>
                  <p className="text-xs text-emerald-700 uppercase tracking-wide mb-0">
                    Article 8
                  </p>
                  <h2 className="font-bold text-xl">Contact Us</h2>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                For questions about this Privacy Policy or to exercise your
                rights, contact our Data Protection Officer at
                <a
                  href="mailto:contact@freshcart.com"
                  className="text-emerald-600 hover:underline ml-0.5"
                >
                  contact@freshcart.com
                </a>
              </p>
            </article>
          </section>
          <div className="my-12 border-t border-gray-200 pt-8 lg:flex items-center justify-between">
            <Link href="/">
              <span className="text-gray-800 bg-gray-100 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 mb-2">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-sm text-gray-600"
                />
                Back to Home
              </span>
            </Link>

            <Link href="/terms">
              <span className="text-white bg-green-500 px-5 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300">
                View Terms of Service
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm text-white"
                />
              </span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
