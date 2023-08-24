import React, { useState } from 'react';

const Selector = () => {
  const [toggle, setToggle] = useState(false);

  function onButtonClick() {
    setToggle(!toggle);
  }

  console.log(toggle);

  return (
    <div>
      <label>label</label>
      <div>
        <button onClick={onButtonClick}>
          <span></span>
          <span>
            <svg />
          </span>
        </button>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Selector;
