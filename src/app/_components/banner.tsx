"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Index {
  newIndex: (index: number) => void;
}

const banner = [
  {
    color: "#0D67FE",
    tagColor: "#FE6F07",
    textColor: "#ffffff",
    src: "https://cdn.inflearn.com/public/main_sliders/b911362e-dcc1-43f4-97c0-affe71440c09/event-2024newyear-521.png",
    tag: "진짜 0원",
    title: "[ 0원 강의 ] 와 함께 갑진년을 진짜 값진 해로!",
    description:
      "개발, 게임개발, 디자인, 마케팅 등 실무에 필요한 600+개 강의가 모두 무료!",
  },
  {
    color: "#212121",
    tagColor: "#35B8FD",
    textColor: "#ffffff",
    src: "https://cdn.inflearn.com/public/main_sliders/e23690aa-8198-4e67-9ccb-caf1a7b7ce6a/331149.png",
    tag: "얼리버드 30%",
    title: "실무에 바로 적용 가능한 '프론트엔드' 테스트 🖥️",
    description:
      "단위/통합, 스냅샷, 시각적 회귀, E2E ··· 효과적인 FE 테스트 방법을 배워보세요!",
  },
  {
    color: "#ffffff",
    tagColor: "#F1B35B",
    textColor: "#000000",
    src: "https://cdn.inflearn.com/public/main_sliders/77c0d5ab-7a14-4e20-8097-f9d2e296383f/메인배너용%20이미지%20(1).png",
    tag: "시리즈 할인 중!",
    title: "게임에서 구현되는 놀라운 인공지능의 세계 🎮",
    description: "Unity ML-Agents를 이용한 강화학습, 시리즈 전체 할인 중!",
  },
];

export default function Banner() {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section>
      <Swiper
        ref={sliderRef}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="relative"
        onActiveIndexChange={(newIndex) => setActiveIndex(newIndex.realIndex)}
      >
        {banner.map((hero, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                backgroundColor: hero.color,
              }}
            >
              <div className="container">
                <div className="grid sm:grid-cols-2 gap-8 h-[400px] relative sm:static">
                  <div
                    className="flex flex-col gap-4 my-10 max-w-xs z-10 sm:z-0"
                    style={{ color: hero.textColor }}
                  >
                    <div className="body2-semi text-center">
                      <p
                        className="w-[110px] rounded p-1"
                        style={{ backgroundColor: hero.tagColor }}
                      >
                        {hero.tag}
                      </p>
                    </div>

                    <h2 className="subtitle1">{hero.title}</h2>

                    <p className="hidden sm:block">{hero.description}</p>
                  </div>

                  <div className="h-full absolute sm:static">
                    <Image
                      src={hero.src}
                      alt=""
                      width={492}
                      height={320}
                      className="h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute left-0 bottom-2 z-10 w-full">
          <div className="container">
            <div className="inline-flex gap-6 bg-[#00000080] py-1 px-2 rounded-md text-white">
              <button
                onClick={handlePrev}
                className="hover:opacity-90 transition"
              >
                <ChevronLeft className="size-4" />
              </button>
              <div className="flex items-center gap-1 text-sm">
                <span>{activeIndex + 1}</span>
                <span>/</span>
                <span>{banner.length}</span>
              </div>
              <button
                onClick={handleNext}
                className="hover:opacity-90 transition"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
