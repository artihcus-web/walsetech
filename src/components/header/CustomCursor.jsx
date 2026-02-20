import React, { useEffect, useState } from "react";

const CustomCursor = ({ isHoveringParent }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // HIGH VISIBILITY COLORS
  const neonLime = "#39FF14"; 
  const electricBlue = "#145ea8";

  return (
    <>
      {/* Precision Dot with Glow */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          backgroundColor: neonLime,
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          boxShadow: `0 0 15px ${neonLime}, 0 0 5px white`
        }}
      />
      
      {/* Highly Visible Radar Ring */}
      <div
        className={`fixed top-0 left-0 border-2 rounded-full pointer-events-none z-[9998] transition-all duration-500 cubic-bezier(0.19, 1, 0.22, 1) ${
          isHoveringParent 
            ? "w-16 h-16 opacity-40 scale-110" 
            : "w-10 h-10 opacity-100 scale-100"
        }`}
        style={{
          borderColor: neonLime,
          backgroundColor: isHoveringParent ? `${neonLime}33` : "transparent",
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          left: isHoveringParent ? "-32px" : "-20px",
          top: isHoveringParent ? "-32px" : "-20px",
          boxShadow: isHoveringParent ? `inset 0 0 20px ${neonLime}` : "none"
        }}
      />
    </>
  );
};

export default CustomCursor;