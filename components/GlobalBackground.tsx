import { useEffect, useRef } from "react";
export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configuration
    const lines = 30; // Reduced density for cleaner look
    const colorBase = "rgba(10, 26, 60, 0.03)"; // Deep Navy - Extremely subtle
    const colorHighlight = "rgba(250, 107, 41, 0.1)"; // Orange - Very faint highlight
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Get current scroll for direct manipulation
      const scrollYVal = window.scrollY;
      
      // We map scroll position to the wave phase.
      // No automatic time increment means it stops moving when you stop scrolling.
      const scrollPhase = scrollYVal * 0.005;

      // Draw waves
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        // Alternating colors
        const isHighlight = i % 6 === 0;
        ctx.strokeStyle = isHighlight ? colorHighlight : colorBase;
        ctx.lineWidth = isHighlight ? 3 : 1.5;

        // Base Y position
        const yBase = (height / lines) * i + (height * 0.05);

        for (let x = 0; x <= width; x += 10) { // Smaller step for smoother curves
          
          // Wave calculation based ONLY on x and scrollPhase
          // We add 'i' to create offset between lines
          const noise = Math.sin(x * 0.002 + scrollPhase + i * 0.15) * 
                        Math.cos(x * 0.005 - scrollPhase * 0.5);
          
          // Amplitude modulation based on x (taper edges)
          const taper = Math.sin((x / width) * Math.PI); 
          
          const distortion = noise * (60 + i * 3) * taper;
          
          const y = yBase + distortion;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        {/* Soft Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.6)_100%)] pointer-events-none" />
      </div>
      
      {/* Global Texture Overlay */}
      <div className="fixed inset-0 z-[50] pointer-events-none opacity-[0.03] mix-blend-multiply">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
      </div>
    </>
  );
}
