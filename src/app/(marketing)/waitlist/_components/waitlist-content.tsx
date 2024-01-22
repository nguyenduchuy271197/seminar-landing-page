import Image from "next/image";
import React from "react";

export default function WaitlistContent() {
  return (
    <div className="hidden lg:block">
      <Image
        src="/Waitlist.png"
        alt="waitlist"
        width={475}
        height={675}
        className="rounded-md"
      />
    </div>
  );
}
