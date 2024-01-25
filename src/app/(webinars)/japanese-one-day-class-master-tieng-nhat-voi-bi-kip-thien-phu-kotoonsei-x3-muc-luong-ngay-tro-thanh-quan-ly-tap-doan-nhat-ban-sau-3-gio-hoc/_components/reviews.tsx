import HighlightWord from "@/components/highlight-word";
import { cn } from "@/lib/utils";
import YoutubeVideo from "./share/youtube-video";
import Image from "next/image";

const reviews = [
  {
    videoId: "v97H9gF7BN0",
    title: "Video 1",
  },
  {
    videoId: "paC2nT0NX9k",
    title: "Dynamic video",
  },
  {
    videoId: "hMfZ0VhVk-U",
    title: "Video 4",
  },
  {
    videoId: "iOXMy18BgBs",
    title: "Dynamic video",
  },
  {
    videoId: "XX8zEE2BCBc",
    title: "Dynamic video",
  },
  {
    videoId: "sO64xkcb_RA",
    title: "Video 5",
  },
  {
    // imageUrl: "/Review cap 3.jpg",
    videoId: "-RHktLQSNpY",
    title: "Video 6",
  },
  {
    imageUrl: "/Review cap 4.jpg",
    title: "",
  },
  {
    // imageUrl: "/Review cap 1.jpg",
    videoId: "XUkZu1_TnUU",
    title: "Video 9",
  },
];

export default function Reviews() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div>
            <h2 className="font-bold h2">
              Sau <HighlightWord>khoá học</HighlightWord> các học viên nói như
              người bản xứ!
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
