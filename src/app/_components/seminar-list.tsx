import Image from "next/image";
import Link from "next/link";
import { NAVBAR_HEIGHT } from "../(marketing)/_components/navbar";
import { Badge } from "@/components/ui/badge";

type ClassStatus = "occurring" | "upcoming";
interface IClass {
  status: ClassStatus;
  slug: string;
  href: string;
  src: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

const classes: IClass[] = [
  {
    status: "occurring",
    slug: "chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec",
    href: "/chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec",
    src: "/thumbnails/Chinese_1.png",
    title: "Ngừng học vẹt tiếng Trung với phương pháp MST",
    description:
      "Chỉ 3 giờ thành thạo tiếng Trung tạo ấn tượng tuyệt đối trong mọi cuộc phỏng vấn xin việc.",
    category: "Ngôn ngữ",
    tags: ["Ngôn ngữ", "Tiếng Trung", "Cấp tốc"],
  },
  {
    status: "upcoming",
    slug: "master-tieng-nhat-voi-bi-kip-thien-phu-kotoonsei",
    href: "/waitlist",
    src: "/thumbnails/Japanese_1.png",
    title: "Master tiếng Nhật với Bí kíp thiên phú KotoOnsei",
    description:
      "X3 mức lương ngay!! Trở thành Quản lý Tập đoàn Nhật Bản sau 3 giờ học.",
    category: "Ngôn ngữ",
    tags: ["Ngôn ngữ", "Tiếng Nhật", "Cấp tốc"],
  },
  {
    status: "upcoming",
    slug: "best-date-nam-bat-tam-ly-djoi-phuong-de-dang",
    href: "/waitlist",
    src: "/thumbnails/Dating.png",
    title: "Best date - nắm bắt tâm lý đối phương dễ dàng",
    description:
      "Đừng tự ti - Nhận ngay những bí kíp cho những buổi date từ chuyên gia",
    category: "Nghệ thuật",
    tags: ["Hẹn hò", "Kỹ năng", "Cuộc sống"],
  },
  {
    status: "upcoming",
    slug: "quan-tri-mxh-djinh-chop-voi-0-djong-chi-phi",
    href: "/waitlist",
    src: "/thumbnails/Digital Marketing.png",
    title: "Quản trị MXH “đỉnh chóp” với 0 đồng chi phí",
    description:
      "Bật mí bí kíp quản trị MXH hiệu quả, xây dựng thương hiệu và thu hút khách hàng mục tiêu hoàn toàn miễn phí. Áp dụng các chiến lược nội dung và tương tác chất lượng cao.",
    category: "Marketing",
    tags: ["Marketing", "SNS", "Cấp tốc"],
  },
  {
    status: "upcoming",
    slug: "giam-can-nhanh-kinh-khung-voi-bo-72-djong-tac-yoga-cuc-ki-huu-hieu",
    href: "/waitlist",
    src: "/thumbnails/YOGA.png",
    title:
      "Giảm cân nhanh “kinh khủng” với bộ 72 động tác yoga cực kì hữu hiệu",
    description:
      "Chinh phục sự thay đổi cân nặng nhanh chóng với bộ 72 động tác yoga mạnh mẽ! Những bài tập độc đáo này không chỉ giúp đốt cháy mỡ hiệu quả mà còn mang đến sức khỏe toàn diện. Hãy bắt đầu hành trình giảm cân của bạn và trải nghiệm sự thay đổi kỳ diệu cho vóc dáng thon gọn và khỏe mạnh!",
    category: "Sức khỏe",
    tags: ["Yoga", "Cấp tốc", "Sức khoẻ", "Gỉam cân"],
  },
  {
    status: "upcoming",
    slug: "phac-hoa-chan-dung-song-djong-chi-sau-3-gio",
    href: "/waitlist",
    src: "/thumbnails/Drawing _ illustration.png",
    title: "Phác họa chân dung sống động chỉ sau 3 giờ",
    description:
      "Chỉ ra các bước vẽ chân dung phác họa người thật sống động, sinh động chỉ trong vòng 3 tiếng đồng hồ. Giúp học viên nắm được kỹ thuật phác họa chân dung cơ bản, có thể ứng dụng ngay.",
    category: "Nghệ thuật",
    tags: ["Nghệ thuật", "Cấp tốc"],
  },
  {
    status: "upcoming",
    slug: "thu-hut-va-chinh-phuc-djoi-tac-chi-sau-5-phut-giao-tiep",
    href: "/waitlist",
    src: "/thumbnails/Communication.png",
    title: "Thu hút và chinh phục đối tác chỉ sau 5 phút giao tiếp",
    description:
      "Đưa ra các bí quyết giao tiếp, ứng xử, kỹ thuật thuyết trình giúp gây ấn tượng mạnh mẽ và thu hút sự chú ý của đối tác/khách hàng chỉ trong 5 phút đầu tiên. Từ đó tạo nên một cuộc hội thoại hiệu quả, thành công.",
    category: "Nghệ thuật",
    tags: ["Nghệ thuật", "Giao tiếp", "Cấp tốc"],
  },
  {
    status: "upcoming",
    slug: "bi-kip-djau-tu-tai-chinh-hieu-qua-loi-nhuan-toi-dja-hoa-tu-1-ty-djong",
    href: "/waitlist",
    src: "/thumbnails/Investing.png",
    title:
      "Bí kíp đầu tư tài chính hiệu quả - Lợi nhuận tối đa hóa từ 1 tỷ đồng",
    description:
      "Chia sẻ những bí kíp, chiến lược đầu tư tài chính thông minh để giúp tối đa hóa lợi nhuận từ số vốn 1 tỷ đồng. Đưa ra các lời khuyên đầu tư sáng suốt để lợi nhuận tăng gấp 2-3 lần.",
    category: "Tài chính/đầu tư",
    tags: ["Tài chính", "Đầu tư", "Cấp tốc"],
  },
  {
    status: "upcoming",
    slug: "djanh-bay-mo-thua-giam-15kg-chi-sau-1-thang-ap-dung-che-djo-dinh-duong-khoa-hoc",
    href: "/waitlist",
    src: "/thumbnails/Fitness.png",
    title:
      "Đánh bay mỡ thừa - Giảm 15kg chỉ sau 1 tháng áp dụng chế độ dinh dưỡng khoa học",
    description:
      "Áp dụng ngay chế độ dinh dưỡng khoa học để giảm 15kg chỉ sau 1 tháng mà không cần tập luyện quá sức. Thực đơn đa dạng, cân đối dinh dưỡng giúp giảm mỡ thừa một cách lành mạnh, bền vững.",
    category: "Sức khỏe",
    tags: ["Sức khỏe", "Cấp tốc", "Gym", "Giảm cân"],
  },
];

const statuses = {
  upcoming: {
    bgColor: "#ffffff",
    color: "#010174",
    label: "Sắp diễn ra",
  },
  occurring: {
    bgColor: "#010174",
    color: "#ffffff",
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
            <h2 className="text-4xl/[44px] sm:text-5xl/[64px] font-bold text-balance">
              Khóa học của chúng tôi
            </h2>
            <p className="body2-regular text-balance">
              Những khóa học trải dài trên nhiều lĩnh vực có thể giúp bạn thay
              đổi cuộc sống
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((item, idx) => (
              <li key={idx} className="space-y-4">
                <Link
                  href={
                    item.status === "upcoming"
                      ? item.href + `?slug=${item.slug}`
                      : item.href
                  }
                  className="relative group"
                >
                  <p
                    className="absolute top-4 left-6 rounded-md body2-semi py-1 px-3 z-10 whitespace-nowrap"
                    style={{
                      backgroundColor: statuses[item.status].bgColor,
                      color: statuses[item.status].color,
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
                </Link>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <Badge>{item.category}</Badge>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="body2-regu line-clamp-2 text-neutral-800">
                      {item.description}
                    </p>
                  </div>
                  <ul className="flex items-center gap-1">
                    {item.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="gray">{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
