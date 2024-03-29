"use client";
import { Button } from "@/components/ui/button";
import { randomNumberInRange } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup/";

const dream = [
  {
    url: "/Salary 5.png",
    name: "Chị Ngọc - Nhân viên Sale",
    old: 10,
    new: 40,
  },
  {
    url: "/Salary 3.png",
    name: "Ms. Kaylin - Trợ lý giám đốc",
    old: 25,
    new: 33,
  },
  {
    url: "/Salary 4.png",
    name: "Chị Nga - Kế toán",
    old: 12,
    new: 27,
  },
  {
    url: "/Salary 2.png",
    name: "Anh Giang - Xuất nhập khẩu",
    old: 15,
    new: 35,
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
              Thầy Bảo - NGƯỜI đã chinh phục tấm bằng Thạc sĩ tiếng Trung và
              đang là biên tập cho VTV với mức lương cao hơn 400% so với lúc mới
              đi làm. Với gần 20 năm giảng dạy và làm việc bằng tiếng Trung,
              thầy đã giúp cho nhiều bạn trẻ đạt được thành công sớm. Sau khoá
              học, phần lớn học viên đã tìm được công việc tốt và thu nhập tăng
              chóng mặt, thoải mái tận hưởng cuộc sống và không còn lăn tăn tài
              chính như trước.
            </p>
          </div>

          <div>
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
              <div>
                <div className="grid grid-cols-2 gap-10">
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
                      <div className="bg-red-100 rounded-md subtitle1 text-primary w-full max-w-[250px] text-center">
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
                      src="/Thay Bao Profile.jpg"
                      alt="Salary"
                      width={350}
                      height={350}
                      className="rounded-full"
                    />
                  </div>

                  <h2 className="h2 text-secondary">Chúc mừng bạn!</h2>

                  <Link
                    // href="/thanh-toan?slug=chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec"
                    href={
                      "/waitlist?slug=chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec"
                    }
                  >
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
