import HighlightWord from "@/components/highlight-word";
import { cn } from "@/lib/utils";
import YoutubeVideo from "./share/youtube-video";
import Image from "next/image";

const reviews = [
  {
    videoId: "paC2nT0NX9k",
    title: "",
  },
  {
    videoId: "iOXMy18BgBs",
    title: "",
  },
  {
    videoId: "XX8zEE2BCBc",
    title: "",
  },
  {
    imageUrl: "/Review cap 2.jpg",
    // videoId: "lPzi-tw0Ngc",
    title: "",
  },
  {
    videoId: "k1krM7k8uEU",
    title: "",
  },
  {
    videoId: "ssHRfenqhzU",
    title: "",
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
                    alt=""
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
