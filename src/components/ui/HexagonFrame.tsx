import React from "react";
import { cn } from "./utils";

// Rounded Pointy-Side Hexagon Path (Normalized 0-100)
// This path creates a hexagon with points on Left/Right and flat Top/Bottom.
// Adjusted for 0-100 viewBox.
const HEX_PATH_POINTY_SIDE = `
  M2 50
  Q2 45 6 39
  L22 9
  Q26 2 34 2
  L66 2
  Q74 2 78 9
  L94 39
  Q98 45 98 50
  Q98 55 94 61
  L78 91
  Q74 98 66 98
  L34 98
  Q26 98 22 91
  L6 61
  Q2 55 2 50
  Z
`;

// Minified Data URI for mask-image
const svgDataUri = `data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="${HEX_PATH_POINTY_SIDE.replace(/\s+/g, ' ').trim()}" fill="black"/></svg>`;

interface HexagonFrameProps {
  children?: React.ReactNode;
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function HexagonFrame({ src, alt, children, className, imgClassName, priority }: HexagonFrameProps) {
  return (
    <div 
      className={cn(
        "relative transition-transform duration-500", 
        className
      )}
    >
      <div
        className="w-full h-full overflow-hidden"
        style={{
          maskImage: `url('${svgDataUri}')`,
          maskSize: '100% 100%', // Stretch to fill
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url('${svgDataUri}')`,
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt || ""}
            loading={priority ? "eager" : "lazy"}
            className={cn("w-full h-full object-cover", imgClassName)}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}

interface HexagonOutlineProps extends React.SVGProps<SVGSVGElement> {
  variant?: "orange" | "blue" | "light";
  strokeWidth?: number;
}

export function HexagonOutline({ className, variant = "blue", strokeWidth = 2, ...props }: HexagonOutlineProps) {
  const colors = {
    orange: "#fa6b29",
    blue: "#1f4fcc",
    light: "rgba(255,255,255,0.2)",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("overflow-visible pointer-events-none", className)}
      {...props}
    >
      <path
        d={HEX_PATH_POINTY_SIDE}
        fill="none"
        stroke={colors[variant]}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function HexagonSolid({ className, variant = "blue", ...props }: HexagonOutlineProps) {
    const colors = {
      orange: "#fa6b29",
      blue: "#1f4fcc",
      light: "rgba(255,255,255,0.1)",
    };
  
    return (
      <svg
        viewBox="0 0 100 100"
        className={cn("overflow-visible pointer-events-none", className)}
        {...props}
      >
        <path
          d={HEX_PATH_POINTY_SIDE}
          fill={colors[variant]}
          stroke="none"
        />
      </svg>
    );
  }

export function HexagonClusterOutline({ className, variant = "orange", strokeWidth = 2 }: HexagonOutlineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Top Hex */}
      <HexagonOutline 
        variant={variant} 
        strokeWidth={strokeWidth} 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[58%] h-[58%]" 
      />
      {/* Bottom Left */}
      <HexagonOutline 
        variant={variant} 
        strokeWidth={strokeWidth} 
        className="absolute bottom-[2%] left-0 w-[58%] h-[58%]" 
      />
      {/* Bottom Right */}
      <HexagonOutline 
        variant={variant} 
        strokeWidth={strokeWidth} 
        className="absolute bottom-[2%] right-0 w-[58%] h-[58%]" 
      />
    </div>
  );
}
