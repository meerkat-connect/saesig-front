import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Slide = ({ images }) => {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <img src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
