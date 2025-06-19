import React, { useEffect, useState } from "react";
import { golablContext } from "../../context/context";
import { useContext } from "react";
import SpecialBox1 from "../../component/special-box1";
import Faq from "../../component/faq";
import TechHexGrid  from "../../component/TechHexGrid";
import Infobox1 from "../../component/infobox1";
import ProgressIndicator from "../../component/ProgressIndicator";
import BigSliderComponent from "../../component/big-slider-component";
import IOTSection from "../../component/IOTSection";

function Iot() {
  const services = [
    {
      title: "Smart device integration",
      content: "• Seamless connectivity between IoT-enabled devices.Real-time data exchange for improved decision-making.",
      image: "../../web development.jpg",
      color: "#FFF8DE"
    },
    {
      title: "Smart manufacturing",
      content:"•Remote monitoring of machines to improve operational efficiency.Predictive maintenance to reduce downtime and extend equipment lifespan. ",
      image: "../../app development.jpg",
      color: "#E4F2FF"
    },
    {
      title: "Supply chain & logistics",
      content: "•GPS and RFID tracking for real-time shipment monitoring.Automated inventory management for optimized stock control",
      image: "../../creative work.png",
      color: "#F0EFFF"
    },
    {
      title: "Blockchain & Web 3",
      content: "Embrace the future with our blockchain and Web 3 solutions. Secure, decentralized, and innovative technologies for your business.",
      image: "../../block chain and web3.jpg",
      color: "#FFEEF6"
    }, {
      title: "IoT",
      content: "Connect and automate with our IoT solutions. Enhance efficiency and innovation with smart, interconnected devices and systems.",
      image: "../../iot.jpg",
      color: "#FFF8DE"
    },
    {
      title: "AI / ML",
      content: "Leverage the power of AI/ML to drive innovation and efficiency. Our solutions provide intelligent insights and automation for your business.",
      image: "../../AI ML.jpg",
      color: "#E4F2FF"
    },
    {
      title: "AR-VR",
      content: "Experience the future with our AR/VR solutions. Immersive, interactive experiences that transform how you engage with your audience.",
      image: "../../AR-VR.png",
      color: "#F0EFFF"
    },
    {
      title: "Dedicated Hiring",
      content: "Find the right talent with our dedicated hiring services. We provide skilled professionals to meet your specific business needs.",
      image: "../../dedicated hiring.jpg",
      color: "#FFEEF6"
    },

  ];
     const {
            page, 
          setPage,
          pageTitle,
          setPageTitle,
          headerNormal,
          setHeaderNormal,
          headerHighlight,
          setHeaderHighlight,
          heroImage,
          setHeroImage,
          heroContentImage,
          setHeroContentImage}=useContext(golablContext);
    
          useEffect(() => {
        setPage('iot');
        setPageTitle('IOT');
        setHeaderNormal('Connect everything seamlessly with innovative ');
        setHeaderHighlight('IoT solutions');
        setHeroImage('/about-us-cover-img.svg');
        setHeroContentImage('/iot-pic.png');
      }, []);
      const faqData = [
    {
      id: "1",
      title: "What can we expect from Web Prism Dynamics’ IoT services?",
      content: "To reset your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password. Make sure to check your spam folder if you don't see the email in your inbox within a few minutes."
    },
    {
      id: "2",
      title: "How will Web Prism Dynamics help us implement IoT in our business?",
      content: "Web Prism Dynamics LLP will guide you through the entire IoT implementation process, from initial consultation to deployment and ongoing support. We tailor IoT systems to your specific needs, ensuring seamless integration with your existing infrastructure."
    },
    {
      id: "3",
      title: "What benefits will IoT bring to our business?",
      content: "You can track your order by logging into your account and visiting the 'Order History' section. There you'll find a tracking number and link for each shipped order. Alternatively, you can use the tracking information sent to your email when your order was dispatched."
    },
    {
      id: "4",
      title: "How does Web Prism Dynamics ensure the security of IoT systems?",
      content: "Our return policy allows you to return items within 30 days of delivery for a full refund. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the 'Return Item' option in your account dashboard. Shipping costs for returns are covered by the customer unless the item arrived damaged or incorrect."
    },
    {
      id: "5",
      title: "What sets Web Prism Dynamics apart in the IoT space?",
      content: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days depending on the destination. Additional customs fees, taxes, and import duties may apply depending on your country's regulations. These charges are the responsibility of the customer and are not included in our shipping fees."
    }
  ];
  

  return (
    <div>
      <div className="specialization-hiring-container">
        <div><img src="/iot-unlock.png" alt="" /></div>
        <div>
          <h1>Unlocking Business Potential with <span> Smart Connectivity</span></h1>
          <p>
           At Web Prism Dynamics, we use Internet of Things (IoT) technologies to help brands gain a competitive edge in today’s connected world. By integrating smart devices, real-time analytics, and automated processes, we enable businesses to enhance efficiency, reduce costs, and help with better decision-making.
          </p>
        </div>
      </div>
      {/* <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
          <h1>Why AI & ML are Essential </h1>
          <h1><span>For your brand</span></h1>
          <p>In the current digital landscape, businesses must embrace AI and ML to remain competitive. These technologies offer:</p>
          <div className="why-wpd-boxes-container">
            <SpecialBox1
              header="Predictive analytics "
              content="- Anticipate market trends and consumer behavior."
              icon="/arrow-1.png"
            /> 
            <SpecialBox1
              header="Automation & efficiency"
              content=" Reduce manual tasks and enhance productivity"
              icon="/arrow-2.png"
            />
            <SpecialBox1
              header="Enhanced customer experience"
              content="Deliver personalized recommendations and support"
              icon="/arrow-3.png"
            />
            <SpecialBox1
              header="Data-driven insights"
              content="Make informed decisions backed by intelligent analyt"
              icon="/arrow-4.png"
            />
            <SpecialBox1
              header="Fraud detection & security"
              content="Protect business operations with advanced threat detection"
              icon="/arrow-4.png"
            />
          </div>
        </div>
        <div className="why-wpd-dh-img-container"><img src="/freepik-robo.png" alt="" /></div>
      </div> */}

<IOTSection/>

{/* <div className="dedicated-hiring-modules-container">
        <h2>AI & ML technologies<span>  At Web Prism Dynamics</span></h2>
        <p>We utilize state-of-the-art AI and ML solutions tailored to different industries:</p>
        <div className="dedicated-hiring-modules-cards-container">
          <Infobox1
            title="AI-Powered business intelligence"
            content={<ul><li>Advanced analytics for real-time decision-making.</li>
	                   <li>Automated reporting and data visualization.</li></ul>}
            color="#FFF8DE"
            url="/dh-full-time.svg"
            extracss={{
              padding: "8%"
            }}
            buttonActive={false}
            
          />
          <Infobox1
            title="ML for process optimization"
            content={<ul><li>Intelligent workflow automation to boost operational efficiency.</li>
                    <li>Predictive maintenance to prevent system failures</li></ul>}
            color="#E4F2FF"
            url="/dh-part-time.svg"
            extracss={{
              padding: "8%"
            }}
            buttonActive={false}
          />
          <Infobox1
            title="Chatbots & virtual assistants"
            content={<ul><li>  AI-driven Chatbot for 24/7 customer support. </li> 
                     <li> NLP-powered virtual assistants to enhance user engagement.</li></ul>}
            color="#F0EFFF"
            url="/dh-hourly.svg"
            extracss={{
              padding: "8%"
            }}
            buttonActive={false}
          />
        </div>
        
      </div>

<ProgressIndicator current={1} total={3} /> */}


<div className="webpage-our-services">
        <h1 className="homepage-our-services-header" >IoT technologies <span>At Web Prism Dynamic</span></h1>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p>
        <BigSliderComponent content={services} />
      </div>
<div className="dedicated-hiring-modules-container">
        <h2>Our IoT <span>Technologies</span></h2>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p></div>
<TechHexGrid />

 <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
          <h1><span>How Web Prism Dynamics </span></h1>
          <h1>helps your business?</h1>
          <p>By adopting our IoT solutions, your brand can:</p>
          
          <div className="why-wpd-boxes-container">
            
            <SpecialBox1
              header="Gain real-time insights "
              content="Make informed business decisions with live data."
              icon="/Frame1.png"
            /> 
            <SpecialBox1
              header="Boost operational efficiency "
              content="Automate and streamline business processes."
              icon="/Frame2.png"
            />
            <SpecialBox1
              header="Enhance security & safety "
              content="Implement IoT-based monitoring and threat detection."
              icon="/Frame3.png"
            />
            <SpecialBox1
              header="Improve customer engagement "
              content="Deliver personalized experiences using smart data."
              icon="/Frame4.png"
            />
            <SpecialBox1
              header="Drive innovation"
              content="Stay ahead by integrating emerging IoT technologies."
              icon="/Frame5.png"
            />
          </div>
        </div>
        <div className="why-wpd-dh-img-container"><img src="/how-iot.png" alt="" /></div>
      </div>




    <Faq data={faqData} />
    </div>
    
  )
}

export default Iot;