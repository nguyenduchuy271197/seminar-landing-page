"use client";

import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function YoutubeVideo({ videoId }: { videoId: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full">
      <div className="relative overflow-hidden rounded-xl h-full">
        <Image
          src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
          alt="Thumbnail"
          width={1000}
          height={500}
          className="w-full h-full object-cover mx-auto brightness-[60%]"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <button onClick={() => setOpen(true)}>
            <PlayCircle className="w-14 h-14 text-secondary stroke-1" />
          </button>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId={videoId}
        onClose={() => setOpen(false)}
        youtube={{ autoplay: 1, mute: 1 }}
      />
    </div>
  );
}
