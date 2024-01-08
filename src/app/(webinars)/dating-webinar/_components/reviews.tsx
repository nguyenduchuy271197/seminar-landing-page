import HighlightWord from "@/components/highlight-word";
import { cn } from "@/lib/utils";
import YoutubeVideo from "./share/youtube-video";

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
    videoId: "lPzi-tw0Ngc",
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
    videoId: "sS8Wta30S_U",
    title: "",
  },
  {
    videoId: "sS8Wta30S_U",
    title: "",
  },
  {
    videoId: "sS8Wta30S_U",
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
              Sau<HighlightWord>khoá học</HighlightWord>các học viên nói 流畅度?
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
                <YoutubeVideo videoId={review.videoId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
