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
    <div className={`${isOpen && 'ss-input__label'} ss-input__dropdown`} ref={dropdownRef}>
      {label ? (
        <label className="ss-input__label --required mb-12">{label}</label>
      ) : (
        <label className="ss-input__label mb-12">&nbsp;</label>
      )}
      <input type="text" value={selectedOption} readOnly onClick={handleInputClick} {...rest} />
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
      {label && <label className={`${required && 'ss-input__label --required'} ss-input__label`}>{label}</label>}
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

export const AgeInput = ({ label, options, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);
  const required = rest.required || false;

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
    <div>
      {label && <label className={`${required && 'ss-input__label --required'} ss-input__label`}>{label}</label>}
      <div className="ss-input__with-dropdown mt-12" ref={dropdownRef}>
        <input className="ss-input" type="text" required />
        <div className={`${isOpen && '--open'}`} onClick={handleInputClick}>
          <input type="text" value={selectedOption} readOnly {...rest} />
          <div />
        </div>
        {isOpen && options && (
          <ul>
            {options.map((option, i) => (
              <li key={i} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
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
