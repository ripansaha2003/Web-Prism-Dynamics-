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
import "../css/BLOCKSection.css"; // ✅ Keep CSS import

const ARVRSection = () => {
  const features = [
    {
      icon: "/arrow-1.png",
      title: "Enhanced security & trust",
      description: " Anticipate market trends and consumer behavior.",
    },
    {
      icon: "/arrow-2.png",
      title: "Increased transparency",
      description: "Every transaction recorded on the blockchain is visible to all participants, creating higher transparency and accountability.",
    },
    {
      icon: "/arrow-3.png",
      title: "Decentralized control",
      description: "Web 3.0 empowers users with more control over their own data, creating a more democratic and equitable digital ecosystem.",
    },
    {
      icon: "/arrow-4.png",
      title: "Data-driven insights",
      description: " Make informed decisions backed by intelligent analytics",
    },
    {
      icon: "/arrow-5.png",
      title: "New revenue models",
      description: "Both blockchain and Web 3.0 unlock new ways for brands to monetize their products and services, such as through tokenization or decentralized finance (DeFi).",
    },
  ];

  return (
    <div className="block-container ">
      <div className="block-left">
        <h2>
         The Importance Of Blockchain & Web 3.0 </h2><h2><span className="highlight">For Brands</span>{" "}
        </h2>
        <p className="description">
         Blockchain and Web 3.0 offer businesses a chance to transform the way they operate, engage with customers, and secure data. These technologies create opportunities for brands to build trust, transparency, and efficiency in their operations. Here's why they matter:
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
      <div className="block-right">
        <img src="/bitcoin-pic.png" alt="AR VR" className="main-image" />
      </div>
    </div>
  );
};

export default ARVRSection;

