import React from 'react';
import '../../scss/pages/_chats.scss';
import { useNavigate } from 'react-router-dom';

const Chats = () => {
  const navigate = useNavigate();

  return (
    <div className="chat__page">
      {/* <div className="nodata">
        <img src="/src/assets/pictograms/logo_pictogram.svg" alt="" />
        <p className="mt-20 mb-40">
          진행중인 채팅이 없습니다. <br />
          새로운 식구들을 만나볼 준비가 되었다면 지금 만나보세요 :D
        </p>
        <button className="ss-button --lg" onClick={() => navigate('/family')}>
          새로운 식구 만나러 가기
        </button>
      </div> */}
      <div className="chat-header">
        <h1>대화중인 식구</h1>
        <span>3</span>
      </div>

      <div className="chat-list">
        <div className="chat-item">
          <div className="item-avatar">
            <div className="image-container">
              <img src="/src/assets/images/samples/sample6.jpg" alt="" />
            </div>
            <div className="item-badge" />
          </div>
          <div className="item-content">
            <div>
              <h6>찐빵이</h6>
              <span>· 보더콜리 / 여아 / 5개월</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M10.0662 8.13425L11.5252 9.59321V10.4599H8.43292V13.9265L7.9996 14.3598L7.56628 13.9265V10.4599H4.474V9.59321L5.93295 8.13425V3.59321H5.13295V2.72656H10.8663V3.59321H10.0662V8.13425Z"
                    fill="#FF8031"
                  />
                </g>
              </svg>
            </div>
            <div className="item-text">지금 분양 가능할까요??</div>
          </div>
          <div className="item-menu">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>
            <div>오후 03:20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
