"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function PopUp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timerId = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl">
          <Image
            src="/Pop-up slogan.png"
            alt="slogan"
            width={800}
            height={600}
            priority
            quality={100}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
