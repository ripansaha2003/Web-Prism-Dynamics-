// import { useContext, useEffect } from "react";
// import { golablContext } from "../../context/context";
// import SpecialSquare1 from "../../component/SpecialSquare1";
// import "./about-us.css";
// import SpecialBox1 from "../../component/special-box1";

// function AboutUs() {
//   const {
//     page,
//     setPage,
//     pageTitle,
//     setPageTitle,
//     headerNormal,
//     setHeaderNormal,
//     headerHighlight,
//     setHeaderHighlight,
//     heroImage,
//     setHeroImage,
//     heroContentImage,
//     setHeroContentImage
//   } = useContext(golablContext);

//   useEffect(() => {
//     setPage('about-us');
//     setPageTitle('About Us');
//     setHeaderNormal('Transforming ideas');
//     setHeaderHighlight('Into Impactful Solutions');
//     setHeroImage('/about-us-cover-img.svg');
//     setHeroContentImage('/about-us-img.svg');
//   }, []);
//   return (
//     <div>
//       <div className="about-us-top-container">
//         <div className="about-us-top-left">
//           <p>Web Prism Dynamics LLP is a global IT services and business solutions provider committed to helping businesses transform and thrive in the digital world. Our focus is on delivering innovative, tailored IT solutions that align with your business objectives and drive success. Whether you're a startup, small enterprise, or a large corporation, Web Prism Dynamics LLP is here to empower your business with technology-driven solutions.</p>
//           <div><img src="/robot-teaching.svg" alt="" /></div>
//         </div>
//         <div className="about-us-top-right">
//           <div className="about-us-top-right-image"><img src="/meeting-room.svg" alt="" /></div>
//           <div className="about-us-top-right-content">
//             <SpecialSquare1
//               header="Mission"
//               content="Our mission is to deliver high-quality IT services and business solutions that empower organizations to achieve their strategic goals."
//               color="#EFD675"
//               img="/mission-icon.svg"
//             />
//             <SpecialSquare1
//               header="Vision"
//               content="To be a global leader in IT services and business solutions, recognized for our ability to transform businesses through technology."
//               color="#FF9ECC"
//               img="/vision-icon.svg"
//             />
//           </div>
//         </div>

//       </div>

//       <div className="why-wpd-container">
//         <div>
//           <h1 className="why-wpd-header">
//             <span>Why</span> Web Prism Dynamics?
//           </h1>
//           <div className="why-wpd-boxes">
//             <SpecialBox1
//               header="Global Reach, Local Impact"
//               content="With a diverse team and a global footprint, we understand the nuances of international markets. We adapt our solutions to meet local requirements while delivering results on a global scale."
//               icon="/style-arrow-icon.svg"
//             />
//             <SpecialBox1
//               header="Customer-Centric Approach"
//               content="Our clients are at the heart of everything we do. We build long-lasting relationships by understanding your unique needs and delivering solutions that meet and exceed expectations."
//               icon="/style-arrow-icon2.svg"
//             />
//             <SpecialBox1
//               header="Expert Team"
//               content="Our team of skilled professionals brings years of experience and expertise to every project. We stay updated with the latest technologies and industry best practices, ensuring that our solutions are innovative and future-proof."
//               icon="/style-arrow-icon3.svg"
//             />
//             <SpecialBox1
//               header="Proven Track Record"
//               content="With a portfolio of successful projects across various industries, we have demonstrated our ability to deliver top-quality solutions that drive real business results."
//               icon="/style-arrow-icon4.svg"
//             />
//           </div>
//         </div>
//         <div className="why-wpd-image">
//           <div><img src="/why-wpd.svg" alt="" /></div>
//         </div>
//       </div>

//       <div className="business-model-container">
//         <div className="business-model-left-content">
//           <h2>Dedicated Hiring Model</h2>
//           <p>For businesses seeking long-term collaboration, our dedicated team model offers full-time, on-demand experts who work as an extension of your in-house team. This model is perfect for ongoing projects and businesses that require specific skill sets.</p>

//           <h3>How It Works</h3>
//           <ul>
//             <li>We provide you with a dedicated team of experts who work exclusively on your project.</li>
//             <li>The team integrates seamlessly into your business, working according to your requirements and timelines, ensuring continuous progress.</li>
//           </ul>

//           <h3>When To Choose</h3>
//           <ul>
//             <li>When you need long-term collaboration or ongoing support.</li>
//             <li>If your project demands specific expertise or dedicated resources for an extended period.</li>
//           </ul>
//         </div>
//         <div className="business-model-right-content">
//           <h2>Project-Based Delivery</h2>
//           <p>For clients with specific goals or short-term needs, our project-based delivery model ensures timely completion of tasks within agreed timelines. This model is ideal for projects with clearly defined scopes and deadlines.</p>

//           <h3>How It Works</h3>
//           <ul>
//             <li>We focus on a defined project with clear goals, deadlines, and deliverables.</li>
//             <li>You only pay for the resources and time dedicated to the specific project, allowing for predictable costs and timelines.</li>
//           </ul>

