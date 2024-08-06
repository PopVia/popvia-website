import React, { useState, useEffect } from 'react';

// Import your images
const slideImages = [
  {
    source: '/assets/1.png',
    alt: 'Gray Image'
  },
  {
    source: '/assets/2.png',
    alt: 'Red Image'
  },
  {
    source: '/assets/3.png',
    alt: 'Green Image'
  },
];

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 30000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="slider">
      <button className="slider__button slider__button--prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="slider__wrapper">
        {slideImages.map((slide, index) => (
          <img
            key={index}
            src={slide.source}
            alt={slide.alt}
            className={`slider__image ${index === currentSlide ? 'slider__image--active' : ''}`}
          />
        ))}
      </div>
      <button className="slider__button slider__button--next" onClick={nextSlide}>
        &gt;
      </button>
      <div className="slider__dots">
        {slideImages.map((_, index) => (
          <span
            key={index}
            className={`slider__dot ${index === currentSlide ? 'slider__dot--active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
