import React, { useEffect, useState } from "react";
import { golablContext } from "../../context/context";
import { useContext } from "react";
import SpecialBox1 from "../../component/special-box1";
import Faq from "../../component/faq";
import TechHexGrid  from "../../component/TechHexGrid";
import Infobox1 from "../../component/infobox1";
import ProgressIndicator from "../../component/ProgressIndicator";
import BigSliderComponent from "../../component/big-slider-component";
import MAINSection from "../../component/MAINSection";

function Maintain() {
  const services = [
    {
      title: "Software updates ",
      content: "Keeping your website and app software up-to-date with the latest versions of CMS platforms, plugins, and mobile app versions.",
      image: "../../our-main.png",
      color: "#FFF8DE"
    },
    {
      title: "Security patches & monitoring",
      content:"Continuous security monitoring and the application of critical patches to protect your site and app from cyber threats. ",
      image: "../../our-main1.png",
      color: "#E4F2FF"
    },
    {
      title: "Performance optimization",
      content: "Enhancing the speed and efficiency of your website or app to ensure seamless user experiences.",
      image: "../../our-main2.png",
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
        setPage('maintenance');
        setPageTitle('MAINTENANCE');
        setHeaderNormal('Ensure your systems run smoothly with reliable IT');
        setHeaderHighlight('maintenance services');
        setHeroImage('/about-us-cover-img.svg');
        setHeroContentImage('/maintain-pic.png');
      }, []);
      const faqData = [
    {
      id: "1",
      title: "What can we expect from Web Prism Dynamics’ web and app maintenance services?",
      content: "By choosing Web Prism Dynamics LLP, you will receive ongoing support and maintenance to keep your website and app running smoothly. We provide regular updates, bug fixes, performance optimization, security enhancements, and troubleshooting, ensuring that your digital assets stay up-to-date and fully functional."
    },
    {
      id: "2",
      title: "How will Web Prism Dynamics ensure the smooth operation of our website and app?",
      content: "Our team proactively monitors your website and app to identify and resolve potential issues before they impact performance. We perform routine checks for broken links, software updates, security patches, and any other issues to ensure optimal user experience and functionality."
    },
    {
      id: "3",
      title: "What specific maintenance services does Web Prism Dynamics provide?",
      content: "We offer a comprehensive range of services, including performance monitoring, security updates, bug fixing, content updates, feature enhancements, and database optimization. Whether it’s ensuring compatibility with the latest platforms or resolving any issues that arise, we’ve got you covered."
    },
    {
      id: "4",
      title: "We offer a comprehensive range of services, including performance monitoring, security updates, bug fixing, content updates, feature enhancements, and database optimization. Whether it’s ensuring compatibility with the latest platforms or resolving any issues that arise, we’ve got you covered.",
      content: "With Web Prism Dynamics LLP handling your maintenance needs, you can focus on growing your business. Our expert team ensures that your web and app platforms are continuously running at their best, eliminating the stress of managing technical issues and providing peace of mind for your team."
    },
    {
      id: "5",
      title: "What makes Web Prism Dynamics’ web and app maintenance services stand out?",
      content: "Web Prism Dynamics LLP is committed to providing personalized, responsive, and thorough maintenance services tailored to your unique needs. Our team combines technical expertise with a customer-first approach, offering you continuous support and ensuring that your website and app stay secure, efficient, and up-to-date."
    }
  ];
  

  return (
    <div>
      <div className="specialization-hiring-container">
        <div><img src="/maintain-ensure.png" alt="" /></div>
        <div>
          <h1>Ensure Your Website & App Remains<span> Flawless 24/7</span></h1>
          <p>Welcome to Web Prism Dynamics, where we specialize in providing comprehensive website and app maintenance services that ensure your digital platforms remain efficient, secure, and up-to-date. Our expert team understands that regular maintenance is the key to your success, and we offer tailored solutions to meet your specific business needs. 
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

<MAINSection/>

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
        <h1 className="homepage-our-services-header" >Our Website & App <span> Maintenance Services Include</span></h1>
       <p>We implement Cutting-Edge IoT Solutions To Help Brands Stay Ahead Of The Competition:</p>
        <BigSliderComponent content={services} />
      </div>

<div className="dedicated-hiring-modules-container">
        <h2>Technologies <span>We Use</span></h2>
        <p>At Web Prism Dynamics, we leverage the latest technologies to ensure the best website and app maintenance services. Our team works with:</p></div>
<TechHexGrid />

 <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
            <h1>Why Website and App  <span>Maintenance Services Are Crucial</span></h1>
          <div className="why-wpd-boxes-container">
            
            <SpecialBox1
              header="Ensure security "
              content="Regular updates and maintenance help to patch security vulnerabilities, protecting your website or app from potential threats, hacks, and data breaches."
              icon="/Frame1.png"
            /> 
            <SpecialBox1
              header="Improve user experience"
              content="Consistent maintenance ensures that your website or app runs smoothly, with fast load times and no broken links, improving overall user satisfaction and retention."
              icon="/Frame2.png"
            />
            <SpecialBox1
              header="Compatibility with new technologies"
              content="With frequent technological advancements, maintenance ensures your platform remains compatible with the latest browsers, devices, and operating systems."
              icon="/Frame3.png"
            />
            <SpecialBox1
              header="Fix bugs and glitches"
              content="Bugs can negatively affect performance and user experience. Ongoing maintenance helps quickly identify and resolve any technical issues, keeping your platform functional."
              icon="/Frame4.png"
            />
            <SpecialBox1
              header="SEO performance"
              content="Regular updates and content improvements are essential for maintaining good search engine rankings. Outdated content can harm your SEO efforts and visibility."
              icon="/Frame4.png"
            />
            <SpecialBox1
              header="Stay competitive"
              content="A well-maintained website or app remains attractive, modern, and relevant, helping you stay ahead of competitors and retain customers."
              icon="/Frame4.png"
            />
            <SpecialBox1
              header="Compliance with regulations"
              content="With ever-evolving data protection and industry standards, maintenance ensures your platform remains compliant with legal requirements and privacy laws."
              icon="/Frame4.png"
            />
            <SpecialBox1
              header="Cost-effective in the long run"
              content="Preventative maintenance reduces the risk of major breakdowns or costly overhauls by addressing issues early on, saving you money in the future."
              icon="/Frame4.png"
            />
          </div>
        </div>
        <div className="why-wpd-dh-img-container"><img src="/web-main.png" alt="" /></div>
      </div>




    <Faq data={faqData} />
    </div>
    
  )
}

export default Maintain;