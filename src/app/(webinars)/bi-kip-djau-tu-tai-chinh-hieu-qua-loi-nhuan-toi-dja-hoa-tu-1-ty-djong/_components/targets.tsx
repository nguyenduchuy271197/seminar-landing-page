import HighlightWord from "@/components/highlight-word";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";
import Image from "next/image";
import { Check } from "lucide-react";
export default function Targets() {
  const features = [
    {
      title: "Những nhà đầu tư mới",
      desc: "Những người mới bắt đầu tham gia vào thị trường tài chính mà chưa có nhiều kinh nghiệm.",
    },
    {
      title: "Người đầu tư không có kiến thức sâu",
      desc: "Về các sản phẩm tài chính và thường gặp khó khăn trong việc đưa ra các quyết định đầu tư.",
    },
    {
      title: "Người có quỹ thời gian hạn hẹp",
      desc: "Nếu bạn thường xuyên túi bụi với công việc, gia đình hoặc không có thời gian quá nhiều cho đầu tư, lớp học chính là thứ bạn đang kiếm.",
    },
    {
      title: "Người có thu nhập ổn định",
      desc: "Nhưng muốn tìm hiểu cách tăng cường vốn và sinh lời từ việc đầu tư thông minh.",
    },
    {
      title: "Người trẻ mới bắt đầu sự nghiệp",
      desc: "Và muốn hiểu rõ hơn về cách quản lý tài chính cá nhân và đầu tư cho tương lai.",
    },
    {
      title: "Người kiếm tiền từ chuyên môn",
      desc: "Những người muốn thực chiến thị trường và “xây dựng kinh nghiệm” hơn cả việc đạt “thêm 10% lợi nhuận/năm”.",
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="container">
        <div className="gap-16 md:px-8 flex flex-col lg:flex-row py-20 items-start">
          <div className="w-full lg:w-[30%] shrink-0 sm:grid sm:grid-cols-2 sm:gap-4 hidden ">
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Target 1.png"
                alt="Who 1"
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Target 2.png"
                alt="Who 4"
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Target 3.png"
                alt="Who 2"
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Target 4.png"
                alt="Who 5"
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Target 5.png"
                alt="Who 3"
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Target 6.png"
                alt="Who 6"
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="space-y-12">
            <div className="text-left space-y-6 sm:space-y-2">
              <h2 className="h2">
                Khoá học này <HighlightWord>là cho bạn đó</HighlightWord>
              </h2>
              <p className="body2-regular">
                Thiết kế phù hợp với nhu cầu của đa dạng học viên giúp tăng 97%
                mức độ hài lòng.
              </p>
            </div>
            <div>
              <ul className="grid sm:grid-cols-2 gap-8">
                {features.map((item, idx) => (
                  <li key={idx} className="flex gap-x-4">
                    <div className="size-7 rounded-full bg-primary shrink-0 flex justify-center items-center mt-1">
                      <Check className="text-white size-6" />
                    </div>
                    <div>
                      <h4 className="subtitle2 text-gray-800">{item.title}</h4>
                      <p className="mt-3 body2-regular">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
