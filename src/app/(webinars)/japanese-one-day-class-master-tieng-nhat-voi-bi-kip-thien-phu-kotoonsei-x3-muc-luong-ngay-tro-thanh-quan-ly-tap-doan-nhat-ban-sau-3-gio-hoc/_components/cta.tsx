import HighlightWord from "@/components/highlight-word";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="container">
        <div className="bg-primary space-y-8 text-white rounded-md mx-auto py-10 px-8 sm:px-20">
          <div className="space-y-4">
            <h2 className="h2">
              Bắt đầu{" "}
              <HighlightWord className="text-secondary">
                hành trình
              </HighlightWord>{" "}
              Master tiếng Nhật
            </h2>

            <p className="body2-regular">
              Sau 3h, cuộc sống của bạn sẽ hoàn toàn thay đổi.
            </p>
          </div>
          <Link
            href="/thanh-toan?slug=japanese-one-day-class-master-tieng-nhat-voi-bi-kip-thien-phu-kotoonsei-x3-muc-luong-ngay-tro-thanh-quan-ly-tap-doan-nhat-ban-sau-3-gio-hoc"
            className="inline-flex"
          >
            <Button variant="secondary" size="lg">
              Giữ vé ngay
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
