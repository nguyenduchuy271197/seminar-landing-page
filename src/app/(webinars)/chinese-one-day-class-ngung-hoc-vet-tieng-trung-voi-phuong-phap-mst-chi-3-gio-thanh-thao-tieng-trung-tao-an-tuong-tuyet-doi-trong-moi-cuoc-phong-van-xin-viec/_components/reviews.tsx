import HighlightWord from "@/components/highlight-word";
import { cn } from "@/lib/utils";
import YoutubeVideo from "./share/youtube-video";
import Image from "next/image";

const reviews = [
  {
    videoId: "paC2nT0NX9k",
    title: "Sự tiến bộ rõ rệt của học viên sau 5 buổi học",
  },
  {
    videoId: "iOXMy18BgBs",
    title: "Bài tập nói về nhà của học viên lớp Giao Tiếp Nâng Cao",
  },
  {
    videoId: "XX8zEE2BCBc",
    title: "Bài nói của học viên khóa tiếng Trung Nâng cao",
  },
  {
    imageUrl: "/Review cap 2.jpg",
    // videoId: "lPzi-tw0Ngc",
    title: "",
  },
  {
    videoId: "k1krM7k8uEU",
    title: "Bài tập về nhà của học viên lớp HSKK cao cấp",
  },
  {
    videoId: "ssHRfenqhzU",
    title: "Học viên lớp HSKK cao cấp luyện đọc lưu loát, diễn cảm",
  },
  {
    imageUrl: "/Review cap 3.jpg",
    title: "",
  },
  {
    imageUrl: "/Review cap 4.jpg",
    title: "",
  },
  {
    imageUrl: "/Review cap 1.jpg",
    title: "",
  },
];

export default function Reviews() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div>
            <h2 className="font-bold h2">
              Sau <HighlightWord>khoá học</HighlightWord> các học viên nói
              流畅度?
            </h2>
            <p className="body2-regular">
              Review và kết quả của các bạn học viên sau một thời gian học
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
                {review.videoId !== undefined ? (
                  <YoutubeVideo videoId={review.videoId} />
                ) : (
                  <Image
                    src={review.imageUrl}
                    alt={review.title}
                    width={255}
                    height={150}
                    className="size-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
