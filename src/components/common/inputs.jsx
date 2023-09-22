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
    <div className={`ss-dropdown ${isOpen && '--active'}`} ref={dropdownRef}>
      <input type="text" value={selectedOption} readOnly onClick={handleInputClick} {...rest} />
      {isOpen && options && (
        <div className="ss-dropdown__options">
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

export const PriceInput = ({ ...rest }) => {
  return (
    <div className="relative">
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
      {label && <label className={`${required && 'ss-input__label --required'} ss-input__label`}>{label}</label>}
      <input className="ss-input mt-12" type="text" {...rest} />
    </div>
  );
};

export const AgeInput = ({ label, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const dropdownRef = useRef(null);
  const options = ['개월', '년', '모르겠어요'];

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
    if (option !== '모르겠어요') {
      setSelectedOption(option);
    } else {
      setSelectedOption('');
    }
    setIsOpen(false);

    if (option === '모르겠어요') {
      setInputValue('모르겠어요');
    } else {
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`ss-age-input ${isOpen && '--active'}`} ref={dropdownRef}>
        <input
          className="ss-input"
          type="text"
          onChange={handleInputChange}
          value={inputValue}
          disabled={selectedOption === ''}
          required
        />
        <div onClick={handleInputClick}>
          <input type="text" value={selectedOption} placeholder="선택" readOnly {...rest} />
        </div>
        {isOpen && options && (
          <div className="ss-age-input__options">
            {options.map((option, i) => (
              <div key={i} onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const TextArea = ({ label, ...rest }) => {
  const required = rest.required || false;

  return (
    <div className="ss-input__textarea">
      {label && <label className={`${required && 'ss-input__label --required'} ss-input__label`}>{label}</label>}
      <textarea className="mt-12" cols="30" rows="10" placeholder="내용을 입력해주세요" required></textarea>
      <div className="pt-10">0/1,000자</div>
    </div>
  );
};
