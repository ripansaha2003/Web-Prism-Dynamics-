import React from "react";
import "../css/AIMLSection.css"; // ✅ Keep CSS import

const AIMLSection = () => {
  const features = [
    {
      icon: "/arrow-1.png",
      title: "Predictive analytics ",
      description: "Anticipate market trends and consumer behavior.",
    },
    {
      icon: "/arrow-2.png",
      title: "Automation & efficiency",
      description: " Reduce manual tasks and enhance productivity",
    },
    {
      icon: "/arrow-3.png",
      title: "Enhanced customer experience",
      description: "Deliver personalized recommendations and support.",
    },
    {
      icon: "/arrow-4.png",
      title: "Data-driven insights",
      description: "Make informed decisions backed by intelligent analyt",
    },
    {
      icon: "/arrow-5.png",
      title: "Fraud detection & security",
      description: "Protect business operations with advanced threat detection",
    },
  ];

  return (
    <div className="aiml-container ">
      <div className="aiml-left">
        <h1>
         Why AI & ML are Essential  <span className="highlight">For your brand</span>{" "}
        </h1>
        <p className="description">
          In the current digital landscape, businesses must embrace AI and ML to remain competitive. These technologies offer:
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
      <div className="aiml-right">
        <img src="/freepik-robo.png" alt="AR VR" className="main-image" />
      </div>
    </div>
  );
};

export default AIMLSection;

