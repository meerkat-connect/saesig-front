import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdoptionRecordList from '@/components/Lists/AdoptionRecordList';

const Home = () => {
  const navigate = useNavigate();
  const handleCardClick = (url) => navigate(`/${url}`);

  return (
    <div className="saesig-content-wrap">
      <div className="saesig-title-con">
        <img className="saesig-title-icon" />
        <span className="saesig-title">🐶 퍼블리시 리스트</span>
      </div>
      <div className="saesig-content-con">
        <AdoptionRecordList title={'컴포넌트 모음'} onClick={() => handleCardClick('components')} />
        <AdoptionRecordList title={'로그인'} onClick={() => handleCardClick('login')} />
        <AdoptionRecordList title={'회원가입'} onClick={() => handleCardClick('sign-up')} />
        <AdoptionRecordList title={'입양기록'} onClick={() => handleCardClick('adoption_record')} />
      </div>
    </div>
  );
};

export default Home;
