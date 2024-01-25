import HighlightWord from "@/components/highlight-word";
import { Check, X } from "lucide-react";
import Image from "next/image";

const story = [
  {
    url: "/Story 1 1.png",
    no: "Cày sấp mặt từ sáng tới tối, cuối tuần OT, lương tháng 10 triệu, trả nợ xong thì ăn mì tôm",
    yes: "Công việc quản lý cấp cao, tự chủ thời gian, làm việc mình say mê, cuối tháng ting ting 40 triệu là ít.",
  },
  {
    url: "/Story 1 2.png",
    no: "Thuê trọ với nhiều người, đủ loại chi phí, hết tháng dư được mấy trăm ngàn",
    yes: "Sắm được căn nhà riêng đầy đủ tiện ích, độc lập và tự do, an tâm cống hiến cho công việc.",
  },
  {
    url: "/Story 1 3.png",
    no: "Thất nghiệp mấy tháng muốn đờ người, kiếm đủ thứ để làm, giờ chỉ cần 1 công việc ổn định",
    yes: "Mở rộng quan hệ ra toàn cầu, gia nhập thế giới tinh hoa, đồng nghiệp hợp cạ, sếp vừa có tâm vừa có tầm.",
  },
];

export default function Story() {
  return (
    <section id="story">
      <div className="container">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="h2">
              Khó càng thêm khó, làm sao <HighlightWord>vượt qua</HighlightWord>
            </h2>

            <p className="body2-regular">
              Câu chuyện thực tế mà các bạn đang mắc kẹt hàng ngày, nhưng Ms.
              Katherine Trần đã vượt qua dễ dàng
            </p>
          </div>

          <ul className="grid sm:grid-cols-3 gap-8">
            {story.map((s, idx) => (
              <li key={idx} className="h-full flex flex-col items-center">
                <div>
                  <Image src={s.url} alt="Story 1" width={424} height={350} />
                </div>

                <div className="grid grow auto-rows-fr max-w-[424px]">
                  <div className="bg-[#FFE4DF] flex gap-4 p-6">
                    <div className="size-4 rounded-full bg-primary shrink-0 flex justify-center items-center mt-1">
                      <X className="text-white size-3" />
                    </div>
                    <p className="body1-regular">{s.no}</p>
                  </div>

                  <div className="bg-[#D9EDD9] flex gap-4 p-6">
                    <div className="size-4 rounded-full bg-[#008900] shrink-0 flex justify-center items-center mt-1">
                      <Check className="text-white size-3" />
                    </div>
                    <p className="body1-regular">{s.yes}</p>
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
