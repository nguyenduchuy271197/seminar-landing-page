type ClassStatus = "happened" | "occurring" | "upcoming";

interface IClass {
  status: ClassStatus;
  slug: string;
  src: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  price: number;
  checkoutUrl: string;
  paymentTitle: string;
  openingDate: Date;
}

export const classes: IClass[] = [
  {
    status: "happened",
    slug: "japanese-one-day-class-master-tieng-nhat-voi-bi-kip-thien-phu-kotoonsei-x3-muc-luong-ngay-tro-thanh-quan-ly-tap-doan-nhat-ban-sau-3-gio-hoc",
    src: "/thumbnails/Japanese_1.png",
    title: "Master tiếng Nhật với Bí kíp thiên phú KotoOnsei",
    description:
      "X3 mức lương ngay!! Trở thành Quản lý Tập đoàn Nhật Bản sau 3 giờ học.",
    category: "language",
    tags: ["Ngôn ngữ", "Tiếng Nhật", "Cấp tốc"],
    price: 99000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-00041403823142489ef0c7d87f893a19",
    paymentTitle: "",
    openingDate: new Date(2024, 1, 24),
  },
  {
    status: "happened",
    slug: "chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec",
    src: "/thumbnails/Chinese_1.png",
    title: "Ngừng học vẹt tiếng Trung với phương pháp MST",
    description:
      "Chỉ 3 giờ thành thạo tiếng Trung tạo ấn tượng tuyệt đối trong mọi cuộc phỏng vấn xin việc.",
    category: "language",
    tags: ["Ngôn ngữ", "Tiếng Trung", "Cấp tốc"],
    price: 99000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4",
    paymentTitle:
      "🙅‍♀️ NGỪNG HỌC VẸT 👉 3 GIỜ thành thạo tiếng Trung với Phương pháp “MST” (Movie Speak Technique) đảm bảo 96% TẠO ẤN TƯỢNG TUYỆT ĐỐI trong mọi cuộc phỏng vấn xin việc.",
    openingDate: new Date(2024, 0, 27),
  },
  {
    status: "upcoming",
    slug: "best-date-nam-bat-tam-ly-djoi-phuong-de-dang",
    src: "/thumbnails/Dating.png",
    title: "Best date - nắm bắt tâm lý đối phương dễ dàng",
    description:
      "Đừng tự ti - Nhận ngay những bí kíp cho những buổi date từ chuyên gia",
    category: "skill",
    tags: ["Hẹn hò", "Kỹ năng", "Cuộc sống"],
    price: 100000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4",
    paymentTitle: "",
    openingDate: new Date(2024, 1, 3),
  },
  {
    status: "upcoming",
    slug: "quan-tri-mxh-djinh-chop-voi-0-djong-chi-phi",
    src: "/thumbnails/Digital Marketing.png",
    title: "Quản trị MXH “đỉnh chóp” với 0 đồng chi phí",
    description:
      "Bật mí bí kíp quản trị MXH hiệu quả, xây dựng thương hiệu và thu hút khách hàng mục tiêu hoàn toàn miễn phí. Áp dụng các chiến lược nội dung và tương tác chất lượng cao.",
    category: "marketing",
    tags: ["Marketing", "SNS", "Cấp tốc"],
    price: 100000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4",
    paymentTitle: "",
    openingDate: new Date(2024, 1, 3),
  },
  {
    status: "upcoming",
    slug: "giam-can-nhanh-kinh-khung-voi-bo-72-djong-tac-yoga-cuc-ki-huu-hieu",
    src: "/thumbnails/YOGA.png",
    title:
      "Giảm cân nhanh “kinh khủng” với bộ 72 động tác yoga cực kì hữu hiệu",
    description:
      "Chinh phục sự thay đổi cân nặng nhanh chóng với bộ 72 động tác yoga mạnh mẽ! Những bài tập độc đáo này không chỉ giúp đốt cháy mỡ hiệu quả mà còn mang đến sức khỏe toàn diện. Hãy bắt đầu hành trình giảm cân của bạn và trải nghiệm sự thay đổi kỳ diệu cho vóc dáng thon gọn và khỏe mạnh!",
    category: "health",
    tags: ["Yoga", "Cấp tốc", "Sức khoẻ", "Giảm cân"],
    price: 100000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4",
    paymentTitle: "",
    openingDate: new Date(2024, 1, 3),
  },
  {
    status: "upcoming",
    slug: "phac-hoa-chan-dung-song-djong-chi-sau-3-gio",
    src: "/thumbnails/Drawing _ illustration.png",
    title: "Phác họa chân dung sống động chỉ sau 3 giờ",
    description:
      "Chỉ ra các bước vẽ chân dung phác họa người thật sống động, sinh động chỉ trong vòng 3 tiếng đồng hồ. Giúp học viên nắm được kỹ thuật phác họa chân dung cơ bản, có thể ứng dụng ngay.",
    category: "art",
    tags: ["Nghệ thuật", "Cấp tốc"],
    price: 100000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4",
    paymentTitle: "",
    openingDate: new Date(2024, 1, 3),
  },
  {
    status: "upcoming",
    slug: "thu-hut-va-chinh-phuc-djoi-tac-chi-sau-5-phut-giao-tiep",
    src: "/thumbnails/Communication.png",
    title: "Thu hút và chinh phục đối tác chỉ sau 5 phút giao tiếp",
    description:
      "Đưa ra các bí quyết giao tiếp, ứng xử, kỹ thuật thuyết trình giúp gây ấn tượng mạnh mẽ và thu hút sự chú ý của đối tác/khách hàng chỉ trong 5 phút đầu tiên. Từ đó tạo nên một cuộc hội thoại hiệu quả, thành công.",
    category: "art",
    tags: ["Nghệ thuật", "Giao tiếp", "Cấp tốc"],
    price: 100000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4",
    paymentTitle: "",
    openingDate: new Date(2024, 1, 3),
  },
  {
    status: "upcoming",
    slug: "bi-kip-djau-tu-tai-chinh-hieu-qua-loi-nhuan-toi-dja-hoa-tu-1-ty-djong",
    src: "/thumbnails/Investing.png",
    title:
      "Bí kíp đầu tư tài chính hiệu quả - Lợi nhuận tối đa hóa từ 1 tỷ đồng",
    description:
      "Chia sẻ những bí kíp, chiến lược đầu tư tài chính thông minh để giúp tối đa hóa lợi nhuận từ số vốn 1 tỷ đồng. Đưa ra các lời khuyên đầu tư sáng suốt để lợi nhuận tăng gấp 2-3 lần.",
    category: "finance",
    tags: ["Tài chính", "Đầu tư", "Cấp tốc"],
    price: 100000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4",
    paymentTitle: "",
    openingDate: new Date(2024, 1, 3),
  },
  {
    status: "upcoming",
    slug: "djanh-bay-mo-thua-giam-15kg-chi-sau-1-thang-ap-dung-che-djo-dinh-duong-khoa-hoc",
    src: "/thumbnails/Fitness.png",
    title:
      "Đánh bay mỡ thừa - Giảm 15kg chỉ sau 1 tháng áp dụng chế độ dinh dưỡng khoa học",
    description:
      "Áp dụng ngay chế độ dinh dưỡng khoa học để giảm 15kg chỉ sau 1 tháng mà không cần tập luyện quá sức. Thực đơn đa dạng, cân đối dinh dưỡng giúp giảm mỡ thừa một cách lành mạnh, bền vững.",
    category: "health",
    tags: ["Sức khỏe", "Cấp tốc", "Gym", "Giảm cân"],
    price: 100000,
    checkoutUrl:
      "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4",
    paymentTitle: "",
    openingDate: new Date(2024, 1, 3),
  },
];
