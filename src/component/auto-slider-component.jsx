import React, { useEffect, useState } from 'react';
import '../css/auto-slider-component.css';

const AutoSliderComponent = () => {
  // Sample logo data - replace with your actual logos
  const logos = [
    { id: 1, src: "/logoipsum1.svg", alt: "Client 1" },
    { id: 2, src: "/logoipsum2.svg", alt: "Client 2" },
    { id: 3, src: "/logoipsum3.svg", alt: "Client 3" },
    { id: 4, src: "/logoipsum4.svg", alt: "Client 4" },
    { id: 5, src: "/logoipsum5.svg", alt: "Client 5" },
    { id: 6, src: "/logoipsum1.svg", alt: "Client 1" },
    { id: 7, src: "/logoipsum2.svg", alt: "Client 2" },
    { id: 8, src: "/logoipsum3.svg", alt: "Client 3" },
    { id: 9, src: "/logoipsum4.svg", alt: "Client 4" },
    { id: 10, src: "/logoipsum5.svg", alt: "Client 5" },
  ];

  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];
  
  const [position, setPosition] = useState(0);
  const speed = 0.5; // pixels per frame
  
  useEffect(() => {
    const scrollLogos = () => {
      setPosition((prevPosition) => {
        // Reset position once the first set of logos is out of view
        if (prevPosition <= -logos.length * 150) {
          return 0;
        }
        return prevPosition - speed;
      });
    };
    
    const animationId = requestAnimationFrame(function animate() {
      scrollLogos();
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationId);
  }, [logos.length]);

  return (
    <div className="auto-slider-logo-carousel">
      <div className="auto-slider-container">
        <div className="auto-slider-carousel-container">
          <div 
            className="auto-slider-logo-slider"
            style={{ 
              transform: `translateX(${position}px)`,
              width: `${duplicatedLogos.length * 150}px`
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="auto-slider-logo-item"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="auto-slider-logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSliderComponent;