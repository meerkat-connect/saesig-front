import React, { useEffect, useRef } from 'react';
import '../../scss/pages/_landing.scss';

function Landing() {
  const outerWrapperRef = useRef(null);
  const innerWrapperRef = useRef(null);

  const fixRatioSize = () => {
    const body = document.body;
    const outerWrapper = outerWrapperRef.current;
    const windowWidth = window.innerWidth;
    const innerWrapper = innerWrapperRef.current;

    if (windowWidth <= 949) {
      outerWrapper.style.height = '';
      innerWrapper.style.transform = '';
      innerWrapper.style.transformOrigin = '';
    } else {
      const fullWidth = body.offsetWidth;
      const maxWidth = 1920;
      const scale = fullWidth / maxWidth;
      const innerHeight = innerWrapper.offsetHeight;

      innerWrapper.style.transform = `scale(${scale})`;
      innerWrapper.style.transformOrigin = 'top left';
      innerWrapper.style.width = `${maxWidth}px`;
      outerWrapper.style.height = `${innerHeight * scale}px`;
    }
  };

  useEffect(() => {
    document.body.classList.add('no-background');

    fixRatioSize();
    window.addEventListener('resize', fixRatioSize);

    return () => {
      window.removeEventListener('resize', fixRatioSize);
    };
  }, []);

  return (
    <div className="landing">
      <div ref={outerWrapperRef}>
        <div className="inner" ref={innerWrapperRef}></div>
      </div>
    </div>
  );
}

export default Landing;
