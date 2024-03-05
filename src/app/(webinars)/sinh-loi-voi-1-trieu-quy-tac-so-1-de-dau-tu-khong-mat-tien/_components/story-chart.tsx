"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import HighlightWord from "@/components/highlight-word";

export default function StoryChart() {
  return (
    <section className="bg-neutral-900">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`; // Custom bullet with number
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-2">
            <Image
              src="/Opportunity 1.png"
              alt="Slide 1"
              width={720}
              height={570}
              className="size-full object-cover"
            />
            <div className="flex justify-center items-center">
              <div className="text-left text-white space-y-2 max-w-sm md:max-w-lg p-8">
                <h2 className="h2">
                  Tận dụng chuyên môn và kinh nghiệm của{" "}
                  <HighlightWord>chuyên gia</HighlightWord>
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid md:grid-cols-2">
            <Image
              src="/Opportunity 2.png"
              alt="Slide 2"
              width={720}
              height={570}
              className="size-full object-cover"
            />
            <div className="flex justify-center items-center">
              <div className="text-left text-white space-y-2 max-w-sm md:max-w-lg p-8">
                <h2 className="h2">
                  Lợi ích từ các <HighlightWord>Quỹ</HighlightWord> có quy mô
                  lớn và tiềm lực tài chính mạnh
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid md:grid-cols-2">
            <Image
              src="/Opportunity 3.png"
              alt="Slide 3"
              width={720}
              height={570}
              className="size-full object-cover"
            />

            <div className="flex justify-center items-center">
              <div className="text-left text-white space-y-2 max-w-sm md:max-w-lg p-8">
                <h2 className="h2">
                  Tiếp cận <HighlightWord>thị trường</HighlightWord>{" "}
                  <HighlightWord>chứng khoán</HighlightWord> một cách tiện lợi
                  và an toàn hơn
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
