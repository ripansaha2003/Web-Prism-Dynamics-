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
import DIGISection from "../../component/DIGISection";

function DigitalMarketing() {
  const services = [
    {
      title: "Search engine optimization  ",
      content: "We optimize your website for better search engine rankings, driving organic traffic and improving visibility.",
      image: "../../digi-stratergy1.png",
      color: "#FFF8DE"
    },
    {
      title: "Pay-per-click advertising ",
      content:"Our PPC campaigns ensure you get targeted traffic and high conversion rates while staying within budget.",
      image: "../../digi-stratergy2.png",
      color: "#E4F2FF"
    },
    {
      title: "Social media marketing",
      content: "We help you engage with your audience on social media platforms like Facebook, Instagram, LinkedIn, Twitter and more, boosting brand awareness and loyalty.",
      image: "../../digi-stratergy3.png",
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
        setPage('digital-marketing');
        setPageTitle('DIGITAL MARKETING');
        setHeaderNormal('Perfecting Every Detail With Top-Tier ');
        setHeaderHighlight('QA Solutions');
        setHeroImage('/about-us-cover-img.svg');
        setHeroContentImage('/digi-pic.png');
      }, []);
      const  faqData = [
    {
      id: "1",
      title: "What can we expect from Web Prism Dynamics’ digital marketing services?",
      content: "By choosing Web Prism Dynamics LLP, you will receive tailored digital marketing strategies designed to increase your online visibility, drive traffic, and enhance customer engagement. Our team combines SEO, social media, content marketing, creative services, and paid advertising to offer a comprehensive plan that aligns with your business goals."
    },
    {
      id: "2",
      title: "How will Web Prism Dynamics help us improve our online presence?",
      content: "Web Prism Dynamics LLP develops customized campaigns to strengthen your brand’s presence across multiple digital channels. We optimize your website, improve search rankings, and build engaging social media strategies to ensure your brand stands out and reaches your target audience effectively."
    },
    {
      id: "3",
      title: "What results can we expect from your digital marketing efforts?",
      content: "With Web Prism Dynamics, you can expect measurable results such as increased website traffic, higher conversion rates, better ROI on ads, and an overall improvement in brand awareness. We use data-driven strategies and analytics to ensure our efforts align with your business objectives and yield tangible results."
    },
    {
      id: "4",
      title: "How does Web Prism Dynamics tailor digital marketing strategies to our business?",
      content: "We begin by thoroughly understanding your business, target audience, and goals. From there, we design a bespoke digital marketing plan that includes the right mix of SEO, content marketing, paid ads, and social media strategies to drive growth and engagement specific to your industry."
    },
    {
      id: "5",
      title: "What makes Web Prism Dynamics’ digital marketing services stand out from others? ",
      content: "Web Prism Dynamics LLP sets itself apart with a results-oriented approach, focusing on data analytics, continuous optimization, and a deep understanding of your business. Our team stays ahead of industry trends, providing innovative, up-to-date strategies that drive long-term success for your brand."
    }
  ];
  

  return (
    <div>
      <div className="specialization-hiring-container">
        <div><img src="/digi1.png" alt="" /></div>
        <div>
          <h1>Digital Marketing Services <span> By Web Prism Dynamics</span></h1>
          <p>In today’s fast-paced digital world, having a strong online presence is no longer optional. Digital marketing is the key to building your brand, reaching new customers, and expanding your business globally. At Web Prism Dynamics, we offer tailored digital marketing services that ensure your brand stands out in a competitive market. 
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

<DIGISection/>

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
        <h1 className="homepage-our-services-header" >Digital Marketing Strategies<span> We Use</span></h1>
        <p>At Web Prism Dynamics, we offer a variety of cutting-edge digital marketing strategies that drive results. Our holistic approach includes: </p>
        <BigSliderComponent content={services} />
      </div>

<div className="dedicated-hiring-modules-container">
        <h2>Our Digital Marketing  <span>Technologies</span></h2>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p></div>
<TechHexGrid />

 <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
            <h1>Why Digital Marketing Is <span>Crutial For Your Brand?</span></h1>
            <p>Digital marketing offers a variety of benefits that traditional marketing cannot. Here’s why it is a must for any business looking to thrive in the digital age:</p>
          <div className="why-wpd-boxes-container">
            
            <SpecialBox1
              header="Wider reach"
              content="Digital marketing allows you to connect with a global audience, 24/7, without geographical limitations."
              icon="/Frame1.png"
            /> 
            <SpecialBox1
              header="Cost-effective"
              content="Compared to traditional marketing, digital marketing offers more affordable and flexible pricing for businesses of all sizes."
              icon="/Frame2.png"
            />
            <SpecialBox1
              header="Data-driven/Measurable results"
              content="With multiple digital marketing tools like Google Analytics, you can track the performance of campaigns, providing valuable insights into your ROI."
              icon="/Frame3.png"
            />
            <SpecialBox1
              header="Brand authority"
              content="Establishing your online presence through SEO, social media, and content marketing helps build trust and credibility."
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

export default DigitalMarketing;