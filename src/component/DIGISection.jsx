import React from "react";
import "../css/DIGISection.css"; // ✅ Keep CSS import

const DIGISection = () => {
  const features = [
    {
      icon: "/arrow-1.png",
      title: "Tailored strategies",
      description: "We create personalized marketing plans designed to achieve your business goals.",
    },
    {
      icon: "/arrow-2.png",
      title: "Proven results",
      description: " Our data-driven approach ensures effective campaigns that generate measurable results.",
    },
    {
      icon: "/arrow-3.png",
      title: "Expert team",
      description: "Our experienced professionals stay ahead of digital marketing trends, using the latest strategies and tools to maximize your brand’s potential.",
    },
    {
      icon: "/arrow-4.png",
      title: "End-to-end solutions",
      description: "  From SEO and content marketing to social media management and Google ads, we offer comprehensive services that cover all aspects of digital marketing.",
    },
  ];

  return (
    <div className="digi-container ">
      <div className="digi-left">
        <h1>
       Why Choose Web Prism Dynamics <span className="highlight"><br/>For Digital Marketing?</span>{" "}
        </h1>
        <p>
            At Web Prism Dynamics, we understand that no two businesses are alike. Our digital marketing services are customized to meet the unique needs of each client. Here’s why businesses choose us:
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
      <div className="digi-right">
        <img src="/digi2.png" alt="AR VR" className="main-image" />
      </div>
    </div>
  );
};

export default DIGISection;

