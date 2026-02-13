"use client";
import Image from "next/image";
import logo from "../../assets/images/freshcart-logo.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPhone,
  faEnvelope,
  faUserPlus,
  faBars,
  faAngleDown,
  faPerson,
  faPersonDress,
  faBabyCarriage,
  faBriefcaseMedical,
  faEllipsis,
  faXmark,
  faCartShopping,
  faShoppingCart,
  faBolt,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faIdCard, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "@/src/store/store";
import uselogout from "@/src/hooks/uselogout";

export default function Navbar() {
  const {logout}= uselogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthentication } = useSelector(
    (appState: AppState) => appState.auth,
  );
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <>
      <nav className="sticky top-0 z-50 bg-white ">
        <div className=" container mx-auto ">
          <div className="hidden lg:flex justify-between items-center pb-2 pt-2 border-b border-gray-300 ">
            <div className="flex space-x-6">
              <span className="flex">
                <FontAwesomeIcon icon={faPhone} className="mt-1 w-3 h-3" />
                <span className="ml-2 text-sm text-gray-600">
                  +1-(800)-123-4567
                </span>
              </span>
              <span className="flex ">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 w-3 h-3" />
                <span className="ml-2 text-sm text-gray-600">
                  support@freshcart.com
                </span>
              </span>
            </div>
            <div>
              <ul className="flex mt-2 md:mt-0">
                <li className=" mx-2 text-sm text-gray-600 hover:text-green-600 ">
                  Track Order
                </li>
                <li className=" mx-2 text-sm text-gray-600 hover:text-green-600 ">
                  About
                </li>
                <li className=" mx-2 text-sm text-gray-600 hover:text-green-600  ">
                  Contact
                </li>
                <li className=" mx-2 text-sm text-gray-600 hover:text-green-600 cursor-pointer flex items-center space-x-1">
                  <span>EGY</span>
                  <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3" />
                </li>
                <li className=" mx-2 text-sm text-gray-600 hover:text-green-600 cursor-pointer flex items-center space-x-1">
                  <span>English</span>
                  <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center h-22 px-4 md:px-0 ">
            <h1>
              <Image
                src={logo}
                alt="FreshCart Logo"
                width={120}
                height={32}
                className="md:w-32 h-auto object-contain"
              />
            </h1>

            <div className=" w-1/2  mx-auto  hidden lg:flex">
              <div className="w-3/4 relative left-1/8">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 md:py-3 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-green-600 text-sm md:text-base"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-4 h-4 absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <div className="  items-center gap-8 hidden lg:flex">
              <Link
                href="/wishlist"
                className="relative p-1 md:p-2 cursor-pointer hover:text-green-600 transition text-gray-700"
              >
                <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                <span className="text-gray-600 absolute -bottom-4 -right-2 flex items-center justify-center text-sm">
                  Wishlist
                </span>
              </Link>
              <Link
                href="/cart"
                className="relative p-1 md:p-2 cursor-pointer hover:text-green-600 transition text-gray-700"
              >
                <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                  0
                </span>
                <span className="text-gray-600 absolute -bottom-4 right-1 flex items-center justify-center text-sm">
                  Cart
                </span>
              </Link>
              <Link
                href="/profile"
                className="relative p-1 md:p-2 cursor-pointer hover:text-green-600 transition text-gray-700"
              >
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                <span className="text-gray-600 absolute -bottom-4 -right-1 flex items-center justify-center text-sm">
                  Acount
                </span>
              </Link>

              {isAuthentication ? (
                <Link
                onClick={logout}
                  href=""
                  className="relative p-1 md:p-2 cursor-pointer hover:text-red-600 transition text-gray-700 "
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="w-5 h-5"
                  />
                  <span className="text-gray-600 absolute -bottom-4 right-0 flex items-center justify-center text-sm">
                    Logout
                  </span>
                </Link>
              ) : (
                <>
                  <Link
                    href="/signup"
                    className="relative p-1 md:p-2 cursor-pointer hover:text-green-600 transition text-gray-700 "
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="w-6 h-6" />
                    <span className="text-gray-600 absolute -bottom-4 right-0 flex items-center justify-center text-sm">
                      Signup
                    </span>
                  </Link>
                  <Link
                    href="/login"
                    className="relative p-1 md:p-2 cursor-pointer hover:text-green-600 transition text-gray-700 "
                  >
                    <FontAwesomeIcon icon={faIdCard} className="w-5 h-5" />
                    <span className="text-gray-600 absolute -bottom-4 right-0 flex items-center justify-center text-sm">
                      Login
                    </span>
                  </Link>
                </>
              )}
            </div>
            <button
              className="lg:hidden bg-green-500 text-white p-1.5 rounded-lg cursor-pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} className="w-6 h-6 " />
              ) : (
                <FontAwesomeIcon icon={faBars} className="w-6 h-6 " />
              )}
            </button>
          </div>
        </div>
        <div className=" space-x-2 bg-gray-100 py-3 hidden lg:flex">
          <div className=" container mx-auto flex gap-4 items-center ">
            <div className="relative group">
              <button
                type="button"
                className=" bg-green-500 text-white px-4 py-2 cursor-pointer rounded-lg flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faAngleDown} className="w-4 h-4" />
              </button>
              <menu className="hidden group-hover:block absolute p-3 rounded-lg bg-white shadow-lg divide-y-2 divide-gray-100 *:hover:bg-gray-100">
                <li>
                  <Link href="" className="flex gap-1 items-center">
                    <FontAwesomeIcon
                      icon={faPerson}
                      className="w-3 h-3 text-green-600"
                    />
                    <span> Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link href="" className="flex gap-1 items-center">
                    <FontAwesomeIcon
                      icon={faPersonDress}
                      className="w-3 h-3 text-green-600"
                    />
                    <span> Women's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link href="" className="flex gap-1 items-center">
                    <FontAwesomeIcon
                      icon={faBabyCarriage}
                      className="w-3 h-3 text-green-600"
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link href="" className="flex gap-1 items-center">
                    <FontAwesomeIcon
                      icon={faBriefcaseMedical}
                      className="w-3 h-3 text-green-600"
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link href="" className="flex gap-1 items-center">
                    <FontAwesomeIcon
                      icon={faBolt}
                      className="w-3 h-3 text-green-600"
                    />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link href="" className="flex gap-1 items-center">
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="w-3 h-3 text-green-600"
                    />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </menu>
            </div>
            <ul className="flex space-x-6 py-3 text-gray-500">
              <li className=" hover:text-green-500 transition-colors duration-300 ">
                <Link href="/">Home</Link>
              </li>
              <li className=" hover:text-green-500 transition-colors duration-300 ">
                <Link href="/products/id">Recently Added</Link>
              </li>
              <li className=" hover:text-green-500 transition-colors duration-300 ">
                <Link href="/products/id">Featured Products</Link>
              </li>
              <li className=" hover:text-green-500 transition-colors duration-300 ">
                <Link href="/">Offers</Link>
              </li>
              <li className=" hover:text-green-500 transition-colors duration-300 ">
                <Link href="/brands">Brands</Link>
              </li>
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <>
            <div
              className=" background fixed inset-0 bg-black/50 z-20 cursor-pointer"
              onClick={toggleMenu}
            ></div>
            <div className=" offcanvas fixed top-0 bottom-0 z-50 bg-white p-6 w-2/3 ">
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-4">
                <Image
                  src={logo}
                  alt="FreshCart Logo"
                  width={120}
                  height={32}
                  className="md:w-32 h-auto object-contain"
                />
                <button
                  className=" bg-gray-200 p-1.5 rounded-full cursor-pointer"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                </button>
              </div>
              <div className=" w-full mx-auto mb-3">
                <div className="w-full relative ">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2  rounded-xl border-2 border-gray-300 focus:outline-none focus:border-green-600 text-sm md:text-base"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="w-4 h-4 absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-5">Main Menu</h2>
                <ul>
                  <li className="mb-10 hover:bg-gray-100 p-1">
                    <Link
                      href="/wishlist"
                      className=" flex gap-2 cursor-pointer hover:text-green-600 transition text-gray-700"
                    >
                      <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                      <span className="text-gray-600 ">Wishlist</span>
                    </Link>
                  </li>
                  <li className="mb-9 hover:bg-gray-100 p-1">
                    <Link
                      href="/cart"
                      className="relative flex gap-2 cursor-pointer hover:text-green-600 transition text-gray-700"
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="w-6 h-6"
                      />
                      <span className="absolute -top-2 left-4 bg-green-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        0
                      </span>
                      <span className="text-gray-600">Cart</span>
                    </Link>
                  </li>
                  <li className="mb-5 hover:bg-gray-100 p-1">
                    <Link
                      href="/profile"
                      className="flex gap-2 cursor-pointer hover:text-green-600 transition text-gray-700"
                    >
                      <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                      <span className="text-gray-600 ">Acount</span>
                    </Link>
                  </li>
                </ul>
                <div>
                  <h2 className="text-lg font-semibold mb-5">Account</h2>
                  <ul>
                    {isAuthentication ? 
                        <li className="mt-9 hover:bg-gray-100 p-1" onClick={logout}>
                          <Link
                            href=""
                            className="flex gap-2 cursor-pointer hover:text-red-600 transition text-gray-700"
                          >
                            <FontAwesomeIcon
                              icon={faArrowRightFromBracket}
                              className="w-5 h-5"
                            />
                            <span className="text-gray-600">Logout</span>
                          </Link>
                        </li>
                     : 
                      <>
                      <li className="mb-9 hover:bg-gray-100 p-1">
                        <Link
                          href="/signup"
                          className="flex gap-2 cursor-pointer hover:text-green-600 transition text-gray-700 "
                        >
                          <FontAwesomeIcon
                            icon={faUserPlus}
                            className="w-6 h-6"
                          />
                          <span className="text-gray-600 ">Signup</span>
                        </Link>
                      </li>
                      
                        <li className="mb-9 hover:bg-gray-100 p-1">
                          <Link
                            href="/login"
                            className="flex gap-2 cursor-pointer hover:text-green-600 transition text-gray-700 "
                          >
                            <FontAwesomeIcon
                              icon={faIdCard}
                              className="w-6 h-6"
                            />
                            <span className="text-gray-600 ">Login</span>
                          </Link>
                        </li>

                      </>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
