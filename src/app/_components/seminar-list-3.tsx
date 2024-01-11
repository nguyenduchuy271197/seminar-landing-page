import Image from "next/image";
import Link from "next/link";

const card = [
  {
    href: "/chinese-webinar",
    src: "/Chinese class-100.jpg",
    title: "Ngừng học vẹt tiếng Trung với phương pháp MST",
  },
  {
    href: "/japanese-webinar",
    src: "/Japanese class-100.jpg",
    title: "Master tiếng Nhật với Bí kíp thiên phú KotoOnsei",
  },
  {
    href: "/dating-webinar",
    src: "/Dating class-100.jpg",
    title:
      "Đừng tự ti - Nhận ngay những bí kíp cho những buổi date từ chuyên gia",
  },
];
export default function SeminarList3() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="h2">Khóa học của chúng tôi</h2>
            <p className="body2-regular">
              Những khóa học trải dài trên nhiều lĩnh vực có thể giúp bạn thay
              đổi cuộc sống
            </p>
          </div>

          <ul className="grid md:grid-cols-3 gap-8">
            {card.map((item, idx) => (
              <li key={idx} className="space-y-4">
                <Link href={item.href} className="relative group">
                  <div className="overflow-hidden">
                    <Image
                      src={item.src}
                      alt=""
                      width={1201}
                      height={676}
                      className="w-full group-hover:scale-105 transition"
                    />
                  </div>

                  {/* <div className="absolute bottom-0 right-0 bg-black hover:bg-black/20 rounded-full size-[35px] flex justify-center items-center mb-2.5 mr-2.5">
                    <Image
                      src="https://lifehacking.co.kr/static/front/images/main/heart.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </div> */}
                </Link>
                <h3 className="body1-regular">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
