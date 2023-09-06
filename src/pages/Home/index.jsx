import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdoptionRecordList from '../../components/list/AdoptionRecordList';

const Home = () => {
  const navigate = useNavigate();
  const handleCardClick = (url) => navigate(`/${url}`);

  return (
    <div className="saesig-content-wrap content">
      <div className="saesig-title-con">
        <img className="saesig-title-icon" />
        <span className="saesig-title">🐶 퍼블리시 리스트</span>
      </div>
      <div className="saesig-content-con">
        <AdoptionRecordList title={'컴포넌트 모음'} onClick={() => handleCardClick('components')} />
        <AdoptionRecordList title={'로그인'} onClick={() => handleCardClick('login')} />
        <AdoptionRecordList title={'회원가입'} onClick={() => handleCardClick('join')} />
        <AdoptionRecordList title={'아이디 찾기'} onClick={() => handleCardClick('find-id')} />
        <AdoptionRecordList title={'비밀번호 찾기'} onClick={() => handleCardClick('find-password')} />
        <AdoptionRecordList title={'식구 등록'} onClick={() => handleCardClick('register')} />
        <AdoptionRecordList title={'입양기록'} onClick={() => handleCardClick('adoption_record')} />
      </div>
    </div>
  );
};

export default Home;
