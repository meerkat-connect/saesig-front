import React from 'react';
import '../../scss/pages/_diary-post.scss';
import Navbar from './_components/navbar';
import Slide from './_components/slide';
import CommentInput from './_components/commentInput';

const DiaryPost = () => {
  // props 임시 데이터
  const data = {
    date: '2023년 05월 17일',
    weather: 'sun',
  };

  const images = [
    '/src/assets/images/samples/sample1.webp',
    '/src/assets/images/samples/sample2.jpg',
    '/src/assets/images/samples/sample3.jpg',
    '/src/assets/images/samples/sample4.webp',
    '/src/assets/images/samples/sample5.jpg',
    '/src/assets/images/samples/sample6.jpg',
  ];

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
  return (
    <div className="post">
      <div className="post__date">
        <span>{data.date}</span>
        <ul className="weather">
          {weathers.map((weather) => (
            <li key={weather.name}>
              <div>
                {data.weather === weather.name ? (
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
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="post__content mt-30">
        <section>
          <div className="ss-author">
            <div className="ss-author__avatar" />
            <span className="ss-author__username">username</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0L9.65644 1.81807L12 1.0718L12.5255 3.47452L14.9282 4L14.1819 6.34356L16 8L14.1819 9.65644L14.9282 12L12.5255 12.5255L12 14.9282L9.65644 14.1819L8 16L6.34356 14.1819L4 14.9282L3.47452 12.5255L1.0718 12L1.81807 9.65644L0 8L1.81807 6.34356L1.0718 4L3.47452 3.47452L4 1.0718L6.34356 1.81807L8 0Z"
                fill="#40BD2B"
              />
              <g clipPath="url(#clip0_1237_45146)">
                <path
                  d="M6.79996 9.66656L5.41196 8.27856C5.25596 8.12256 5.00396 8.12256 4.84796 8.27856C4.69196 8.43456 4.69196 8.68656 4.84796 8.84256L6.51996 10.5146C6.67596 10.6706 6.92796 10.6706 7.08396 10.5146L11.316 6.28256C11.472 6.12656 11.472 5.87456 11.316 5.71856C11.16 5.56256 10.908 5.56256 10.752 5.71856L6.79996 9.66656Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <h1 className="mt-16">새식이와 함께 보낸 즐거운 하루~</h1>
        </section>
        <section>
          <Slide images={images} />
        </section>
        <section>
          <div className="post__count">
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g mask="url(#mask0_4250_62582)">
                  <path
                    d="M10 17L8.95833 16.0625C7.56944 14.8264 6.42361 13.7674 5.52083 12.8854C4.61806 12.0035 3.90625 11.2188 3.38542 10.5312C2.86458 9.84375 2.50347 9.21528 2.30208 8.64583C2.10069 8.07639 2 7.49306 2 6.89583C2 5.65972 2.42361 4.61806 3.27083 3.77083C4.11806 2.92361 5.15972 2.5 6.39583 2.5C7.07639 2.5 7.73611 2.64583 8.375 2.9375C9.01389 3.22917 9.55556 3.63889 10 4.16667C10.4444 3.63889 10.9861 3.22917 11.625 2.9375C12.2639 2.64583 12.9236 2.5 13.6042 2.5C14.8403 2.5 15.8819 2.92361 16.7292 3.77083C17.5764 4.61806 18 5.65972 18 6.89583C18 7.49306 17.9028 8.06944 17.7083 8.625C17.5139 9.18056 17.1562 9.79861 16.6354 10.4792C16.1146 11.1597 15.3993 11.9479 14.4896 12.8438C13.5799 13.7396 12.4167 14.8264 11 16.1042L10 17Z"
                    fill="#D9D9D9"
                  />
                </g>
              </svg>
              <span>150</span>
            </div>
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g mask="url(#mask0_4250_62585)">
                  <path
                    d="M10 13.5C10.9722 13.5 11.7986 13.1597 12.4792 12.4792C13.1597 11.7986 13.5 10.9722 13.5 10C13.5 9.02778 13.1597 8.20139 12.4792 7.52083C11.7986 6.84028 10.9722 6.5 10 6.5C9.02778 6.5 8.20139 6.84028 7.52083 7.52083C6.84028 8.20139 6.5 9.02778 6.5 10C6.5 10.9722 6.84028 11.7986 7.52083 12.4792C8.20139 13.1597 9.02778 13.5 10 13.5ZM10 12C9.44444 12 8.97222 11.8056 8.58333 11.4167C8.19444 11.0278 8 10.5556 8 10C8 9.44444 8.19444 8.97222 8.58333 8.58333C8.97222 8.19444 9.44444 8 10 8C10.5556 8 11.0278 8.19444 11.4167 8.58333C11.8056 8.97222 12 9.44444 12 10C12 10.5556 11.8056 11.0278 11.4167 11.4167C11.0278 11.8056 10.5556 12 10 12ZM10 16C8.0195 16 6.21535 15.4549 4.58754 14.3646C2.95974 13.2743 1.76389 11.8194 1 10C1.76389 8.18056 2.95974 6.72569 4.58754 5.63542C6.21535 4.54514 8.0195 4 10 4C11.9805 4 13.7847 4.54514 15.4125 5.63542C17.0403 6.72569 18.2361 8.18056 19 10C18.2361 11.8194 17.0403 13.2743 15.4125 14.3646C13.7847 15.4549 11.9805 16 10 16Z"
                    fill="#D9D9D9"
                  />
                </g>
              </svg>
              <span>200</span>
            </div>
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4250_62588)">
                  <path
                    d="M10.819 2H9.68103C5.44793 2 2 5.44793 2 9.68103V16.7931C2 17.106 2.25603 17.3621 2.56897 17.3621H10.819C15.0521 17.3621 18.5 13.9141 18.5 9.68103C18.5 5.44793 15.0521 2 10.819 2ZM6.83621 10.9157C6.36397 10.9157 5.98276 10.5345 5.98276 10.0622C5.98276 9.59 6.36397 9.20879 6.83621 9.20879C7.30845 9.20879 7.68965 9.59 7.68965 10.0622C7.68965 10.5345 7.30845 10.9157 6.83621 10.9157ZM10.25 10.9157C9.77776 10.9157 9.39655 10.5345 9.39655 10.0622C9.39655 9.59 9.77776 9.20879 10.25 9.20879C10.7222 9.20879 11.1034 9.59 11.1034 10.0622C11.1034 10.5345 10.7222 10.9157 10.25 10.9157ZM13.6638 10.9157C13.1916 10.9157 12.8103 10.5345 12.8103 10.0622C12.8103 9.59 13.1916 9.20879 13.6638 9.20879C14.136 9.20879 14.5172 9.59 14.5172 10.0622C14.5172 10.5345 14.136 10.9157 13.6638 10.9157Z"
                    fill="#D9D9D9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4250_62588">
                    <rect width="16.5" height="15.3621" fill="white" transform="translate(2 2)" />
                  </clipPath>
                </defs>
              </svg>
              <span>1</span>
            </div>
          </div>
          <div className="post__main-text mt-20 mb-30">
            <p>
              조금 이르게 찾아온 무더운 날씨를 피해 더위를 식히고자 새식이와 함께 바다를 다녀왔습니다~ 강아지와 함께 할
              수 있는 수상 액티비티인 도그썹을 하고왔더니 너무 시원하고 재미있었어요 :) 새식이 덕분에 물위에서 명상도
              하고 함께 노을 지는것도 보며 온전히 쉴 수 있었던 소중한 시간이었습니다
            </p>
          </div>
          <div className="ss-tag-box">
            <div className="ss-tag-emoji --warm">💭 오늘의 일기</div>
            <div className="ss-tag-emoji --warm">🕶 친구해요</div>
            <div className="ss-tag-emoji --warm">👍 추천해요</div>
          </div>
        </section>
      </div>
      <div className="post__comment mt-40">
        <div className="comment__header">
          <h4>💬 댓글 4</h4>
          <div>
            <span className="mr-5">댓글창 닫기</span>
            <button>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12.5" r="11" fill="#171A19" />
                <path
                  d="M15.7769 10.7221C15.4808 10.426 15.0025 10.426 14.7063 10.7221L11.7602 13.6682L8.81415 10.7221C8.51802 10.426 8.03966 10.426 7.74354 10.7221C7.44741 11.0182 7.44741 11.4966 7.74354 11.7927L11.2287 15.2779C11.5249 15.574 12.0032 15.574 12.2993 15.2779L15.7845 11.7927C16.0731 11.5042 16.0731 11.0182 15.7769 10.7221Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <CommentInput />
        </div>
        <div>댓글 영역</div>
      </div>
      <Navbar />
    </div>
  );
};

export default DiaryPost;
