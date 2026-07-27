"use client";

import { Checkbox as CheckboxPrimitive } from "radix-ui";
import * as React from "react";
import { FiCheck } from "react-icons/fi";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded-sm border border-britago-gray-light shadow-none transition-shadow outline-none focus-visible:border-britago-primary focus-visible:ring-[3px] focus-visible:ring-britago-primary/15 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-britago-primary data-[state=checked]:bg-britago-primary data-[state=checked]:text-white",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <FiCheck className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
