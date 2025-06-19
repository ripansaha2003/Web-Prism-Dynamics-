// // import React from 'react'
// // import "./contact-us.css";
// // function ContactUs() {
// //   return (
// //     <div className='ripan'>ContactUs</div>
// //   )
// // }

// // export default ContactUs
// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: 'Web Development',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//     alert('Message sent successfully!');
//   };

//   const styles = {
//     container: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)',
//       padding: '24px'
//     },
//     wrapper: {
//       maxWidth: '1200px',
//       margin: '0 auto'
//     },
//     contactCard: {
//       background: 'white',
//       borderRadius: '24px',
//       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//       overflow: 'hidden',
//       marginBottom: '32px'
//     },
//     contactContent: {
//       display: 'flex',
//       minHeight: '600px'
//     },
//     illustrationSection: {
//       flex: '1',
//       background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
//       padding: '48px 32px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       color: 'white',
//       position: 'relative',
//       overflow: 'hidden'
//     },
//     illustrationOverlay: {
//       position: 'absolute',
//       inset: '0',
//       background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(79, 70, 229, 0.2) 100%)'
//     },
//     illustrationContent: {
//       position: 'relative',
//       zIndex: 10,
//       textAlign: 'center'
//     },
//     contactTitle: {
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       marginBottom: '24px'
//     },
//     titleAccent: {
//       color: '#bfdbfe'
//     },
//     deviceIllustration: {
//       position: 'relative',
//       marginBottom: '24px'
//     },
//     deviceFrame: {
//       width: '128px',
//       height: '160px',
//       background: '#1f2937',
//       borderRadius: '12px',
//       margin: '0 auto',
//       position: 'relative'
//     },
//     deviceScreen: {
//       position: 'absolute',
//       inset: '8px',
//       background: 'white',
//       borderRadius: '8px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     emailIcon: {
//       width: '64px',
//       height: '48px',
//       background: '#fb923c',
//       borderRadius: '8px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       position: 'relative'
//     },
//     notificationDot: {
//       position: 'absolute',
//       top: '-4px',
//       right: '-4px',
//       width: '16px',
//       height: '16px',
//       background: 'white',
//       borderRadius: '50%',
//       border: '2px solid #fb923c'
//     },
//     serviceRep: {
//       position: 'absolute',
//       right: '-16px',
//       top: '32px',
//       width: '64px',
//       height: '64px',
//       background: '#ef4444',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     repAvatar: {
//       width: '48px',
//       height: '48px',
//       background: 'white',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     repFace: {
//       width: '32px',
//       height: '32px',
//       background: '#ef4444',
//       borderRadius: '50%',
//       position: 'relative'
//     },
//     repEye: {
//       position: 'absolute',
//       width: '8px',
//       height: '8px',
//       background: 'white',
//       borderRadius: '50%',
//       top: '6px'
//     },
//     repEyeLeft: {
//       left: '6px'
//     },
//     repEyeRight: {
//       right: '6px'
//     },
//     repSmile: {
//       position: 'absolute',
//       bottom: '6px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       width: '12px',
//       height: '4px',
//       background: 'white',
//       borderRadius: '2px'
//     },
//     headsetIcon: {
//       position: 'absolute',
//       top: '-8px',
//       left: '-8px',
//       width: '32px',
//       height: '32px',
//       background: '#fb923c',
//       borderRadius: '50%',
//       opacity: '0.8'
//     },
//     formSection: {
//       flex: '1.5',
//       padding: '48px 40px'
//     },
//     formContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '24px'
//     },
//     formGroup: {
//       display: 'flex',
//       flexDirection: 'column'
//     },
//     formLabel: {
//       display: 'block',
//       fontSize: '0.875rem',
//       fontWeight: '500',
//       color: '#374151',
//       marginBottom: '8px'
//     },
//     formInput: {
//       width: '100%',
//       padding: '12px 16px',
//       background: '#eff6ff',
//       border: '1px solid #dbeafe',
//       borderRadius: '8px',
//       fontSize: '1rem',
//       color: '#1f2937',
//       transition: 'all 0.2s ease',
//       outline: 'none'
//     },
//     phoneInputGroup: {
//       display: 'flex'
//     },
//     countryCode: {
//       padding: '12px',
//       background: '#eff6ff',
//       border: '1px solid #dbeafe',
//       borderRadius: '8px 0 0 8px',
//       borderRight: 'none',
//       fontSize: '1rem',
//       color: '#1f2937',
//       outline: 'none'
//     },
//     phoneInput: {
//       flex: '1',
//       padding: '12px 16px',
//       background: '#eff6ff',
//       border: '1px solid #dbeafe',
//       borderRadius: '0 8px 8px 0',
//       fontSize: '1rem',
//       color: '#1f2937',
//       transition: 'all 0.2s ease',
//       outline: 'none'
//     },
//     formTextarea: {
//       width: '100%',
//       padding: '12px 16px',
//       background: '#eff6ff',
//       border: '1px solid #dbeafe',
//       borderRadius: '8px',
//       fontSize: '1rem',
//       color: '#1f2937',
//       resize: 'none',
//       minHeight: '100px',
//       outline: 'none'
//     },
//     submitButton: {
//       width: '100%',
//       background: 'linear-gradient(to right, #3b82f6, #4f46e5)',
//       color: 'white',
//       padding: '12px 24px',
//       borderRadius: '8px',
//       fontWeight: '500',
//       border: 'none',
//       cursor: 'pointer',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '8px',
//       transition: 'all 0.2s ease'
//     },
//     contactInfoGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '24px'
//     },
//     infoCard: {
//       background: 'white',
//       borderRadius: '16px',
//       padding: '32px 24px',
//       boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
//       transition: 'all 0.3s ease',
//       borderLeft: '4px solid'
//     },
//     emailCard: {
//       borderLeftColor: '#fbbf24'
//     },
//     phoneCard: {
//       borderLeftColor: '#f472b6'
//     },
//     locationCard: {
//       borderLeftColor: '#3b82f6'
//     },
//     cardContent: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       textAlign: 'center'
//     },
//     cardIconWrapper: {
//       width: '64px',
//       height: '64px',
//       background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: '16px'
//     },
//     cardTitle: {
//       fontSize: '1.125rem',
//       fontWeight: '600',
//       color: '#1f2937',
//       marginBottom: '8px'
//     },
//     cardText: {
//       fontSize: '0.875rem',
//       color: '#6b7280',
//       marginBottom: '4px'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.wrapper}>
//         {/* CSS for hover effects */}
//         <style>{`
//           .submit-btn:hover {
//             background: linear-gradient(to right, #2563eb, #4338ca) !important;
//             transform: translateY(-1px);
//             box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.4);
//           }

