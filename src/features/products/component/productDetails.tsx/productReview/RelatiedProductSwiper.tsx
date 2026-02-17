"use client";

import { Product } from "../../../type/product.type";
import ProductCaart from "../../ProductCaart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
export default async function RelatiedProduct({
  product,
}: {
  product: Product[];
}) {
  return (
    <>
      <section className="py-12 px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-2">
              <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-green-500 to-green-900 rounded-full mr-1"></span>
              You May Also <span className="text-green-600">Like</span>
            </h2>
            <div>
              <button className="swiper-button-next-custom w-9 h-9 bg-gray-200 rounded-full hover:bg-green-100 hover:text-green-500 hover:transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="swiper-button-prev-custom w-9 h-9 bg-gray-200 rounded-full hover:bg-green-100 hover:text-green-500 hover:transition-colors cursor-pointer ml-2">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <div className="">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-prev-custom",
                prevEl: ".swiper-button-next-custom",
              }}
              spaceBetween={10}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
              loop={true}
            >
              {product.map((relatedProduct) => (
                <SwiperSlide>
                  <ProductCaart
                    key={relatedProduct._id}
                    info={relatedProduct}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
