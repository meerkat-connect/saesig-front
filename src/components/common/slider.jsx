import React, { useState, useRef } from 'react';

const Slider = ({ images, hasBadge, hasButton, hasIndicator }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextClick = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleIndicatorClick = (i) => {
    setCurrentSlide(i);
  };

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

      {hasBadge && (
        <div className="ss-slider__badge">
          {currentSlide + 1}/{images.length}
        </div>
      )}

      {hasButton && (
        <div className="ss-slider__button">
          <button onClick={handlePrevClick}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5" transform="rotate(-180 15 15)" fill="white" stroke="#585858" />

              <path
                d="M15.4143 9.70239C15.548 9.83604 15.6167 9.97403 15.6206 10.1163C15.6244 10.2586 15.5595 10.3966 15.4259 10.5303L11.5561 14.4L20.1119 14.4C20.2715 14.4 20.4114 14.4601 20.5316 14.5803C20.6518 14.7005 20.7119 14.8404 20.7119 15C20.7119 15.1596 20.6518 15.2995 20.5316 15.4197C20.4114 15.5399 20.2715 15.6 20.1119 15.6L11.5561 15.6L15.4259 19.451C15.5595 19.5846 15.6244 19.7257 15.6206 19.8743C15.6167 20.0228 15.548 20.1639 15.4143 20.2976C15.2807 20.4312 15.1427 20.498 15.0004 20.498C14.8581 20.498 14.7201 20.4312 14.5865 20.2976L9.80089 15.512C9.71821 15.437 9.65931 15.3555 9.62421 15.2675C9.58913 15.1796 9.57158 15.0904 9.57158 15C9.57158 14.9144 9.58913 14.8284 9.62421 14.7418C9.65931 14.6553 9.71821 14.5707 9.80089 14.488L14.5865 9.70239C14.7201 9.56875 14.8581 9.50192 15.0004 9.50192C15.1427 9.50192 15.2807 9.56875 15.4143 9.70239Z"
                fill="#585858"
              />
            </svg>
          </button>
          <button onClick={handleNextClick}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="14.5" fill="white" stroke="#585858" />

              <path
                d="M14.5857 20.2976C14.452 20.164 14.3833 20.026 14.3794 19.8837C14.3756 19.7414 14.4405 19.6034 14.5741 19.4697L18.4439 15.6H9.88807C9.72845 15.6 9.58855 15.5399 9.46837 15.4197C9.34818 15.2995 9.28809 15.1596 9.28809 15C9.28809 14.8404 9.34818 14.7005 9.46837 14.5803C9.58855 14.4601 9.72845 14.4 9.88807 14.4H18.4439L14.5741 10.549C14.4405 10.4154 14.3756 10.2743 14.3794 10.1257C14.3833 9.97718 14.452 9.83608 14.5857 9.70243C14.7193 9.56878 14.8573 9.50195 14.9996 9.50195C15.1419 9.50195 15.2799 9.56878 15.4135 9.70243L20.1991 14.488C20.2818 14.563 20.3407 14.6445 20.3758 14.7325C20.4109 14.8204 20.4284 14.9096 20.4284 15C20.4284 15.0856 20.4109 15.1716 20.3758 15.2582C20.3407 15.3447 20.2818 15.4293 20.1991 15.512L15.4135 20.2976C15.2799 20.4313 15.1419 20.4981 14.9996 20.4981C14.8573 20.4981 14.7193 20.4313 14.5857 20.2976Z"
                fill="#585858"
              />
            </svg>
          </button>
        </div>
      )}

      {hasIndicator && (
        <div className="ss-slider__indicator">
          {images.map((_, i) => (
            <div
              key={i}
              className={`${currentSlide === i ? '--active' : ''}`}
              onClick={() => handleIndicatorClick(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
