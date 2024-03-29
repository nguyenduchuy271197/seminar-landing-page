"use client";
import { Button } from "@/components/ui/button";
import { useInViewStore } from "@/hooks/use-inview";
import Link from "next/link";
import { useEffect, useState } from "react";
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
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };

  const targetDate = new Date();
  const timestamp = new Date(targetDate.getTime() + 30 * 60000);

  if (!inView) return null;

  return (
    <section className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full z-50">
      <div className="container">
        <div className="flex lg:justify-between lg:items-center lg:px-8 py-2 border bg-white rounded-md">
          <div className="lg:flex items-center gap-2 hidden">
            <div className="bg-primary rounded-full">
              <p className="text-white mx-3 my-2 subtitle2">
                Đăng ký sớm giảm 53%
              </p>
            </div>

            <div className="text-center">
              <p className="body2-semi">Giá vé sẽ tăng sau</p>
              <p className="text-primary subtitle2">
                <CountDown date={timestamp} renderer={renderer} />
              </p>
            </div>
          </div>

          <div className="flex flex-col px-4 py-2 lg:px-0 lg:py-0 lg:flex-row gap-2 lg:gap-5 lg:items-end w-full lg:w-auto">
            <div className="-space-y-1">
              <p className="line-through body1-regular">210.000 VNĐ</p>
              <h3 className="text-secondary h2 leading-none">99.000 VNĐ</h3>
            </div>

            <div className="mb-1 uppercase subtitle2">
              <Link
                // href="/thanh-toan?slug=japanese-one-day-class-master-tieng-nhat-voi-bi-kip-thien-phu-kotoonsei-x3-muc-luong-ngay-tro-thanh-quan-ly-tap-doan-nhat-ban-sau-3-gio-hoc"
                href="/waitlist?slug=japanese-one-day-class-master-tieng-nhat-voi-bi-kip-thien-phu-kotoonsei-x3-muc-luong-ngay-tro-thanh-quan-ly-tap-doan-nhat-ban-sau-3-gio-hoc"
              >
                <Button variant="secondary" className="w-full justify-center">
                  Giữ vé ngay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
