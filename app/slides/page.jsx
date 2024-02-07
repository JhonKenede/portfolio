"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import { images } from "@/app/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  return (
    <section className="py-12">
      <div>
        <Swiper
          grabCursor={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Autoplay, Navigation, Pagination]}
          slidesPerView={"auto"}
          freeMode={true}
          autoplay={{ delay: 5500 }}
          className="h-96 w-full  md:w-[52%] xl:w-[30%] rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center w-[100%] md:w-[100%] mb-8  xl:w-[100%] ">
                <Image src={image.src} alt={image.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
