import { useContext, useEffect } from 'react';
import { golablContext } from '../../context/context';
import './app-development.css';
import SpecialSquare1 from '../../component/SpecialSquare1';
import BigSliderComponent from '../../component/big-slider-component';
import Hexagon from '../../component/hexagon';
import Faq from '../../component/faq';
import SpecialBox1 from '../../component/special-box1';
function AppDevelopment() {
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
    setPage('app-development');
    setPageTitle('App Development');
    setHeaderNormal('Future-Ready App Solutions');
    setHeaderHighlight('For Your Business');
    setHeroImage('/dedicated-hiring-cover-img.svg');
    setHeroContentImage('/app-development.svg');
  }, []);

  const servicesData = [
    {
      title: "Custom Mobile App",
      content: "Our team creates bespoke mobile applications tailored to your business requirements. Whether it’s a business app, service-based solution app, or social networking platform, we develop high-performance mobile solutions for iOS and Android that drive user engagement.",
      image: "/custom-mobile-app.svg",
      color: "#FFF8DE",
      buttonActive: false
    },
    {
      title: "Cross-Platform App ",
      content: "We use powerful frameworks like Flutter and React Native to build apps that work seamlessly across multiple platforms. This approach ensures faster time-to-market and cost-effective development without compromising on quality.",
      image: "/cross-platform-app.svg",
      color: "#E4F2FF",
      buttonActive: false
    },
    {
      title: "Enterprise App ",
      content: "We specialize in developing secure, scalable, and high-performing enterprise applications that optimize business operations. From internal tools to customer-centric solutions, we design apps that enhance productivity, communication, and data management.",
      image: "/enterprise-app.svg",
      color: "#F0EFFF",
      buttonActive: false
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

  const faqData = [
    {
      id: "1",
      title: "What app development services do you offer?",
      content: "We offer end-to-end app development services, including mobile app development for iOS and Android, custom web apps, and cross-platform solutions. Our team specializes in UI/UX design, app testing, deployment, and post-launch support, ensuring your app meets business needs and user expectations."
    },
    {
      id: "2",
      title: "What types of apps can you develop?",
      content: "We develop a wide range of apps, including enterprise apps, e-commerce platforms, educational apps, and productivity tools. Whether you need a simple app or a complex, feature-rich solution, we cater to diverse industry requirements."
    },
    {
      id: "3",
      title: "How long does it take to develop an app?",
      content: "The development timeline depends on the complexity and scope of the project. Typically, app development takes 6-12 weeks, but we provide detailed project plans and timelines to ensure you have a clear understanding of the process and milestones."
    },
    {
      id: "4",
      title: "Do you offer post-launch support and maintenance?",
      content: "Yes! We offer ongoing support and maintenance services to ensure your app runs smoothly after launch. This includes bug fixes, updates, and performance optimization to keep your app up-to-date and fully functional."
    },
    {
      id: "5",
      title: "How do you ensure the quality of the app?",
      content: "We prioritize quality through thorough testing at every stage of development. Our team conducts functional, performance, security, and usability testing to ensure the app meets the highest standards and delivers a seamless user experience."
    }
  ];
  return (
    <div>

      <div className="ad-smart-scalable-container">
        <div><img src="/smart-scalable-img.svg" alt="" /></div>
        <div>
          <h1>Smart, Scalable, And Secure <span>App Development</span></h1>
          <p>
            At Web Prism Dynamics LLP, we specialize in providing top-tier app development services that help businesses stay ahead in today’s fast-paced digital world. Our innovative solutions are designed to enhance user experience, streamline operations, and drive business growth. With a deep understanding of market trends and a customer-first approach, we deliver custom applications that provide a competitive edge for our clients.
          </p>
        </div>
      </div>

      <div className='ad-custom-app-container'>
        <h1>Custom Apps For <span>Every Business!</span></h1>
        <div className='ad-custom-app-content-container'>
          <SpecialSquare1
            header="Android Apps"
            content="Our Android app development services deliver intuitive, feature-rich apps designed to provide an exceptional user experience across all Android devices."
            color="#A9CBFF"
            img="/android-icon.svg"
          />
          <SpecialSquare1
            header="IOS Apps"
            content="We specialize in building high-performance, user-friendly iOS apps tailored to meet your business needs, ensuring seamless integration with Apple’s ecosystem."
            color="#FF9ECC"
            img="/apple-icon.svg"
          />
          <SpecialSquare1
            header="Progressive Web Apps"
            content="We build Progressive Web Apps (PWAs) that combine the reach of the web with the capabilities of native apps, offering fast, reliable, and engaging user experiences on any device."
            color="#FFCAA9"
            img="/pwa-icon.svg"
          />
          <SpecialSquare1
            header="Hybrid Apps"
            content="We create hybrid apps that combine the best of both worlds, offering cross-platform functionality, cost-effectiveness, and fast deployment without compromising performance."
            color="#B4AFED"
            img="/hybrid-icon.svg"
          />
        </div>
      </div>

      <div className="ad-smart-scalable-container">
        <div>
          <h1>Building Apps That<br />  <span>Drive Engagement</span></h1>
          <p>
            We pride ourselves on delivering high-quality, scalable, and secure apps that meet your unique business needs. Our efficient development process ensures that your app is not only feature-rich but also user-friendly and optimized for performance. Whether you need a mobile app for iOS, Android, or a cross-platform solution, Web Prism Dynamics LLP is your trusted partner in building innovative applications that elevate your brand.
          </p>
        </div>
        <div><img src="/building-apps-img.svg" alt="" /></div>
      </div>

    
      <div className="webpage-our-services">
        <h1 className="homepage-our-services-header" >Our App Development<span> Services Include</span></h1>
      
        <BigSliderComponent content={servicesData} />
      </div>

      <div className="ad-our-technologies-container">
        <h1>Our App Development <span>Technologies</span></h1>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop apps:</p>
        <div className="ad-our-technologies-box-container">
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
      </div>

      <div className="ad-our-usp-container">
        <div className="ad-our-usp-content">
          <h1><span>Our USP In </span> App Development</h1>
          <div className="ad-our-usp-box-container">
            <SpecialBox1
              header="Tailored Solutions"
              content="We create apps that align with your business goals, providing the functionality and performance you need."
              icon="/style-arrow-icon.svg"
            />
            <SpecialBox1
              header="Faster Time-To-Market"
              content="Our efficient development process ensures your app is launched quickly and ready to make an impact."
              icon="/style-arrow-icon2.svg"
            />
            <SpecialBox1
              header="Cost-Effective Approach"
              content="By using agile methodologies and cutting-edge tools, we provide affordable solutions without compromising on quality."
              icon="/style-arrow-icon3.svg"
            />
            <SpecialBox1
              header="Expert Development Team"
              content="Our experienced developers are experts in the latest technologies and deliver high-quality apps."
              icon="/style-arrow-icon4.svg"
            />
            <SpecialBox1
              header="Ongoing Support"
              content="We provide continuous support to ensure your app evolves with the changing needs of your business."
              icon="/style-arrow-icon.svg"
            />
          </div>
        </div>
        <div className="ad-our-usp-image"><img src="/our-usp-in-ad.svg" alt="" /></div>
      </div>

      <Faq data={faqData} />

    </div>
  );
}

export default AppDevelopment;