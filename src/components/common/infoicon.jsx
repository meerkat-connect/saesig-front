import React, { useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const InfoIcon = ({ show, onClick, onClickOutside, position, message }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div ref={ref} className={`info-icon ${show ? 'active' : ''}`} onClick={onClick}>
      <div className={`tooltip ${position}`}>{message}</div>
    </div>
  );
};

export default InfoIcon;
