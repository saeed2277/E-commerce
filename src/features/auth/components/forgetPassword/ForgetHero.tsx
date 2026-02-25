import {
  faEnvelope,
  faLock,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ForgetHero() {
  return (
    <>
      <div className=" p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="rounded-2xl bg-green-50 w-full py-30 shadow-xl relative mb-3">
          <div className="absolute top-5 left-5 w-20 h-20 bg-green-100 rounded-full  opacity-75"></div>
          <div className="absolute top-20 right-20 w-15 h-15 bg-green-100 rounded-full opacity-75"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-75 "></div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-white p-3 rounded-2xl shadow-sm -rotate-12 border border-green-50">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-6 h-6 text-green-500"
                />
              </div>
              <div className="bg-white p-2 rounded-2xl shadow-xl z-20 border border-green-100 transform scale-110">
                <FontAwesomeIcon
                  icon={faLock}
                  className="w-6 h-6 rounded-xl text-green-600 bg-green-100 p-4 text-3xl"
                />
              </div>
              <div className="bg-white p-3 rounded-2xl shadow-sm rotate-12 border border-green-50">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="w-6 h-6 text-green-500"
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-10">
              <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse [animation-delay:-0.3s]"></span>

              <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse [animation-delay:-0.15s]"></span>

              <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse"></span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Reset Your Password
        </h2>
        <p className="text-gray-600 text-lg  mb-10">
          Don't worry, it happens to the best of us. We'll help you get back
          into your account in no time.
        </p>

        {/* مميزات سريعة */}
        <div className="flex items-center justify-center gap-6  font-semibold text-gray-600">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-6 h-6 text-green-600"
            />
            Email Verification
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="w-6 h-6 text-green-600"
            />
            Secure Reset
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faLock}
              className="w-6 h-6  text-green-600"
            />
            Encrypted
          </div>
        </div>
      </div>
    </>
  );
}
