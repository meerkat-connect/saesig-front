import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import '../../scss/pages/_home.scss';
import '../../scss/pages/_family.scss';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="ss-wrap ss-wrap__home">
      <section className="main-visual">
        <Swiper
          modules={[Pagination]}
          pagination={{type : 'fraction'}}
        >
          <SwiperSlide style={{backgroundColor: '#ff8f4e'}}>
              <div className="main-visual__text text-sm mb-10">두두둥탁!!</div>
              <div className="main-visual__text">드디어 새식일기를<br/>소개합니다!</div>
          </SwiperSlide>
          <SwiperSlide style={{backgroundColor: '#f6b34e'}}>
              <div className="main-visual__text text-sm mb-10">두두둥탁!!</div>
              <div className="main-visual__text">드디어 새식일기를<br/>소개합니다!</div>
          </SwiperSlide>  
        </Swiper>
      </section>

      <section className='main-section family mb-60'>
        <div className="main-inner">
          <div className="section-title-wrap mb-35">
              <h1 className="section-title">
                지금 많이보는 <span>아이들</span>
              </h1>
              <button type="button" className='ss-text-icon-button --gray' onClick={() => navigate('/family')}>
                <span>더보기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.007 3.09753C11.4555 3.09753 11.01 3.543 11.01 4.09455L11.0029 11.003L4.08744 11.003C3.53589 11.003 3.09042 11.4485 3.09042 12C3.09042 12.5515 3.53589 12.997 4.08744 12.997L11.0029 12.997L11.0029 19.9125C11.0029 20.4641 11.4484 20.9095 12 20.9095C12.5515 20.9095 12.997 20.4641 12.997 19.9125L12.997 12.997L19.9125 12.997C20.464 12.997 20.9095 12.5515 20.9095 12C20.9095 11.4485 20.464 11.003 19.9125 11.003L12.997 11.003L12.997 4.08748C12.997 3.55008 12.5444 3.09753 12.007 3.09753Z" fill="#acacac"/>
                </svg>
              </button>
          </div>
        </div>

        <Swiper
            slidesPerView={2}
            spaceBetween={20}
          >
            <SwiperSlide>
              <div className="family-content__card">
                <div style={{backgroundImage: `url('/src/assets/images/samples/sample8.jpg')`}}></div>
                <footer onClick={() => navigate('/family/1')}>
                  <div>
                    <div>
                      <span>분양중</span>
                      <span>경기도 구리시 갈매동</span>
                    </div>
                  </div>
                  <div>
                    <p>
                      5개월 귀욤이 말티즈
                      <br />
                      분양 합니다.
                    </p>
                  </div>
                </footer>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="family-content__card">
              <div style={{backgroundImage: `url('/src/assets/images/samples/sample2.jpg')`}}></div>
                <footer onClick={() => navigate('/family/1')}>
                  <div>
                    <div>
                      <span>분양중</span>
                      <span>서울특별시 금천구</span>
                    </div>
                  </div>
                  <div>
                    <p>
                      2살 여아 요크셔테리어
                      <br />
                      무료분양 합니다.
                    </p>
                  </div>
                </footer>
              </div>
            </SwiperSlide>  
            <SwiperSlide>
              <div className="family-content__card">
              <div style={{backgroundImage: `url('/src/assets/images/samples/sample3.jpg')`}}></div>
                <footer onClick={() => navigate('/family/1')}>
                  <div>
                    <div>
                      <span>분양중</span>
                      <span>경기도 안산시</span>
                    </div>
                  </div>
                  <div>
                    <p>
                      웰시코기 6개월 남아
                      <br />
                      분양 합니다.
                    </p>
                  </div>
                </footer>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="family-content__card">
                <div style={{backgroundImage: `url('/src/assets/images/samples/sample1.webp')`}}></div>
                <footer onClick={() => navigate('/family/1')}>
                  <div>
                    <div>
                      <span>분양중</span>
                      <span>경기도 구리시 갈매동</span>
                    </div>
                  </div>
                  <div>
                    <p>
                      1살 남아 골든리트리버
                      <br />
                      분양 합니다.
                    </p>
                  </div>
                </footer>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="family-content__card">
              <div style={{backgroundImage: `url('/src/assets/images/samples/sample2.jpg')`}}></div>
                <footer onClick={() => navigate('/family/1')}>
                  <div>
                    <div>
                      <span>분양중</span>
                      <span>서울특별시 금천구</span>
                    </div>
                  </div>
                  <div>
                    <p>
                      2살 여아 요크셔테리어
                      <br />
                      무료분양 합니다.
                    </p>
                  </div>
                </footer>
              </div>
            </SwiperSlide>  
            <SwiperSlide>
              <div className="family-content__card">
              <div style={{backgroundImage: `url('/src/assets/images/samples/sample3.jpg')`}}></div>
                <footer onClick={() => navigate('/family/1')}>
                  <div>
                    <div>
                      <span>분양중</span>
                      <span>경기도 안산시</span>
                    </div>
                  </div>
                  <div>
                    <p>
                      웰시코기 6개월 남아
                      <br />
                      분양 합니다.
                    </p>
                  </div>
                </footer>
              </div>
            </SwiperSlide>
          </Swiper>
      </section>

      <section className='main-section event mb-65'>
        <div className="main-inner">
          <div className="section-title-wrap mb-30">
              <h1 className="section-title">
                새식 <span>이벤트</span>
              </h1>
          </div>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{clickable : true}}
        >
          <SwiperSlide style={{backgroundColor: '#f6b34e'}}>
            </SwiperSlide>
          <SwiperSlide style={{backgroundColor: '#ff8f4e'}}>
            </SwiperSlide>  
            <SwiperSlide style={{backgroundColor: '#f6b34e'}}>
            </SwiperSlide>
          <SwiperSlide style={{backgroundColor: '#ff8f4e'}}>
            </SwiperSlide>  
        </Swiper>
      </section>

      <section className='main-section diary mb-60'>
        <div className="main-inner">
          <div className="section-title-wrap mb-35">
              <h1 className="section-title">
                오늘의 베스트<span>일기</span>
              </h1>
              <button type="button" className='ss-text-icon-button --gray' onClick={() => navigate('/diary')}>
                <span>더보기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.007 3.09753C11.4555 3.09753 11.01 3.543 11.01 4.09455L11.0029 11.003L4.08744 11.003C3.53589 11.003 3.09042 11.4485 3.09042 12C3.09042 12.5515 3.53589 12.997 4.08744 12.997L11.0029 12.997L11.0029 19.9125C11.0029 20.4641 11.4484 20.9095 12 20.9095C12.5515 20.9095 12.997 20.4641 12.997 19.9125L12.997 12.997L19.9125 12.997C20.464 12.997 20.9095 12.5515 20.9095 12C20.9095 11.4485 20.464 11.003 19.9125 11.003L12.997 11.003L12.997 4.08748C12.997 3.55008 12.5444 3.09753 12.007 3.09753Z" fill="#acacac"/>
                </svg>
              </button>
          </div>
        </div>

        <Swiper
            slidesPerView={2}
            spaceBetween={20}
          >
          <SwiperSlide>
            <div className="gallery__item">
              <div className='gallery__thumbnail' style={{backgroundImage: `url('/src/assets/images/samples/sample5.jpg')`}}></div>
              <div className='gallery__info'>
                <span>2023.05.20</span>
                <span>by 새식이</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery__item">
              <div className='gallery__thumbnail' style={{backgroundImage: `url('/src/assets/images/samples/sample6.jpg')`}}></div>
              <div className='gallery__info'>
                <span>2023.05.20</span>
                <span>by 새식이</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery__item">
              <div className='gallery__thumbnail' style={{backgroundImage: `url('/src/assets/images/samples/sample7.webp')`}}></div>
              <div className='gallery__info'>
                <span>2023.05.20</span>
                <span>by 새식이</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </section>

      <section className='main-section community mb-60'>
        <div className="main-inner">
          <div className="section-title-wrap mb-35">
              <h1 className="section-title">
                이달의 새식 <span>이야기</span>
              </h1>
              <button type="button" className='ss-text-icon-button --gray' onClick={() => navigate('/diary')}>
                <span>더보기</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.007 3.09753C11.4555 3.09753 11.01 3.543 11.01 4.09455L11.0029 11.003L4.08744 11.003C3.53589 11.003 3.09042 11.4485 3.09042 12C3.09042 12.5515 3.53589 12.997 4.08744 12.997L11.0029 12.997L11.0029 19.9125C11.0029 20.4641 11.4484 20.9095 12 20.9095C12.5515 20.9095 12.997 20.4641 12.997 19.9125L12.997 12.997L19.9125 12.997C20.464 12.997 20.9095 12.5515 20.9095 12C20.9095 11.4485 20.464 11.003 19.9125 11.003L12.997 11.003L12.997 4.08748C12.997 3.55008 12.5444 3.09753 12.007 3.09753Z" fill="#acacac"/>
                </svg>
              </button>
          </div>

          <div className="community__item__group">
            <div className="community__item">
              <div className="community__thumbnail" style={{backgroundImage: `url('/src/assets/images/samples/sample1.webp')`}}></div>
              <div className="community__info">
                <span>강아지 양치질 가이드</span>
                <span>2023.09.15</span>
              </div>
            </div>
            <div className="community__item">
              <div className="community__thumbnail" style={{backgroundImage: `url('/src/assets/images/samples/sample2.jpg')`}}></div>
              <div className="community__info">
                <span>반려동물이 처음이라면 알아야 할 상식</span>
                <span>2023.09.15</span>
              </div>
            </div>
            <div className="community__item">
              <div className="community__thumbnail" style={{backgroundImage: `url('/src/assets/images/samples/sample3.jpg')`}}></div>
              <div className="community__info">
                <span>입양 전 꼭 생각해야 할 체크리스트!</span>
                <span>2023.09.15</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-section info">
        <div className="main-inner">
          <div className="section-title-wrap mb-35">
            <h1 className="section-title">
              새식<span>정보</span>
            </h1>
          </div>
        

          <div className="info__item__group ss-grid cols-repeat-3 rows-repeat-1 gap-10">
            <div className="info__item">
              <span>FAQ</span>
            </div>
            <div className="info__item">
              <span>문의하기</span>
            </div>
            <div className="info__item">
              <span>새식소식</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
