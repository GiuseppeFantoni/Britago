import type { UseInViewOptions } from "framer-motion";

export interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  margin?: UseInViewOptions["margin"];
  y?: number;
  duration?: number;
}
