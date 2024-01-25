import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import Stats from "./stats";
import HighlightWord from "@/components/highlight-word";
import ShareButton from "./share/share-button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_600px] gap-8 mb-12">
          <div>
            <div className="aspect-[16/9] rounded-md">
              <Image
                src="/Japanese Cover.png"
                alt="Cover"
                width={800}
                height={400}
                className="rounded-md w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              {/* Title */}
              <h2 className="h2">
                Master tiếng Nhật với Bí kíp thiên phú{" "}
                <HighlightWord>KotoOnsei</HighlightWord>
              </h2>
              {/* Description */}
              <p className="text-lg/[28px] font-bold">
                NGỪNG WORK HARD → WORK SMART!
              </p>
              <p className="text-lg/[28px]">
                <b>X3 mức lương</b> ngay!! Trở thành{" "}
                <b>Quản lý Tập đoàn Nhật Bản</b> sau <b>3 giờ học.</b>
              </p>
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
