import React, { useState } from 'react';
import '../../scss/pages/_register.scss';
import InfoIcon from '../../components/common/infoicon';
import { AgeInput, Dropdown } from '../../components/common/inputs';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const onInfoIconClickHandler = () => {
    if (isShow) setIsShow(false);
    else setIsShow(true);
  };

  const breed = [
    '골든 리트리버',
    '치와와',
    '불독',
    '시베리안 허스키',
    '보더 콜리',
    '빠삐용',
    '요크셔 테리어',
    '닥스훈트',
    '푸들',
    '불마스티프',
    '로트와일러',
    '프렌치 불도그',
    '잭 러셀 테리어',
    '세인트 버나드',
    '비글',
  ];

  const age = ['모르겠어요', '개월', '년'];

  const neuter = ['중성화', '안 함'];

  const goNextStep = (step) => {
    document.querySelector(`#register-${step - 1}`).style.display = 'none';
    document.querySelector(`#register-${step}`).style.display = 'flex';
  };
  return (
    <>
      {/* step 1 */}
      <div id="register-1" className="register w-660">
        <div className="register__title">기본정보</div>
        <div className="register__title mb-80">
          어떤 새로운 식구를
          <br />
          소개시켜 주실건가요?
        </div>
        <div className="ss-form">
          <div className="ss-form__row-center mb-70">
            <div className="mr-60">
              <input id="input-saesig" name="radio" className="register__saesig" type="radio" />
              <label htmlFor="input-saesig" />
            </div>
            <div>
              <input id="input-dal" name="radio" className="register__dal" type="radio" />
              <label htmlFor="input-dal" />
            </div>
          </div>
          <button className="ss-button --lg --full w-490" onClick={() => goNextStep(2)}>
            다음
          </button>
        </div>
        <div className="progress-bar progress-bar--1">
          <div className="pagenation">1/4</div>
        </div>
      </div>

      {/* step 2 */}
      <div id="register-2" className="register" style={{ display: 'none' }}>
        <div className="register__title">기본정보</div>
        <div className="register__title mb-60">
          새로운 식구의 이미지를
          <br />
          등록해주세요
        </div>
        {/* before upload */}
        <div className="ss-form">
          <label className="ss-upload h-300 mb-60">
            <img src="/src/assets/icons/2424/image.svg" alt="사진 올리기" />
            <span>이미지를 등록해주세요 (최대 6장)</span>
            <p>
              이미지 파일당 최대 10MB의 용량제한이 있습니다.
              <br />
              가로사이즈가 660pixel을 초과하는 경우 자동으로 660pixel로 조정됩니다.
            </p>
            <input type="file" accept="image/*" />
          </label>
          {/* after upload */}
          <div className="register__upload-progress ss-flex justify-between mb-20">
            <div className="ss-flex align-center">
              <span className="mr-6">이미지 등록 3/6</span>
              <InfoIcon
                show={isShow}
                onClick={onInfoIconClickHandler}
                onClickOutside={() => setIsShow(false)}
                position="left-top-2"
                message={
                  '이미지 파일당 최대 10MB의 용량 제한이 있습니다.\n' +
                  '가로사이즈가 660pixel을 초과하는 경우 자동으로 660pixel로 조정됩니다.'
                }
              />
            </div>
            <div>
              <img src="/src/assets/icons/2020/mosaic.svg" alt="순서 변경" />
              <span className="ml-2">순서변경</span>
            </div>
          </div>
          <div className="ss-grid cols-repeat-3 rows-repeat-2 gap-12 mb-60">
            <div className="ss-image">
              <img src="/src/assets/images/samples/sample1.webp" alt="" />
              <button />
              <span>대표 이미지</span>
            </div>
            <div className="ss-image">
              <img src="/src/assets/images/samples/sample2.jpg" alt="" />
              <button />
            </div>
            <div className="ss-image">
              <img src="/src/assets/images/samples/sample3.jpg" alt="" />
              <button />
            </div>
            <label className="ss-upload h-150">
              <img src="/src/assets/buttons/add.svg" alt="" />
              <p>이미지를 등록해주세요</p>
              <input type="file" accept="image/*" />
            </label>
            <label className="ss-upload h-150">
              <img src="/src/assets/buttons/add.svg" alt="" />
              <p>이미지를 등록해주세요</p>
              <input type="file" accept="image/*" />
            </label>
            <label className="ss-upload h-150">
              <img src="/src/assets/buttons/add.svg" alt="" />
              <p>이미지를 등록해주세요</p>
              <input type="file" accept="image/*" />
            </label>
          </div>
          <button className="ss-button --lg --full w-490" onClick={() => goNextStep(3)}>
            다음
          </button>
        </div>

        <div className="progress-bar progress-bar--2">
          <div className="pagenation">2/4</div>
        </div>
      </div>

      {/* step 3 */}
      <div id="register-3" className="register" style={{ display: 'none' }}>
        <div className="register__title">기본정보</div>
        <div className="register__title mb-60">
          새로운 식구의 기본정보를
          <br />
          알려주세요
        </div>

        <div className="ss-form">
          <div className="ss-grid col-gap-10 row-gap-30">
            <div>
              <label className="ss-label --required">품종</label>
              <Dropdown options={breed} placeholder="품종 선택" required />
            </div>
            <div>
              <label className="ss-label --required">성별</label>
              <Dropdown options={breed} placeholder="성별 선택" required />
            </div>
            <div>
              <label className="ss-label --required">나이</label>
              <AgeInput options={age} placeholder="선택" required />
            </div>
            <div>
              <label className="ss-label --required">책임비</label>
              <div className="ss-price-input">
                <input className="ss-input" type="text" placeholder="10,000" maxLength={6} />
                <span>원</span>
                <div className="ss-price-input__checkbox">
                  <input className="ss-input" type="checkbox" name="" id="freeAdoption" />
                  <label htmlFor="freeAdoption">무료 분양</label>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <label className="ss-label --required">제목</label>
              <input className="ss-input --full" type="text" placeholder="제목 입력" />
            </div>
            <div className="col-span-2">
              <label className="ss-label --required">소개</label>
              <div className="ss-textarea">
                <textarea cols="30" rows="10" placeholder="내용 입력" required></textarea>
                <div className="pt-10">0/1,000자</div>
              </div>
            </div>
            <div>
              <label className="ss-label --required">분양 희망 지역</label>
              <Dropdown options={breed} placeholder="시, 도" required />
            </div>
            <div>
              <label className="ss-label">&nbsp;</label>
              <Dropdown options={breed} placeholder="시, 군, 구" required />
            </div>
          </div>
          <button className="current-location">
            <img src="/src/assets/icons/2020/position.svg" alt="" />
            <span>현재 위치 사용</span>
          </button>
          <button className="ss-button --lg --full w-490 mt-60" onClick={() => goNextStep(4)}>
            다음
          </button>
        </div>

        <div className="progress-bar progress-bar--3">
          <div className="pagenation">3/4</div>
        </div>
      </div>

      {/* step 4 */}
      <div id="register-4" className="register" style={{ display: 'none' }}>
        <div className="register__title">기본정보</div>
        <div className="register__title mb-60">
          새로운 식구의 건강정보를
          <br />
          알려주세요
        </div>

        <div className="ss-form">
          <div className="ss-grid cols-repeat-2 col-gap-10 row-gap-30">
            <div>
              <label className="ss-label --required">중성화 여부</label>
              <Dropdown label="중성화 여부" options={neuter} placeholder="선택해주세요" required />
            </div>
            <div className="col-span-2">
              <label className="ss-label">백신 접종 여부</label>
              <div className="vaccine mt-12">
                <label>
                  <input type="checkbox" />
                  <span>
                    혼합예방주사
                    <br />
                    (종합백신)
                  </span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>
                    기관ㆍ기관지염
                    <br />
                    (켄넬코프)
                  </span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>코로나 장염</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>광견병</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>신종플루</span>
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <label className="ss-label">기타 질병 및 특이사항</label>
              <div className="ss-textarea">
                <textarea cols="30" rows="10" placeholder="내용을 입력해주세요" required></textarea>
                <div className="pt-10">0/1,000자</div>
              </div>
            </div>
          </div>
          <button className="ss-button --lg --full w-490 mt-60" onClick={() => navigate('/')}>
            식구 등록 완료
          </button>
        </div>

        <div className="progress-bar progress-bar--4">
          <div className="pagenation">4/4</div>
        </div>

        {/* modal 1 */}
        {/* <div className="ss-modal">
          <div className="ss-modal__window">
            <img src="/src/assets/icons/2424/close.svg" alt="" />
            <p className="mt-40 mb-60">
              지금 작성을 그만두면 내용이 저장되지 않습니다. <br />
              정말 나갈까요?
            </p>
            <div>
              <button className="ss-button --md --negative mr-10">아니요</button>
              <button className="ss-button --md">네, 나갈래요</button>
            </div>
          </div>
        </div> */}

        {/* modal 2 */}
        {/* <div className="ss-modal">
          <div className="ss-modal__window --490">
            <img className="ss-modal__family" src="/src/assets/pictograms/family_modal.svg" alt="식구등록 완료" />
            <img className="ss-modal__close" src="/src/assets/icons/2424/close.svg" alt="" />
            <p className="mt-40 mb-60">
              식구 등록이 완료되었습니다~!
              <br />
              새식일기와 함께 좋은 시간들을 기록해나가요 :)
            </p>
            <div>
              <button className="ss-button --md --full">네, 좋아요!</button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Register;
