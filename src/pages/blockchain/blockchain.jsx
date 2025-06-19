import React, { useEffect, useState } from "react";
import { golablContext } from "../../context/context";
import { useContext } from "react";
import SpecialBox1 from "../../component/special-box1";
import Faq from "../../component/faq";
import TechHexGrid  from "../../component/TechHexGrid";
import Infobox1 from "../../component/infobox1";
import ProgressIndicator from "../../component/ProgressIndicator";
import BLOCKSection from "../../component/BLOCKSection";
import BigSliderComponent from "../../component/big-slider-component";
import './blockchain.css';
// import BlockchainWeb3Technologies from "../../component/BlockchainWeb3Technologies";
import BlockCircle from "../../component/block-circle";

function BlockChain() {
const services = [
    {
      title: "Blockchain Consultancy",
      content: "Web Prism Dynamics provides expert blockchain consultancy, helping businesses leverage blockchain technology to improve operations. Our team offers strategic advice, custom solutions, and a deep understanding of the latest blockchain trends to ensure your business stays ahead, with secure and efficient implementations for real-world applications.",
      image: "../../box1.png",
      color: "#FFF8DE"
    },
    {
      title: "Hyperledger-based solutions ",
      content:"Our Hyperledger-based solutions at Web Prism Dynamics empower enterprises with permissioned blockchain frameworks. We help businesses build scalable, private, and secure decentralized applications tailored to industries such as finance, supply chain, and healthcare, offering robust solutions that streamline operations and enhance transparency within trusted networks.",
      image: "../../box2.png",
      color: "#E4F2FF"
    },
    {
      title: "MVP development",
      content: "Web Prism Dynamics specializes in MVP development, turning your innovative ideas into functional prototypes. We focus on delivering minimum viable products that show core features and functionality, allowing you to test the market, collect feedback, and refine your project for scalability and success.",
      image: "../../box3.png",
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
    },];

    const services1 = [
    {
      title: "Decentralization ",
      content: "Web Prism Dynamics embraces decentralization, a core principle of Web 3.0, by creating systems where control is distributed across a network of users rather than centralized entities. Our decentralized applications (dApps) ensure transparency, security, and increased user control, enabling businesses to harness the power of blockchain and peer-to-peer networks for innovation.",
      image: "../../box4.png",
      color: "#FFF8DE"
    },
    {
      title: "Blockchain integration",
      content:"Web Prism Dynamics integrates blockchain technology into Web 3.0 solutions, providing secure, transparent, and immutable records for digital transactions. We build blockchain-based platforms that ensure data integrity, eliminate intermediaries, and enhance user trust, helping businesses take full advantage of the decentralized future of the web.",
      image: "../../box5.png",
      color: "#E4F2FF"
    },
    {
      title: "Decentralized Finance (DeFi)",
      content: "We provide DeFi solutions at Web Prism Dynamics, enabling businesses to build decentralized financial platforms. By eliminating traditional financial intermediaries, we create innovative services like lending, borrowing, and yield farming, ensuring transparent, secure, and efficient transactions for users in the Web 3.0 space.",
      image: "../../box6.png",
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
    },];

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
            setPage('blockchain');
            setPageTitle('BLOCKCHAIN & WEB 3');
            setHeaderNormal('Unlock The Power Of Secure, Decentralized Solutions With');
            setHeaderHighlight('Blockchain Technology');
            setHeroImage('/about-us-cover-img.svg');
            setHeroContentImage('/blockchain-image.png');
          }, []);
          const faqData = [
        {
          id: "1",
          title: "What will we gain from Web Prism Dynamics’ Blockchain services?",
          content: "By choosing Web Prism Dynamics LLP, you will receive ongoing support and maintenance to keep your website and app running smoothly. We provide regular updates, bug fixes, performance optimization, security enhancements, and troubleshooting, ensuring that your digital assets stay up-to-date and fully functional."
        },
        {
          id: "2",
          title: "How will Web Prism Dynamics enhance our transition to Web 3.0?",
          content: "Web Prism Dynamics LLP will guide you through the next evolution of the internet by integrating Web 3.0 technologies into your business. We provide decentralized solutions that put control of your data and digital assets back in your hands, improving privacy and user autonomy."
        },
        {
          id: "3",
          title: "How does Web Prism Dynamics ensure the security of our Blockchain systems?",
          content: "Our team at Web Prism Dynamics LLP utilizes the most advanced security measures to implement blockchain systems that are immune to hacking and data manipulation. With decentralized architecture, we ensure that your business transactions are always secure and reliable."
        },
        {
          id: "4",
          title: "What are the advantages of using smart contracts with Web Prism Dynamics?",
          content: "Smart contracts from Web Prism Dynamics LLP automate and secure your agreements without needing intermediaries. This increases efficiency, reduces costs, and ensures that transactions are executed exactly as agreed upon, providing a seamless experience for your business."
        },
        {
          id: "5",
          title: "How can We improve our user experience with Web 3.0 technologies?",
          content: "Web Prism Dynamics LLP helps you build and deploy decentralized applications (dApps) that enhance user privacy, security, and control. We create custom solutions that optimize your digital ecosystem, ensuring your customers have a seamless and future-proof experience in the Web 3.0 era."
        }
      ];
  return (
    <div> 
        <div className="specialization-hiring-container">
        <div><img src="/blockchain-image1.png" alt="" /></div>
        <div>
          <h1>Empowering Brands <span><br/> With Blockchain & Web 3.0 Solutions</span></h1>
      <p> Blockchain and Web 3.0 technologies are crucial for businesses to stay ahead of the competition. There is no denying in that, especially in this rapidly evolving digital landscape. At Web Prism Dynamics, we offer innovative IT services and business solutions that integrate these technologies to help brands unlock new opportunities and ensure long-term growth.</p>
        </div>
      </div> 

<BLOCKSection/>

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

    
{/* <div className="dedicated-hiring-modules-container">
        <h2>Blockchain<span> At Web Prism Dynamics</span></h2>
        <div className="dedicated-hiring-modules-cards-container">
          <Infobox1
            title="Retail & E-commerce"
            content={<ul><li>Virtual try-on solutions: Let customers try products before buying (e.g., clothing, accessories, furniture). </li>
	                   <li>Interactive showrooms: 3D product visualization in an immersive environment.</li>
                        <li>Augmented shopping experiences: AR-enabled in-store navigation and product information. </li></ul>}
            color="#FFF8DE"
            url="/dh-full-time.svg"
            extracss={{
              padding: "8%"
            }}
            buttonActive={false}
            
          />
          <Infobox1
            title="Virtual training & simulations"
            content={<ul><li>VR-based employee training: Simulated real-world scenarios for industries like healthcare, aviation, and manufacturing.</li>
                    <li>AR-guided maintenance & repairs: Step-by-step visual instructions for technicians and engineers</li>
                    <li>Safety training in high-risk environments: Simulate hazardous situations for hands-on learning.</li></ul>}
            color="#E4F2FF"
            url="/dh-part-time.svg"
            extracss={{
              padding: "8%"
            }}
            buttonActive={false}
          />
          <Infobox1
            title="real estate & architecture"
            content={<ul><li> 	Virtual property tours: Allow clients to explore properties remotely.</li> 
                     <li>AR-driven interior design: Visualize furniture placements and renovations before making changes. </li>
                     <li>3D architectural visualization: Present construction projects in an interactive 3D format.  </li></ul>}
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
        <h1 className="homepage-our-services-header" >Blockchain<span> At Web Prism Dynamics</span></h1>
        <BigSliderComponent content={services} />
      </div>

<div className="block-smart-scalable-container">
        <div>
          <h1>Empowering Brands <br />  <span>With Blockchain & Web 3.0 Solutions</span></h1>
          <p>
Blockchain and Web 3.0 technologies are crucial for businesses to stay ahead of the competition. There is no denying in that, especially in this rapidly evolving digital landscape. At Web Prism Dynamics, we offer innovative IT services and business solutions that integrate these technologies to help brands unlock new opportunities and ensure long-term growth.          </p>
        </div>
        <div><img src="/block-image4.png" alt="" /></div>
      </div>

<div className="webpage-our-services">
        <h1 className="homepage-our-services-header" >Blockchain & Web 3.0<span> At Web Prism Dynamics</span></h1>
        <BigSliderComponent content={services1} />
      </div>

{/* <div className="dedicated-hiring-modules-container">
        <h2>Our AR & VR  <span>technologies</span></h2>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p></div>
<TechHexGrid /> */}
{/* <BlockchainWeb3Technologies/> */}
<BlockCircle/>
{/* <BlockchainWeb3Technologies/>

<BlockCircle/> */}


 <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
            <h1><span>Why Choose Us For </span><br/> Blockchain & Web 3.0 Solutions?</h1>
          <p> Web Prism Dynamics is dedicated to helping your brand thrive in the digital age. Here’s why you should choose us for your blockchain and Web 3.0 needs:</p>
          <div className="why-wpd-boxes-container">
            <SpecialBox1
              header="Tailored solutions"
              content="We design custom blockchain and Web 3.0 strategies that align with your brand’s unique goals and objectives."
              icon="/style-arrow-icon.svg"
            /> 
            <SpecialBox1
              header="Expert team"
              content="Our experienced professionals stay ahead of the curve, ensuring your brand gets the most innovative, reliable, and secure technologies."
              icon="/style-arrow-icon2.svg"
            />
            <SpecialBox1
              header="Scalable systems"
              content="Our solutions are built for growth, ensuring they can scale with your business as it grows."
              icon="/style-arrow-icon3.svg"
            />
            
          </div>
        </div>
        <div className="why-wpd-dh-img-container"><img src="/bit-img.png" alt="" /></div>
      </div>

         <Faq data={faqData} />
    </div>
  )
}

export default BlockChain;