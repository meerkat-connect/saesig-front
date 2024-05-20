import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const MainBanner = ({ data, onClickFn }) => {
  return (
    <section className="main-visual">
      <Swiper modules={[Pagination]} pagination={{ type: 'fraction' }}>
        {data?.length > 0 ? (
          data.map((banner) => (
            <SwiperSlide
              key={banner.id}
              style={{
                backgroundImage: `url(${import.meta.env.VITE_APP_BASE_URL}/image/${banner.savedFileName})`,
              }}
              onClick={() => onClickFn(banner.url)}
            />
          ))
        ) : (
          <SwiperSlide
            style={{
              backgroundImage: 'url(/src/assets/images/samples/main_banner1.png)',
              cursor: 'default',
            }}
          />
        )}
      </Swiper>
    </section>
  );
};

export default MainBanner;
