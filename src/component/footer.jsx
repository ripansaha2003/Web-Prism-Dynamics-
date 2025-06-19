import { useNavigate } from 'react-router-dom';
import '../css/footer.css';
function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="footer-top-container">
        <div className="footer-top-content">
          <h1><span>Ready to take your business</span> To the Next Level ?</h1>
          <p>Partner with Web Prism Dynamics today and let us help you unlock your business’s full potential with our expert IT services and business solutions.</p>
          <button className='fancy-button'>
            Learn More
          </button>
        </div>
        <div className="footer-top-image">
          <img src="/human.svg" alt="" />
        </div>
      </div>

      <div className='footer-container'>
        <div className='footer'>
          <div className='footer-box'>
            <img src="/web-logo1.png" alt="" className='web-logo1'/>
            <h1>Web Prism Dynamics</h1>
          </div>

          <div className='footer-line'> </div>

          <div className='footer-menu-container'>
            <div className='footer-menu'>
              <h4>Useful Links</h4>
              <p onClick={() => navigate('home')}>Home</p>
              <p onClick={() => navigate('/about-us')}>About Us</p>
              <p>Blogs</p>
              <p>Case Studies</p>
              <p onClick={() => navigate('/contact')}>Contact Us</p>
            </div>
            <div className='footer-menu'>
              <h4>Services</h4>
              <p onClick={() => navigate('/services/web-development')}>Web Development</p>
              <p onClick={() => navigate('/services/app-development')}>App Development</p>
              <p onClick={() => navigate('/services/creative-service')}>Creative Works</p>
              <p onClick={() => navigate('/services/blockchain')}>Blockchain & Web 3</p>
              <p onClick={() => navigate('/services/ai-ml')}>AI / ML</p>
              <p onClick={() => navigate('/services/iot')}>IoT</p>
            </div>
            <div className='footer-menu'>
              <h4 className='footer-menu-special'> 
                footer menu special
              </h4>
              <p onClick={() => navigate('/services/ar-vr')}>AR-VR</p>
              <p onClick={() => navigate('/hire-developer')}>Dedicated Hiring</p>
              <p onClick={() => navigate('/services/qa-testing')}>QA & Testing</p>
              <p onClick={() => navigate('/services/maintenance')}>Maintenance</p>
              <p onClick={() => navigate('/services/digital-marketing')}> Digital Marketing</p>
            </div>
            <div className='footer-menu'>
              <h4>Join Us</h4>
              <div> 
                <img src="/youtube.svg" alt="" />
                <img src="/linkedin.svg" alt="" />
                <img src="/facebook.svg" alt="" />
                <img src="/instagram.svg" alt="" />
              </div>
            </div>
          </div>

          <div className='footer-line'> </div>

          <div className='footer-copyright'>
            <p>Web Prism Dynamics © 2025. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;