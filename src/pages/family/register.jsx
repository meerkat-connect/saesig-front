import React, { useState } from 'react';
import '../../scss/pages/_register.scss';
import InfoIcon from '../../components/common/infoicon';
import { AgeInput, Dropdown } from '../../components/common/inputs';
import { useNavigate } from 'react-router-dom';
import * as FamilyApi from '../../api/family/family.js';
import Modal from '../../components/common/modal.jsx';

const Register = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');

  const onInfoIconClickHandler = () => {
    if (isShow) setIsShow(false);
    else setIsShow(true);
  };

  const breedOptions  = [
    { id : 0, name : '골든 리트리버'},
    { id : 1, name : '치와와'},
    { id : 2, name : '불독'},
    { id : 3, name : '시베리안 허스키'},
    { id : 4, name : '보더 콜리'},
    { id : 5, name : '빠삐용'},
    { id : 6, name : '요크셔 테리어'},
    { id : 7, name : '닥스훈트'},
    { id : 8, name : '푸들'},
    { id : 9, name : '불마스티프'},
    { id : 1, name : '로트와일러'},
    { id : 1, name : '프렌치 불도그'},
    { id : 1, name : '잭 러셀 테리어'},
    { id : 1, name : '세인트 버나드'},
    { id : 1, name : '비글'},
  ];

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  let data = {
    title : '',
    content : '',
    gender : '',
    age : '',
    ageCategory : '',
    isCastrated : '',
    responsibilityCost : '',
    etcContent : '',
    animalDivision1Id : '',
    animalDivision2Id : '',
    sido : '',
    sigungu : '',
    vaccineList :[]
  }

  const [inputValues, setInputValues] = useState(data);

  const age = ['모르겠어요', '개월', '년'];

  const neuter = ['중성화', '안 함'];

  const goNextStep = (step) => {
    setInsertData(step)
    document.querySelector(`#register-${step - 1}`).style.display = 'none';
    document.querySelector(`#register-${step}`).style.display = 'flex';
  };

  const setInsertData = (step) =>{
    if (step == 2){
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        animalDivision1Id: document.querySelector('input[name="animalDivision1Id"]:checked').value,
      }));
    }else if (step == 3){

    }else if (step == 4){
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        animalDivision1Id: document.querySelector('input[name="animalDivision1Id"]:checked').value,

      }));
    }
  }

  const handleInsertAdopt = () => {
    FamilyApi.insertAdopt();
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
              <input id="input-saesig" name="animalDivision1Id" className="register__saesig" type="radio" value="1" />
              <label htmlFor="input-saesig" />
            </div>
            <div>
              <input id="input-dal" name="animalDivision1Id" className="register__dal" type="radio" value="2" />
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
              <select id="breed" value={selectedBreed} onChange={handleBreedChange}>
                <option value="">품종을 선택하세요</option>
                {breedOptions.map((breed) => (
                    <option key={breed.id} value={breed.name}>
                      {breed.name}
                    </option>
                ))}
              </select>
            </div>
            <div>
              <label className="ss-label --required">성별</label>
              <select id="breed" value={selectedBreed} onChange={handleBreedChange}>
                <option value="">품종을 선택하세요</option>
                {breedOptions.map((breed) => (
                    <option key={breed.id} value={breed.name}>
                      {breed.name}
                    </option>
                ))}
              </select>
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
              <select id="breed" value={selectedBreed} onChange={handleBreedChange}>
                <option value="">품종을 선택하세요</option>
                {breedOptions.map((breed) => (
                    <option key={breed.id} value={breed.name}>
                      {breed.name}
                    </option>
                ))}
              </select>
            </div>
            <div>
              <label className="ss-label">&nbsp;</label>
              <select id="breed" value={selectedBreed} onChange={handleBreedChange}>
                <option value="">품종을 선택하세요</option>
                {breedOptions.map((breed) => (
                    <option key={breed.id} value={breed.name}>
                      {breed.name}
                    </option>
                ))}
              </select>
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
          <button className="ss-button --lg --full w-490 mt-60" onClick={() => handleInsertAdopt()}>
            식구 등록 완료
          </button>
        </div>

        <div className="progress-bar progress-bar--4">
          <div className="pagenation">4/4</div>
        </div>

        {/* modal 1 */}
        {/* <Modal type={'notification'}>
          분양 진행중인 게시물은 삭제가 불가능합니다. <br />
          <b>분양 취소 후 삭제를 진행해주세요</b>
        </Modal> */}

        {/* modal 2 */}
        {/* <Modal type={'complete'}>
        식구 등록이 완료되었습니다~!
        <br />
        새식일기와 함께 좋은 시간들을 기록해나가요 :_
      </Modal> */}
      </div>
    </>
  );
};

export default Register;
