import React, { useState, useRef } from 'react';

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleDragStart = (e) => {
    e.preventDefault();
    const startX = e.pageX || e.touches[0].pageX;
    let offsetX = 0;

    const handleDragMove = (moveEvent) => {
      const x = moveEvent.pageX || moveEvent.touches[0].pageX;
      offsetX = x - startX;

      const movePercentage = (offsetX / sliderRef.current.offsetWidth) * 100;

      if (movePercentage > 10 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (movePercentage < -10 && currentSlide < images.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    };

    const handleDragEnd = () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDragMove);
      document.removeEventListener('touchend', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDragMove, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
  };

  return (
    <div className="ss-slider" ref={sliderRef} onMouseDown={handleDragStart} onTouchStart={handleDragStart}>
      <div className="ss-slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="ss-slider__slide">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="ss-slider__badge">
        {currentSlide + 1}/{images.length}
      </div>
    </div>
  );
};

export default Slider;
