import React, { useEffect, useRef } from "react";
import "../css/slider-progress.css";

function SliderProgress({ current = 1, total = 3 }) {
  const barRef = useRef();

  useEffect(() => {
    const bar = barRef.current;
    let progress = 0;
    let animationFrameId;

    const animate = () => {
      progress += 0.5; // speed; adjust as needed
      bar.style.transform = `translateX(${progress}%)`;

      if (progress >= 100) {
        progress = 0; // reset for loop
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="slider-progress-container">
      <div className="slide-counter">
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
      <div className="slider-progress-bar-wrapper">
        <div className="slider-progress-bar" ref={barRef}></div>
      </div>
    </div>
  );
}

export default SliderProgress;
