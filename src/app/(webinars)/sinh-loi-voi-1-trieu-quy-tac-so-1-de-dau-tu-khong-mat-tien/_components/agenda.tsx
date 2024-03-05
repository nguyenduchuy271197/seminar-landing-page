import HighlightWord from "@/components/highlight-word";
import { CalendarClock, Cast } from "lucide-react";
import AgendaCards from "./share/agenda-cards";

const curriculum = [
  {
    time: "19:00",
    title: "Bước ngoặt: Từ Logistics tới Đầu Tư Tài Chính",
    description: "Trải nghiệm đặc biệt và duy nhất của diễn giả",
  },
  {
    time: "19:15",
    title: "Quỹ đầu tư & kiến thức người mới cần biết",
    description:
      "Tầm quan trọng của quỹ đầu tư và triển vọng phát triển nhanh chóng ở Việt Nam",
  },
  {
    time: "20:00",
    title: "Nghỉ giải lao",
    description: "",
  },
  {
    time: "20:15",
    title: "Kinh nghiệm đầu tư của một Chuyên gia Quản lý rủi ro",
    description:
      "Khi nào nên cân nhắc đầu tư? Đầu tư bao lâu là đủ, khi nào thì ngừng",
  },
  {
    time: "21:30",
    title: "Q&A Trực tiếp",
    description: "Trao đổi kinh nghiệm thực chiến với diễn giả",
  },
];

export default function Agenda() {
  return (
    <section id="agenda">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <div className="space-y-8 max-w-sm sticky top-20">
              <h2 className="h2">
                Lộ trình Sinh lời từ <HighlightWord>1 triệu</HighlightWord>
              </h2>

              <div className="space-y-4">
                <span className="flex gap-2 body1-regular">
                  <CalendarClock />
                  19:00 - 21:30, 16/03/2024
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
