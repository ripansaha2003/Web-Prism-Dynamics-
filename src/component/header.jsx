// import '../css/header.css';
// function Header() {
//   return (
//     <div className="header">
//       <header className='header-container'>
//         <div className="header-logo-container">
//           <div><img src="/logo.svg" alt="" /></div>
//         </div>
//         <div className="header-menu-container">
//           <div className="header-nav-container">
//             <button>Home</button>
//             <button>Services</button>
//             <button>Case Studies</button>
//             <button>Hire Developers</button>
//             <button>Contact</button>
//           </div>
//         </div>
//         <div className="header-brochure-container">
//           <button>Our Brochure</button>
//         </div>
//       </header>

//       <div className="header-hero-content">
//         <h1 className="header-hero-title">
//           Empowering Your Business With<br />
//           <span className="highlight">Innovative IT Solutions</span>
//         </h1>
//         <p className="hero-description">
//           We specialize in offering cutting-edge IT services and comprehensive business solutions
//           designed to accelerate your business growth.
//         </p>
//         <button className="cta-button">Book A Call</button>
//       </div>
//     </div>
//   );
// }

// export default Header;

// Header.jsx
import { useContext, useEffect, useState } from 'react';
import '../css/header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { golablContext } from '../context/context';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Header() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

const toggleSubMenu = () => {
  setIsSubMenuOpen(!isSubMenuOpen);
};

const subServiceClick = (sub) => {
  console.log(`Sub-service clicked: ${sub}`);
  // do something
};

  const [selectedButton, setSelectedButton] = useState('');
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
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const starter = location.pathname.split('/')[1];
    setSelectedButton(starter);
  })
  const buttonClick = (button) => {
    setSelectedButton(button);
    if(button === 'services') {
      navigate('/services/web-development');
      return;
    }
    navigate(`${button}`);
  }
  
  
  return (
    <div className="header-header">
      <div className="header" style={page === 'home' ? { backgroundImage: `url("/home-img.svg")` } : { backgroundImage: `url(${heroImage})` }}>
        <div className='header-container' style={page !== 'home' ? { marginBottom: '5%'} : {}}>
          <div className="header-logo-container">
            <img src="/web-logo.png" alt="Company Logo" />
          </div>

          <div className="header-nav-wrapper">
            <nav className="header-nav-container">
              <button onClick={() => buttonClick('home')} className={selectedButton === 'home' ? 'active' : ''}>Home</button>


          <div><button onClick={() => buttonClick('services')} className={selectedButton === 'services' ? 'active' : ''} ><span className="button-content">
    Services <FaChevronDown className="arrow-icon" />
  </span></button></div>


              <button onClick={() => buttonClick('case-study')} className={selectedButton === 'case-study' ? 'active' : ''} >About</button>
              <button onClick={() => buttonClick('hire-developer')} className={selectedButton === 'hire-developer' ? 'active' : ''} >Hire Developer</button>
              <button onClick={() => buttonClick('contact')} className={selectedButton === 'contact' ? 'active' : ''} >Contact</button>
            </nav>
          </div>

          <div className="header-brochure-container">
            <button className="brochure-button">Our Brochure</button>
          </div>
        </div>

        {page === 'home' &&
          <div className="header-hero-content">
            <h1 className="header-hero-title ">
              Empowering Your Business With</h1><br />
             <h1> <span className="header-highlight">Innovative IT Solutions</span></h1>
            
            <p className="header-hero-description">
              We specialize in offering cutting-edge IT services and comprehensive business solutions
              designed to accelerate your business growth.
            </p>
            <button className="animated-button">Book A Call</button>
          </div>
        }
        {
          page !== 'home' &&
          <div className="header-hero-content-other">
            <div className='header-hero-description-other'>
              <p>{pageTitle}</p>
              <h1>{headerNormal} <span>{headerHighlight}</span></h1>
            </div>
            <div className='header-hero-image-other'>
              <div><img src={heroContentImage} alt="" /></div>
              <button className='animated-button'>Book A Call</button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;