import React from 'react';
import '../../scss/pages/_publish-progress.scss';
import { AgeInput, Dropdown } from '../../components/common/inputs';

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

const Components = () => {
  return (
    <div className="publish">
      <h1 className="mt-60">컴포넌트 보기</h1>

      <h3>Button</h3>
      <section>
        <aside>
          <h5>Filled Button 36</h5>
          <h6>ss-button --sm</h6>
        </aside>
        <div>
          <button className="ss-button --sm">텍스트</button>
          <button className="ss-button --sm" disabled>
            텍스트
          </button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Filled Button 40</h5>
          <h6>ss-button --md</h6>
        </aside>
        <div>
          <button className="ss-button --md">텍스트</button>
          <button className="ss-button --md" disabled>
            텍스트
          </button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Filled Button 48</h5>
          <h6>ss-button --lg</h6>
        </aside>
        <div>
          <button className="ss-button --lg">텍스트</button>
          <button className="ss-button --lg" disabled>
            텍스트
          </button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Popup Button</h5>
          <h6>ss-button --sm --negative</h6>
        </aside>
        <div>
          <button className="ss-button --sm --negative">텍스트</button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Outline Button</h5>
          <h6>ss-outline-button</h6>
        </aside>
        <div>
          <button className="ss-outline-button">텍스트</button>
          <button className="ss-outline-button" disabled>
            텍스트
          </button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Text Button</h5>
          <h6>ss-text-button</h6>
        </aside>
        <div>
          <button className="ss-text-button">텍스트</button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Text Button</h5>
          <h6>ss-outline-button --underline</h6>
        </aside>
        <div>
          <button className="ss-text-button --underline">텍스트</button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Text Button</h5>
          <h6>ss-text-button --primary</h6>
        </aside>
        <div>
          <button className="ss-text-button --primary">텍스트</button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Icon Button</h5>
          <h6>ss-icon-button</h6>
        </aside>
        <div>
          <button className="ss-icon-button">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.43591 13.1666H4.26026L10.4334 6.99349L9.60903 6.16912L3.43591 12.3422V13.1666ZM12.5718 6.27042L10.3218 4.04097L11.1975 3.16534C11.3889 2.9739 11.6248 2.87817 11.9051 2.87817C12.1855 2.87817 12.4214 2.9739 12.6128 3.16534L13.4372 3.98969C13.6286 4.18113 13.7278 4.41361 13.7346 4.68711C13.7414 4.96061 13.6491 5.19308 13.4577 5.38452L12.5718 6.27042ZM3.03849 14.1666C2.8667 14.1666 2.72333 14.1091 2.60838 13.9941C2.49342 13.8792 2.43594 13.7358 2.43594 13.564V12.1679C2.43594 12.0875 2.45047 12.0111 2.47953 11.9384C2.50858 11.8658 2.55431 11.7982 2.61671 11.7358L9.59876 4.75377L11.8487 7.00374L4.86666 13.9858C4.80427 14.0482 4.73675 14.0939 4.66411 14.123C4.59145 14.152 4.51495 14.1666 4.43461 14.1666H3.03849Z"
                fill="currentColor"
              />
            </svg>
            <span>수정</span>
          </button>
        </div>
      </section>

      <section>
        <aside>
          <h5>Icon Button</h5>
          <h6>ss-icon-button --primary</h6>
        </aside>
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
        </div>
      </section>

      <section>
        <aside>
          <h5>Icon Button 46</h5>
          <h6>ss-icon-button --lg</h6>
        </aside>
        <div>
          <button className="ss-icon-button --lg">
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
        </div>
      </section>
      <h3>Form</h3>

      <section>
        <aside>
          <h5>Input: Text</h5>
          <h6>ss-input</h6>
        </aside>
        <div>
          <input className="ss-input" type="text" placeholder="placeholder" />
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Label + Text</h5>
          <h6>ss-label --required</h6>
        </aside>
        <div>
          <div>
            <label className="ss-label --required">라벨</label>
            <input className="ss-input" type="text" placeholder="placeholder" />
          </div>
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Description + Text</h5>
          <h6>ss-description</h6>
        </aside>
        <div>
          <div>
            <input className="ss-input" type="text" placeholder="placeholder" />
            <span className="ss-description">영문,숫자 포함 가능 3-15자 이내로 등록</span>
          </div>
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Description</h5>
          <h6>ss-description --warning</h6>
        </aside>
        <div>
          <div>
            <span className="ss-description --warning">존재하지 않는 닉네임 입니다.</span>
          </div>
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Description</h5>
          <h6>ss-description --pass</h6>
        </aside>
        <div>
          <div>
            <span className="ss-description --pass">영문,숫자 포함 가능 3-15자 이내로 등록</span>
          </div>
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Button</h5>
          <h6>-</h6>
        </aside>
        <div>
          <div className="ss-button-input">
            <input className="ss-input" type="text" placeholder="000000" maxLength={6} />
            <div>
              <span>00:00</span>
              <button className="ss-button --sm">재전송</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Price</h5>
          <h6>-</h6>
        </aside>
        <div>
          <div className="ss-price-input">
            <input className="ss-input" type="text" placeholder="10,000" maxLength={6} />
            <span>원</span>
          </div>
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Age</h5>
          <h6>-</h6>
        </aside>
        <div>
          <AgeInput />
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Dropdown</h5>
          <h6>-</h6>
        </aside>
        <div>
          <Dropdown options={breed} />
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Textarea</h5>
          <h6>-</h6>
        </aside>
        <div>
          <div className="ss-textarea">
            <textarea cols="30" rows="10" placeholder="내용을 입력해주세요" required></textarea>
            <div className="pt-10">0/1,000자</div>
          </div>
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Checkbox</h5>
          <h6>-</h6>
        </aside>
        <div>
          <input className="ss-input" type="checkbox" id="ss-checkbox" />
          <label htmlFor="ss-checkbox"></label>
          <input className="ss-input" type="checkbox" id="ss-checkbox2" />
          <label htmlFor="ss-checkbox2">동의하기</label>
        </div>
      </section>

      <section>
        <aside>
          <h5>Input: Radio</h5>
          <h6>-</h6>
        </aside>
        <div>
          <input className="ss-input" type="radio" name="radio" id="ss-radio1" />
          <label htmlFor="ss-radio1"></label>
          <input className="ss-input" type="radio" name="radio" id="ss-radio2" />
          <label htmlFor="ss-radio2"></label>
        </div>
      </section>
    </div>
  );
};

export default Components;
