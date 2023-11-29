import React, { useRef } from 'react';
import { useParams } from "react-router-dom";
import '../../scss/pages/_family-post.scss';
import Slider from '../../components/common/slider';
import PostRelated from '../../components/pages/family/relatedSlider';
import * as FamilyApi from "../../api/family/family.js";

const FamilyPost = () => {
  const images = [
    '/src/assets/images/samples/sample1.webp',
    '/src/assets/images/samples/sample2.jpg',
    '/src/assets/images/samples/sample3.jpg',
  ];

  const medicalButtonRef = useRef(null);
  const breedButtonRef = useRef(null);
  const medicalInfoRef = useRef(null);
  const breedInfoRef = useRef(null);
  const params = useParams();

  const handleDeleteAdopt = () => {
    FamilyApi.deleteAdopt(params);
  };

  const handleChangeInterestAdopt = () => {
    FamilyApi.chageLikeInfo(params);
  }

  const handleReportAdopt = () => {
    FamilyApi.reportAdopt(params);
  }

  const showMedicalInfo = () => {
    medicalInfoRef.current.style.display = 'block';
    breedInfoRef.current.style.display = 'none';
    medicalButtonRef.current.className = '--active';
    breedButtonRef.current.className = '';
  };

  const showBreedInfo = () => {
    medicalInfoRef.current.style.display = 'none';
    breedInfoRef.current.style.display = 'block';
    medicalButtonRef.current.className = '';
    breedButtonRef.current.className = '--active';
  };
  return (
    <div className="post__container select-text mb-100">
      <section className="post__title">
        <div className="title mt-60">
          <div className="title__rehome-status mb-20" onClick={() => handleReportAdopt()}>분양중</div>
          <hr />
          <h1>2살 여아 시베리안 허스키</h1>
          <hr />
          <h1>무료분양 합니다</h1>
          <hr />
          <div className="title__author mt-20">
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
                <defs>
                  <clipPath id="clip0_1237_45146">
                    <rect width="9.6" height="9.6" fill="white" transform="translate(3.2002 3.19922)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="post__summary mt-40">
        <div className="summary">
          <div className="summary__header">
            <div className="summary__header-geo">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3188_6816)">
                  <path
                    d="M10.0002 9.99935C10.9168 9.99935 11.6668 9.24935 11.6668 8.33268C11.6668 7.41602 10.9168 6.66602 10.0002 6.66602C9.0835 6.66602 8.3335 7.41602 8.3335 8.33268C8.3335 9.24935 9.0835 9.99935 10.0002 9.99935ZM10.0002 1.66602C13.5002 1.66602 16.6668 4.34935 16.6668 8.49935C16.6668 11.1493 14.6252 14.266 10.5502 17.8577C10.2335 18.1327 9.7585 18.1327 9.44183 17.8577C5.37516 14.266 3.3335 11.1493 3.3335 8.49935C3.3335 4.34935 6.50016 1.66602 10.0002 1.66602Z"
                    fill="#FF8031"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3188_6816">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-4">경기도 구리시 갈매동</span>
            </div>
            <div className="summary__header-date">2023.03.20</div>
          </div>
          <div className="summary__slider">
            <Slider images={images} hasButton hasIndicator />
          </div>
          <div className="summary__info">
            <div className="summary__info-item">
              <h3>반려동물</h3>
              <span>강아지</span>
            </div>
            <div className="summary__info-item">
              <h3>품종</h3>
              <span>믹스견</span>
            </div>
            <div className="summary__info-item">
              <h3>성별</h3>
              <span>암컷</span>
            </div>
            <div className="summary__info-item">
              <h3>나이</h3>
              <span>6개월</span>
            </div>
          </div>
        </div>
      </section>
      <section className="post__content">
        <div className="content">
          <div className="content__counter">
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleChangeInterestAdopt()}>
                <path
                  d="M10 17L8.95833 16.0948C7.56944 14.9013 6.42361 13.8788 5.52083 13.0273C4.61806 12.1758 3.90625 11.4181 3.38542 10.7543C2.86458 10.0905 2.50347 9.48372 2.30208 8.93391C2.10069 8.3841 2 7.82088 2 7.24425C2 6.05077 2.42361 5.04502 3.27083 4.22701C4.11806 3.409 5.15972 3 6.39583 3C7.07639 3 7.73611 3.1408 8.375 3.42241C9.01389 3.70402 9.55556 4.09962 10 4.6092C10.4444 4.09962 10.9861 3.70402 11.625 3.42241C12.2639 3.1408 12.9236 3 13.6042 3C14.8403 3 15.8819 3.409 16.7292 4.22701C17.5764 5.04502 18 6.05077 18 7.24425C18 7.82088 17.9028 8.37739 17.7083 8.91379C17.5139 9.45019 17.1562 10.0469 16.6354 10.704C16.1146 11.3611 15.3993 12.1221 14.4896 12.9871C13.5799 13.852 12.4167 14.9013 11 16.1351L10 17Z"
                  fill="#D9D9D9"
                />
              </svg>
              <span>150</span>
            </div>
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 13.5C10.9722 13.5 11.7986 13.1597 12.4792 12.4792C13.1597 11.7986 13.5 10.9722 13.5 10C13.5 9.02778 13.1597 8.20139 12.4792 7.52083C11.7986 6.84028 10.9722 6.5 10 6.5C9.02778 6.5 8.20139 6.84028 7.52083 7.52083C6.84028 8.20139 6.5 9.02778 6.5 10C6.5 10.9722 6.84028 11.7986 7.52083 12.4792C8.20139 13.1597 9.02778 13.5 10 13.5ZM10 12C9.44444 12 8.97222 11.8056 8.58333 11.4167C8.19444 11.0278 8 10.5556 8 10C8 9.44444 8.19444 8.97222 8.58333 8.58333C8.97222 8.19444 9.44444 8 10 8C10.5556 8 11.0278 8.19444 11.4167 8.58333C11.8056 8.97222 12 9.44444 12 10C12 10.5556 11.8056 11.0278 11.4167 11.4167C11.0278 11.8056 10.5556 12 10 12ZM10 16C8.0195 16 6.21535 15.4549 4.58754 14.3646C2.95974 13.2743 1.76389 11.8194 1 10C1.76389 8.18056 2.95974 6.72569 4.58754 5.63542C6.21535 4.54514 8.0195 4 10 4C11.9805 4 13.7847 4.54514 15.4125 5.63542C17.0403 6.72569 18.2361 8.18056 19 10C18.2361 11.8194 17.0403 13.2743 15.4125 14.3646C13.7847 15.4549 11.9805 16 10 16Z"
                  fill="#D9D9D9"
                />
              </svg>
              <span>150</span>
            </div>
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3188_4131)">
                  <path
                    d="M10.819 2H9.68103C5.44793 2 2 5.44793 2 9.68103V16.7931C2 17.106 2.25603 17.3621 2.56897 17.3621H10.819C15.0521 17.3621 18.5 13.9141 18.5 9.68103C18.5 5.44793 15.0521 2 10.819 2ZM6.83621 10.9157C6.36397 10.9157 5.98276 10.5345 5.98276 10.0622C5.98276 9.59 6.36397 9.20879 6.83621 9.20879C7.30845 9.20879 7.68965 9.59 7.68965 10.0622C7.68965 10.5345 7.30845 10.9157 6.83621 10.9157ZM10.25 10.9157C9.77776 10.9157 9.39655 10.5345 9.39655 10.0622C9.39655 9.59 9.77776 9.20879 10.25 9.20879C10.7222 9.20879 11.1034 9.59 11.1034 10.0622C11.1034 10.5345 10.7222 10.9157 10.25 10.9157ZM13.6638 10.9157C13.1916 10.9157 12.8103 10.5345 12.8103 10.0622C12.8103 9.59 13.1916 9.20879 13.6638 9.20879C14.136 9.20879 14.5172 9.59 14.5172 10.0622C14.5172 10.5345 14.136 10.9157 13.6638 10.9157Z"
                    fill="#D9D9D9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3188_4131">
                    <rect width="16.5" height="15.3621" fill="white" transform="translate(2 2)" />
                  </clipPath>
                </defs>
              </svg>

              <span>150</span>
            </div>
          </div>
          <p className="content__text mt-20">
            활발하고 장난끼가 많으며, 처음보는 사람한테도 경계심이 없는 아이입니다. 하루 2-3시간 이상은 산책이나 놀이
            활동을 즐길 수 있는 환경이 갖춰진 곳을 데려가주세요. 사료와 간식을 매우 잘 먹으며 강아지 우유를 좋아하니
            가끔씩 챙겨주면 좋을것 같습니다!
          </p>
          <div className="content__tags mt-30">
            <div className="ss-tag --warm">강아지</div>
            <div className="ss-tag --warm">믹스견</div>
            <div className="ss-tag --warm">암컷</div>
            <div className="ss-tag --warm">6개월</div>
          </div>
          <div className="content__pet-status mt-80">
            <div className="pet-status">
              <div className="pet-status__tab">
                <button ref={medicalButtonRef} className="--active" onClick={showMedicalInfo}>
                  건강 정보
                </button>
                <button ref={breedButtonRef} onClick={showBreedInfo}>
                  품종 정보
                </button>
              </div>
              <div className="pet-status__medical-info" ref={medicalInfoRef} style={{ display: 'block' }}>
                <div className="pet-status__sub-title">
                  <img src="/src/assets/icons/2424/nueter_solid.svg" alt="" />
                  <span>중성화 여부</span>
                </div>
                <div className="ss-state-view --positive">중성화 완료</div>
                <div className="ss-state-view --negative">중성화 미완료</div>
                <div className="ss-state-view">모르겠어요</div>
                <div className="pet-status__sub-title">
                  <img src="/src/assets/icons/2424/vaccine.svg" alt="" />
                  <span onClick={() => handleDeleteAdopt()}>백신접종 여부</span>
                </div>
                <div className="ss-state-view --light">혼합예방주사(종합백신)</div>
                <div className="pet-status__sub-title">
                  <img src="/src/assets/icons/2424/bookmark_solid.svg" alt="" />
                  <span>기타 질병 및 특이사항</span>
                </div>
                <p>
                  떠돌이 생활을 하다 구조되어 약간의 찰과상 및 피부습진이 있습니다. 병원에서 1차 치료는 완료했으나
                  주기적으로 검진이 필요하니 유의해주세요!
                </p>
              </div>
              <div className="pet-status__breed-info" ref={breedInfoRef} style={{ display: 'none' }}>
                <div className="pet-status__sub-title">
                  <img src="/src/assets/icons/2424/bookmark_solid.svg" alt="" />
                  <span>우리 믹스견은요?</span>
                </div>
                <p>
                  지능이 높고 끈기가 있으며 주인에게 순종하는 기질을 갖고 있습니다. 일하는 것을 무척 좋아해서 활동이
                  없으면 무료함을 느끼고 다른 목양견처럼 작은 동물을 모는 하는 경향이 있으며, 행동이 빠르고 민첩하며,
                  활동적이어서 수영 같은 운동을 잘합니다.
                </p>
                <div className="pet-status__sub-title">
                  <img src="/src/assets/icons/2424/nueter_solid.svg" alt="" />
                  <span>이런 케어가 필요해요!</span>
                </div>
                <p>
                  숱이 많고 속털이 깊은 편으로 엉키지 않도록 빗질을 자주 해주어야 하고 털갈이 시기에는 특히 신경을
                  써주어야 하니 알레르기가 있거나 좁은 공간은 피해주시길 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="post__related mt-80">
        <PostRelated />
      </section>
    </div>
  );
};

export default FamilyPost;
