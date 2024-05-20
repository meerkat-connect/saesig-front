import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const EventBanner = ({ data, onClickFn }) => {
  return (
    <section className="main-section event mb-65">
      <div className="main-inner">
        <div className="section-title-wrap mb-30">
          <h1 className="section-title">
            새식 <span>이벤트</span>
          </h1>
        </div>
      </div>

      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {data.map((event) => (
          <SwiperSlide
            key={event.id}
            style={{
              backgroundImage: `url(${import.meta.env.VITE_APP_BASE_URL}/image/${event.savedFileName})`,
            }}
            onClick={() => onClickFn(event.url)}
          />
        ))}
      </Swiper>
    </section>
  );
};

export default EventBanner;
