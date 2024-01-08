import HighlightWord from "@/components/highlight-word";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";
import Image from "next/image";

export default function EarlyBird() {
  const features = [
    {
      src: "/Early Bird 1.png",
      title: "30 phút tư vấn 1:1 với chuyên gia",
      desc: "Các giảng viên, chuyên gia và đội ngũ mentor sẽ giúp bạn giải đáp các khúc mắc",
    },
    {
      src: "/Early Bird 2.png",
      title: "Bộ template Notion quản lý việc học siêu dễ",
      desc: "Kho tài liệu đồ sộ với hơn 800+ template, video tutorial, tài nguyên tham khảo,...",
    },
    {
      src: "/Early Bird 3.png",
      title: "Tài liệu tiếng Trung tự ôn luyện tại HSK tại nhà",
      desc: "Bộ tài liệu chi tiết, phục vụ tất tần tật nhu cầu của người học tiếng Trung",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="space-y-16">
          <div className="text-center space-y-2">
            <h2 className="h2">
              Quyền lợi<HighlightWord>đăng ký sớm</HighlightWord>
            </h2>
            <p className="body2-regular">
              Những quyền lợi các bạn sẽ được nhận khi đăng ký tham dự sớm
            </p>
          </div>
          <div className="relative">
            <ul className="grid gap-8 md:grid-cols-3">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-primary text-primary-foreground space-y-3 p-8 rounded-md"
                >
                  <div className="relative text-primary bg-primary-foreground inline-flex size-[120px] justify-center items-center rounded">
                    <Image src={item.src} alt={item.title} fill />
                  </div>
                  <h4 className="subtitle1">{item.title}</h4>
                  <p className="body2-regular">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
