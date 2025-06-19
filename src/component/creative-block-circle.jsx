import React from "react"; // ✅ import CSS for responsiveness only
import "../css/block-circle.css";
const CreativeBlockCircle = () => {
  const sectionStyle = {
    textAlign: "center",
    // padding: "80px 10px",
    marginTop: "100px",
    position: "relative",
  };

  const titleStyle = {
    fontSize: "3.5vw",
    color: "#0066b2",
  };

  const strokeStyle = {
    color: "transparent",
    WebkitTextStroke: "1px #0B6CB9",
  };

  const subtitleStyle = {
    marginTop: "10px",
    color: "#666",
    fontSize: "18px",
  };

  const techCirclesStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    marginTop: "60px",
    position: "relative",
    flexWrap: "wrap",
  };

  const lineStyle = {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "10%",
    right: "10%",
    height: "2px",
    borderBottom: "2px dashed #7db4e6",
    zIndex: "-1",
  };

  const circleBaseStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
  };

  const blockchainCircle = {
    ...circleBaseStyle,
    background: "radial-gradient(circle, #ffffff 0%, #FFA9D4A6 65%)",
  };

  const web3Circle = {
    ...circleBaseStyle,
    background: "radial-gradient(circle, #ffffff 0%, #B4AFEDA6 65%)",
  };

  const brandingCircle = {
    ...circleBaseStyle,
    background: "radial-gradient(circle, #ffffff 0%, #FFCAA9A6 65%)",
  };

  const h3Style = {
    marginBottom: "15px",
    fontSize: "18px",
    color: "#003366",
  };

  const iconsStyle = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const iconImageStyle = {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  };

  return (
    <div className="bwt-section" style={sectionStyle}>
      <h2 className="bwt-title" style={titleStyle}>
       Advanced Creative Tools <span style={strokeStyle}>We Use</span>
      </h2>

      <div className="bwt-tech-circles" style={techCirclesStyle}>
        {/* Horizontal dashed line */}
        <div className="bwt-line" style={lineStyle}></div>

        {/* Blockchain Circle */}
        <div className="bwt-circle" style={blockchainCircle}>
          <h3 style={h3Style}>UI/UX</h3>
          <div style={iconsStyle}>
            <img src="/circle-icon1.png" alt="Blockchain 1" style={iconImageStyle} />
            <img src="/circle-icon2.png" alt="Blockchain 2" style={iconImageStyle} />
            <img src="/circle-icon3.png" alt="Blockchain 3" style={iconImageStyle} />
          </div>
        </div>

        {/* Web 3.0 Circle */}
        <div className="bwt-circle" style={web3Circle}>
          <h3 style={h3Style}>Graphics</h3>
          <div style={iconsStyle}>
            <img src="/circle-icon4.png" alt="Web3 1" style={iconImageStyle} />
            <img src="/circle-icon5.png" alt="Web3 2" style={iconImageStyle} />
            <img src="/circle-icon6.png" alt="Web3 3" style={iconImageStyle} />
          </div>
        </div>

        {/* Branding Circle */}
        <div className="bwt-circle" style={brandingCircle}>
          <h3 style={h3Style}>Branding &amp; Video</h3>
          <div style={iconsStyle}>
            <img src="/circle-icon7.png" alt="Branding 1" style={iconImageStyle} />
            <img src="/circle-icon8.png" alt="Branding 2" style={iconImageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeBlockCircle;
