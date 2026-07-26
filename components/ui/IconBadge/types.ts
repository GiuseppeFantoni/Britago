import type { IconType } from "react-icons";

export type IconBadgeVariant = "primary" | "gold" | "success";
export type IconBadgeSize = "sm" | "md" | "lg";

export interface IconBadgeProps {
  icon: IconType;
  variant?: IconBadgeVariant;
  size?: IconBadgeSize;
  groupHover?: boolean;
}
