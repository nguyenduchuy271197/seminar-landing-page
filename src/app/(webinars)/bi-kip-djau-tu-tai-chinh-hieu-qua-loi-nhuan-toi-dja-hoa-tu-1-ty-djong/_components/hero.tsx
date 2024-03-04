import { Star } from "lucide-react";
import Stats from "./stats";
import HighlightWord from "@/components/highlight-word";
import ShareButton from "./share/share-button";
import YoutubeVideo from "./share/youtube-video";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_600px] gap-8 mb-12">
          <div>
            <div className="aspect-[16/9] bg-slate-100 rounded-md">
              <YoutubeVideo videoId="ItcCDTRF7MQ" thumbnail="/KV Chinese.png" />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              {/* Title */}
              <h2 className="h2">
                <HighlightWord className="ml-0">Ngừng học vẹt</HighlightWord>{" "}
                tiếng Trung với phương pháp MST
              </h2>
              {/* Description */}
              <p className="body1-regular">
                CHỈ 3 GIỜ thành thạo tiếng Trung nhờ Phương pháp MST (Movie
                Speak Technique) đảm bảo 96% TẠO ẤN TƯỢNG TUYỆT ĐỐI trong mọi
                cuộc phỏng vấn xin việc.
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
                <ShareButton url="https://www.turningpoint.asia/" />
              </div>
            </div>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