//           .info-card:hover {
//             box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
//             transform: translateY(-2px);
//           }

//           .form-input:focus,
//           .form-textarea:focus,
//           .phone-input:focus {
//             box-shadow: 0 0 0 2px #3b82f6 !important;
//             border-color: transparent !important;
//           }

//           @media (max-width: 1024px) {
//             .contact-content {
//               flex-direction: column !important;
//             }
//             .illustration-section {
//               min-height: 300px !important;
//             }
//             .form-section {
//               padding: 32px 20px !important;
//             }
//           }

//           @media (max-width: 768px) {
//             .contact-title {
//               font-size: 2rem !important;
//             }
//             .device-frame {
//               width: 96px !important;
//               height: 120px !important;
//             }
//             .service-rep {
//               width: 48px !important;
//               height: 48px !important;
//               right: -12px !important;
//               top: 24px !important;
//             }
//             .contact-info-grid {
//               grid-template-columns: 1fr !important;
//             }
//           }
//         `}</style>

//         {/* Main Contact Form */}
//         <div style={styles.contactCard}>
//           <div style={styles.contactContent} className="contact-content">
//             {/* Left side - Illustration and Title */}
//             <div style={styles.illustrationSection} className="illustration-section">
//               <div style={styles.illustrationOverlay}></div>
//               <div style={styles.illustrationContent}>
//                 <h1 style={styles.contactTitle} className="contact-title">
//                   Contact <span style={styles.titleAccent}>Us</span>
//                 </h1>

