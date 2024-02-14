import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/pages/_family.scss';
import FlyoutMenu from '../../components/common/flyout';
import Slider from '../../components/common/slider';
import * as FamilyApi from '../../api/family/family.js'

const Family = () => {
  const [listData, setlistData] = useState([]);
  const images = [
    '/src/assets/images/samples/sample1.webp',
    '/src/assets/images/samples/sample2.jpg',
    '/src/assets/images/samples/sample3.jpg',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await FamilyApi.getAdoptList();
        console.log(result.data)
        setlistData(result.data);
        console.log('Updated listData:', listData);
      } catch (error) {
        alert('Error fetching data:', error);
      }
    };

    fetchData(); // fetchData 함수를 호출하여 데이터를 가져옵니다.
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="ss-wrap">
        <div className="family-hero mt-60">
          <div className="family-hero__today-info mb-20">
            <span>10월 4일</span>
            <div>
              <img src="/src/assets/icons/1414/near_me.svg" alt="" />
              <button>서울시 강남구</button>
              <span>/ 맑음</span>
              <img src="/src/assets/icons/2020/weather_sun.svg" alt="날씨 맑음" />
            </div>
          </div>
          <div className="family-hero__title">
            <div>
              <h1 className="mr-10">가족을 기다리는</h1>
              <img src="/src/assets/icons/3030/smile.svg" alt="" />
            </div>
            <div className="ml-80">
              <img src="/src/assets/icons/3030/twinkle.svg" alt="" />
              <h1 className="ml-10">새로운 식구를</h1>
            </div>
            <div>
              <h1 className="mr-10">만나보세요</h1>
              <img src="/src/assets/icons/3030/wave.svg" alt="" />
            </div>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <section className="family-content__filter mt-20">
          <div>
            <button className="ss-icon-button --primary">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.65 1.23071C0.40148 1.23071 0.2 1.43735 0.2 1.69225C0.2 1.94715 0.40148 2.15378 0.65 2.15378L2.2121 2.15378C2.40794 2.86413 3.04472 3.38462 3.8 3.38462C4.55528 3.38462 5.19206 2.86413 5.3879 2.15378L10.55 2.15378C10.7985 2.15378 11 1.94715 11 1.69225C11 1.43735 10.7985 1.23071 10.55 1.23071L5.3879 1.23071C5.192 0.52043 4.55528 -2.81708e-07 3.8 -3.14722e-07C3.04478 -3.47734e-07 2.40806 0.52043 2.21216 1.23071L0.65 1.23071ZM4.55 1.69231C4.55 1.26747 4.21424 0.923077 3.8 0.923077C3.38582 0.923077 3.05 1.26747 3.05 1.69231C3.05 2.11714 3.38582 2.46154 3.8 2.46154C4.21424 2.46154 4.55 2.11714 4.55 1.69231Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.649999 9.84609C0.401479 9.84609 0.199999 10.0527 0.199999 10.3076C0.199999 10.5625 0.401479 10.7692 0.649999 10.7692L2.2121 10.7692C2.40794 11.4795 3.04472 12 3.8 12C4.55528 12 5.19206 11.4795 5.3879 10.7692L10.55 10.7692C10.7985 10.7692 11 10.5625 11 10.3076C11 10.0527 10.7985 9.84609 10.55 9.84609L5.3879 9.84609C5.192 9.13582 4.55528 8.61538 3.8 8.61538C3.04478 8.61538 2.40806 9.13582 2.21216 9.84609L0.649999 9.84609ZM4.55 10.3077C4.55 9.88283 4.21424 9.53846 3.8 9.53846C3.38582 9.53846 3.05 9.88283 3.05 10.3077C3.05 10.7326 3.38582 11.0769 3.8 11.0769C4.21424 11.0769 4.55 10.7326 4.55 10.3077Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 5.99994C11 5.74505 10.7985 5.5384 10.55 5.5384L8.98788 5.5384C8.79199 4.82812 8.15526 4.30769 7.40001 4.30769C6.64478 4.30769 6.00806 4.82812 5.81216 5.5384L0.649999 5.5384C0.401479 5.5384 0.2 5.74505 0.2 5.99994C0.2 6.25483 0.401479 6.46148 0.649999 6.46148L5.8121 6.46148C6.00794 7.17182 6.64472 7.69231 7.40001 7.69231C8.1553 7.69231 8.79206 7.17182 8.98792 6.46148L10.55 6.46148C10.7985 6.46148 11 6.25483 11 5.99994ZM8.15001 6C8.15001 5.57514 7.81422 5.23077 7.40001 5.23077C6.9858 5.23077 6.65 5.57514 6.65 6C6.65 6.42486 6.9858 6.76923 7.40001 6.76923C7.81422 6.76923 8.15001 6.42486 8.15001 6Z"
                  fill="currentColor"
                />
              </svg>
              <span>필터</span>
            </button>
            <button className="ss-tag">
              <span>#강아지</span>
            </button>
            <button className="ss-tag --active">
              <span>#고양이</span>
            </button>
            <button className="ss-tag">
              <span>#암컷</span>
            </button>
            <button className="ss-tag">
              <span>#수컷</span>
            </button>
          </div>
          <div>
            <input className="ss-input" type="checkbox" id="filterAvailable" />
            <label htmlFor="filterAvailable">분양 가능한 건만 보기</label>
          </div>
        </section>
        <section className="family-content__main mt-60">
          <div className="pb-16">
            총&nbsp;<span>35</span>마리의 식구
          </div>
          {listData.length > 0 ? (
          <div className="family-content__card-grid">
            {listData.map((item) => (
            <div className="family-content__card" key={item.id}>
              <header>
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99992 10C10.9166 10 11.6666 9.25002 11.6666 8.33335C11.6666 7.41669 10.9166 6.66669 9.99992 6.66669C9.08325 6.66669 8.33325 7.41669 8.33325 8.33335C8.33325 9.25002 9.08325 10 9.99992 10ZM9.99992 1.66669C13.4999 1.66669 16.6666 4.35002 16.6666 8.50002C16.6666 11.15 14.6249 14.2667 10.5499 17.8584C10.2333 18.1334 9.75825 18.1334 9.44159 17.8584C5.37492 14.2667 3.33325 11.15 3.33325 8.50002C3.33325 4.35002 6.49992 1.66669 9.99992 1.66669Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>{item.sido} {item.sigungu}</span>
                </div>
                <FlyoutMenu />
              </header>
              <div>
                <Slider images={images} hasBadge />
              </div>
              <footer onClick={() => navigate('/family/'+item.id)}>
                <div>
                  <div>
                    <span>{item.status.value}</span>
                    <span>{item.modifiedAt}</span>
                  </div>
                  <button>
                    <img src="/src/assets/icons/2424/like_outline.svg" alt="" />
                  </button>
                </div>
                <div>
                  <p>
                    {item.title}
                  </p>
                </div>
                <div>
                  <button className="ss-tag --warm">
                    <span>#강아지</span>
                  </button>
                  <button className="ss-tag --warm">
                    <span>#2살</span>
                  </button>
                  <button className="ss-tag --warm">
                    <span>#암컷</span>
                  </button>
                </div>
              </footer>
            </div>
                ))}
          </div>
              ) : (
              <div className="family-content--empty">
              <img src="/src/assets/pictograms/logo_pictogram.svg" alt="" />
              <p className="mt-20 mb-40">
              등록된 식구가 없습니다
              <br />
              새로운 식구를 저희에게 소개시켜주세요
              </p>
              <button className="ss-button --lg" onClick={() => navigate('/register')}>
              식구 등록하기
              </button>
            </div>
              )}
          <button className="family-content__floating-button" onClick={() => navigate('/register')}>
            <img src="/src/assets/images/buttons/Floating.png" alt="" />
          </button>
        </section>
      </div>
    </>
  );
};

export default Family;
