import HighlightWord from "@/components/highlight-word";
import { Info, InfoDescription, InfoTitle } from "./share/info";
import Image from "next/image";
import { CalendarClock, Cast } from "lucide-react";

const info = [
  {
    title: "Số tài khoản",
    description: "700 016 242465",
    hasClipboard: true,
  },
  {
    title: "Tên tài khoản",
    description: "CONG TY TNHH LIKE LION",
  },
  {
    title: "Chi nhánh",
    description: "Ngân hàng TNHH MTV Shinhan Việt Nam",
  },
  {
    title: "Nội dung",
    description: "SĐT_HọTên_Chinese3H",
    hasClipboard: true,
  },
];
export default function PaymentContent() {
  return (
    <div className="flex flex-col justify-between gap-8">
      <div className="space-y-[30px]">
        <div className="space-y-4">
          <div>
            <p className="body2-semi">Buổi học</p>
            <h4 className="subtitle1">
              <HighlightWord>Ngừng học vẹt</HighlightWord>tiếng Trung với phương
              pháp MST
            </h4>
          </div>

          <div className="space-y-2">
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

        <div className="border-neutral-500 border" />

        <div>
          <div className="flex justify-between">
            <p className="body1-regular">Giá vé</p>

            <h4 className="subtitle1 text-secondary">100.000 VNĐ</h4>
          </div>
          <div className="flex justify-between">
            <p className="body1-regular">Số lượng</p>

            <h4 className="subtitle1 text-secondary">1 vé</h4>
          </div>
        </div>
      </div>

      <p className="body3">
        Nếu bạn gặp bất cứ vấn đề nào, hãy điện thoại đến{" "}
        <a href="#" className="text-primary underline">
          (+84) 86 713 3779
        </a>{" "}
        hoặc nhắn tin trực tiếp cho chúng tôi qua{" "}
        <a href="#" className="text-primary underline">
          Messenger
        </a>
        .
      </p>
    </div>
  );
}
