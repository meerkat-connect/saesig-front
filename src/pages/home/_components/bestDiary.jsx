import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

const BestDiary = ({ data }) => {
  const navigate = useNavigate();

  return (
    <section className="main-section diary mb-60">
      <div className="main-inner">
        <div className="section-title-wrap mb-35">
          <h1 className="section-title">
            오늘의 베스트<span>일기</span>
          </h1>
          <button
            type="button"
            className="ss-text-icon-button --gray"
            onClick={() => navigate('/diary')}>
            <span>더보기</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.007 3.09753C11.4555 3.09753 11.01 3.543 11.01 4.09455L11.0029 11.003L4.08744 11.003C3.53589 11.003 3.09042 11.4485 3.09042 12C3.09042 12.5515 3.53589 12.997 4.08744 12.997L11.0029 12.997L11.0029 19.9125C11.0029 20.4641 11.4484 20.9095 12 20.9095C12.5515 20.9095 12.997 20.4641 12.997 19.9125L12.997 12.997L19.9125 12.997C20.464 12.997 20.9095 12.5515 20.9095 12C20.9095 11.4485 20.464 11.003 19.9125 11.003L12.997 11.003L12.997 4.08748C12.997 3.55008 12.5444 3.09753 12.007 3.09753Z"
                fill="#acacac"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper slidesPerView={2} spaceBetween={20}>
        {data.map((diary) => (
          <SwiperSlide key={diary.id}>
            <div className="gallery__item">
              <div
                className="gallery__thumbnail"
                style={{
                  backgroundImage: `url(${diary.image})`,
                }}></div>
              <div className="gallery__info">
                <span>{diary.createdAt}</span>
                <span>by {diary.nickname}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestDiary;
