"use client";
import { Dialog, DialogContent } from "@/components/ui/popup-dialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PopupProps {
  src: string;
  label?: string;
  width?: number;
  height?: number;
  duration?: number;
}

export default function PopUp({
  src,
  label = "",
  width = 1600,
  height = 1200,
  duration = 2000,
}: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShownDate = localStorage.getItem("lastShownDate");
    const today = new Date().toDateString();

    if (lastShownDate !== today) {
      // Nếu chưa hiển thị trong ngày, set state và cập nhật ngày
      let timerId = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("lastShownDate", today);
      }, duration);
      return () => clearTimeout(timerId);
    }
  }, [duration]);
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl">
          <Image
            src={src}
            alt={label}
            width={width}
            height={height}
            priority
            quality={100}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
