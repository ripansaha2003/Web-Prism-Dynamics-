import React from "react";
import "../css/MAINSection.css"; // ✅ Keep CSS import

const MAINSection = () => {
  const features = [
    {
      icon: "/arrow-1.png",
      title: "Expert team",
      description: " Our experienced professionals are skilled in maintaining a variety of platforms, including content management systems (CMS), e-commerce sites, and mobile applications.",
    },
    {
      icon: "/arrow-2.png",
      title: "24/7 support",
      description: " We offer round-the-clock support to quickly address any issues that may arise, ensuring minimal downtime for your site or app.",
    },
    {
      icon: "/arrow-3.png",
      title: "Proactive approach",
      description: " Instead of waiting for problems to occur, we monitor your systems to prevent issues, offering regular updates and patches to keep everything running smoothly.",
    },
    {
      icon: "/arrow-4.png",
      title: "Customized plans",
      description: " Every business is unique. We provide tailored maintenance plans that suit your goals, whether you require minor updates or full-service support.",
    },
    {
      icon: "/arrow-5.png",
      title: "Affordable packages",
      description: "We offer flexible pricing models, making sure our maintenance services fit within your budget while delivering top-notch results.",
    },
  ];

  return (
    <div className="iot-container ">
      <div className="iot-left">
        <h1>
        Why choose Us for <span className="highlight"><br/>your website & app maintenance?</span>{" "}
        </h1>
        <p>
            At Web Prism Dynamics, we go above and beyond to offer high-quality, reliable, and cost-effective maintenance services. Here's why we are the best choice for your website and app maintenance:
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
        <img src="/why-main.png" alt="AR VR" className="main-image" />
      </div>
    </div>
  );
};

export default MAINSection;

