import HighlightWord from "@/components/highlight-word";
import { CalendarClock, Cast } from "lucide-react";
import AgendaCards from "./share/agenda-cards";

const curriculum = [
  {
    time: "Đang cập nhật",
    title: "Câu chuyện truyền cảm hứng",
    description:
      "Điều gì làm nên sự thành công của thầy Nguyễn Hoàng Bảo và bí kíp chưa bao giờ được bật mí",
  },
  {
    time: "Đang cập nhật",
    title: "MST & cách thành thạo mọi ngôn ngữ",
    description:
      "Cách sử dụng MST tối ưu để đạt hiệu quả cao hơn 90% người học",
  },
  {
    time: "Đang cập nhật",
    title: "Mini game",
    description:
      "Trò chơi nhỏ giữa giờ để khuấy động bầu không khí học tập sôi nổi và năng lượng",
  },
  {
    time: "Đang cập nhật",
    title: "Đi làm và những mẫu chuyện nhớ đời",
    description: "Những kinh nghiệm quý báu không phải ai cũng kể cho bạn nghe",
  },
  {
    time: "Đang cập nhật",
    title: "Bạn hỏi, thầy Bảo trả lời",
    description: "Giải đáp các thắc mắc và chia sẻ cảm nhận sau buổi học",
  },
];

export default function Agenda() {
  return (
    <section id="agenda">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <div className="space-y-8 max-w-lg sticky top-20">
              <h2 className="h2">
                Lộ trình <HighlightWord>3h</HighlightWord>
                <p className="text-primary">Ngừng học vẹt</p>
              </h2>

              <div className="space-y-4">
                <span className="flex gap-2 body1-regular">
                  <CalendarClock />
                  Đang cập nhật
                </span>

                <span className="flex gap-2 body1-regular">
                  <Cast />
                  Online qua Google Meet
                </span>
              </div>
            </div>
          </div>

          <AgendaCards curriculum={curriculum} />
        </div>
      </div>
    </section>
  );
}
