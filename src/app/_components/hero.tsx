import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import Stats from "./stats";
import HighlightWord from "@/components/highlight-word";
import ShareButton from "./share/share-button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_600px] gap-8 mb-12">
          <div>
            <div className="aspect-[16/9] bg-slate-100 rounded-md"></div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              {/* Title */}
              <h2 className="h2">
                <HighlightWord className="ml-0">Ngừng học vẹt</HighlightWord>
                tiếng Trung với phương pháp MST
              </h2>
              {/* Description */}
              <p className="body1-regular">
                CHỈ 3 GIỜ thành thạo tiếng Trung nhờ Phương pháp MST (Movie
                Speak Technique) đảm bảo 96% TẠO ẤN TƯỢNG TUYỆT ĐỐI trong mọi
                cuộc phỏng vấn xin việc.
              </p>
            </div>

            <div className="space-y-2">
              <div className="-space-y-2 md:-space-y-3">
                <div className="flex gap-3 items-center mb-2">
                  {/* Giá giảm */}
                  <p className="line-through body1-regular">150.000 VNĐ</p>
                  {/* Tag giảm */}
                  <p className="bg-primary text-primary-foreground rounded-full px-2 py-1 md:px-3 md:py-1 body3">
                    Đăng ký sớm giảm 33%
                  </p>
                </div>

                <div className="flex justify-between">
                  {/* Giá mới */}
                  <h3 className="h2 text-secondary">100.000 VNĐ</h3>
                  {/* % giảm */}
                  <div className=" text-primary font-bold flex items-baseline">
                    <ArrowDown className="mb-1 size-4 md:size-6" />
                    <span className="h2">33</span>
                    <span className="body1-semi">%</span>
                  </div>
                </div>
              </div>

              <Link href="/thanh-toan" className="flex">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full flex justify-center"
                >
                  Giữ vé ngay
                </Button>
              </Link>
            </div>

            <div className="flex justify-between gap-5 flex-col sm:flex-row">
              <div className="space-y-1 flex gap-2 justify-between sm:items-baseline w-full">
                <div>
                  <div className="flex items-center text-primary">
                    <Star className="fill-primary size-4" />
                    <Star className="fill-primary size-4" />
                    <Star className="fill-primary size-4" />
                    <Star className="fill-primary size-4" />
                    <Star className="fill-primary size-4" />
                  </div>
                  <div className="flex justify-between">
                    <p className="body3">
                      <strong>4.7</strong> - dựa trên 1,000+ đánh giá từ học
                      viên
                    </p>
                  </div>
                </div>
                <ShareButton />
              </div>
            </div>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
