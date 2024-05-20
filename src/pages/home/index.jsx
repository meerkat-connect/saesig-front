import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MainBanner from './_components/mainBanner';
import HotAdoptList from './_components/hotAdoptList';
import EventBanner from './_components/eventBanner';
import BestDiary from './_components/bestDiary';
import { getDiaries } from '../../api/diary/diary';
import { BANNER_LOCATION, getBanners } from '@/api/banner/banner';
import { getAdoptList } from '@/api/family/family';
import '@/scss/pages/_home.scss';
import '@/scss/pages/_family.scss';

const Home = () => {
  const navigate = useNavigate();

  const bannerQuery = useQuery({
    queryKey: ['banner', BANNER_LOCATION.MAIN],
    queryFn: () => getBanners(BANNER_LOCATION.MAIN),
  });
  const eventBannerQuery = useQuery({
    queryKey: ['banner', BANNER_LOCATION.EVENT],
    queryFn: () => getBanners(BANNER_LOCATION.EVENT),
  });
  const familyQuery = useQuery({ queryKey: ['family'], queryFn: getAdoptList });
  const diaryQuery = useQuery({ queryKey: ['diary'], queryFn: getDiaries });

  if (bannerQuery.isLoading || familyQuery.isLoading || diaryQuery.isLoading) {
    return 'Loading...';
  }

  const handleBannerClick = (url) => {
    if (url.startsWith(import.meta.env.VITE_APP_BASE_URL)) {
      let path = url.replace(import.meta.env.VITE_APP_BASE_URL, '');
      if (!path.startsWith('/')) path = '/' + path;
      navigate(path);
    } else {
      window.location.href = url;
    }
  };

  return (
    <div className="ss-wrap ss-wrap__home">
      <MainBanner data={bannerQuery.data} onClickFn={handleBannerClick} />

      {familyQuery.data && <HotAdoptList data={familyQuery.data} />}

      {eventBannerQuery.data?.length > 0 && (
        <EventBanner data={eventBannerQuery.data} onClickFn={handleBannerClick} />
      )}

      {diaryQuery.data && <BestDiary data={diaryQuery.data} />}

      <section className="main-section community mb-60">
        <div className="main-inner">
          <div className="section-title-wrap mb-35">
            <h1 className="section-title">
              이달의 새식 <span>이야기</span>
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

          <div className="community__item__group">
            <div className="community__item">
              <div
                className="community__thumbnail"
                style={{
                  backgroundImage: `url('/src/assets/images/samples/sample1.webp')`,
                }}></div>
              <div className="community__info">
                <span>강아지 양치질 가이드</span>
                <span>2023.09.15</span>
              </div>
            </div>
            <div className="community__item">
              <div
                className="community__thumbnail"
                style={{
                  backgroundImage: `url('/src/assets/images/samples/sample2.jpg')`,
                }}></div>
              <div className="community__info">
                <span>반려동물이 처음이라면 알아야 할 상식</span>
                <span>2023.09.15</span>
              </div>
            </div>
            <div className="community__item">
              <div
                className="community__thumbnail"
                style={{
                  backgroundImage: `url('/src/assets/images/samples/sample3.jpg')`,
                }}></div>
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
