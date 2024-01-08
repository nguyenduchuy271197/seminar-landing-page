"use client";
import { Share } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FacebookMessengerShareButton, FacebookShareButton } from "react-share";
import { ReactSVG } from "react-svg";
import UrlClipboard from "./url-clipboard";

export default function ShareButton() {
  const shareUrl = "https://chinese-webinar-landing.vercel.app/";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center py-2 px-4 body2-semi rounded-full bg-neutral-200 hover:bg-neutral-300 transition">
          Chia sẻ <Share className="ml-2 size-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="space-y-2">
        <h2 className="text-3xl font-bold text-center">
          Chia sẻ khoá học này cho bạn bè
        </h2>

        <div className="flex items-center justify-center gap-4">
          <FacebookShareButton
            url={shareUrl}
            className="transition hover:opacity-90"
          >
            <ReactSVG src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701770435/forms/notion-webinar/Facebook_nq3mok.svg" />
          </FacebookShareButton>
          <FacebookMessengerShareButton
            appId=""
            url={shareUrl}
            className="transition hover:opacity-90"
          >
            <ReactSVG src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701770435/forms/notion-webinar/Messenger_nhk5xl.svg" />
          </FacebookMessengerShareButton>
        </div>

        <UrlClipboard url={shareUrl} />
      </DialogContent>
    </Dialog>
  );
}