//                 {/* Illustration */}
//                 <div style={styles.deviceIllustration}>
//                   <div style={styles.deviceFrame} className="device-frame">
//                     <div style={styles.deviceScreen}>
//                       <div style={styles.emailIcon}>
//                         <Mail style={{ width: '24px', height: '24px', color: 'white' }} />
//                         <div style={styles.notificationDot}></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Customer service representative */}
//                   <div style={styles.serviceRep} className="service-rep">
//                     <div style={styles.repAvatar}>
//                       <div style={styles.repFace}>
//                         <div style={{...styles.repEye, ...styles.repEyeLeft}}></div>
//                         <div style={{...styles.repEye, ...styles.repEyeRight}}></div>
//                         <div style={styles.repSmile}></div>
//                       </div>
//                     </div>
//                     <div style={styles.headsetIcon}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Form */}
//             <div style={styles.formSection} className="form-section">
//               <div style={styles.formContainer}>
//                 {/* Name Field */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.formLabel}>Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Bidisha"
//                     style={styles.formInput}
//                     className="form-input"
//                     required
//                   />
//                 </div>

//                 {/* Email Field */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.formLabel}>Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="webprimebs@gmail.com"
//                     style={styles.formInput}
//                     className="form-input"
//                     required
//                   />
//                 </div>

//                 {/* Phone Field */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.formLabel}>Phone Number</label>
//                   <div style={styles.phoneInputGroup}>
//                     <select style={styles.countryCode}>
//                       <option>+1</option>
//                       <option>+91</option>
//                       <option>+44</option>
//                     </select>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       placeholder="1234567890"
//                       style={styles.phoneInput}
//                       className="phone-input"
//                     />
//                   </div>
//                 </div>

//                 {/* Service Selection */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.formLabel}>Select Service</label>
//                   <select
//                     name="service"
//                     value={formData.service}
//                     onChange={handleInputChange}
//                     style={styles.formInput}
//                   >
//                     <option>Web Development</option>
//                     <option>Mobile App Development</option>
//                     <option>UI/UX Design</option>
//                     <option>Digital Marketing</option>
//                     <option>SEO Services</option>
//                   </select>
//                 </div>

//                 {/* Message Field */}
//                 <div style={styles.formGroup}>
//                   <label style={styles.formLabel}>Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Write Message"
//                     rows="4"
//                     style={styles.formTextarea}
//                     className="form-textarea"
//                     required
//                   ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   style={styles.submitButton}
//                   className="submit-btn"
//                 >
//                   <Send style={{ width: '20px', height: '20px' }} />
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Info Cards */}
//         <div style={styles.contactInfoGrid} className="contact-info-grid">
//           {/* Email Card */}
//           <div style={{...styles.infoCard, ...styles.emailCard}} className="info-card">
//             <div style={styles.cardContent}>
//               <div style={styles.cardIconWrapper}>
//                 <Mail style={{ width: '32px', height: '32px', color: 'white' }} />
//               </div>
//               <h3 style={styles.cardTitle}>Email Us At</h3>
//               <p style={styles.cardText}>bidishabismillah13@gmail.com</p>
//               <p style={styles.cardText}>bidishabismillah13@gmail.com</p>
//             </div>
//           </div>

//           {/* Phone Card */}
//           <div style={{...styles.infoCard, ...styles.phoneCard}} className="info-card">
//             <div style={styles.cardContent}>
//               <div style={styles.cardIconWrapper}>
//                 <Phone style={{ width: '32px', height: '32px', color: 'white' }} />
//               </div>
//               <h3 style={styles.cardTitle}>Call Us At</h3>
//               <p style={styles.cardText}>+91 8900542982</p>
//             </div>
//           </div>

