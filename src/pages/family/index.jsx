import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/pages/_family.scss';

const Family = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="family-hero mt-60">
        <div className="family-hero__today-info mb-20">
          <span>10월 4일</span>
          <div>
            <img src="/src/assets/icons/1414/near_me.svg" alt="" />
            <button>서울시 강남구</button>
            <span>/ 맑음</span>
            <img src="/src/assets/icons/2020/weather_sun.svg" alt="날씨 맑음" />
          </div>
        </div>
        <div className="family-hero__title">
          <div>
            <h1 className="mr-10">가족을 기다리는</h1>
            <img src="/src/assets/icons/3030/smile.svg" alt="" />
          </div>
          <div className="ml-80">
            <img src="/src/assets/icons/3030/twinkle.svg" alt="" />
            <h1 className="ml-10">새로운 식구를</h1>
          </div>
          <div>
            <h1 className="mr-10">만나보세요</h1>
            <img src="/src/assets/icons/3030/wave.svg" alt="" />
          </div>
        </div>
      </div>

      {/* 게시물 없음 */}
      <div className="family-content--empty">
        <img src="/src/assets/pictograms/logo_pictogram.svg" alt="" />
        <p className="mt-20 mb-40">
          등록된 식구가 없습니다
          <br />
          새로운 식구를 저희에게 소개시켜주세요
        </p>
        <button className="ss-button ss-button--lg" onClick={() => navigate('/register')}>
          식구 등록하기
        </button>
      </div>
    </div>
  );
};

export default Family;
