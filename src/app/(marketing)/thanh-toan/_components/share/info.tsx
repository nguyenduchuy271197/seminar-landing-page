"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { ClipboardCopy } from "lucide-react";

const infoVariants = cva("", {
  variants: {
    hasClipboard: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    hasClipboard: false,
  },
});

const Info = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof infoVariants>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Info.displayName = "Info";

const InfoTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("", className)} {...props} />
));
InfoTitle.displayName = "InfoTitle";

const InfoDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof infoVariants>
>(({ hasClipboard, className, ...props }, ref) => {
  const [_, copy] = useCopyToClipboard();
  return (
    <div
      ref={ref}
      className={cn("flex justify-between items-center gap-8", className)}
      {...props}
    >
      <p className="font-bold">{props.children}</p>

      {hasClipboard && (
        <button
          className="relative"
          onClick={() => {
            if (props.children) {
              copy(props.children.toString().replaceAll(" ", ""));
              toast.success("Sao chép thành công!");
            }
          }}
        >
          <ClipboardCopy className="text-primary" />
        </button>
      )}
    </div>
  );
});
InfoDescription.displayName = "InfoDescription";

export { Info, InfoTitle, InfoDescription };
