import React, { useState } from 'react';
import { SliderData } from './sliderData';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { theme } from "@chakra-ui/react";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      <FaAngleLeft className='left-arrow' onClick={prevSlide} color="#e61755"/>
      <FaAngleRight className='right-arrow' onClick={nextSlide} color="#e61755"/>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;