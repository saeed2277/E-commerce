import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLock,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      <div>
        <div className="mx-auto bg-white rounded-lg shadow-2xl w-full max-w-md lg:max-w-xl p-8 ">
          <div className="text-center mb-6">
            <div className="text-2xl font-bold ">
              <span className="text-green-600">Fresh</span>Cart
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">
              Welcome Back!
            </h2>
            <p className="text-sm text-gray-600">
              Sign in to continue your fresh shopping experience
            </p>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-3 px-4 hover:shadow-sm cursor-pointer">
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-3 px-4 hover:shadow-sm cursor-pointer">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
              Facebook
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="text-sm text-gray-500">OR CONTINUE WITH EMAIL</div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Email Address
              </label>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-3.5 text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-3 top-3.5 text-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                Keep me signed in
              </label>
              <Link
                href="/forgotpassword"
                className="text-green-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            New to FreshCart?{" "}
            <Link href="/signup" className="text-green-600 font-medium">
              Create an account
            </Link>
          </p>

          <div className="mt-6 text-center text-xs text-gray-500">
            <div className="flex items-center justify-center gap-4">
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faLock} /> SSL Secured
              </span>
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faUsers} /> 50K+ Users
              </span>
              <span className="inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} /> 4.9 Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
