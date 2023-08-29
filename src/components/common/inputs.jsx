import React, { useState, useRef, useEffect } from 'react';

export const Dropdown = ({ label, options, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen && 'ss-input__dropdown--active'} ss-input__dropdown`} ref={dropdownRef}>
      <input type="text" value={selectedOption} readOnly onClick={handleInputClick} {...rest} />
      {label && <label>{label}</label>}
      {isOpen && options && (
        <div className="ss-input__options">
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

export const PriceInput = ({ label, ...rest }) => {
  const required = rest.required || false;
  return (
    <div className="relative">
      {label && <label className={`${required && 'ss-input__label--required'} ss-input__label`}>{label}</label>}
      <div className="relative">
        <input className="ss-input mt-12" type="text" {...rest} />
        <span className="ss-input__price">원</span>
      </div>
      <div className="free-adoption">
        <input className="ss-input" type="checkbox" id="freeAdoption" />
        <label htmlFor="freeAdoption">무료 분양</label>
      </div>
    </div>
  );
};

export const TextInput = ({ label, ...rest }) => {
  const required = rest.required || false;
  return (
    <div>
      {label && <label className={`${required && 'ss-input__label--required'} ss-input__label`}>{label}</label>}
      <input className="ss-input mt-12" type="text" {...rest} />
    </div>
  );
};

export const AgeInput = ({ label, options, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen && 'ss-input__dropdown--active'} ss-input__dropdown relative`} ref={dropdownRef}>
      <input
        className="ss-input__dropdown--age"
        type="text"
        value={selectedOption}
        readOnly
        onClick={handleInputClick}
        {...rest}
      />
      <input type="text" />
      {label && <label>{label}</label>}
      {isOpen && options && (
        <div className="ss-input__options">
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
