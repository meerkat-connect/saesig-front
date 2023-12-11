import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

const SortSelector = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('최신순');
  const ref = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (evt) => {
      if (!ref.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [ref, isOpen]);

  return (
    <div ref={ref} className="diary__sort" onClick={() => handleInputClick()}>
      <input type="text" value={selectedOption} readOnly />
      {isOpen && options && (
        <div className="sort__options">
          {options.map((option, i) => (
            <div key={i} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortSelector;
