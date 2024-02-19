import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

export default function HighlightWord({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  // mx-[0.2em]
  return (
    <span className={cn("relative text-primary inline", className)} {...props}>
      {children}
      <Image
        src="/underline.png"
        alt="Underline"
        width={303}
        height={17}
        className="absolute top-[90%] left-0 h-4 w-full object-cover"
        quality={100}
      />
    </span>
  );
}
