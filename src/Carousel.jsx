import React from 'react';
import { items } from './utils/starter';
import './styles/Carousel.css';

const Carousel = ({ activeInd }) => {
  const images = items.map((item) => {
    return (
      <img
        src={item.imgSrc}
        alt={item.name}
        key={item.ind}
        className="Carousel__item"
      />
    );
  });

  return (
    <div className="Carousel">
      <div
        className="Carousel__inner"
        // style={{ translateY: `-${activeInd * 100}%` }}
        style={{ transform: `translateY(${activeInd * 100}%)` }}
      >
        {images}
      </div>
    </div>
  );
};

export default Carousel;
