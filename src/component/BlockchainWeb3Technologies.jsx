// import React from "react";
// import './BlockchainWeb3Technologies.css';

// const BlockchainWeb3Technologies = () => {
//   return (
//     <div className="blockchain-web3-section">
//       <h2 className="title">
//         Our Blockchain &amp;Web 3.0 <span>Technologies</span>
//       </h2>
//       <p className="subtitle">
//         At Web Prism Dynamics LLP, we utilize the latest technologies and
//         frameworks to develop apps:
//       </p>
//       <div className="technology-circles">
//         <div className="circle blockchain">
//           <h3>Blockchain</h3>
//           <div className="icons">
//             <span className="icon">F</span>
//             <span className="icon">S</span>
//             <span className="icon">Xd</span>
//           </div>
//         </div>
//         <div className="circle web3">
//           <h3>Web 3.0</h3>
//           <div className="icons">
//             <span className="icon">Ps</span>
//             <span className="icon">Id</span>
//             <span className="icon">Lr</span>
//           </div>
//         </div>
//         <div className="circle branding">
//           <h3>Branding &amp; Video</h3>
//           <div className="icons">
//             <span className="icon">Ai</span>
//             <span className="icon">Pr</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlockchainWeb3Technologies;


// import React from "react";

// const BlockchainWeb3Technologies = () => {
//   const sectionStyle = {
//     textAlign: "center",
//     padding: "60px 20px",
//     position: "relative",
//   };

//   const titleStyle = {
//     fontSize: "36px",
//     color: "#0066b2",
//   };

//   const strokeStyle = {
//     color: "transparent",
//     WebkitTextStroke: "1px #0066b2",
//   };

//   const subtitleStyle = {
//     marginTop: "10px",
//     color: "#666",
//     fontSize: "18px",
//   };

//   const techCirclesStyle = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "60px",
//     marginTop: "60px",
//     position: "relative",
//   };

//   const lineStyle = {
//     content: '""',
//     position: "absolute",
//     top: "50%",
//     left: "10%",
//     right: "10%",
//     height: "2px",
//     borderBottom: "2px dashed #7db4e6",
//     zIndex: "-1",
//   };

//   const circleBaseStyle = {
//     width: "200px",
//     height: "200px",
//     borderRadius: "50%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
//   };

//   const blockchainCircle = {
//     ...circleBaseStyle,
//     background: "radial-gradient(circle, #ffffff 0%, #ffe0f0 100%)",
//   };

//   const web3Circle = {
//     ...circleBaseStyle,
//     background: "radial-gradient(circle, #ffffff 0%, #e0e8ff 100%)",
//   };

//   const brandingCircle = {
//     ...circleBaseStyle,
//     background: "radial-gradient(circle, #ffffff 0%, #fff2d5 100%)",
//   };

//   const h3Style = {
//     marginBottom: "15px",
//     fontSize: "18px",
//     color: "#003366",
//   };

//   const iconsStyle = {
//     display: "flex",
//     gap: "15px",
//   };

//   const iconStyle = {
//     display: "inline-block",
//     background: "#000",
//     color: "#fff",
//     padding: "8px 12px",
//     borderRadius: "6px",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={sectionStyle}>
//       <h2 style={titleStyle}>
//         Our Blockchain &amp;Web 3.0 <span style={strokeStyle}>Technologies</span>
//       </h2>
//       <p style={subtitleStyle}>
//         At Web Prism Dynamics LLP, we utilize the latest technologies and
//         frameworks to develop apps:
//       </p>

//       <div style={{ ...techCirclesStyle, position: "relative" }}>
//         {/* Horizontal dashed line */}
//         <div style={lineStyle}></div>

//         {/* Blockchain Circle */}
//         <div style={blockchainCircle}>
//           <h3 style={h3Style}>Blockchain</h3>
//           <div style={iconsStyle}>
//             <span style={iconStyle}>F</span>
//             <span style={iconStyle}>S</span>
//             <span style={iconStyle}>Xd</span>
//           </div>
//         </div>

//         {/* Web 3.0 Circle */}
//         <div style={web3Circle}>
//           <h3 style={h3Style}>Web 3.0</h3>
//           <div style={iconsStyle}>
//             <span style={iconStyle}>Ps</span>
//             <span style={iconStyle}>Id</span>
//             <span style={iconStyle}>Lr</span>
//           </div>
//         </div>

//         {/* Branding Circle */}
//         <div style={brandingCircle}>
//           <h3 style={h3Style}>Branding &amp; Video</h3>
//           <div style={iconsStyle}>
//             <span style={iconStyle}>Ai</span>
//             <span style={iconStyle}>Pr</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlockchainWeb3Technologies;

import React from "react";

const BlockchainWeb3Technologies = () => {
  const sectionStyle = {
    textAlign: "center",
    padding: "60px 20px",
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
    <div style={sectionStyle}>
      <h2 style={titleStyle}>
        Our Blockchain &amp; Web 3.0 <span style={strokeStyle}>Technologies</span>
      </h2>
      <p style={subtitleStyle}>
        At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:
      </p>

      <div style={techCirclesStyle}>
        {/* Horizontal dashed line */}
        <div style={lineStyle}></div>

        {/* Blockchain Circle */}
        <div style={blockchainCircle}>
          <h3 style={h3Style}>Blockchain</h3>
          <div style={iconsStyle}>
            <img src="/circle-icon1.png" alt="Blockchain 1" style={iconImageStyle} />
            <img src="/circle-icon2.png" alt="Blockchain 2" style={iconImageStyle} />
            <img src="/circle-icon3.png" alt="Blockchain 3" style={iconImageStyle} />
          </div>
        </div>

        {/* Web 3.0 Circle */}
        <div style={web3Circle}>
          <h3 style={h3Style}>Web 3.0</h3>
          <div style={iconsStyle}>
            <img src="/circle-icon4.png" alt="Web3 1" style={iconImageStyle} />
            <img src="/circle-icon5.png" alt="Web3 2" style={iconImageStyle} />
            <img src="/circle-icon6.png" alt="Web3 3" style={iconImageStyle} />
          </div>
        </div>

        {/* Branding Circle */}
        <div style={brandingCircle}>
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

export default BlockchainWeb3Technologies;
