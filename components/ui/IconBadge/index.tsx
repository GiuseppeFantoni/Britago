import { cn } from "@/lib/utils";
import type { IconBadgeProps } from "./types";

const BOX_SIZES = {
  sm: "h-8 w-8 rounded-lg",
  md: "h-10 w-10 rounded-lg",
  lg: "h-12 w-12 rounded-xl",
} as const;

const ICON_SIZES = {
  sm: 15,
  md: 18,
  lg: 22,
} as const;

const VARIANT_STYLES = {
  primary: {
    box: "bg-britago-primary/10",
    boxHover: "group-hover:bg-britago-primary",
    icon: "text-britago-primary",
    iconHover: "group-hover:text-white",
  },
  gold: {
    box: "bg-britago-secondary/20",
    boxHover: "",
    icon: "text-britago-secondary",
    iconHover: "",
  },
  success: {
    box: "bg-success/15",
    boxHover: "group-hover:scale-105 group-hover:bg-success",
    icon: "text-success",
    iconHover: "group-hover:text-white",
  },
} as const;

export function IconBadge({
  icon: Icon,
  variant = "primary",
  size = "md",
  groupHover = false,
}: IconBadgeProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center transition-all duration-300",
        BOX_SIZES[size],
        styles.box,
        groupHover && styles.boxHover,
      )}
    >
      <Icon
        size={ICON_SIZES[size]}
        className={cn(
          "transition-colors duration-300",
          styles.icon,
          groupHover && styles.iconHover,
        )}
        aria-hidden
      />
    </div>
  );
}
