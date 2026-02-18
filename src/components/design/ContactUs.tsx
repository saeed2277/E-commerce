import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faHeadset,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <section className="w-full my-10">
        <header className="bg-gradient-to-b from-emerald-600 to-green-500 text-white py-15">
          <div className="container mx-auto px-6">
            <nav className="text-sm text-white mb-4 font-semibold">
              <Link href="/" className="text-gray-300 hover:text-white mr-1">
                Home
              </Link>
              / Contact Us
            </nav>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="text-3xl text-white"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold ">Contact Us</h1>
                <p className="text-lg opacity-80 mt-2">
                  We'd love to hear from you. Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-6 mt-10 ">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* contact info cards */}
            <div className="space-y-6">
              <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex items-start space-x-4">
                <span className="text-green-600 text-xl w-6 h-6 flex items-center justify-center bg-green-50 p-6 rounded-2xl">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-sm text-gray-600">
                    Mon-Fri from 8am to 6pm
                  </p>
                  <p className="text-green-600 font-medium cursor-pointer">
                    +1 (800) 123-4567
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex items-start space-x-4">
                <span className="text-green-600 text-xl w-6 h-6 flex items-center justify-center bg-green-50 p-6 rounded-2xl">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-sm text-gray-600">
                    We'll respond within 24 hours
                  </p>
                  <p className="text-green-600 font-medium cursor-pointer">
                    support@freshcart.com
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex items-start space-x-4">
                <span className="text-green-600 text-xl w-6 h-6 flex items-center justify-center bg-green-50 p-6 rounded-2xl">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Office</h3>
                  <p className="text-sm text-gray-600">
                    123 Commerce Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex items-start space-x-4">
                <span className="text-green-600 text-xl w-6 h-6 flex items-center justify-center bg-green-50 p-6 rounded-2xl">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                  <p className="text-sm text-gray-600">
                    Monday - Friday: 8am - 6pm
                    <br />
                    Saturday: 9am - 4pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    className="text-gray-500 w-6 h-6 flex items-center justify-center bg-gray-100 p-5 rounded-full hover:bg-green-500 hover:text-white duration-300"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link
                    href="https://www.twitter.com"
                    target="_blank"
                    className="text-gray-500 w-6 h-6 flex items-center justify-center bg-gray-100 p-5 rounded-full hover:bg-green-500 hover:text-white duration-300"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    className="text-gray-500 w-6 h-6 flex items-center justify-center bg-gray-100 p-5 rounded-full hover:bg-green-500 hover:text-white duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="text-gray-500 w-6 h-6 flex items-center justify-center bg-gray-100 p-5 rounded-full hover:bg-green-500 hover:text-white duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
              </div>
            </div>

            {/* contact form */}
            <div>
              <div className="bg-white shadow rounded-lg p-8">
                <div className=" flex items-start gap-3">
                  <span className="text-green-600 text-xl w-6 h-6 flex items-center justify-center bg-green-50 p-6 rounded-2xl">
                    <FontAwesomeIcon icon={faHeadset} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Fill out the form and we'll get back to you
                    </p>
                  </div>
                </div>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2 outline-none focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-green-500 focus:border-green-500">
                      <option>Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Order Support</option>
                      <option>Shipping Questions</option>
                      <option>Returns & Refunds</option>
                      <option>Product Information</option>
                      <option>Feedback & Suggestions</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <button
                    type="button"
                    className="cursor-pointer w-1/5 inline-flex justify-center items-center gap-2 py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </button>
                </form>
              </div>
              <div className="mt-6 bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl w-6 h-6 flex items-center justify-center bg-white shadow p-6 rounded-2xl">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      Looking for quick answers?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Check out our Help Center for frequently asked questions
                      about orders, shipping, returns, and more.
                    </p>
                    <Link
                      href="/not-found"
                      className="text-green-600 font-medium"
                    >
                      Visit Help Center →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
