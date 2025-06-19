import React, { useEffect, useState } from "react";
import { golablContext } from "../../context/context";
import { useContext } from "react";
import SpecialBox1 from "../../component/special-box1";
import Faq from "../../component/faq";
import TechHexGrid  from "../../component/TechHexGrid";
import Infobox1 from "../../component/infobox1";
import ProgressIndicator from "../../component/ProgressIndicator";
import BigSliderComponent from "../../component/big-slider-component";
import QASection from "../../component/QASection";

function QaTesting() {
  const services = [
    {
      title: "Automation testing ",
      content: "Faster and more efficient testing using cutting-edge automation tools",
      image: "../../our-qa-pic.png",
      color: "#FFF8DE"
    },
    {
      title: "Smart manufacturing",
      content:"•Remote monitoring of machines to improve operational efficiency.Predictive maintenance to reduce downtime and extend equipment lifespan. ",
      image: "../../our-qa-pic.png",
      color: "#E4F2FF"
    },
    {
      title: "Supply chain & logistics",
      content: "•GPS and RFID tracking for real-time shipment monitoring.Automated inventory management for optimized stock control",
      image: "../../our-qa-pic.png",
      color: "#F0EFFF"
    },
    {
      title: "Blockchain & Web 3",
      content: "Embrace the future with our blockchain and Web 3 solutions. Secure, decentralized, and innovative technologies for your business.",
      image: "../../our-qa-pic.png",
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
        setPage('qa-testing');
        setPageTitle('QA & TESTING');
        setHeaderNormal('Perfecting every detail with top-tier ');
        setHeaderHighlight('QA solutions');
        setHeroImage('/about-us-cover-img.svg');
        setHeroContentImage('/qa-image.png');
      }, []);
      const faqData = [
    {
      id: "1",
      title: "What can we expect from Web Prism Dynamics’ QA and Testing services?",
      content: "By choosing Web Prism Dynamics LLP, you will receive comprehensive quality assurance and testing services designed to ensure your software is bug-free, reliable, and performs flawlessly. Our experts conduct rigorous testing to detect and resolve issues, ensuring the final product meets the highest quality standards."
    },
    {
      id: "2",
      title: "How does Web Prism Dynamics ensure the quality of our software?",
      content: "By choosing Web Prism Dynamics LLP, you will receive comprehensive quality assurance and testing services designed to ensure your software is bug-free, reliable, and performs flawlessly. Our experts conduct rigorous testing to detect and resolve issues, ensuring the final product meets the highest quality standards."
    },
    {
      id: "3",
      title: "What types of testing will we receive from Web Prism Dynamics?",
      content: "We offer a wide range of testing services, including functional testing, performance testing, security testing, regression testing, and user acceptance testing (UAT). Our team customizes these services to your project’s unique requirements, ensuring comprehensive coverage for every aspect of your software."
    },
    {
      id: "4",
      title: "How will Web Prism Dynamics help us save time and reduce costs in testing?",
      content: "Our QA and testing services streamline the development process by identifying and resolving issues early, reducing the chances of costly post-launch fixes. By using both manual and automated testing, we accelerate the testing cycle while maintaining high accuracy and efficiency."
    },
    {
      id: "5",
      title: "What sets Web Prism Dynamics apart in QA and Testing? ",
      content: "Web Prism Dynamics LLP stands out with its attention to detail, industry expertise, and use of the latest testing tools and methodologies. Our team ensures your software is not only functional but also secure, scalable, and optimized for performance, providing you with a competitive advantage in the market."
    }
  ];
  

  return (
    <div>
      <div className="specialization-hiring-container">
        <div><img src="/qa-deliver.png" alt="" /></div>
        <div>
          <h1>Deliver flawless digital experiences<span> With Expert <br/>QA & testing</span></h1>
          <p> Today's digital landscape is all about user experience. A single bug or performance issue can impact user experience, damage brand reputation, and lead to financial losses. That’s why Quality Assurance (QA) and Testing are critical for businesses aiming to deliver high-performing, secure, and reliable software solutions.<br/>At Web Prism Dynamics, we offer dedicated QA & Testing services to help businesses identify and fix issues before they reach end users. Our expert QA professionals ensure that your applications, websites, and software solutions are free of defects and perform seamlessly across all devices and platforms.
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

<QASection/>

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
        <h1 className="homepage-our-services-header" >Our QA & testing <span>Services include:</span></h1>
        <p>Manual testing – Comprehensive functional and usability testing to detect defects in real-world scenarios.</p>
        <BigSliderComponent content={services} />
      </div>


<div className="dedicated-hiring-modules-container">
        <h2>Our QA & Testing<span> Technologies</span></h2>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p></div>
<TechHexGrid />

 <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
            <h1>Why Work With <span>Us ?</span></h1>
          <div className="why-wpd-boxes-container">
            
            <SpecialBox1
              header="Experienced QA professionals "
              content="Our experts have hands-on experience with the latest testing tools and methodologies."
              icon="/Frame1.png"
            /> 
            <SpecialBox1
              header="End-to-end testing solutions "
              content="From functional testing to security and automation, we cover all aspects of QA."
              icon="/Frame2.png"
            />
            <SpecialBox1
              header="Tailored testing strategies "
              content="We customize our approach to match your business goals and technology stack."
              icon="/Frame3.png"
            />
            <SpecialBox1
              header="Scalable & flexible engagement "
              content="Whether you need a single QA expert or a full team, we provide dedicated solutions that fit your needs."
              icon="/Frame4.png"
            />
          </div>
        </div>
        <div className="why-wpd-dh-img-container"><img src="/why-work-qa.png" alt="" /></div>
      </div>




    <Faq data={faqData} />
    </div>
    
  )
}

export default QaTesting;