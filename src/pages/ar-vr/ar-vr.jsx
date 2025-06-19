import React, { useEffect, useState } from "react";
import { golablContext } from "../../context/context";
import { useContext } from "react";
import SpecialBox1 from "../../component/special-box1";
import Faq from "../../component/faq";
import TechHexGrid  from "../../component/TechHexGrid";
import Infobox1 from "../../component/infobox1";
import ProgressIndicator from "../../component/ProgressIndicator";
import ARVRSection from "../../component/ARVRSection";
import BigSliderComponent from "../../component/big-slider-component";

function ArVr() {
  const services = [
    {
      title: "Retail & E-commerce",
      content: "Virtual try-on solutions: Let customers try products before buying (e.g., clothing, accessories, furniture). Interactive showrooms: 3D product visualization in an immersive environment.Augmented shopping experiences: AR-enabled in-store navigation and product information. ",
      image: "../../ai1.png",
      color: "#FFF8DE"
    },
    {
      title: "Virtual Training & Simulations",
      content:"VR-based employee training: Simulated real-world scenarios for industries like healthcare, aviation, and manufacturing.AR-guided maintenance & repairs: Step-by-step visual instructions for technicians and engineers.Safety training in high-risk environments: Simulate hazardous situations for hands-on learning.   ",
      image: "../../ai2.png",
      color: "#E4F2FF"
    },
    {
      title: "Real Estate & Architecture",
      content: "	Virtual property tours: Allow clients to explore properties remotely.AR-driven interior design: Visualize furniture placements and renovations before making changes. 3D architectural visualization: Present construction projects in an interactive 3D format. ",
      image: "../../ai3.png",
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
            setPage('ar-vr');
            setPageTitle('AR/VR');
            setHeaderNormal('Transform your business with cutting-edge ');
            setHeaderHighlight('AR-VR technology');
            setHeroImage('/about-us-cover-img.svg');
            setHeroContentImage('/ar-vr-content.png');
          }, []);
          const faqData = [
        {
          id: "1",
          title: "What AR/VR services do you offer?",
          content: "We offer immersive AR (Augmented Reality) and VR (Virtual Reality) solutions tailored to your business needs. Our services include custom AR/VR app development, interactive experiences, 3D visualization, training simulations, and virtual tours to enhance user engagement and improve learning outcomes."
        },
        {
          id: "2",
          title: "How can AR/VR benefit my business?",
          content: "AR/VR can revolutionize your business by offering innovative ways to engage customers, improve training, and enhance product visualization. AR can provide real-time information overlays, while VR creates immersive environments for simulations, training, and virtual showrooms, enhancing both customer experience and operational efficiency."
        },
        {
          id: "3",
          title: "What industries can benefit from AR/VR solutions?",
          content: "Our AR/VR services cater to a range of industries, including healthcare, education, retail, real estate, manufacturing, and entertainment. Whether it's creating virtual training environments, immersive product demos, or interactive learning tools, we can tailor solutions to your industry’s unique needs"
        },
        {
          id: "4",
          title: "How long does it take to develop an AR/VR solution?",
          content: "The timeline for developing an AR/VR solution depends on the project's complexity. Generally, it takes 8-16 weeks for a fully functional AR/VR app, with ongoing refinement post-launch to enhance user experience."
        },
        {
          id: "5",
          title: "Do you provide AR/VR content development?",
          content: "Yes! We specialize in creating high-quality 3D models, animations, and interactive content for AR/VR experiences, ensuring that your application is both visually engaging and functional. Our team works closely with you to bring your vision to life."
        }
      ];
  return (
    <div> 
        <div className="specialization-hiring-container">
        <div><img src="/vr-pic.png" alt="" /></div>
        <div>
          <h1>AR & VR: Elevating Business Experiences <span>with Immersive Technology</span></h1>
      <p> We live in a digital world. There is no doubt that Augmented Reality (AR) and Virtual Reality (VR) are reshaping industries by creating immersive, interactive, and engaging experiences. At Web Prism Dynamics, we help brands leverage AR and VR to gain a competitive edge, improve customer engagement, streamline operations, and revolutionize training and collaboration. From virtual showrooms to interactive training modules, AR and VR technologies open endless possibilities for businesses looking to innovate and stay ahead in their industry.</p>
        </div>
      </div>

<ARVRSection/>

 {/* <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
          <h1>Why AR & VR are game-changers </h1>
          <h1><span>for businesses?</span></h1>
          <p>AR and VR are no longer simply futuristic concepts—they are transforming the way businesses operate and engage with customers. Companies integrating AR and VR experience:</p>
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
              content="Deliver personalized recommendations and suppor"
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
        <div className="why-wpd-dh-img-container"><img src="/ar-vr-right.png" alt="" /></div>
      </div> */}

    

<div className="webpage-our-services">
        <h1 className="homepage-our-services-header" >AI & ML technologies<span>  At Web Prism Dynamics</span></h1>
        <p>We utilize state-of-the-art AI and ML solutions tailored to different industries:</p>
        <BigSliderComponent content={services} />
      </div>


<div className="dedicated-hiring-modules-container">
        <h2>Our AR & VR  <span> Technologies</span></h2>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p></div>
<TechHexGrid />


 <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
            <h1><span>How We</span> help your business </h1>
          <h1> with AR & VR?</h1>
          <p>By adopting Web Prism Dynamics’ AR & VR solutions, your brand can:</p>
          <div className="why-wpd-boxes-container">
            <SpecialBox1
              header="Boost customer engagement"
              content="Deliver immersive and interactive experiences."
              icon="/style-arrow-icon.svg"
            /> 
            <SpecialBox1
              header="Increase sales & conversions"
              content="Enable customers to visualize products in real-time."
              icon="/style-arrow-icon2.svg"
            />
            <SpecialBox1
              header="Enhance workforce productivity "
              content="Train employees with realistic simulations."
              icon="/style-arrow-icon3.svg"
            />
            <SpecialBox1
              header="Train employees with realistic simulations"
              content="Enable seamless communication across global teams."
              icon="/style-arrow-icon4.svg"
            />
            <SpecialBox1
              header="Stay ahead of the competition"
              content="Utilize the latest AR & VR innovations for business growth."
              icon="/style-arrow-icon2.svg"
            />
          </div>
        </div>
        <div className="why-wpd-dh-img-container"><img src="/ar-vr-b.png" alt="" /></div>
      </div>

         <Faq data={faqData} />
    </div>
  )
}

export default ArVr;