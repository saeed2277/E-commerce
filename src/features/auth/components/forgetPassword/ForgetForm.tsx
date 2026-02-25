"use client";
import {
  faArrowLeft,
  faEnvelope,
  faKey,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useTransition } from "react";
import {
  forgetPasswordAction,
  verifyResetCodeAction,
} from "../../server/forgetpassword.action.";

export default function ForgetForm() {
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [step, setStep] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState("");

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    startTransition(async () => {
      const result = await forgetPasswordAction(email);

      if (result.success) {
        setStep(2);
      } else {
        setServerError(result.message);
      }
    });
  };

  const handleSubmitCode = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    startTransition(async () => {
      const result = await verifyResetCodeAction(email, resetCode);

      if (result.success) {
        setStep(3);
      } else {
        setServerError(result.message);
      }
    });
  };

  return (
    <div className="shadow-xl p-8 md:p-16 flex flex-col bg-white rounded-2xl ">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-green-600 ">
          Fresh<span className="text-gray-900">Cart</span>
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
          {step === 1 ? "Forgot Password?" : "Verify Code"}
        </h2>
        <p className="text-gray-600 text-md">
          {step === 1
            ? "No worries, we'll send you a reset code"
            : "Please enter the 6-digit code sent to your email"}
        </p>
      </div>

      <div className="flex items-center justify-center mb-12">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${step >= 1 ? "bg-green-600 text-white shadow-lg border-4 border-green-100" : "bg-gray-100 text-gray-400"}`}
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
        </div>

        <div
          className={`w-16 h-1 mx-1 transition-all duration-500 ${step >= 2 ? "bg-green-600" : "bg-gray-100"}`}
        ></div>

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${step >= 2 ? "bg-green-600 text-white shadow-lg border-4 border-green-100" : "bg-gray-100 text-gray-400"}`}
        >
          <FontAwesomeIcon icon={faKey} className="w-5 h-5" />
        </div>

        <div
          className={`w-16 h-1 mx-1 transition-all duration-500 ${step >= 3 ? "bg-green-600" : "bg-gray-100"}`}
        ></div>

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${step >= 3 ? "bg-green-600 text-white shadow-lg border-4 border-green-100" : "bg-gray-100 text-gray-400"}`}
        >
          <FontAwesomeIcon icon={faLock} className="w-5 h-5" />
        </div>
      </div>

      {step === 1 ? (
        <form className="space-y-6" onSubmit={handleSubmitEmail}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="block w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:border-green-400 outline-none transition-all"
                placeholder="Enter your email address"
              />
            </div>
            {serverError && (
              <p className="text-red-500 text-xs mt-2 ml-1">{serverError}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
          >
            {isPending ? "Sending..." : "Send Reset Code"}
          </button>
        </form>
      ) : step === 2 ? (
        <form className="space-y-6" onSubmit={handleSubmitCode}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              Reset Code
            </label>
            <div className="relative group">
              <div className="absolute top-5 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FontAwesomeIcon icon={faKey} />
              </div>
              <input
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                type="text"
                maxLength={6}
                required
                className={`block w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:border-green-400 outline-none transition-all tracking-[0.5em] font-bold text-center ${
                  serverError ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="000000"
              />
              {serverError && (
                <p className="text-red-500 text-xs mt-2 ml-1 font-medium animate-pulse">
                  {serverError}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
          >
            Verify Code
          </button>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full text-gray-400 text-xs hover:text-green-600 transition-colors cursor-pointer"
          >
            Didn't get a code? Resend
          </button>
        </form>
      ) : (
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
              New Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                type="password"
                required
                className="block w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-200 rounded-2xl focus:border-green-400 outline-none transition-all"
                placeholder="Enter new password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
          >
            Update Password
          </button>
        </form>
      )}

      <div className="mt-auto pt-10 text-center">
        <Link
          href="/login"
          className="text-[#10B981] text-sm font-bold flex items-center justify-center gap-2 hover:opacity-80"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" /> Back to
          Sign In
        </Link>
      </div>
    </div>
  );
}
