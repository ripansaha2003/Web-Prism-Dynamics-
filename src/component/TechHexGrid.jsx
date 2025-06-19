import React from 'react';
import HexCategory from './HexCategory';
import '../css/TechHexGrid.css';

const categories = [
  {
    title: "Front-End",
    color: "#ec4899",
    icons: [
      "/public/hexa1.png", "/public/hexa2.png", "/public/hexa3.png",
      "/public/hexa4.png", "/public/hexa5.png", "/public/hexa6.png","/public/hexa7.png","/public/hexa8.png"
    ],
  },
  {
    title: "Back-End",
    color: "#8b5cf6",
    icons: ["/public/hexa9.png", "/public/hexa10.png","/public/hexa11.png","/public/hexa12.png",
        "/public/hexa13.png","/public/hexa14.png","/public/hexa15.png","/public/hexa16.png",
        "/public/hexa17.png","/public/hexa18.png","/public/hexa19.png","/public/hexa20.png"
    ],
  },
  {
    title: "Mobile",
    color: "#facc15",
    icons: ["/public/hexa21.png","/public/hexa22.png", "/public/hexa23.png","/public/hexa24.png",
        "/public/hexa25.png","/public/hexa26.png","/public/hexa27.png","/public/hexa28.png"
    ],
  },
  {
    title: "DevOps",
    color: "#38bdf8",
    icons: ["/public/hexa29.png", "/public/hexa30.png","/public/hexa31.png","/public/hexa32.png",
        "/public/hexa33.png","/public/hexa34.png","/public/hexa35.png","/public/hexa36.png","/public/hexa37.png","/public/hexa38.png"],
  },
  {
    title: "CMS",
    color: "#a78bfa",
    icons: ["/public/hexa39.png","/public/hexa40.png","/public/hexa41.png",],
  },
  {
    title: "Design",
    color: "#f472b6",
    icons: ["/public/hexa42.png","/public/hexa43.png","/public/hexa44.png","/public/hexa45.png","/public/hexa46.png","/public/hexa47.png","/public/hexa48.png"],
  },
];

const TechHexGrid = () => {
  return (
    <div className="hex-grid">
      {categories.map((cat, idx) => (
        <HexCategory key={idx} {...cat} />
      ))}
    </div>
  );
};

export default TechHexGrid;
