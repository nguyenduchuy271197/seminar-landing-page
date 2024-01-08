import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";

const buttonVariants = cva(
  "cursor-pointer font-bold font-sans transition-all px-4 py-2 rounded-full border border-transparent flex items-center text-base [&>svg]:w-8 [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-in-out [&>svg]:hover:transform uppercase disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "text-secondary-foreground bg-secondary hover:bg-secondary/90",
      },
      size: {
        default:
          "h-10 px-4 py-2 text-sm [&>svg]:w-6 [&>svg]:h-6 [&>svg]:hover:translate-x-1 [&>svg]:ml-1",
        lg: "h-14 px-8 [&>svg]:w-8 [&>svg]:h-8 [&>svg]:hover:translate-x-2 [&>svg]:ml-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span>{props.children}</span>
        <ArrowRightCircle />
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
