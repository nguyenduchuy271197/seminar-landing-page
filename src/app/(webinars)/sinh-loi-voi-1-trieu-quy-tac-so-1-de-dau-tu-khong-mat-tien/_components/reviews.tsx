import HighlightWord from "@/components/highlight-word";
import { cn } from "@/lib/utils";
import YoutubeVideo from "./share/youtube-video";
import Image from "next/image";
import PreviewImage from "@/app/_components/preview-image";

const reviews = [
  {
    imageUrl: "/review1b-499x1024.png",
    // videoId: "paC2nT0NX9k",
    title: "Sự tiến bộ rõ rệt của học viên sau 5 buổi học",
  },
  {
    imageUrl: "/review2b-499x1024.png",
    // videoId: "iOXMy18BgBs",
    title: "Bài tập nói về nhà của học viên lớp Giao Tiếp Nâng Cao",
  },
  {
    imageUrl: "/review4b2-499x1024.png",
    // videoId: "XX8zEE2BCBc",
    title: "Bài nói của học viên khóa tiếng Trung Nâng cao",
  },
  {
    imageUrl: "/review5b2-499x1024.png",
    // videoId: "lPzi-tw0Ngc",
    title: "",
  },
  {
    imageUrl: "/review6b2-499x1024.png",
    // videoId: "k1krM7k8uEU",
    title: "Bài tập về nhà của học viên lớp HSKK cao cấp",
  },
  {
    imageUrl: "/review7b-499x1024.png",
    // videoId: ,
    title: "Học viên lớp HSKK cao cấp luyện đọc lưu loát, diễn cảm",
  },
  {
    imageUrl: "/review11b-499x1024.png",
    title: "",
  },
  {
    imageUrl: "/review14-499x1024.png",
    title: "",
  },
  {
    imageUrl: "/review15-499x1024.png",
    title: "",
  },
];

export default function Reviews() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-bold h2">
              Học viên nói gì sau <HighlightWord>khoá học</HighlightWord>?
            </h2>
            <p className="body2-regular">
              Review và kết quả của các bạn học viên
            </p>
          </div>

          <div className="grid lg:grid-cols-4 auto-rows-[150px] gap-8 [&>div]:bg-gray-200">
            {reviews.map((review, i) => (
              <div
                className={cn(
                  "rounded-md",
                  [1, 6, 7].includes(i)
                    ? "lg:row-span-2"
                    : [3, 4].includes(i)
                    ? "lg:row-span-3"
                    : ""
                )}
                key={i}
              >
                <PreviewImage>
                  <Image
                    src={review.imageUrl}
                    alt={review.title}
                    width={255}
                    height={150}
                    className="size-full object-cover cursor-pointer"
                  />
                </PreviewImage>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
