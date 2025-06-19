import { useEffect, useState } from "react";
import SpecialSquare2 from "./SpecialSquare2";
import "../css/our-testimonial.css";

function OurTestimonial() {
  const testimonials = [
    {
      title: "joseph morgan",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.",
      color: "#DBEF75",
      star: 5,
      image: "/joseph.png"
    },
    {
      title: "joseph morgan",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.",
      color: "#74B2FF",
      star: 4,
      image: "/joseph.png"
    }, 
    {
      title: "joseph morgan",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.",
      color: "#FF9ECC",
      star: 3,
      image: "/joseph.png"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(3);

  useEffect(() => {

    setTotalSlides(testimonials.length);
  }, [testimonials]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // Calculate which services to show (3 at a time in desktop view)
  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentSlide + i) % totalSlides;
      visibleServices.push(testimonials[index]);
    }
    return visibleServices;
  };
  return (
    <div className="our-testimonial-container">
      <div className="our-testimonial-slider">
        {
          getVisibleServices().map((item, index) => {
            return (
              <SpecialSquare2 key={index} color={item.color} title={item.title} content={item.content} star={item.star} image={item.image} />
            );
          })
        }
      </div>
      <div className="slider-navigation">
        <div className="slide-counter">
          <span onClick={prevSlide}>
            {(currentSlide + 1).toString().padStart(2, '0')}
          </span>
          /
          <span onClick={nextSlide}>
            {totalSlides.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="slider-progress">
          <div
            className="slider-progress-bar"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          ></div>
        </div>
        <div className="slider-controls">
          <div className="slider-nav-line"></div>
          <div className="slider-nav-diamond"></div>
        </div>
      </div>
    </div>
  );
}

export default OurTestimonial;