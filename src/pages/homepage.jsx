
import BigSliderComponent from "../component/big-slider-component";
import "../css/homepage.css";
import SpecialSquare1 from "../component/SpecialSquare1";
import AutoSliderComponent from "../component/auto-slider-component";
import SpecialSquare2 from "../component/SpecialSquare2";
import OurTestimonial from "../component/our-testimonial";
import Hexagon from "../component/hexagon";
import Infobox1 from "../component/infobox1";
import Infobox2 from "../component/infobox2";
import { golablContext } from "../context/context";
import { useContext, useEffect } from "react";

function HomePage() {
  const services = [
    {
      title: "Website Development",
      content: "Get a custom, responsive website that meets your business needs. Our development team delivers high-quality, user-friendly websites.",
      image: "../../web development.jpg",
      color: "#FFF8DE"
    },
    {
      title: "App Development",
      content: "Transform your ideas into reality with our app development services. We create innovative, user-centric apps for all platforms.",
      image: "../../app development.jpg",
      color: "#E4F2FF"
    },
    {
      title: "Creative Works",
      content: "Elevate your brand with stunning web design and creative works. Our designs are tailored to captivate and engage your audience.",
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
    {
      title: "QA & Testing",
      content: "Ensure quality and reliability with our QA and testing services. We deliver thorough testing to guarantee your product's performance.",
      image: "../../QA & Testing.jpg",
      color: "#FFF8DE"
    },
    {
      title: "Maintenance",
      content: "Keep your systems running smoothly with our maintenance services. We provide ongoing support and updates to ensure optimal performance.",
      image: "../../Maintenance.jpg",
      color: "#E4F2FF"
    },
    {
      title: "Digital Marketing",
      content: "Boost your online presence with our expert digital marketing services. Drive traffic, increase engagement, and grow your business.",
      image: "../../digital marketing.jpg",
      color: "#FFEEF6"
    }

  ];

  const technologies = [
    {
      title: "Front-End",
      iconList: [
        '/angular-icon.svg',
        '/react-icon.svg',
        '/vue-icon.svg',
        '/html-icon.svg',
        '/css-icon.svg',
        '/javascript-icon.svg',
        '/svelte-icon.svg',
        '/typescript-icon.svg'
      ],
      primaryColor: "#FFA9D4",
      secondaryColor: "#FFEEF6"
    },
    {
      title: "Back-End",
      iconList: [
        '/ruby-icon.svg',
        '/python-icon.svg',
        '/java-icon.svg',
        '/c++-icon.svg',
        '/spring-icon.svg',
        '/nodejs-icon.svg',
        '/PHP-icon.svg',
        '/pngegg-icon.svg',
        '/scala-icon.svg',
        '/perl-programming-language-icon.svg',
        '/rust-icon.svg',
        '/golang-icon.svg',
      ],
      primaryColor: "#DAD7FC",
      secondaryColor: "#F0EFFF"
    },
    {
      title: "Mobile",
      iconList: [
        '/flutter-icon.svg',
        '/react-icon.svg',
        '/swift-icon.svg',
        '/kotlin-icon.svg',
        '/java-icon.svg',
        '/c-icon.svg',
        '/xamarin-icon.svg',
      ],
      primaryColor: "#FFCAA9",
      secondaryColor: "#FFF8DE"
    },
    {
      title: "DevOps",
      iconList: [
        '/docker-icon.svg',
        '/kubernets-icon.svg',
        '/Jenkins-icon.svg',
        '/aws-icon.svg',
        '/git-icon.svg',
        '/terraform-svgrepo-icon.svg',
        '/ansible-icon.svg',
        '/google-cloud-icon.svg',
        '/chef-icon.svg',
        '/image-icon.svg',
      ],
      primaryColor: "#A9CBFF",
      secondaryColor: "#E4F2FF"
    },
    {
      title: "CMS",
      iconList: [
        '/wordpress-icon.svg',
        '/shopify-icon.svg',
        '/magento-icon.svg',
      ],
      primaryColor: "#B4AFED",
      secondaryColor: "#F0EFFF"
    },
    {
      title: "Design",
      iconList: [
        '/adobe-illustrator-icon.svg',
        '/adobe-photoshop-icon.svg',
        '/adobe-xd-icon.svg',
        '/figma-icon.svg',
        '/sketch-icon.svg',
        '/premiere-pro-icon.svg',
        '/after-effects-icon.svg',
      ],
      primaryColor: "#FFA9D4",
      secondaryColor: "#FFEEF6"
    }
  ]

  const blogs = [
    {
      title: "The Role of IT in Modern Businesses",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste in eum. Possimus, praesentium? Sunt provident nam incidunt repudiandae eius aperiam rerum, doloremque quaerat? Amet facilis neque nihil libero placeat.",
      date: "12/6/2024",
      image: "/blog1.svg"
    },
    {
      title: "The Role of IT in Modern Businesses",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste in eum. Possimus, praesentium? Sunt provident nam incidunt repudiandae eius aperiam rerum, doloremque quaerat? Amet facilis neque nihil libero placeat.",
      date: "12/6/2024",
      image: "/blog2.svg"
    },
    {
      title: "The Role of IT in Modern Businesses",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iste in eum. Possimus, praesentium? Sunt provident nam incidunt repudiandae eius aperiam rerum, doloremque quaerat? Amet facilis neque nihil libero placeat.",
      date: "12/6/2024",
      image: "/blog3.svg"
    },
  ]
  const { setPage } = useContext(golablContext);
  useEffect(() => {
    setPage('home');
  }, [])
  return (
    <div className="homepage-container">
      <div className="homepage-our-services">
        <h1 className="homepage-our-services-header" ><span>Our</span> Services</h1>
        <BigSliderComponent content={services} />
      </div>



      <div className="homepage-why-choose-us">
        <div className="homepage-why-choose-us-container">
          <h1>Why Choose <span>Us</span></h1>
          <p>At Web Prism Dynamics, we are committed to delivering exceptional results through innovative strategies and personalized solutions. Here’s why you should partner with us:</p>
          <button className='fancy-button'>Learn More</button>
          <img src="../../why choose us.jpg" alt="" />
        </div>
        <div className="homepage-special-square-container">
          <div className="homepage-special-square-content">
            <SpecialSquare1 header={"Tailored solutions"} content={"We believe in creating custom solutions that align with your business objectives and challenges."} color={"#74B2FF"} img={"../../tailored solution.png"} />
            <SpecialSquare1 header={"End-to-end services"} content={"From consulting to development and marketing, we offer comprehensive services to meet all your business needs under one roof."} color={"#FF9ECC"} img={"../../end to end service.png"} />
          </div>
          <div className="homepage-special-square-content margin-top">
            <SpecialSquare1 header={"Experienced team"} content={"Our team is composed of industry experts who are passionate about delivering high-quality results and staying ahead of the latest trends."} color={"#FFCAA9"} img={"../../experienced team.png"} />
            <SpecialSquare1 header={"Client-centric approach"} content={"Your success is our success. We work closely with you to understand your goals and deliver solutions that drive growth."} color={"#74B2FF"} img={"../../client centric approach.png"} />
          </div>
        </div>
      </div>

      <div className="homepage-industries">
        <div className="homepage-industries-container">
          <div className="homepage-industries-header">
            <h1><span>Industries</span> We Serve</h1>
          </div>

          <div className="homepage-industries-box">
            <p>Fintech</p>
            <div>
              <img src="/fintech.svg" alt="" />
            </div>
          </div>
          <div className="homepage-industries-box">
            <p>E-Commerce</p>
            <div>
              <img src="/e-commerce.svg" alt="" />
            </div>
          </div>

          <div className="homepage-industries-box">
            <p>Logistics</p>
            <div>
              <img src="/logistics.svg" alt="" />
            </div>
          </div>

        </div>
        <div className="homepage-industries-container">
          <div className="homepage-industries-box">
            <p>Government</p>
            <div>
              <img src="/government.svg" alt="" />
            </div>
          </div>

          <div className="homepage-industries-box">
            <p>Healthcare</p>
            <div>
              <img src="/healthcare.svg" alt="" />
            </div>
          </div>

          <div className="homepage-industries-box">
            <p>Ed-Tech</p>
            <div>
              <img src="/ed-tech.svg" alt="" />
            </div>
          </div>

          <div className="homepage-industries-box">
            <p>And More</p>
            <div>
              <img src="/add-more.png" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="homepage-our-testimonial">
        <h1><span>Our</span> Testimonial</h1>
        <OurTestimonial />
      </div>

      <div className="homepage-technologies">
        <h1>Technologies <span>We Use</span></h1>
      </div>
      <div className="homepage-technologies-container">
        {
          technologies.map((technology) => (
            <Hexagon
              title={technology.title}
              iconList={technology.iconList}
              primaryColor={technology.primaryColor}
              secondaryColor={technology.secondaryColor}
            />
          ))
        }
      </div>

      <div className="homepage-our-blogs">
        <h1><span>Our</span> Blogs</h1>
        <BigSliderComponent content={blogs} boxSelection={"infobox2"} />
      </div>


      {/* <div className="homepage-our-clients">
        <h1 ><span>Our</span> Clients</h1>
        <AutoSliderComponent />
      </div> */}

    </div>
  );
}

export default HomePage;