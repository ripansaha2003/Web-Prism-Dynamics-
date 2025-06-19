import React from "react";
import "../css/QASection.css"; // ✅ Keep CSS import

const QASection = () => {
  const features = [
    {
      icon: "/arrow-1.png",
      title: "Bug-free softwaret",
      description: " Detect and resolve errors early to prevent costly post-launch issues.",
    },
    {
      icon: "/arrow-2.png",
      title: "Enhanced user experience",
      description: "Deliver seamless, intuitive, and glitch-free applicationg enhance customer satisfaction.",
    },
    {
      icon: "/arrow-3.png",
      title: "Performance optimization",
      description: "Ensure your software runs smoothly under all conditions, from peak loads to unexpected traffic spikes.",
    },
    {
      icon: "/arrow-4.png",
      title: "Security & compliance",
      description: " Protect sensitive data and meet industry regulations with thorough security testing.",
    },
    {
      icon: "/arrow-5.png",
      title: "Cost savings",
      description: "Catching and fixing bugs during development is far cheaper than post-deployment  Fixes.",
    },
  ];

  return (
    <div className="qa-container ">
      <div className="qa-left">
        <h1>
        Why QA & testing is Essential <span className="highlight"><br/>For your business?</span>{" "}
        </h1>
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
      <div className="qa-right">
        <img src="/why-qa.png" alt="AR VR" className="main-image" />
      </div>
    </div>
  );
};

export default QASection;

