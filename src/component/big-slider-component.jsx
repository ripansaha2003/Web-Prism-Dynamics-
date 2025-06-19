// import "../css/big-slider-component.css"
// import Infobox1 from "./infobox1";
// import { useEffect, useRef, useState } from "react";
// import Infobox2 from "./infobox2";
// function BigSliderComponent({ content, boxSelection = 'infobox1' }) {
//   const [width, setWidth] = useState(window.innerWidth);

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [totalSlides, setTotalSlides] = useState(3);

//   useEffect(() => {

//     setTotalSlides(content.length);
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//   }, [content]);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
//   };

//   // Calculate which services to show (3 at a time in desktop view)
//   const getVisibleServices = () => {
//     const visibleServices = [];
//     for (let i = 0; i < 3; i++) {
//       const index = (currentSlide + i) % totalSlides;
//       visibleServices.push(content[index]);
//     }
//     return visibleServices;
//   };

//   return (
//     <div className="big-slider-component">
//       <div className="big-slider-component-container">
//         {boxSelection === 'infobox1' &&
//           <>
//             {getVisibleServices()?.map((service, index) => (
//               <Infobox1
//                 title={service?.title}
//                 content={service?.content}
//                 url={service?.image}
//                 key={index}
//                 color={service?.color} 
//                 extracss={service?.extracss || {}}
//                 buttonActive={service?.buttonActive}
//                 subText={service?.subText || ""}
//               />
//             ))}
//           </>
//         }
//         {
//           boxSelection === 'infobox2' &&
//           <>
//             {getVisibleServices()?.map((service, index) => (
//               <Infobox2 title={service?.title} content={service?.content} url={service?.image} key={index} date={service?.date} />
//             ))}
//           </>
//         }
//       </div>

//       {
//         content.length > 3 &&
//         <div className="slider-navigation">
//           <div className="slide-counter">
//             <span onClick={prevSlide}>
//               {(currentSlide + 1).toString().padStart(2, '0')}
//             </span>
//             /
//             <span onClick={nextSlide}>
//               {totalSlides.toString().padStart(2, '0')}
//             </span>
//           </div>
//           <div className="slider-progress">
//             <div
//               className="slider-progress-bar"
//               style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
//             ></div>
//           </div>
//           <div className="slider-controls">
//             <div className="slider-nav-line"></div>
//             <div className="slider-nav-diamond"></div>
//           </div>
//         </div>
//       }
//     </div>

//   );
// }

// export default BigSliderComponent;

// BigSliderComponent.jsx



// import "../css/big-slider-component.css";
// import Infobox1 from "./infobox1";
// import { useEffect, useState, useRef } from "react";
// import Infobox2 from "./infobox2";

// function BigSliderComponent({ content, boxSelection = 'infobox1' }) {
//   const [totalSlides, setTotalSlides] = useState(3);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     setTotalSlides(content.length);
//   }, [content]);

//   // Duplicate slides to create seamless loop
//   const duplicatedContent = [...content, ...content];

//   return (
//     <div className="big-slider-component">
//       <div className="big-slider-component-wrapper">
//         <div className="big-slider-component-container continuous" ref={containerRef}>
//           {duplicatedContent.map((service, index) => (
//             boxSelection === 'infobox1' ? (
//               <Infobox1
//                 title={service?.title}
//                 content={service?.content}
//                 url={service?.image}
//                 key={index}
//                 color={service?.color}
//                 extracss={service?.extracss || {}}
//                 buttonActive={service?.buttonActive}
//                 subText={service?.subText || ""}
//               />
//             ) : (
//               <Infobox2
//                 title={service?.title}
//                 content={service?.content}
//                 url={service?.image}
//                 key={index}
//                 date={service?.date}
//               />
//             )
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BigSliderComponent;


import "../css/big-slider-component.css";
import Infobox1 from "./infobox1";
import { useEffect, useState, useRef } from "react";
import Infobox2 from "./infobox2";

function BigSliderComponent({ content, boxSelection = 'infobox1' }) {
  const [totalSlides, setTotalSlides] = useState(3);
  const containerRef = useRef(null);

  useEffect(() => {
    setTotalSlides(content.length);
  }, [content]);

  // Duplicate slides to create seamless loop
  const duplicatedContent = [...content, ...content];

  return (
    <div className="big-slider-component">
      <div className="big-slider-component-wrapper">
        <div
          className={`big-slider-component-container ${
            boxSelection === 'infobox1' ? 'continuous' : ''
          }`}
          ref={containerRef}
        >
          {duplicatedContent.map((service, index) =>
            boxSelection === 'infobox1' ? (
              <Infobox1
                title={service?.title}
                content={service?.content}
                url={service?.image}
                key={index}
                color={service?.color}
                extracss={service?.extracss || {}}
                buttonActive={service?.buttonActive}
                subText={service?.subText || ""}
              />
            ) : (
              <Infobox2
                title={service?.title}
                content={service?.content}
                url={service?.image}
                key={index}
                date={service?.date}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default BigSliderComponent;
