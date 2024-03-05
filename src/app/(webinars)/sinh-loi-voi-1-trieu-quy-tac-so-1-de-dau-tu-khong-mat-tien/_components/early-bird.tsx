import HighlightWord from "@/components/highlight-word";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";
import Image from "next/image";

export default function EarlyBird() {
  const features = [
    {
      src: "/Benefit 1 icon.png",
      title: "Hỗ trợ thực hành",
      desc: "Giảng viên sẽ tiếp tục đồng hành cùng bạn trong quá trình đầu tư sau khi khoá học kết thúc",
    },
    {
      src: "/Benefit 2 icon.png",
      title: "Cộng đồng cựu học viên",
      desc: "Nơi mọi người chia sẻ và hỗ trợ nhau trong quá trình đầu tư, cập nhật những tin tức, biến động mới nhất.",
    },
    {
      src: "/Benefit 3 icon.png",
      title: "Tiếp cận công cụ quản lý tài chính mới nhất",
      desc: "Do chính giảng viên xây dựng, hỗ trợ bạn trong việc quản lý tài chính cá nhân cũng như lập kế hoạch đầu tư dài hạn.",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="space-y-16">
          <div className="text-center space-y-2">
            <h2 className="h2">
              Quyền lợi <HighlightWord>đăng ký sớm</HighlightWord>
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
                  className="bg-primary text-primary-foreground space-y-3 p-8 rounded-lg"
                >
                  <div className="relative text-primary bg-primary-foreground inline-flex size-[120px] justify-center items-center rounded-lg">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="rounded-lg"
                    />
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
