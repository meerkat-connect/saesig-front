import React, { useState } from 'react';

const CommentInput = () => {
  const [inputText, setInputText] = useState('');
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form className="comment-input">
      {/* <span>새식이</span> */}
      <input value={inputText} onChange={handleChange} type="text" placeholder="username님에게 댓글을 남겨보세요." />
      <button className="mr-10">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.25 8C8.25 8.6904 7.69036 9.25 7 9.25C6.30964 9.25 5.75 8.6904 5.75 8C5.75 7.30965 6.30964 6.75 7 6.75C7.69036 6.75 8.25 7.30965 8.25 8Z"
            fill="#D9D9D9"
          />
          <path
            d="M13 9.25C13.6904 9.25 14.25 8.6904 14.25 8C14.25 7.30965 13.6904 6.75 13 6.75C12.3096 6.75 11.75 7.30965 11.75 8C11.75 8.6904 12.3096 9.25 13 9.25Z"
            fill="#D9D9D9"
          />
          <path
            d="M6.53514 12C6.89369 11.7926 7.34732 11.9231 7.63093 12.225C8.22431 12.8567 9.06651 13.25 10 13.25C10.9335 13.25 11.7757 12.8567 12.3691 12.225C12.6527 11.9231 13.1063 11.7926 13.4649 12C13.8234 12.2074 13.9501 12.671 13.6889 12.9925C12.8187 14.0638 11.4898 14.75 10 14.75C8.51021 14.75 7.18128 14.0638 6.3111 12.9925C6.04995 12.671 6.1766 12.2074 6.53514 12Z"
            fill="#D9D9D9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5Z"
            fill="#D9D9D9"
          />
        </svg>
      </button>
      {inputText !== '' && (
        <button>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#FF8031" />
            <path
              d="M22.2322 12.7687L11.0543 17.615C10.4223 17.8912 10.4376 18.8226 11.0696 19.0751L15.1356 20.709C15.3336 20.7879 15.4935 20.9537 15.5696 21.1589L17.1382 25.3658C17.3818 26.0288 18.288 26.0446 18.5545 25.3895L23.2373 13.8106C23.4885 13.1555 22.8566 12.5004 22.2322 12.7687Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      {inputText === '' && (
        <button disabled className="mr-16">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" fill="#D9D9D9" />
            <path
              d="M22.2322 12.7687L11.0543 17.615C10.4223 17.8912 10.4376 18.8226 11.0696 19.0751L15.1356 20.709C15.3336 20.7879 15.4935 20.9537 15.5696 21.1589L17.1382 25.3658C17.3818 26.0288 18.288 26.0446 18.5545 25.3895L23.2373 13.8106C23.4885 13.1555 22.8566 12.5004 22.2322 12.7687Z"
              fill="white"
            />
          </svg>
        </button>
      )}
    </form>
  );
};
export default CommentInput;
