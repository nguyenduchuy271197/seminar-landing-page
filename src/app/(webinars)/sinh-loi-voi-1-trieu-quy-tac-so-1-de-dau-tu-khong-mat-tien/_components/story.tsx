import HighlightWord from "@/components/highlight-word";
import { url } from "inspector";
import { Check, X } from "lucide-react";
import Image from "next/image";

const story = [
  {
    url: "/Story 3-3.png",
    no: "Không dám đầu tư - không dám thực hành vì không biết áp dụng",
    yes: "Không sợ vấp ngã - Không sợ sai (nhưng cần đưa ra quyết định có cơ sở)",
  },
  {
    url: "/Story 3-2.png",
    no: "Kiến thức nhiều lỗ hổng, thiếu kinh nghiệm, thiếu trải nghiệm ",
    yes: "Phải chịu học hỏi những thứ mới, tìm mentor giúp đỡ để giảm thiểu sai sót",
  },
  {
    url: "/Story 3-1.png",
    no: "Không thể thoả mãn được bản thân, muốn kiếm càng nhiều càng tốt",
    yes: "Đo sự thành công bằng các KPI riêng, không kì vọng ẢO",
  },
];

export default function Story() {
  return (
    <section id="story">
      <div className="container">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="h2">
              Bạn không biết, điều bạn{" "}
              <HighlightWord>không biết!</HighlightWord>
            </h2>

            <p className="body2-regular">
              Việc đầu tư không đơn giản, cần liên tục làm đầy kiến thức và kinh
              nghiệm.
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
