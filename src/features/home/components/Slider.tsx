"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slider1 from "../../../assets/images/home-slider-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export default function Slider() {
  return (
    <>
      <section className="relative bg-white">
        <div className="max-w-full ">
          <div className="relative overflow-hidden  h-[420px]  shadow-md">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="h-full"
            >
              <SwiperSlide>
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slider1.src})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/10 "></div>
                  <div className="relative h-full flex items-center">
                    <div className="max-w-xl ml-6 md:ml-12 p-6 md:p-12 text-white">
                      <h2 className="text-xl md:text-3xl font-semibold max-w-96">
                        Fresh Organic Produce Delivered to Your Door
                      </h2>
                      <p className="mt-3 text-sm md:text-base text-white/90">
                        Get 20% off on your first order with code: FRESH20
                      </p>
                      <div className="mt-6 flex gap-3">
                        <button className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold cursor-pointer">
                          Shop Now
                        </button>
                        <button className="border border-white/40 text-white px-4 py-2 font-semibold rounded-md cursor-pointer hover:text-green-600 hover:bg-white">
                          View Deals
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slider1.src})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/10"></div>
                  <div className="relative h-full flex items-center">
                    <div className="max-w-xl ml-6 md:ml-12 p-6 md:p-12 text-white">
                      <h2 className="text-xl md:text-3xl font-semibold">
                        Organic Vegetables & Fruits
                      </h2>
                      <p className="mt-3 text-sm md:text-base text-white/90">
                        Fresh from trusted farms, picked and delivered fast.
                      </p>
                      <div className="mt-6 flex gap-3">
                        <button className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold cursor-pointer">
                          Shop Now
                        </button>
                        <button className="border border-white/40 text-white px-4 py-2 font-semibold rounded-md cursor-pointer hover:text-green-600 hover:bg-white">
                          All Categories
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slider1.src})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-green-500/90 to-green-400/10"></div>
                  <div className="relative h-full flex items-center">
                    <div className="max-w-xl ml-6 md:ml-12 p-6 md:p-12 text-white">
                      <h2 className="text-xl md:text-3xl font-semibold">
                        Fresh Dairy & Bakery
                      </h2>
                      <p className="mt-3 text-sm md:text-base text-white/90">
                        Quality dairy and bakery products delivered to your
                        doorstep.
                      </p>
                      <div className="mt-6 flex gap-3">
                        <button className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold cursor-pointer">
                          Shop Now
                        </button>
                        <button className="border border-white/40 text-white px-4 py-2 rounded-md font-semibold cursor-pointer hover:text-green-600 hover:bg-white">
                          View Deals
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <button
              className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10
          bg-white/90 hover:bg-white text-green-600 w-12 h-12 rounded-full shadow-lg
          flex items-center justify-center transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button
              className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10
          bg-white/90 hover:bg-white text-green-600 w-12 h-12 rounded-full shadow-lg
          flex items-center justify-center transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
