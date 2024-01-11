import Image from "next/image";
import Link from "next/link";

const card = [
  {
    href: "",
    src: "/Chinese class 2-100.jpg",
    title: "Thầy Nguyễn Hoàng Bảo",
    description: "Ngừng học vẹt tiếng Trung với phương pháp MST",
  },
  {
    src: "/Japanese class 2-100.jpg",
    title: "Cô Loan Trần",
    description: "Master tiếng Nhật với Bí kíp thiên phú KotoOnsei",
  },
  {
    src: "/Dating class 2-100.jpg",
    title: "Tiến sĩ Nguyễn Ánh Vi",
    description:
      "Đừng tự ti - Nhận ngay những bí kíp cho những buổi date từ chuyên gia",
  },
];

export default function Lecturers() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="h2">Giảng viên</h2>
            <p className="body2-regular">Thông tin giảng viên</p>
          </div>
          <ul className="grid md:grid-cols-3 gap-8 items-center justify-center">
            {card.map((item, idx) => (
              <li key={idx} className="rounded-md overflow-hidden">
                <div className="relative group">
                  <div className="overflow-hidden">
                    <Image
                      src={item.src}
                      alt=""
                      width={245}
                      height={347}
                      className="w-full"
                    />
                  </div>

                  <div className="absolute top-0 left-0 h-full space-y-2 w-full">
                    <div className="flex items-end justify-center h-full">
                      <div className="text-white text-center p-8">
                        <h2 className="subtitle1">{item.title}</h2>
                        <div className="border-t border-white w-4 mx-auto" />
                        <p className="body2-regular">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
