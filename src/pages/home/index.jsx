import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/pages/_publish-progress.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleSplashTestClick = () => {
    localStorage.removeItem('splashDisplayed');
    window.location.reload();
  };

  return (
    <div className="publish">
      <h1 className="mt-60">퍼블리시 페이지 목록</h1>

      <h3>회원 관련</h3>
      <ul>
        <li
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인
        </li>
        <li
          onClick={() => {
            navigate('/join');
          }}
        >
          회원가입
        </li>
        <li
          onClick={() => {
            navigate('/find-id');
          }}
        >
          아이디 찾기
        </li>
        <li
          onClick={() => {
            navigate('/find-password');
          }}
        >
          비밀번호 찾기
        </li>
      </ul>

      <h3>새로운 식구</h3>
      <ul>
        <li
          onClick={() => {
            navigate('/register');
          }}
        >
          식구등록
        </li>
        <li
          onClick={() => {
            navigate('/family');
          }}
        >
          게시물 목록
        </li>
        <li
          onClick={() => {
            navigate('/family/0');
          }}
        >
          게시물 보기
        </li>
      </ul>

      <h3>기타 화면</h3>
      <ul>
        <li
          onClick={() => {
            navigate('/components');
          }}
        >
          컴포넌트 보기
        </li>
        <li onClick={handleSplashTestClick}>스플래시 테스트</li>
      </ul>
    </div>
  );
};

export default Home;