//           <h3>When To Choose</h3>
//           <ul>
//             <li>When you have short-term, well-defined projects with clear deliverables.</li>
//             <li>If you prefer flexibility with a fixed timeline and budget for a specific project without a long-term commitment.</li>
//           </ul>
//         </div>
//         <div className="business-model-header">
//           <h1>Business <span>Models</span></h1>
//         </div>
//       </div>

//       <div className="time-section-container">
//         <div className="time-section-content">
//           <div>
//             <h1>8+</h1>
//             <p>Years Of Experience</p>
//           </div>
//           <div>
//             <h1>132+</h1>
//             <p>Team Members </p>
//           </div>
//           <div>
//             <h1>572+</h1>
//             <p>Projects</p>
//           </div>
//           <div className="time-section-special">
//             <h1>100%</h1>
//             <p>Recurring Clients</p>
//           </div>
//         </div>
//       </div>

//       <div className="process-container">
//         <h1><span>Our</span> Process</h1>
//         <div className="process-content">
//           <div className="process-content-left">
//             <div className="process-content-box">
//               <div><img src="/1.svg" alt="" /></div>
//               <div>
//                 <h2>Initiating a conversation</h2>
//                 <p>We begin with an in-depth consultation to understand your unique business challenges, goals, and requirements. Our team listens carefully to ensure we are aligned with your vision.</p>
//               </div>
//             </div>
//             <div className="process-content-box">
//               <div><img src="/3.svg" alt="" /></div>
//               <div>
//                 <h2>Design,Development & Execution</h2>
//                 <p>Our experienced team starts working on the solution, focusing on design, development, and customization. We use agile methodologies to maintain flexibility and adapt to any evolving needs.</p>
//               </div>
//             </div>
//           </div>
//           <div><img src="/our-process.svg" alt="" /></div>
//           <div className="process-content-right">
//             <div className="process-content-box">
//               <div>
//                 <h2>Proposal And Planning</h2>
//                 <p>Based on your requirements, we develop a comprehensive plan, detailing the scope, timelines, resources, and costs. We ensure that you have a clear understanding of the project deliverables before proceeding.</p>
//               </div>
//               <div><img src="/2.svg" alt="" /></div>
//             </div>
//             <div className="process-content-box">
//               <div>
//                 <h2>Delivery & Post-Delivery Support</h2>
//                 <p>After thorough testing and quality assurance, we deliver the final solution to your satisfaction. We ensure that everything is optimized and ready for deployment. Our commitment doesn’t end with delivery. We offer post-delivery support to help you with any adjustments, updates, or troubleshooting, ensuring the continued success of your solution.</p>
//               </div>
//               <div><img src="/4.svg" alt="" /></div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default AboutUs;


import { useContext, useEffect } from "react";
import { golablContext } from "../../context/context";
import SpecialSquare1 from "../../component/SpecialSquare1";
import SpecialBox1 from "../../component/special-box1";
import Counter from "../../component/Counter"; // ✅ ADD THIS LINE
import "./about-us.css";

