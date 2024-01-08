import HighlightWord from "@/components/highlight-word";
import { Heading, HeadingDescription, HeadingTitle } from "./share/heading";
import Image from "next/image";
import { Check } from "lucide-react";
export default function Targets() {
  const features = [
    {
      title: "Người có nhiều công việc, ít có thời gian rảnh",
      desc: "Hết việc này lại tới việc khác nhưng với phương pháp học ở LIKELION, thời gian luôn luôn đủ.",
    },
    {
      title: "Người muốn đi du học trung quốc, đài loan, hong kong,...",
      desc: "Và các nước có tiếng Trung là ngôn ngữ phổ biến.",
    },
    {
      title: "Người thích đi du lịch, trải nghiệm văn hoá",
      desc: "Thỏa thích đi các nước có cộng đồng nói tiếng Trung sau khoá học.",
    },
    {
      title: "Người cần ôn thi đại học, lấy chứng chỉ hsk, hskk",
      desc: "Mong muốn nâng cao kỹ năng và thể hiện trình độ ngôn ngữ.",
    },
    {
      title: "Người tìm cách học thông minh, hiệu quả cao",
      desc: "Đem lại hiệu quả tới 90% với phương pháp học 3H.",
    },
    {
      title: "Người muốn giao tiếp trôi chảy cho nhiều mục đích",
      desc: "Khoá học giúp bạn tự tin khi sử dụng tiếng Trung trong mọi tình huống.",
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="container">
        <div className="gap-16 md:px-8 flex flex-col lg:flex-row py-20 items-start">
          <div className="w-full lg:w-[30%] shrink-0 grid grid-cols-2 gap-4">
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Who 1.png"
                alt=""
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Who 4.png"
                alt=""
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Who 2.png"
                alt=""
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Who 5.png"
                alt=""
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Who 3.png"
                alt=""
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="aspect-[1/1] bg-slate-200 rounded-md size-40">
              <Image
                src="/Who 6.png"
                alt=""
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="space-y-12">
            <div className="text-left space-y-2">
              <h2 className="h2">
                Khoá học này<HighlightWord>là cho bạn đó</HighlightWord>
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
