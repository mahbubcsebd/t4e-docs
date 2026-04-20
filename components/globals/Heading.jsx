import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "text-foreground",
  {
    variants: {
      level: {
        h1: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight",
        h2: "text-3xl sm:text-4xl font-semibold tracking-tight",
        h3: "text-2xl sm:text-3xl font-semibold tracking-tight",
        h4: "text-xl sm:text-2xl font-semibold tracking-tight",
        h5: "text-lg sm:text-xl font-semibold tracking-tight",
        h6: "text-base sm:text-lg font-semibold tracking-tight",
      },
    },
    defaultVariants: {
      level: "h2",
    },
  }
);

export function Heading({ className, level = "h2", children, ...props }) {
  const Comp = level;
  return (
    <Comp className={cn(headingVariants({ level, className }))} {...props}>
      {children}
    </Comp>
  );
}
