import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("relative max-w-xl", {
  variants: {
    variant: {
      default: "",
      destructive:
        "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    },
    align: {
      left: "text-left",
      right: "text-right",
      center: "text-center mx-auto",
    },
  },
  defaultVariants: {
    variant: "default",
    align: "center",
  },
});

const Heading = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof headingVariants>
>(({ className, variant, align, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(headingVariants({ variant, align }), className)}
    {...props}
  />
));
Heading.displayName = "Heading";

const HeadingTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-3xl font-semibold sm:text-4xl", className)}
    {...props}
  />
));
HeadingTitle.displayName = "HeadingTitle";

const HeadingDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-4", className)} {...props} />
));
HeadingDescription.displayName = "HeadingDescription";

export { Heading, HeadingTitle, HeadingDescription };
