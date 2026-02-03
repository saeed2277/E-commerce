"use client";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { formData, SignupSchema } from "../../schemas/Signup.schema";
import signupAction from "../../server/signup.action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<formData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    resolver: zodResolver(SignupSchema),

    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<formData> = async (values) => {
    try {
      const response = await signupAction(values);
      if (response?.success) {
        toast.success(response.message);
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      } else {
        if (response?.errors) {
          Object.keys(response.errors).forEach((field) => {
            setError(field as keyof formData, {
              message: response.errors[field],
            });
          });
        } else {
          toast.error(response?.message);
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-md lg:max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600">Star your fresh journey with us today</p>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} />
            Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-200 cursor-pointer">
            <FontAwesomeIcon icon={faGoogle} className="text-red-600" />
            Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-600 text-lg">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">
                *{errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                *{errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                *{errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              {...register("rePassword")}
            />
            {errors.rePassword && (
              <p className="text-red-600 text-sm mt-1">
                *{errors.rePassword.message}
              </p>
            )}
          </div>
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">
                *{errors.phone.message}
              </p>
            )}
          </div>

          {/* Privacy Checkbox */}
          <div className="flex flex-col items-start gap-0.5">
            <div>
              <input
                type="checkbox"
                id="privacy"
                className="h-4 w-4 mt-1 me-2 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                {...register("terms")}
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Term of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-600 text-sm ">*{errors.terms.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 mt-6 cursor-pointer flex items-center justify-center gap-2 "
          >
            <FontAwesomeIcon icon={faUserPlus} />
            Create My Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
