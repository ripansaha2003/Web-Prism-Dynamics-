import { useContext, useEffect } from "react";
import { golablContext } from "../../context/context";
import './dedicated-hiring.css';
import SpecialBox1 from "../../component/special-box1";
import Infobox1 from "../../component/infobox1";
import Faq from "../../component/faq";
import BigSliderComponent from "../../component/big-slider-component";

function DedicatedHiring() {
  const servicesData = [
    {
      title: "Full-Time Hiring",
      content: "Full-time hiring is ideal for projects requiring dedicated focus and consistent availability. With 8 hours per day over 5 weeks, the hired professional works full-time to deliver quality results on time. This setup ensures continuous progress on your project with dedicated resources. It’s suited for long-term initiatives or tasks that demand sustained effort, such as software development, marketing campaigns, or business strategy execution",
      image: "/e-commerce-solutions.svg",
      color: "#FFF8DE",
      buttonActive: false,
      
    },
    {
      title: "Part-Time Hiring ",
      content: "Part-time hiring is perfect for tasks that require specialized skills but don’t need a full-time commitment. With 4 hours a day for 5 days, this model allows you to manage budgets efficiently while still having a dedicated professional working on your project. It's an excellent choice for medium-length projects, such as content creation, design work, or administrative support.",
      image: "/e-commerce-solutions.svg",
      color: "#E4F2FF",
      buttonActive: false
    },
    {
      title: "Content Management Systems",
      content: "Our CMS development services provide easy-to-manage, flexible websites. We work with popular platforms like WordPress, Joomla, and Drupal to create websites that allow you to control and update content without technical expertise.",
      image: "/e-commerce-solutions.svg",
      color: "#F0EFFF",
      buttonActive: false
    },
    {
      title: "Hourly Hiring",
      content: "Hourly hiring offers flexibility with the ability to purchase, for on-demand work. You can allocate resources as needed without a fixed schedule. This model works well for projects requiring sporadic support or specific tasks like troubleshooting, consulting, or one-off assignments. It's cost-effective, allowing you to only pay for the hours you use, offering both adaptability and control over your budget.",
      image: "/content-management-systems.svg",
      color: "#F0EFFF",
      buttonActive: false
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
    setHeroContentImage
  } = useContext(golablContext);

  useEffect(() => {
    setPage('dedicated-hiring');
    setPageTitle('Dedicated Hiring');
    setHeaderNormal('Hire Top Talents,');
    setHeaderHighlight('Tailored To Your Needs');
    setHeroImage('/dedicated-hiring-cover-img.svg');
    setHeroContentImage('/dedicated-hiring.svg');
  }, [])

  const faqData = [
    {
      id: "1",
      title: "How do I reset my password?",
      content: "To reset your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password. Make sure to check your spam folder if you don't see the email in your inbox within a few minutes."
    },
    {
      id: "2",
      title: "What payment methods do you accept?",
      content: "We accept a variety of payment methods including Visa, Mastercard, American Express, PayPal, and Apple Pay. All transactions are processed securely through our payment gateway with end-to-end encryption to ensure your financial information remains safe."
    },
    {
      id: "3",
      title: "How can I track my order?",
      content: "You can track your order by logging into your account and visiting the 'Order History' section. There you'll find a tracking number and link for each shipped order. Alternatively, you can use the tracking information sent to your email when your order was dispatched."
    },
    {
      id: "4",
      title: "What is your return policy?",
      content: "Our return policy allows you to return items within 30 days of delivery for a full refund. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the 'Return Item' option in your account dashboard. Shipping costs for returns are covered by the customer unless the item arrived damaged or incorrect."
    },
    {
      id: "5",
      title: "Do you ship internationally?",
      content: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days depending on the destination. Additional customs fees, taxes, and import duties may apply depending on your country's regulations. These charges are the responsibility of the customer and are not included in our shipping fees."
    }
  ];
  return (
    <div>

      <div className="specialization-hiring-container">
        <div><img src="/specialization-hiring.svg" alt="" /></div>
        <div>
          <h1>Specializing Hiring for <span>Business Growth</span></h1>
          <p>
            Businesses need agile and skilled teams to stay ahead of the competition, especially in today's evolving digital landscape. Hiring the right talent is crucial, but traditional hiring methods can be time-consuming and costly. That’s where dedicated hiring comes in.
          </p>
          <p>
            With Web Prism Dynamics, you get a dedicated team of IT professionals tailored to your business needs. Whether you need developers, project managers, designers, or support specialists, our dedicated hiring model ensures you have the right experts working exclusively for your company.
          </p>
        </div>
      </div>

      <div className="why-dedicated-hiring-container">
        <div className="why-dedicated-hiring-header">
          <h1><span>Why Choose</span> Dedicated Hiring?</h1>
          <div><img src="/why-dedicated-hiring.svg" alt="" /></div>
        </div>       
        <div className="why-dedicated-hiring-card-container">
          <div className="why-dedicated-hiring-card-1">
            <div className="why-dedicated-hiring-card-1-img"><img src="/1.svg" alt="" /></div>
            <div className="why-dedicated-hiring-card-1-icon"><img src="/chat-icon.svg" alt="" /></div>
            <h2>Cost-Effective & Scalable</h2> 
            <p>Traditional hiring comes with overhead costs, recruitment hassles, and long onboarding times. With dedicated hiring, you get a ready-to-go team without the administrative burden. Plus, you can scale up or down as your business needs change.</p>
          </div>
          <div className="why-dedicated-hiring-card-2">
            <div className="why-dedicated-hiring-card-2-img"><img src="/2.svg" alt="" /></div>
            <div className="why-dedicated-hiring-card-2-icon"><img src="/choice-icon.svg" alt="" /></div>
            <h2>Access To Top Talent</h2>
            <p>We handpick industry experts with the right skills and experience to drive your projects forward. Whether you need expertise in cloud computing, cyber-security, software development, or business automation, we have the right professionals for the job.</p>
          </div>
          <div className="why-dedicated-hiring-card-3">
            <div className="why-dedicated-hiring-card-3-img"><img src="/3.svg" alt="" /></div>
            <h2>Focus On Core Business Goals</h2>
            <p>Instead of juggling recruitment and project management, you can focus on growing your business while our dedicated team handles the technical side of things.</p>
            <div className="why-dedicated-hiring-card-3-icon"><img src="/goal-icon.svg" alt="" /></div>
          </div>
          <div className="why-dedicated-hiring-card-4">
            <div className="why-dedicated-hiring-card-4-img"><img src="/4.svg" alt="" /></div>
            <h2>Faster project execution</h2>
            <p>With a team solely committed to your projects, you get quicker turnaround times, streamlined workflows, and seamless execution, ensuring that your business stays ahead in a competitive market.</p>
            <div className="why-dedicated-hiring-card-4-icon"><img src="/graphic-icon.svg" alt="" /></div>
          </div>
        </div>
      </div>

      <div className="why-wpd-container-dh">
        <div className="why-wpd-header-container">
          <h1><span>Why</span> Web Prism Dynamics</h1>
          <p>At Web Prism Dynamics, we don’t just provide IT professionals – we deliver dedicated, result-driven teams that integrate seamlessly with your business. Here’s why companies choose us:</p>
          <div className="why-wpd-boxes-container">
            <SpecialBox1
              header="Tailored Hiring Approach"
              content=" We understand your business needs and match you with the right talent."
              icon="/style-arrow-icon.svg"
            />
            <SpecialBox1
              header="End-To-End Management"
              content=" From onboarding to project execution, we ensure smooth collaboration and productivity."
              icon="/style-arrow-icon2.svg"
            />
            <SpecialBox1
              header="Cutting-Edge Expertise"
              content="Our professionals are skilled in the latest technologies and industry trends."
              icon="/style-arrow-icon3.svg"
            />
            <SpecialBox1
              header="Flexible Engagement Models"
              content="Whether you need a short-term team or long-term experts, we offer custom hiring solutions to fit your goals."
              icon="/style-arrow-icon4.svg"
            />
          </div>
        </div>
        <div className="why-wpd-dh-img-container"><img src="/why-wpd-dh.svg" alt="" /></div>
      </div>

      
      <div className="webpage-our-services">
        <h1 className="homepage-our-services-header" ><span>Our</span>  Dedicated Hiring Modules</h1>
      
        <BigSliderComponent content={servicesData} />
      </div>

      <Faq data={faqData} />

    </div>
  );
}

export default DedicatedHiring;