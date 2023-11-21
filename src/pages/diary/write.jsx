import React from 'react';
import '../../scss/pages/_write.scss';

const Write = () => {
  return (
    <div className="write">
      <section className="write__header">
        <h1>오늘의 일기</h1>
        <span>오늘 하루 여러분의 이야기를 기록해주세요</span>
      </section>
      <section className="write__body"></section>
    </div>
  );
};

export default Write;
