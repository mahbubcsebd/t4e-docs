import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "text-muted-foreground leading-relaxed",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm",
        lg: "text-lg sm:text-xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export function Paragraph({ className, size, children, ...props }) {
  return (
    <p className={cn(paragraphVariants({ size, className }))} {...props}>
      {children}
    </p>
  );
}
