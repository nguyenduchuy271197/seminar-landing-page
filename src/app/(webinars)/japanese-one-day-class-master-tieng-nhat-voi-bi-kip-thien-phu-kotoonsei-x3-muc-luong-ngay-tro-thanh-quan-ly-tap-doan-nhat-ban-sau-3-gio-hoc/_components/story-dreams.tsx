"use client";
import { Button } from "@/components/ui/button";
import { randomNumberInRange } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";

const dream = [
  {
    url: "/japanese/Salary 1.png",
    name: "Ms. Vy - Quản lý hành chính",
    old: 20,
    new: 38,
  },
  {
    url: "/japanese/Salary 3.png",
    name: "Chị Yến - Nhân viên phát triển thị trưởng",
    old: 15,
    new: 36,
  },
  {
    url: "/japanese/Salary 2.png",
    name: "Mr. Lâm - Trợ lý Giám đốc",
    old: 23,
    new: 49,
  },
  {
    url: "/japanese/Salary 4.png",
    name: "Anh Tâm - Kỹ sư cầu nối",
    old: 17,
    new: 43,
  },
];

export default function StoryDream() {
  const [salary, setSalary] = useState<number | null>(null);

  const handleClick = () => {
    const randNumber = randomNumberInRange(40, 60);
    setSalary(randNumber);
  };
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div className="space-y-2 max-w-4xl">
            <h3 className="h3">Công thức ẵm trọn mức lương bạn luôn mơ ước</h3>
            <p className="body2-regular">
              Ms.Katherine Trần - Quản lý Vận hành top 1 Công ty Bất động sản
              Nhật Bản, với 2 bằng Cử nhân của ĐH Top đầu Việt Nam, Đại sứ Việt
              Nam của Mạng lưới Cựu Sinh viên Quốc tế Đại học Wakayama. Cô đã
              chinh phục ngôn ngữ siêu khó - tiếng Nhật và thăng tiến liên tục
              trong sự nghiệp để trở thành Quản lý cấp cao, tận hưởng cuộc sống
              mà nhiều người mơ ước.
            </p>
          </div>

          <div>
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {dream.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center space-y-2 h-full"
                    >
                      <Image
                        src={s.url}
                        alt="Salary"
                        width={255}
                        height={200}
                        className="rounded-md mb-4"
                      />

                      <div className="flex flex-col items-center px-4 grow">
                        <h3 className="body1-semi text-neutral-700">
                          {s.name}
                        </h3>
                        <p className="body3 text-neutral-600 w-full">
                          Lương{" "}
                          <span className="line-through">
                            {s.old} triệu/ tháng
                          </span>
                        </p>
                      </div>
                      <div className="bg-red-100 rounded-md subtitle1 text-primary w-full max-w-[250px] text-center px-2 py-1">
                        {s.new} triệu
                        <span className="body1-semi">/ tháng</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-end justify-around">
                    <h3 className="line-through text-neutral-600 subtitle1">
                      7 triệu/ tháng
                    </h3>
                    <button
                      onClick={handleClick}
                      className="bg-secondary rounded-full size-[150px] text-center flex flex-col items-center justify-center text-white text-base/[18px] md:text-lg/[20px]"
                    >
                      Ấn chọn
                      <span className="uppercase font-bold text-2xl/[24px] md:text-[28px]/[28px]">
                        mức lương
                      </span>
                      của bạn
                    </button>
                  </div>

                  <div>
                    <div className="rounded-md bg-[#FFEFC4] px-4 py-2 text-center">
                      <p className="text-secondary md:text-4xl text-2xl font-bold">
                        {salary === null ? (
                          "??"
                        ) : (
                          <CountUp start={0} end={salary} />
                        )}
                        .000.000
                        <span className="body1-semi"> VNĐ/tháng</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-8">
                  <div>
                    <Image
                      src="/Ava Co Loan.jpg"
                      alt="Salary"
                      width={350}
                      height={350}
                      className="rounded-full"
                    />
                  </div>

                  <h2 className="h2 text-secondary">Chúc mừng bạn!</h2>

                  <Link href="/thanh-toan?slug=japanese-one-day-class-master-tieng-nhat-voi-bi-kip-thien-phu-kotoonsei-x3-muc-luong-ngay-tro-thanh-quan-ly-tap-doan-nhat-ban-sau-3-gio-hoc">
                    <Button variant="secondary" className="subtitle2">
                      Cách nhận mức lương {salary !== null ? salary : "??"}{" "}
                      triệu
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
