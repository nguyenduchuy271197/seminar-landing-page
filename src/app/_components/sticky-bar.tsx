"use client";
import { Button } from "@/components/ui/button";
import { useInViewStore } from "@/hooks/use-inview";
import Link from "next/link";
import CountDown, { CountdownRenderProps, zeroPad } from "react-countdown";

export default function StickyBar() {
  const inView = useInViewStore((state) => state.inView);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <div>Thời hạn đã hết!</div>;
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(days)} ngày {zeroPad(hours)}:{zeroPad(minutes)}:
          {zeroPad(seconds)}
        </span>
      );
    }
  };

  const targetDate = new Date(Date.UTC(2024, 0, 1, -7, 0, 0));
  const timestamp = targetDate.getTime();

  if (!inView) return null;

  return (
    <section className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full hidden lg:block z-50">
      <div className="container">
        <div className="flex justify-between items-center px-8 py-2 border bg-white rounded-md">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-full">
              <p className="text-white mx-3 my-2 subtitle2">
                Đăng ký sớm giảm 33%
              </p>
            </div>

            <div className="text-center">
              <p className="body2-semi">Giá vé sẽ tăng sau</p>
              <p className="text-primary subtitle2">
                <CountDown date={timestamp} renderer={renderer} />
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-end">
            <div className="-space-y-1">
              <p className="line-through body1-regular">150.000 VNĐ</p>
              <h3 className="text-secondary h2 leading-none">100.000 VNĐ</h3>
            </div>

            <div className="mb-1 uppercase subtitle2">
              <Link href="/thanh-toan">
                <Button variant="secondary">Giữ vé ngay</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
