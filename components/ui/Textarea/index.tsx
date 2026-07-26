import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full resize-none rounded-lg border border-britago-gray-light bg-britago-light px-4 py-3 font-roboto text-sm text-britago-dark shadow-none transition-all duration-200 outline-none placeholder:text-britago-gray focus-visible:border-britago-primary focus-visible:bg-white focus-visible:ring-[3px] focus-visible:ring-britago-primary/15 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
