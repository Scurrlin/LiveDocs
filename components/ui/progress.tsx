"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;
  max?: number;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, max = 100, ...props }, ref) => {
  const safeMax = max > 0 ? max : 100;
  const progressValue = value && safeMax > 0 ? (value / safeMax) * 100 : 0;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-black-5",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="size-full flex-1 bg-white-1 transition-all"
        style={{ transform: `translateX(-${100 - progressValue}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
