import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const MainBanner = ({ data, onClickFn }) => {
  return (
    <section className="main-visual">
      {data && (
        <Swiper modules={[Pagination]} pagination={{ type: 'fraction' }}>
          {data.map((banner) => (
            <SwiperSlide
              key={banner.id}
              style={{ backgroundImage: `url(${banner.image})` }}
              onClick={() => onClickFn(banner.url)}
            />
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default MainBanner;
