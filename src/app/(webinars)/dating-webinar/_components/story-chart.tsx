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
        <SwiperSlide className="grid md:grid-cols-2">
          <Image
            src="/Image 1.png"
            alt=""
            width={720}
            height={570}
            className="h-full w-full"
          />
          <div className="flex justify-center items-center">
            <div className="text-left text-white space-y-2 max-w-sm md:max-w-lg p-8">
              <h2 className="h2">
                Cơ hội việc làm<HighlightWord>cực lớn</HighlightWord>{" "}
                <span className="text-secondary">x10 lần</span>
              </h2>
              <p className="body1-semi">
                thông qua các mối quan hệ trong cộng đồng tiếng Trung
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="grid md:grid-cols-2">
          <Image
            src="/Image 2.png"
            alt=""
            width={720}
            height={570}
            className="h-full w-full"
          />
          <div className="flex justify-center items-center">
            <div className="text-left text-white space-y-2 max-w-sm md:max-w-lg p-8">
              <h2 className="h2">
                Tăng tốc làm giàu cùng<HighlightWord>TOP 10%</HighlightWord>
              </h2>
              <p className="body1-semi">những người xuất sắc trong ngành.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="grid md:grid-cols-2">
          <Image
            src="/Image 3.png"
            alt=""
            width={720}
            height={570}
            className="h-full w-full"
          />

          <div className="flex justify-center items-center">
            <div className="text-left text-white space-y-2 max-w-sm md:max-w-lg p-8">
              <h2 className="h2">Thúc đẩy hiệu quả cạnh tranh</h2>
              <p className="body1-semi">
                trong đàm phán kinh doanh quốc tế với các đối tác và nhà đầu tư
                Trung Quốc
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
