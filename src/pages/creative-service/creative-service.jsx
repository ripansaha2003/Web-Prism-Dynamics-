import { useContext, useEffect } from 'react';
import { golablContext } from '../../context/context';
import './creative-service.css';
import SpecialSquare1 from '../../component/SpecialSquare1';
import BigSliderComponent from '../../component/big-slider-component';
import Hexagon from '../../component/hexagon';
import Faq from '../../component/faq';
import SpecialBox1 from '../../component/special-box1';
import CreativeBlockCircle from "../../component/creative-block-circle";
import './creative-service.css';


function CreativeServices() {
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
    setPage('creative-service');
    setPageTitle('Creative Services');
    setHeaderNormal(`Unleash Your Brand's Potential`);
    setHeaderHighlight('With Expert Creative Services');
    setHeroImage('/dedicated-hiring-cover-img.svg');
    setHeroContentImage('/creative-image1.svg');
  }, []);

  const servicesData = [
    {
      title: "Custom Mobile App",
      content: "We specialize in creating user-friendly, visually stunning, and highly functional digital experiences. Whether you're building a new website, designing an app, or re-imagining an existing product, our UI/UX design services ensure seamless navigation and engaging interfaces that keep users coming back.",
      image: "/creative-ui.svg",
      color: "#FFF8DE",
      buttonActive: false
    },
    {
      title: "Graphic design (Banner, Illustration)",
      subtext:"Banner, Illustration",
      content: "Our graphic design services help your brand stand out on social media and beyond. We create custom social media banners that captivate your audience and bespoke illustrations that bring your brand’s story to life, ensuring that every design is perfectly aligned with your brand's personality.",
      image: "/creative-box-img2.svg",
      color: "#E4F2FF",
      buttonActive: false
    },
    {
      title: "Branding (Logo, Icon)",
      content: "We build strong visual identities with logo and icon design that portray the essence of your brand. Our branding services ensure consistency across all platforms and leave a lasting impression, helping you establish a professional and memorable presence in your industry.",
      image: "/creative-box-img3.svg",
      color: "#F0EFFF",
      buttonActive: false
    },
    {
      title: "Custom Mobile App",
      content: "We specialize in creating user-friendly, visually stunning, and highly functional digital experiences. Whether you're building a new website, designing an app, or re-imagining an existing product, our UI/UX design services ensure seamless navigation and engaging interfaces that keep users coming back.",
      image: "/creative-box-img1.svg",
      color: "#FFF8DE",
      buttonActive: false
    },
    {
      title: "Graphic design (Banner, Illustration)",
      content: "Our graphic design services help your brand stand out on social media and beyond. We create custom social media banners that captivate your audience and bespoke illustrations that bring your brand’s story to life, ensuring that every design is perfectly aligned with your brand's personality.",
      image: "/creative-box-img2.svg",
      color: "#E4F2FF",
      buttonActive: false
    },
    {
      title: "Branding (Logo, Icon)",
      content: "We build strong visual identities with logo and icon design that portray the essence of your brand. Our branding services ensure consistency across all platforms and leave a lasting impression, helping you establish a professional and memorable presence in your industry.",
      image: "/creative-box-img3.svg",
      color: "#F0EFFF",
      buttonActive: false
    },
    {
      title: "Graphic design (Banner, Illustration)",
      content: "Our graphic design services help your brand stand out on social media and beyond. We create custom social media banners that captivate your audience and bespoke illustrations that bring your brand’s story to life, ensuring that every design is perfectly aligned with your brand's personality.",
      image: "/creative-box-img2.svg",
      color: "#E4F2FF",
      buttonActive: false
    },
    {
      title: "Branding (Logo, Icon)",
      content: "We build strong visual identities with logo and icon design that portray the essence of your brand. Our branding services ensure consistency across all platforms and leave a lasting impression, helping you establish a professional and memorable presence in your industry.",
      image: "/creative-box-img3.svg",
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
      title: "What is the difference between UI and UX design?",
      content: "UI (User Interface) design focuses on the look and feel of a product—its layout, colors, typography, and interactive elements. UX (User Experience) design is all about the usability and overall experience of the product, ensuring it is intuitive and enjoyable to use."
    },
    {
      id: "2",
      title: "Why is branding important for my business?",
      content: "Branding helps define your business’s identity and makes it recognizable to customers. A strong brand communicates professionalism, builds trust, and creates emotional connections with your audience. Effective branding helps you stand out from competitors and establish a loyal customer base."
    },
    {
      id: "3",
      title: "How long does it take to complete a design project?",
      content: "The timeline for a design project depends on its complexity and scope. Simple projects like logo design may take a few days, while more complex projects such as website redesigns or app design can take several weeks. We work with you to set realistic deadlines and keep you informed throughout the process."
    },
    {
      id: "4",
      title: "Can you help with redesigning my existing website or app?",
      content: "Yes! Our team specializes in redesigning websites, apps, and dashboards to improve user experience, update aesthetics, and incorporate the latest design trends. We ensure your new design aligns with your brand and goals while enhancing user engagement."
    },
    {
      id: "5",
      title: "Do you provide ongoing support after the project is completed?",
      content: "Absolutely! We offer ongoing support to ensure your design continues to perform optimally. Whether you need updates, troubleshooting, or enhancements, we are here to assist you long after the project is finished."
    }
  ];
  return (
    <div>

      <div className="ad-smart-scalable-container">
        <div><img src="/creative-image2.svg" alt="" /></div>
        <div>
          <h1>Creative Designs<span> <br/>That Stand Out!</span></h1>
          <p>
            At Web Prism Dynamics LLP, we bring your brand's creative vision to life through innovative and impactful design solutions. Our team of skilled professionals combines technical expertise with creativity to craft designs that are not only visually appealing but also strategically aligned with your business goals. Whether you are looking for a new website, a brand refresh, or engaging creatives for your social media channels, we are here to help you stand out and succeed.          </p>
        </div>
      </div>

      {/* <div className='ad-custom-app-container'>
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
      </div> */}
     

      <div className="creative-our-services">
        <h1 className="homepage-our-services-header" >Expertise Across Diverse <span>  Creative Domains</span></h1>
      
        <BigSliderComponent content={servicesData} />
      </div>

      <div className="ad-smart-scalable-container">
        <div>
          <h1>Why choose  for <br />  <span>Web Prism Dynamics LLP?</span></h1>
          <p>
            We understand that each business is unique, and so are its creative needs. That’s why we offer customized solutions designed to reflect your brand identity, message, and goals. When it comes to design, user experience is key. From website designs that maximize conversion rates to app interfaces that users love to navigate, we ensure that your digital touchpoints are optimized for success. We stay ahead of the latest design trends and technology to provide you with cutting-edge solutions that are modern, relevant, and effective. You shall get access to high-quality creative services at affordable rates, making it easier for small and medium-sized businesses to compete in a crowded marketplace.          </p>
        </div>
        <div><img src="/creative-image3.svg" alt="" /></div>
      </div>

     <CreativeBlockCircle/>

    
      <div className="ad-our-usp-container">
        <div className="ad-our-usp-content">
          <h1><span>Why  </span> Should Brands Opt For Creative Services</h1>
          <p>In today’s competitive business environment, first impressions matter. Creative services play a vital role in how your business is perceived. Here’s why investing in creative services is crucial for your brand:</p>
          <div className="ad-our-usp-box-container">
            <SpecialBox1
              header="Brand Recognition"
              content="Consistent and innovative design helps your brand stand out and become easily recognizable in a crowded market."
              icon="/style-arrow-icon.svg"
            />
            <SpecialBox1
              header="Increased Engagement"
              content="Well-designed user experiences and visuals engage customers, leading to better interaction and higher conversion rates."
              icon="/style-arrow-icon2.svg"
            />
            <SpecialBox1
              header="Professional Image"
              content="Quality design communicates professionalism, trustworthiness, and authority in your industry."
              icon="/style-arrow-icon3.svg"
            />
            <SpecialBox1
              header="Expert Development Team"
              content="Our experienced developers are experts in the latest technologies and deliver high-quality apps."
              icon="/style-arrow-icon4.svg"
            />
            <SpecialBox1
              header="Better User Experience"
              content="Whether it’s a website, mobile app, or social media content, creative services ensure a smooth and enjoyable user experience that keeps your audience coming back."
              icon="/style-arrow-icon.svg"
            />
          </div>
        </div>
        <div className="ad-our-usp-image"><img src="/creative-image5.svg" alt="" /></div>
      </div>

      <Faq data={faqData} />

    </div>
  );
}

export default CreativeServices;