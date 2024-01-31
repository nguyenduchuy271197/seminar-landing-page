import { CalendarClock, Cast } from "lucide-react";
import Link from "next/link";
import { currencyNumber } from "@/lib/utils";
import { classes } from "@/app/_components/data";

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
export default function PaymentContent({ slug }: { slug?: string }) {
  const classDetail = classes.find((c) => c.slug === slug);

  if (!classDetail) return null;

  const price = currencyNumber(classDetail.price);

  const formattedDate = `${classDetail.openingDate
    .getDate()
    .toString()
    .padStart(2, "0")}/${(classDetail.openingDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${classDetail.openingDate.getFullYear()}`;

  return (
    <div className="flex flex-col justify-between gap-8">
      <div className="space-y-[30px]">
        <div className="space-y-4">
          <div>
            <p className="body2-semi">Buổi học</p>
            <h4 className="subtitle1">
              {classDetail.slug ===
              "chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec"
                ? classDetail.paymentTitle
                : classDetail.title}
            </h4>
            <p className="body2-regular">
              {classDetail.slug ===
              "chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec"
                ? undefined
                : classDetail.description}
            </p>
          </div>

          <div className="space-y-2">
            <span className="flex gap-2 body1-regular">
              <CalendarClock />
              {classDetail.slug ===
              "chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec"
                ? "Đang cập nhật"
                : formattedDate}
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

            <h4 className="subtitle1 text-secondary">{price}</h4>
          </div>
          <div className="flex justify-between">
            <p className="body1-regular">Số lượng</p>

            <h4 className="subtitle1 text-secondary">1 vé</h4>
          </div>
        </div>
      </div>

      <p className="body3">
        Nếu bạn gặp bất cứ vấn đề nào, hãy điện thoại đến{" "}
        <Link href="tel:086 713 3779" className="text-primary underline">
          (+84) 86 713 3779
        </Link>{" "}
        hoặc nhắn tin trực tiếp cho chúng tôi qua{" "}
        <Link
          href="https://www.m.me/193757480493266"
          target="_blank"
          className="text-primary font-semibold"
        >
          Messenger
        </Link>
        .
      </p>
    </div>
  );
}
