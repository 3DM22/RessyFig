import React from "react";
import { cn } from "./utils";

interface HexagonBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "orange" | "blue" | "outline";
  size?: "sm" | "md" | "lg";
}

export function HexagonBadge({ children, className, variant = "orange", size = "md", ...props }: HexagonBadgeProps) {
  const variants = {
    orange: "bg-[#fa6b29] text-white",
    blue: "bg-[#1f4fcb] text-white",
    outline: "border-2 border-[#1f4fcb] text-[#1f4fcb] bg-transparent",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center font-bold uppercase tracking-wider",
        variants[variant],
        sizes[size],
        className
      )}
      style={{
        // Reverting to the sharp clip-path "stretched hexagon" shape
        clipPath: "polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </div>
  );
}