//           {/* Location Card */}
//           <div style={{...styles.infoCard, ...styles.locationCard}} className="info-card">
//             <div style={styles.cardContent}>
//               <div style={styles.cardIconWrapper}>
//                 <MapPin style={{ width: '32px', height: '32px', color: 'white' }} />
//               </div>
//               <h3 style={styles.cardTitle}>Locate Us At</h3>
//               <p style={styles.cardText}>12A Greenfield Plaza, Salt Lake City,</p>
//               <p style={styles.cardText}>Sector 5, Kolkata, West Bengal 700091</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
// import { Target, Phone, MapPin, Send } from "lucide-react";
import SpecialSquare1 from "../../component/SpecialSquare1";
import msgBox from "../../component/msgBox";
import "./contact-us.css";
import { useContext } from "react";
import { golablContext } from "../../context/context";


export default function ContactUs() {
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
    setPage('contact-us');
    setPageTitle('Contact Us');
    setHeaderNormal('Innovating Solutions');
    setHeaderHighlight('For Every Challenge');
    setHeroImage('/about-us-cover-img.svg');
    setHeroContentImage('/image.png');
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Main*/}
        <div className="contact-card ">
          <div className="contact-content circle-1 circle-2 circle-3 circle-4">
            {/* Left-Illustration and Title */}
            <div className="illustration-section">
              {/* <div className="illustration-overlay"></div> */}
              <div className="illustration-content">
                <img src="/left-side-img.png" alt="" />
              </div>
            </div>

            {/* Right- Form */}
            <div className="form-section">
              <div className="form-container">
                {/* Name Field */}
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    className="form-input"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email id"
                    className="form-input"
                    required
                  />
                </div>

                {/*Phone*/}
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <div className="phone-input-group">
                    <select className="country-code">
                      <option>+1</option>
                      <option>+91</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder=""
                      className="phone-input"
                    />
                  </div>
                </div>

                {/*Service*/}
                <div className="form-group">
                  <label className="form-label">Select Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>SEO Services</option>
                  </select>
                </div>

                {/*Msg*/}
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write Message"
                    rows="4"
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                {/* Submit btn*/}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="submit-button"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          {/* Email Card */}
          {/* <div className="info-card email-card">
            <div className="card-content">
              <div className="card-icon-wrapper">
                <img src="/target.png" alt="" />
              </div>
              <h3 className="card-title">Email Us At</h3>
              <p className="card-text">bidishabismillah13@gmail.com</p>
              <p className="card-text">bidishabismillah13@gmail.com</p>
            </div>
          </div> */}
          <SpecialSquare1
              header="Email Us At"
              content="bidishabismillah13@gmail.com"
              color="#EFD675"
              img="/mission-icon.svg"
            />
          {/* Phone Card */}
          {/* <div className="info-card phone-card">
            <div className="card-content">
              <div className="card-icon-wrapper">
                 <img src="/target.png" alt="" />
              </div>
              <h3 className="card-title">Call Us At</h3>
              <p className="card-text">+91 8900542982</p>
            </div>
          </div> */}
           <SpecialSquare1
              header="Call Us At"
              content="+91 8900542982"
              color="#EFD675"
              img="/mission-icon.svg"
            />

          {/* Location Card */}
          {/* <div className="info-card location-card">
            <div className="card-content">
              <div className="card-icon-wrapper">
                 <img src="/target.png" alt="" />
              </div>
              <h3 className="card-title">Locate Us At</h3>
              <p className="card-text">12A Greenfield Plaza, Salt Lake City,</p>
              <p className="card-text">Sector 5, Kolkata, West Bengal 700091</p>
            </div>
          </div> */}
           <SpecialSquare1
              header="Locate Us At"
              content="12A Greenfield Plaza, Salt Lake City,Sector 5, Kolkata, West Bengal 700091"
              color="#EFD675"
              img="/mission-icon.svg"
            />
        </div>
      </div>
    </div>
  );
}
