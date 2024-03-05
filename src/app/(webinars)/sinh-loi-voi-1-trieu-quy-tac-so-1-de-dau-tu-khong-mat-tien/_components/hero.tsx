import { Star } from "lucide-react";
import Stats from "./stats";
import HighlightWord from "@/components/highlight-word";
import ShareButton from "./share/share-button";
import YoutubeVideo from "./share/youtube-video";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_600px] gap-8 mb-12">
          <div>
            <div className="aspect-[16/9] bg-slate-100 rounded-md">
              <Image
                src="/Cover.png"
                alt="Hero"
                width={1081}
                height={608}
                className="size-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              {/* Title */}
              <h2 className="h2">
                Sinh lời với{" "}
                <HighlightWord className="ml-0">1 triệu</HighlightWord>, quy tắc
                số 1 để đầu tư không mất tiền
              </h2>
              {/* Description */}
              <p className="body1-regular">
                Bí kíp tận dụng VỐN ÍT, tăng hiệu suất sinh LỜI TỐI ĐA, loại bỏ
                nguy cơ MẤT SẠCH VỐN.
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
