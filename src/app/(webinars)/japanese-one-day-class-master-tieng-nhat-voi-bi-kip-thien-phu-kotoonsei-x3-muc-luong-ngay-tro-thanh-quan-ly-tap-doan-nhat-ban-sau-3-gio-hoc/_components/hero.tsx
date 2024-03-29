import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import Stats from "./stats";
import HighlightWord from "@/components/highlight-word";
import ShareButton from "./share/share-button";
import Link from "next/link";
import Image from "next/image";
import YoutubeVideo from "./share/youtube-video";
import Videos from "./share/videos";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_600px] gap-8 mb-12">
          <div>
            <div className="aspect-[16/9] bg-slate-100 rounded-md">
              {/* <YoutubeVideo
                videoId="nrnq6R9erQs"
                thumbnail="/KV Japanese.png"
              /> */}
              <Videos
                url="https://res.cloudinary.com/dco7ejvhu/video/upload/v1708929041/japanese_ffnlyl.mp4"
                // thumbnail="/KV Japanese.png"
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
                <b>Trở thành một người như bạn ngưỡng mộ</b>
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
