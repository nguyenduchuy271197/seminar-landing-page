import Image from "next/image";
import Link from "next/link";
import { NAVBAR_HEIGHT } from "../(marketing)/_components/navbar";

type ClassStatus = "occurring" | "upcoming";
interface IClass {
  status: ClassStatus;
  href: string;
  src: string;
  title: string;
  description: string;
}

const classes: IClass[] = [
  {
    status: "occurring",
    href: "/chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec",
    src: "/Chinese class@1200x-100.jpg",
    title: "Ngừng học vẹt tiếng Trung với phương pháp MST",
    description:
      "Chỉ 3 giờ thành thạo tiếng Trung tạo ấn tượng tuyệt đối trong mọi cuộc phỏng vấn xin việc.",
  },
  {
    status: "upcoming",
    href: "#",
    src: "/Japanese class@1200x-100.jpg",
    title: "Master tiếng Nhật với Bí kíp thiên phú KotoOnsei",
    description:
      "X3 mức lương ngay!! Trở thành Quản lý Tập đoàn Nhật Bản sau 3 giờ học.",
  },
  {
    status: "upcoming",
    href: "#",
    src: "/Dating class@1200x-100.jpg",
    title: "Best date - nắm bắt tâm lý đối phương dễ dàng",
    description:
      "Đừng tự ti - Nhận ngay những bí kíp cho những buổi date từ chuyên gia",
  },
  {
    status: "upcoming",
    href: "#",
    src: "/Class 1@1200x-100.jpg",
    title: "Nghệ thuật Lắng Nghe",
    description:
      "Kết nối mạnh mẽ qua ngôn ngữ cơ thể và sự chân thành trong mọi cuộc trò chuyện.",
  },
  {
    status: "upcoming",
    href: "#",
    src: "/Class 2@1200x-100.jpg",
    title: "Kỹ Thuật Marketing 4.0",
    description:
      "Xây dựng ấn tượng với khách hàng qua chiến lược sáng tạo và tương tác.",
  },
  {
    status: "upcoming",
    href: "#",
    src: "/Class 3@1200x-100.jpg",
    title: "Chạm đến Cảm Xúc trong Hội Họa",
    description:
      "Phác họa thế giới của bạn bằng cách truyền đạt cảm xúc qua tranh vẽ.",
  },
  {
    status: "upcoming",
    href: "#",
    src: "/Class 4@1200x-100.jpg",
    title: "Yoga Mindfulness",
    description:
      "Hành trình tìm kiếm bản thân qua sự hòa nhạc tâm hồn với thiền định và tập luyện.",
  },
  {
    status: "upcoming",
    href: "#",
    src: "/Class 5@1200x-100.jpg",
    title: "Chiến lược Diversification",
    description: "Phân bổ đầu tư chín chắn để giảm rủi ro.",
  },
  {
    status: "upcoming",
    href: "#",
    src: "/Class 6@1200x-100.jpg",
    title: "Quản lý Ngân sách Hợp lý",
    description:
      "Xây dựng tương lai tài chính thông minh thông qua tiết kiệm và đầu tư chủ động.",
  },
];

const statuses = {
  upcoming: {
    bgColor: "#f5b105",
    label: "Sắp diễn ra",
  },
  occurring: {
    bgColor: "#010174",
    label: "Đang diễn ra",
  },
};

export default function SeminarList() {
  return (
    <section
      id="cac-khoa-hoc"
      style={{
        scrollMarginTop: NAVBAR_HEIGHT,
      }}
    >
      <div className="container">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl/[44px] sm:text-5xl/[64px] font-bold">
              Khóa học của chúng tôi
            </h2>
            <p className="body2-regular">
              Những khóa học trải dài trên nhiều lĩnh vực có thể giúp bạn thay
              đổi cuộc sống
            </p>
          </div>

          <ul className="grid md:grid-cols-3 gap-8">
            {classes.map((item, idx) => (
              <li key={idx} className="space-y-4">
                <Link href={item.href} className="relative group">
                  <p
                    className="absolute top-4 left-6 rounded-md text-white body2-semi py-1 px-3 z-10"
                    style={{
                      backgroundColor: statuses[item.status].bgColor,
                    }}
                  >
                    {statuses[item.status].label}
                  </p>

                  <div className="relative overflow-hidden rounded-md">
                    <Image
                      src={item.src}
                      alt="Class"
                      width={1201}
                      height={676}
                      className="w-full group-hover:scale-105 transition"
                    />
                  </div>

                  {/* <div className="absolute bottom-0 right-0 bg-black hover:bg-black/20 rounded-full size-[35px] flex justify-center items-center mb-2.5 mr-2.5">
                    <Image
                      src="https://lifehacking.co.kr/static/front/images/main/heart.svg"
                      alt="Class"
                      width={18}
                      height={18}
                    />
                  </div> */}
                </Link>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="body2-regu">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
