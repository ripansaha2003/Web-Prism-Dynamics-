import React, { useEffect, useState } from "react";
import { golablContext } from "../../context/context";
import { useContext } from "react";
import SpecialBox1 from "../../component/special-box1";
import Faq from "../../component/faq";
import TechHexGrid  from "../../component/TechHexGrid";
import Infobox1 from "../../component/infobox1";
import ProgressIndicator from "../../component/ProgressIndicator";
import AIMLSection from "../../component/AIMLSection";
import BigSliderComponent from "../../component/big-slider-component";
function Aiml() {
  const services = [
    {
      title: "AI-Powered business intelligence",
      content: "• Intelligent workflow automation to boost operational efficiency. • Automated reporting and data visualization.",
      image: "../../web development.jpg",
      color: "#FFF8DE"
    },
    {
      title: "ML for process optimization",
      content:"• Intelligent workflow automation to boost operational efficiency • Predictive maintenance to prevent system failures",
      image: "../../app development.jpg",
      color: "#E4F2FF"
    },
    {
      title: "Chatbots & virtual assistants",
      content: "• AI-driven Chatbot for 24/7 customer support. •  NLP-powered virtual assistants to enhance user engagement.",
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
        setPage('ai-ml');
        setPageTitle('AI/ ML');
        setHeaderNormal('Drive innovation to your business with');
        setHeaderHighlight('AI & ML solution');
        setHeroImage('/about-us-cover-img.svg');
        setHeroContentImage('/ai-image.svg');
      }, []);
      const faqData = [
    {
      id: "1",
      title: "What AI & ML services does Web Prism Dynamics LLP offer?",
      content: "We specialize in a range of AI & ML services, including predictive analytics, natural language processing (NLP), computer vision, recommendation systems, and custom AI solutions tailored to your business needs. Our team works with the latest technologies to drive data-driven decision-making and automation."
    },
    {
      id: "2",
      title: "How can AI & ML can benefit my business?",
      content: "AI & ML can significantly enhance business efficiency by automating repetitive tasks, improving decision-making through data insights, optimizing customer experiences with personalized recommendations, and increasing operational productivity. Our solutions help businesses stay competitive in the digital landscape."
    },
    {
      id: "3",
      title: "Do you provide custom AI/ML solutions?",
      content: "Yes! We understand that every business has unique requirements. Our team works closely with you to create customized AI and ML models designed to solve specific challenges and meet your goals, ensuring a seamless fit within your existing processes."
    },
    {
      id: "4",
      title: "How long does it take to implement an AI/ML solution?",
      content: "Implementation timelines vary depending on the complexity and scope of the project. Typically, it takes between 4-12 weeks to deploy AI and ML solutions, with ongoing support and optimization after the launch."
    },
    {
      id: "5",
      title: "What industries can benefit from your AI & ML services?",
      content: "Our AI & ML solutions cater to a variety of industries, including healthcare, finance, retail, manufacturing, and e-commerce. We provide industry-specific solutions to help organizations innovate, improve operational efficiency, and enhance customer satisfaction."
    }
  ];
  return (
    <div>
      <div className="specialization-hiring-container">
        <div><img src="/freepik.png" alt="" /></div>
        <div>
          <h1>AI & ML: Transforming Businesses <span>with Web Prism Dynamics</span></h1>
          <p>
            At Web Prism Dynamics, we utilize the power of Artificial Intelligence (AI) and Machine Learning (ML) to help brands stay ahead of the competition. By integrating cutting-edge AI and ML technologies, we empower businesses to optimize operations, enhance customer experiences, and drive data-driven decision-making.
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

<AIMLSection/>

<div className="webpage-our-services">
        <h1 className="homepage-our-services-header" >AI & ML technologies<span>  At Web Prism Dynamics</span></h1>
        <p>We utilize state-of-the-art AI and ML solutions tailored to different industries:</p>
        <BigSliderComponent content={services} />
      </div>


<div className="dedicated-hiring-modules-container">
        <h2>Our AI & ML  <span> Technologies</span></h2>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p></div>
<TechHexGrid />





 <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
          <h1><span>How Web Prism Dynamics </span></h1>
          <h1>Helps Your Business?</h1>
          <p>By partnering with Web Prism Dynamics, your brand can:</p>
          
          <div className="why-wpd-boxes-container">
            
            <SpecialBox1
              header="Improve decision-making "
              content="Gain accurate insights with AI-driven analytics."
              icon="/Frame1.png"
            /> 
            <SpecialBox1
              header="Boost productivity"
              content="Automate repetitive tasks and streamline processes."
              icon="/Frame2.png"
            />
            <SpecialBox1
              header="Enhanced customer experience"
              content="Deliver personalized recommendations and suppor"
              icon="/Frame3.png"
            />
            <SpecialBox1
              header="Reduce Costs"
              content="Optimize resource allocation and minimize operational expenses."
              icon="/Frame4.png"
            />
            <SpecialBox1
              header="	Stay competitive "
              content="Use the latest AI advancements to outperform competitors."
              icon="/Frame5.png"
            />
          </div>
        </div>
        <div className="why-wpd-dh-img-container"><img src="/freepik2.png" alt="" /></div>
      </div>
{/* <div className="dedicated-hiring-modules-container">
        <h2>Our AI & ML  <span>technologies</span></h2>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p></div>
<TechHexGrid /> */}




    <Faq data={faqData} />
    </div>
    
  )
}

export default Aiml;