function AboutUs() {
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
    setHeroContentImage
  } = useContext(golablContext);

  useEffect(() => {
    setPage('about-us');
    setPageTitle('About Us');
    setHeaderNormal('Transforming ideas');
    setHeaderHighlight('Into Impactful Solutions');
    setHeroImage('/about-us-cover-img.svg');
    setHeroContentImage('/about-us-img.svg');
  }, []);

  return (
    <div>
      <div className="about-us-top-container">
        <div className="about-us-top-left">
          <p>Web Prism Dynamics LLP is a global IT services and business solutions provider committed to helping businesses transform and thrive in the digital world. Our focus is on delivering innovative, tailored IT solutions that align with your business objectives and drive success. Whether you're a startup, small enterprise, or a large corporation, Web Prism Dynamics LLP is here to empower your business with technology-driven solutions.</p>
          <div><img src="/robot-teaching.svg" alt="" /></div>
        </div>
        <div className="about-us-top-right">
          <div className="about-us-top-right-image"><img src="/meeting-room.svg" alt="" /></div>
          <div className="about-us-top-right-content">
            <SpecialSquare1
              header="Mission"
              content="Our mission is to deliver high-quality IT services and business solutions that empower organizations to achieve their strategic goals."
              color="#EFD675"
              img="/mission-icon.svg"
            />
            <SpecialSquare1
              header="Vision"
              content="To be a global leader in IT services and business solutions, recognized for our ability to transform businesses through technology."
              color="#FF9ECC"
              img="/vision-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="why-wpd-container">
        <div>
          <h1 className="why-wpd-header">
            <span>Why</span> Web Prism Dynamics?
          </h1>
          <div className="why-wpd-boxes">
            <SpecialBox1
              header="Global Reach, Local Impact"
              content="With a diverse team and a global footprint, we understand the nuances of international markets. We adapt our solutions to meet local requirements while delivering results on a global scale."
              icon="/style-arrow-icon.svg"
            />
            <SpecialBox1
              header="Customer-Centric Approach"
              content="Our clients are at the heart of everything we do. We build long-lasting relationships by understanding your unique needs and delivering solutions that meet and exceed expectations."
              icon="/style-arrow-icon2.svg"
            />
            <SpecialBox1
              header="Expert Team"
              content="Our team of skilled professionals brings years of experience and expertise to every project. We stay updated with the latest technologies and industry best practices, ensuring that our solutions are innovative and future-proof."
              icon="/style-arrow-icon3.svg"
            />
            <SpecialBox1
              header="Proven Track Record"
              content="With a portfolio of successful projects across various industries, we have demonstrated our ability to deliver top-quality solutions that drive real business results."
              icon="/style-arrow-icon4.svg"
            />
          </div>
        </div>
        <div className="why-wpd-image">
          <div><img src="/why-wpd.svg" alt="" /></div>
        </div>
      </div>

      <div className="business-model-container">
        <div className="business-model-left-content">
          <h2>Dedicated Hiring Model</h2>
          <p>For businesses seeking long-term collaboration, our dedicated team model offers full-time, on-demand experts who work as an extension of your in-house team. This model is perfect for ongoing projects and businesses that require specific skill sets.</p>

          <h3>How It Works</h3>
          <ul>
            <li>We provide you with a dedicated team of experts who work exclusively on your project.</li>
            <li>The team integrates seamlessly into your business, working according to your requirements and timelines, ensuring continuous progress.</li>
          </ul>

          <h3>When To Choose</h3>
          <ul>
            <li>When you need long-term collaboration or ongoing support.</li>
            <li>If your project demands specific expertise or dedicated resources for an extended period.</li>
          </ul>
        </div>
        <div className="business-model-right-content">
          <h2>Project-Based Delivery</h2>
          <p>For clients with specific goals or short-term needs, our project-based delivery model ensures timely completion of tasks within agreed timelines. This model is ideal for projects with clearly defined scopes and deadlines.</p>

          <h3>How It Works</h3>
          <ul>
            <li>We focus on a defined project with clear goals, deadlines, and deliverables.</li>
            <li>You only pay for the resources and time dedicated to the specific project, allowing for predictable costs and timelines.</li>
          </ul>

          <h3>When To Choose</h3>
          <ul>
            <li>When you have short-term, well-defined projects with clear deliverables.</li>
            <li>If you prefer flexibility with a fixed timeline and budget for a specific project without a long-term commitment.</li>
          </ul>
        </div>
        <div className="business-model-header">
          <h1>Business <span>Models</span></h1>
        </div>
      </div>

      <div className="time-section-container">
        <div className="time-section-content">
          <div>
            <h1><Counter end={8} duration={2000} suffix="+" /></h1>
            <p>Years Of Experience</p>
          </div>
          <div>
            <h1><Counter end={132} duration={2000} suffix="+" /></h1>
            <p>Team Members</p>
          </div>
          <div>
            <h1><Counter end={572} duration={2000} suffix="+" /></h1>
            <p>Projects</p>
          </div>
          <div className="time-section-special">
            <h1><Counter end={100} duration={2000} suffix="%" /></h1>
            <p>Recurring Clients</p>
          </div>
        </div>
      </div>

      <div className="process-container">
        <h1><span>Our</span> Process</h1>
        <div className="process-content">
          <div className="process-content-left">
            <div className="process-content-box">
              <div><img src="/1.svg" alt="" /></div>
              <div>
                <h2>Initiating a conversation</h2>
                <p>We begin with an in-depth consultation to understand your unique business challenges, goals, and requirements. Our team listens carefully to ensure we are aligned with your vision.</p>
              </div>
            </div>
            <div className="process-content-box">
              <div><img src="/3.svg" alt="" /></div>
              <div>
                <h2>Design,Development & Execution</h2>
                <p>Our experienced team starts working on the solution, focusing on design, development, and customization. We use agile methodologies to maintain flexibility and adapt to any evolving needs.</p>
              </div>
            </div>
          </div>
          <div><img src="/our-process.svg" alt="" /></div>
          <div className="process-content-right">
            <div className="process-content-box">
              <div>
                <h2>Proposal And Planning</h2>
                <p>Based on your requirements, we develop a comprehensive plan, detailing the scope, timelines, resources, and costs. We ensure that you have a clear understanding of the project deliverables before proceeding.</p>
              </div>
              <div><img src="/2.svg" alt="" /></div>
            </div>
            <div className="process-content-box">
              <div>
                <h2>Delivery & Post-Delivery Support</h2>
                <p>After thorough testing and quality assurance, we deliver the final solution to your satisfaction. We ensure that everything is optimized and ready for deployment. Our commitment doesn’t end with delivery. We offer post-delivery support to help you with any adjustments, updates, or troubleshooting, ensuring the continued success of your solution.</p>
              </div>
              <div><img src="/4.svg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
