import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

const Tooltip = ({ position, children }) => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleOutsideClick = (evt) => {
      if (!menuRef.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [menuRef, isOpen]);

  return (
    <div ref={menuRef} className="ss-tooltip" onClick={() => toggle()}>
      {isOpen ? (
        <img src="src/assets/icons/1414/info_active.svg" alt="" />
      ) : (
        <img src="src/assets/icons/1414/info_inactive.svg" alt="" />
      )}
      {isOpen && (
        <div
          className={clsx(
            'bubble',
            position === 1 && '--bottom-left',
            position === 2 && '--bottom-right',
            position === 3 && '--top-right',
            position === 4 && '--top-left'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
