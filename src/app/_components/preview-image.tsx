import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes, ReactNode } from "react";

interface PreviewImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function PreviewImage({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-[90%] overflow-y-auto">
        {children}
      </DialogContent>
    </Dialog>
  );
}
