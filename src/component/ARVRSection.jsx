// import React from "react";
// import "../css/ARVRSection.css"
// // import mainImage from "/public/ar-vr-b.png";
// // import icon1 from "/public/style-arrow-icon.png";
// // import icon2 from "/public/style-arrow-icon1.png";
// // import icon3 from "/public/style-arrow-icon2.png";
// // import icon4 from "/public/style-arrow-icon3.png";
// // import icon5 from "/public/style-arrow-icon4.png";

// const ARVRSection = () => {
//   const features = [
//     {
//       icon: icon1,
//       title: "Higher customer engagement",
//       description: "Provide interactive and immersive experiences.",
//     },
//     {
//       icon: icon2,
//       title: "Better training & skill development",
//       description: "Use VR simulations for hands-on training.",
//     },
//     {
//       icon: icon3,
//       title: "Improved remote collaboration",
//       description: "Enable real-time virtual meetings and workspaces.",
//     },
//     {
//       icon: icon4,
//       title: "Reduced operational costs",
//       description: "Reduce travel and infrastructure costs with virtual solutions.",
//     },
//     {
//       icon: icon5,
//       title: "Data-driven decision making",
//       description: "Use AR analytics to understand customer behavior.",
//     },
//   ];

//   return (
//     <div className="arvr-container">
//       <div className="arvr-left">
//         <h2>Why AR & VR Are <span className="highlight">Game-Changers</span> <span className="light">For Businesses?</span></h2>
//         <p className="description">
//           AR and VR are no longer simply futuristic concepts—they are transforming the way businesses operate and engage with customers. Companies integrating AR and VR experience:
//         </p>
//         <ul className="feature-list">
//           {features.map((item, index) => (
//             <li key={index} className="feature-item">
//               <img src={item.icon} alt="" className="feature-icon" />
//               <div>
//                 <strong>{item.title}</strong> – {item.description}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="arvr-right">
//         <img src={mainImage} alt="AR VR Illustration" className="main-image" />
//       </div>
//     </div>
//   );
// };

// export default ARVRSection;
import React from "react";
import "../css/ARVRSection.css"; // ✅ Keep CSS import

const ARVRSection = () => {
  const features = [
    {
      icon: "/arrow-1.png",
      title: "Higher customer engagement",
      description: "Provide interactive and immersive experiences.",
    },
    {
      icon: "/arrow-2.png",
      title: "Better training & skill development",
      description: "Use VR simulations for hands-on training.",
    },
    {
      icon: "/arrow-3.png",
      title: "Improved remote collaboration",
      description: "Enable real-time virtual meetings and workspaces.",
    },
    {
      icon: "/arrow-4.png",
      title: "Improved remote collaboration",
      description: "Enable real-time virtual meetings and workspaces.",
    },
    {
      icon: "/arrow-5.png",
      title: "Improved remote collaboration",
      description: "Enable real-time virtual meetings and workspaces.",
    },
  ];

  return (
    <div className="arvr-container ">
      <div className="arvr-left">
        <h2>
          Why AR & VR Are game-changers <span className="highlight">For Business?</span>{" "}
        </h2>
        <p className="description">
          AR and VR are no longer simply futuristic concepts—they are
          transforming the way businesses operate and engage with customers.
        </p>
        <ul className="feature-list">
          {features.map((item, index) => (
            <li key={index} className="feature-item">
              <img src={item.icon} alt="icon" className="feature-icon" />
              <div>
                <strong>{item.title}</strong> – {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="arvr-right">
        <img src="/ar-vr-right.png" alt="AR VR" className="main-image" />
      </div>
    </div>
  );
};

export default ARVRSection;

