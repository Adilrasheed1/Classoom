import { useRef,useEffect } from "react";
export function Ballpit  ({ className = '', followCursor = true, ...props }) {
  const canvasRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ✅ Delay to ensure DOM is ready (VERY IMPORTANT)
    const timeout = setTimeout(() => {
      // ✅ Ensure canvas has size
      if (canvas.offsetWidth === 0 || canvas.offsetHeight === 0) {
        console.warn("Canvas has no size, skipping Ballpit init");
        return;
      }

      try {
        instanceRef.current = createBallpit(canvas, {
          followCursor,
          ...props
        });
      } catch (err) {
        console.error("Ballpit init failed:", err);
      }
    }, 100);

    // ✅ CLEANUP (prevents WebGL crash)
    return () => {
      clearTimeout(timeout);
      if (instanceRef.current) {
        instanceRef.current.dispose();
        instanceRef.current = null;
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`}
    />
  );
};