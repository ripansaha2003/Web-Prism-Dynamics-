import { useContext, useEffect } from "react";
import { golablContext } from "../../context/context";
import './web-development.css';
import BigSliderComponent from "../../component/big-slider-component";
import SpecialBox1 from "../../component/special-box1";
import Hexagon from "../../component/hexagon";
import Faq from "../../component/faq";

function WebDevelopment() {
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
    setPage('web-development');
    setPageTitle('Website Development');
    setHeaderNormal('Custom Websites ');
    setHeaderHighlight('That Drive Results!');
    setHeroImage('/dedicated-hiring-cover-img.svg');
    setHeroContentImage('/web-development.svg');
  }, []);

  const servicesData = [
    {
      title: "Custom Web Development",
      content: "Our team works closely with you to create a website that reflects your brand’s identity and vision. From responsive design to intuitive user interfaces, we craft web designs that engage visitors and drive conversions.",
      image: "/creative-ui.svg",
      color: "#FFF8DE",
      buttonActive: false
    },
    {
      title: "E-Commerce Solutions",
      content: "We specialize in developing secure, scalable, and easy-to-manage e-commerce platforms. Whether you are looking for a custom-built online store or need to integrate with existing systems, we ensure your e-commerce site is user-friendly and optimized for sales.",
      image: "/e-commerce-solutions.svg",
      color: "#E4F2FF",
      buttonActive: false
    },
    {
      title: "Content Management Systems",
      content: "Our CMS development services provide easy-to-manage, flexible websites. We work with popular platforms like WordPress, Joomla, and Drupal to create websites that allow you to control and update content without technical expertise.",
      image: "/content-management-systems.svg",
      color: "#F0EFFF",
      buttonActive: false
    },
    {
      title: "Content Management Systems",
      content: "Our CMS development services provide easy-to-manage, flexible websites. We work with popular platforms like WordPress, Joomla, and Drupal to create websites that allow you to control and update content without technical expertise.",
      image: "/content-management-systems.svg",
      color: "#F0EFFF",
      buttonActive: false
    },
    {
      title: "Content Management Systems",
      content: "Our CMS development services provide easy-to-manage, flexible websites. We work with popular platforms like WordPress, Joomla, and Drupal to create websites that allow you to control and update content without technical expertise.",
      image: "/content-management-systems.svg",
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
      title: "What can we expect from Web Prism Dynamics’ web development services?",
      content: "What can we expect from Web Prism Dynamics’ web development services?"
    },
    {
      id: "2",
      title: "How does Web Prism Dynamics ensure our website meets business goals?",
      content: "We take a collaborative approach to understand your business objectives, target audience, and vision. Our team develops a tailored web solution that aligns with your goals, adds the latest technology, and improves your online presence to drive organic conversions and customer engagement."
    },
    {
      id: "3",
      title: "What types of websites does Web Prism Dynamics build?",
      content: "We specialize in building a wide range of websites, including corporate websites, e-commerce platforms, content management systems (CMS), portfolio sites, and custom web applications. Whether you need a simple landing page or a complex, feature-rich website, we have got you covered."
    },
    {
      id: "4",
      title: "How does Web Prism Dynamics ensure our website is secure and scalable?",
       content: "Web Prism Dynamics LLP follows best practices in web development to ensure that your website is secure, scalable, and future-proof. We implement security protocols, conduct regular testing, and design scalable architecture, so your website can grow alongside your business and remain protected from potential threats."
    },
    {
      id: "5",
      title: "What sets Web Prism Dynamics apart in web development?",
      content: "Web Prism Dynamics stands out by providing end-to-end web development services, from initial planning and design to ongoing support and maintenance. Our experienced team ensures that your website is not only visually appealing but also optimized for performance, speed, and SEO, delivering long-term value and results for your business."
    }
  ];

  return (
    <div>

      <div className="wd-crafting-seemless-container">
        <div><img src="/crafting-seemless-img.svg" alt="" /></div>
        <div>
          <h1><span>Crafting Seamless</span><br /> User-Centric Websites</h1>
          <p>
            At Web Prism Dynamics LLP, we specialize in providing cutting-edge web development services to help businesses thrive in the digital world. Our expert team combines innovative technologies with industry best practices to create dynamic, user-friendly, and seamless websites that deliver exceptional results. Whether you are a start-up, small business, or an established enterprise, we offer tailored solutions that perfectly align with your business goals and objectives.
          </p>
        </div>
      </div>

  

      
<div className="webpage-our-services">
        <h1 className="homepage-our-services-header" ><span>Our</span> Web Development Services</h1>
      
        <BigSliderComponent content={servicesData} />
      </div>

      <div className="wd-our-usp-container">
        <div className="wd-our-usp-content">
          <h1><span>Our USP In </span> Web Development</h1>
          <div className="wd-our-usp-box-container">
            <SpecialBox1
              header="Experienced And Skilled Web Developers"
              content="Our team consists of highly experienced web developers. They specialize in creating websites that are functional, responsive, and visually appealing, ensuring your project is in capable hands."
              icon="/style-arrow-icon.svg"
            />
            <SpecialBox1
              header="Cutting-Edge Technologies And Industry Tools"
              content="We use the latest technologies and tools, staying ahead of industry trends to deliver modern, scalable, and efficient websites that meet the demands of today's digital landscape."
              icon="/style-arrow-icon2.svg"
            />
            <SpecialBox1
              header="Customized, Client-Centric Approach"
              content="We take the time to understand your unique business needs, tailoring each project to align with your vision, goals, and target audience for a customized web solution."
              icon="/style-arrow-icon3.svg"
            />
            <SpecialBox1
              header="Timely Delivery And Quality Assurance"
              content="Our dedicated team ensures that every project is completed on schedule without compromising on quality, with rigorous testing to guarantee optimal performance and reliability."
              icon="/style-arrow-icon4.svg"
            />
            <SpecialBox1
              header="Affordable Pricing With No Compromise On Quality"
              content="We offer competitive pricing models that fit your budget, delivering high-quality websites without sacrificing design, functionality, or user experience."
              icon="/style-arrow-icon.svg"
            />
            <SpecialBox1
              header="Ongoing Support And Updates"
              content="Post-launch, we continue to support and maintain your website, providing timely updates, troubleshooting, and enhancements to ensure your site remains relevant and functional."
              icon="/style-arrow-icon2.svg"
            />
          </div>
        </div>
        <div className="wd-our-usp-image"><img src="/our-usp-in-wd.svg" alt="" /></div>
      </div>

      <div className="wd-crafting-seemless-container">
        <div><img src="/wcu-wd.svg" alt="" /></div>
        <div>
          <h1>Why Choose Us For <br /><span>Web Development Services?</span></h1>
          <p>
            We believe in delivering high-performance web solutions that exceed client expectations. Our web development services are designed to ensure your online presence stands out and gets high user engagement. With a focus on functionality, security, and scalability, we create websites that meet your unique business needs.
          </p>
        </div>
      </div>

      <div className="wd-our-technologies-container">
        <h1>Our Web Development <span>Technologies</span></h1>
        <p>At Web Prism Dynamics LLP, we utilize the latest technologies and frameworks to develop Website:</p>
        <div className="wd-our-technologies-box-container">
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

      <Faq data={faqData} />
    </div>
  );
}

export default WebDevelopment;