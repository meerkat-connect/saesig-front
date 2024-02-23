import React, { useState, useRef, useEffect } from 'react';

export const Dropdown = ({ options, targetId = null, targetName = null, targetValue=null,placeholder,...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedName, setSelectedName] = useState('');
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
    const optionValue = targetValue !== null ? option[targetValue] : option.id;
    const optionName = targetName !== null ? option[targetName] : option.name
    setSelectedValue(optionValue);
    setSelectedName(optionName);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`ss-dropdown ${isOpen && '--active'}`} ref={dropdownRef}>
      <input type="text" value={selectedName} readOnly placeholder={placeholder} onClick={handleInputClick} />
      <input type="hidden" value={selectedValue} {...rest} />
      {isOpen && options && (
        <div className="ss-dropdown__options">
          {options.map((option) => (
            <div key={targetId !== null ? option[targetId] : option.id} onClick={() => handleOptionClick(option)}>
              {targetName !== null ? option[targetName] : option.name}
            </div>
          ))}
        </div>
      )}
    </div>
);
};

export const AgeInput = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [calcValue, setCalcValue] = useState('');
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
    if (selectedOption == '년'){
      setCalcValue(e.target.value * 12)
    }else if (selectedOption == '개월'){
      setCalcValue(e.target.value)
    }else{
      setCalcValue('')
    }

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
          placeholder="나이 입력"
          id="ageInput"
        />
        <input type="hidden" value={calcValue} readOnly {...rest}/>
        <div onClick={handleInputClick}>
          <input type="text" value={selectedOption} placeholder="선택" readOnly id="ageUnit" />
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
