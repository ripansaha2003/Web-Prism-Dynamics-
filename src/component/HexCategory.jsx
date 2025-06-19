import React from 'react';
import '../css/TechHexGrid.css';

const HexCategory = ({ title, color, icons }) => {
  return (
    <div className="hexagon" style={{ borderColor: color }}>
      <div className="hex-inner" style={{ backgroundColor: `${color}20` }}>
        <h3 style={{ color }}>{title}</h3>
        <div className="icons">
          {icons.map((src, idx) => (
            <img key={idx} src={src} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HexCategory;
