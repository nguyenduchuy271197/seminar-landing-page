import HighlightWord from "@/components/highlight-word";
import { CalendarClock, Cast } from "lucide-react";
import AgendaCards from "./share/agenda-cards";

const curriculum = [
  {
    time: "14:00 PM",
    title: "Câu chuyện truyền cảm hứng",
    description:
      "Điều gì làm nên sự thành công của thầy Nguyễn Hoàng Bảo và bí kíp chưa bao giờ được bật mí",
  },
  {
    time: "14:45 PM",
    title: "MST & cách thành thạo mọi ngôn ngữ",
    description:
      "Cách sử dụng MST tối ưu để đạt hiệu quả cao hơn 90% người học",
  },
  {
    time: "15:30 PM",
    title: "Mini game",
    description:
      "Trò chơi nhỏ giữa giờ để khuấy động bầu không khí học tập sôi nổi và năng lượng",
  },
  {
    time: "16:00 PM",
    title: "Đi làm và những mẫu chuyện nhớ đời",
    description: "Những kinh nghiệm quý báu không phải ai cũng kể cho bạn nghe",
  },
  {
    time: "16:30 PM",
    title: "Bạn hỏi, anh Bảo đáp",
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
                Lộ trình<HighlightWord>3h</HighlightWord>
                <p className="text-primary">Ngừng học vẹt</p>
              </h2>

              <div className="space-y-4">
                <span className="flex gap-2 body1-regular">
                  <CalendarClock />
                  14:00 - 17:00, 20/01/2024
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
