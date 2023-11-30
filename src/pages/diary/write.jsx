import React, { useState } from 'react';
import '../../scss/pages/_write.scss';
import Tooltip from '../../components/common/tooltip';
import Modal from '../../components/common/modal';

const Write = () => {
  const weathers = [
    {
      name: 'sun',
      actiove: '/src/assets/icons/2020/weather_sun_actiove.svg',
      inactive: '/src/assets/icons/2020/weather_sun.svg',
    },
    {
      name: 'cloudy',
      actiove: '/src/assets/icons/2020/weather_cloudy_actiove.svg',
      inactive: '/src/assets/icons/2020/weather_cloudy.svg',
    },
    {
      name: 'cloud',
      actiove: '/src/assets/icons/2020/weather_cloud_actiove.svg',
      inactive: '/src/assets/icons/2020/weather_cloud.svg',
    },
    {
      name: 'rainy',
      actiove: '/src/assets/icons/2020/weather_rainy_actiove.svg',
      inactive: '/src/assets/icons/2020/weather_rainy.svg',
    },
    {
      name: 'snow',
      actiove: '/src/assets/icons/2020/weather_snow_actiove.svg',
      inactive: '/src/assets/icons/2020/weather_snow.svg',
    },
  ];
  const [selectedWeather, setSelectedWeather] = useState('sun');
  const handleWeatherClick = (weather) => {
    setSelectedWeather(weather);
  };

  return (
    <div className="write">
      <div className="write__header mb-60">
        <h1 className="pt-80 mb-12">오늘의 일기</h1>
        <span>오늘 하루 여러분의 이야기를 기록해주세요</span>
      </div>
      <div className="write__body">
        <div className="write__form">
          <section>
            <span>2023년 05월 17일</span>

            <ul>
              {weathers.map((weather) => (
                <li key={weather.name}>
                  <button onClick={() => handleWeatherClick(weather.name)}>
                    {selectedWeather === weather.name ? (
                      <>
                        <img src={weather.actiove} alt={weather.name} />
                        <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M18.2586 30.6683C14.1899 30.6683 6.95403 31.4517 4.02394 27.669C1.79856 24.796 1 20.8903 1 17.3379C1 11.2367 3.2238 8.43981 7.30602 4.34082C9.74548 1.89133 19.7705 0.090739 22.9051 1.4896C26.1116 2.92056 31.2724 4.98988 32.1613 9.00645C32.9768 12.6911 35.0226 18.0823 33.3783 22.0036C29.27 31.8006 22.566 34.7809 12.9482 38"
                            stroke="#FF8031"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </>
                    ) : (
                      <img src={weather.inactive} alt={weather.name} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <input type="text" placeholder="제목 입력" />
            <input className="ss-input" type="checkbox" id="isPrivate" />
            <label htmlFor="isPrivate">비밀일기</label>
          </section>
          <section>
            {/* 사진 업로드 전 */}
            <label className="ss-upload">
              <img src="/src/assets/icons/2424/image.svg" alt="사진 올리기" />
              <span>이미지를 등록해주세요 (최대 6장)</span>
              <p>
                이미지 파일당 최대 10MB의 용량제한이 있습니다.
                <br />
                가로사이즈가 660pixel을 초과하는 경우 자동으로 660pixel로 조정됩니다.
              </p>
              <input type="file" accept="image/*" />
            </label>
            {/* 사진 업로드 후 */}
            {/* <div>
              <Tooltip position={1}>
                이미지 파일당 최대 10MB의 용량 제한이 있습니다.
                <br />
                가로사이즈가 660pixel을 초과하는 경우 자동으로 660pixel로 조정됩니다.
              </Tooltip>
            </div> */}
          </section>
          <section>
            {/* 임시 태그 contentEditable */}
            <textarea placeholder="편집기 구현"></textarea>
          </section>
          <section>
            <div>
              <h6>이야기와 관련된 태그를 선택해보세요</h6>
              <h6>(최대 5개 선택가능)</h6>
            </div>
            <div>
              <div className="ss-tag-emoji --active">💭 오늘의 일기</div>
              <div className="ss-tag-emoji">🕶 친구해요</div>
              <div className="ss-tag-emoji">👍 추천해요</div>
              <div className="ss-tag-emoji">🧡 함께해요</div>
              <div className="ss-tag-emoji">😆 재밌어요</div>
            </div>
          </section>
        </div>
        <button className="ss-button --lg w-490 w-full">일기 등록하기</button>
      </div>
      <Modal type={'normal'}>
        지금 작성을 그만두면 내용이 저장되지 않습니다.
        <br />
        정말 나갈까요?
      </Modal>
    </div>
  );
};

export default Write;
