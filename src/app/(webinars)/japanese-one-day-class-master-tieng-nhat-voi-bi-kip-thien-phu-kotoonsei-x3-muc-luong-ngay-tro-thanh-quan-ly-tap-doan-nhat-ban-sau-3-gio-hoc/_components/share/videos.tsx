"use client";

import { Play } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Videos({
  // thumbnail,
  url,
}: {
  // thumbnail?: string;
  url: string;
}) {
  // const [open, setOpen] = useState(false);
  // const cover =
  //   thumbnail !== undefined
  //     ? thumbnail
  //     : `https://img.youtube.com/vi/${url}/0.jpg`;
  return (
    <div className="h-full">
      {/* <div className="relative overflow-hidden rounded-xl h-full">
        <Image
          src={cover}
          alt="Thumbnail"
          width={1000}
          height={500}
          className="w-full h-full object-cover mx-auto"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <button
            onClick={() => setOpen(true)}
            className="size-20 flex justify-center items-center rounded-full border-secondary border-[3px] hover:bg-secondary text-secondary hover:text-white transition"
          >
            <Play className="size-8 stroke-2" />
          </button>
        </div>
      </div> */}
      <ReactPlayer
        // isOpen={open}
        // onClose={() => setOpen(false)}
        url={url}
        playing
        width="100%"
        height="100%"
        className="rounded-md overflow-hidden"
        controls
      />
    </div>
  );
}
