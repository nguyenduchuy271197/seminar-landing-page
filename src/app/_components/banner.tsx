"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const banner = [
  {
    href: "/chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec",
    color: "#a2211a",
    tagColor: "#010174",
    textColor: "#fff",
    src: "/Chinese.png",
    tag: "Đăng ký sớm giảm 53%",
    title: "Ngừng học vẹt tiếng Trung với phương pháp MST",
    description:
      "CHỈ 3 GIỜ thành thạo tiếng Trung nhờ Phương pháp MST (Movie Speak Technique) đảm bảo 96% TẠO ẤN TƯỢNG TUYỆT ĐỐI trong mọi cuộc phỏng vấn xin việc.",
  },
  {
    href: "/japanese-one-day-class-master-tieng-nhat-voi-bi-kip-thien-phu-kotoonsei-x3-muc-luong-ngay-tro-thanh-quan-ly-tap-doan-nhat-ban-sau-3-gio-hoc",
    // href: "/waitlist",
    color: "#020274",
    tagColor: "#ec0000",
    textColor: "#fff",
    src: "/Japanese.png",
    tag: "Đăng ký sớm giảm 53%",
    title: "Master tiếng Nhật với Bí kíp thiên phú KotoOnsei",
    description:
      "NGỪNG WORK HARD → WORK SMART! X3 mức lương ngay!! Trở thành Quản lý Tập đoàn Nhật Bản sau 3 giờ học.",
  },
  {
    href: "/bi-kip-dau-tu-tai-chinh-hieu-qua-loi-nhuan-toi-da-hoa-tu-1-ty-dong",
    // href: "/waitlist",
    color: "#008A38",
    tagColor: "#ec0000",
    textColor: "#fff",
    src: "/Homepage Investing.png",
    tag: "Đăng ký sớm giảm 53%",
    title: "Sinh lời với 1 triệu, quy tắc số 1 để đầu tư không mất tiền",
    description:
      "Bí kíp tận dụng vốn ít, tăng hiệu suất sinh lời tối đa, loại bỏ nguy cơ mất sạch vốn.",
  },
  // {
  //   href: "/dating-webinar",
  //   color: "#fc4b9b",
  //   // tagColor: "#F1B35B",
  //   textColor: "#fff",
  //   src: "/Dating-100.jpg",
  //   tag: "Đăng ký sớm giảm 33%",
  //   title:
  //     "Đừng tự ti - Nhận ngay những bí kíp cho những buổi date từ chuyên gia",
  //   description:
  //     "CHỈ 3 GIỜ để tự tin hơn trong buổi hẹn hò nhờ NẮM BẮT TÂM LÝ ĐỐI PHƯƠNG đảm bảo 100% chiếm trọn thiện cảm.",
  // },
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
            <Link
              href={hero.href}
              style={{
                backgroundColor: hero.color,
              }}
              className="block"
            >
              <div className="container">
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-8 sm:h-[400px] relative sm:static py-12">
                  <div
                    className="flex flex-col items-start gap-4 max-w-md z-10 sm:z-0 text-white"
                    style={{ color: hero.textColor }}
                  >
                    <p
                      className="inline-flex text-sm font-bold text-white px-4 py-2 rounded"
                      style={{ backgroundColor: hero.tagColor }}
                    >
                      {hero.tag}
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold">
                      {hero.title}
                    </h2>

                    <p className="hidden text-lg sm:block">
                      {hero.description}
                    </p>
                  </div>

                  <div className="h-full">
                    <Image
                      src={hero.src}
                      alt="Banner"
                      width={492}
                      height={320}
                      className="h-full object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {banner.length > 1 && (
          <div className="absolute left-0 bottom-2 z-10 w-full">
            <div className="container">
              <div className="flex justify-center sm:justify-start">
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
          </div>
        )}
      </Swiper>
    </section>
  );
}
