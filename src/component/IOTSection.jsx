import React from "react";
import "../css/IOTSection.css"; // ✅ Keep CSS import

const IOTSection = () => {
  const features = [
    {
      icon: "/arrow-1.png",
      title: "Smart data collection ",
      description: "Gather real-time data from connected devices.",
    },
    {
      icon: "/arrow-2.png",
      title: "Enhanced efficiency",
      description: " Use VR simulations for hands-on training",
    },
    {
      icon: "/arrow-3.png",
      title: "Predictive maintenance",
      description: " Prevent system failures with proactive monitoring.",
    },
    {
      icon: "/arrow-4.png",
      title: "Improved customer experience",
      description: "Deliver personalized and responsive services",
    },
    {
      icon: "/arrow-5.png",
      title: "Cost reduction",
      description: " Minimize operational expenses with intelligent automation.",
    },
  ];

  return (
    <div className="iot-container ">
      <div className="iot-left">
        <h1>
        Why IoT is a Game-Changer <span className="highlight">For Businesses?</span>{" "}
        </h1>
        <p className="description">
        IoT is transforming industries by providing real-time insights, automation, better security, accessibility, and seamless connectivity. Businesses that adopt IoT benefit from:
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
      <div className="iot-right">
        <img src="/why-iot.png" alt="AR VR" className="main-image" />
      </div>
    </div>
  );
};

export default IOTSection;

