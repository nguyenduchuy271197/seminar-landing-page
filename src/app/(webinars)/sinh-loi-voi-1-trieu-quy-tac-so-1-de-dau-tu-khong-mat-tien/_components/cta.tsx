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
              sinh lời với 1 triệu
            </h2>

            <p className="body2-regular">
              Sau 3h, cuộc sống của bạn sẽ hoàn toàn thay đổi.
            </p>
          </div>
          <Link
            href="/thanh-toan?slug=sinh-loi-voi-1-trieu-quy-tac-so-1-de-dau-tu-khong-mat-tien"
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
