import "./TestmonialSection.css";
import  { useState, useEffect, useRef } from 'react';

const TestmonialSection = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const slides = Array.from({ length: 10 }, (_, index) => `150x150 ${index + 1}`);
  const slidesCount = slides.length - slidesPerPage;
  const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;

  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth  < 650) {
              setSlidesPerPage(1);
          } else if (window.innerWidth  < 901) {
              setSlidesPerPage(2);
          } else if (window.innerWidth  < 1101) {
              setSlidesPerPage(3);
          } else {
              setSlidesPerPage(4);
          }
      };

      handleResize(); // Initial call
      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [slidesPerPage]);

  useEffect(() => {
      if (sliderRef.current) {
          sliderRef.current.style.marginLeft = `${-currentPosition * (100 / slidesPerPage)}%`;
      }
  }, [currentPosition, slidesPerPage]);

  const slideLeft = () => {
      if (currentPosition < slidesCount) {
          setCurrentPosition(currentPosition + 1);
      }
  };

  const slideRight = () => {
      if (currentPosition > 0) {
          setCurrentPosition(currentPosition - 1);
      }
  };

  return (
      <div id="container" ref={containerRef}>
          <div id="slider-container">
              <span
                  onClick={slideRight}
                  className={`btn ${currentPosition === 0 ? 'inactive' : ''}`}
              />
              <div id="slider" ref={sliderRef}>
                  {slides.map((slide, index) => (
                      <div key={index} className="slide">
                          <span>{slide}</span>
                      </div>
                  ))}
              </div>
              <span
                  onClick={slideLeft}
                  className={`btn ${currentPosition === slidesCount ? 'inactive' : ''}`}
              />
          </div>
      </div>
  );
};
export default TestmonialSection
