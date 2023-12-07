import React from 'react';
import clsx from 'clsx';
import CommentInput from './commentInput';

const Comment = ({ isLiked, isReplying, isReplyShow }) => {
  return (
    <div className="comment">
      <div className="comment__main">
        <div className="comment__inform">
          <div>
            <div className="comment__author">
              <div className="comment__avatar">
                <img src="/src/assets/images/samples/sample6.jpg" alt="image" />
              </div>
              <span className="comment__username">새식이</span>
            </div>
          </div>
          <div className="comment__submenu">
            <span>timestamp</span>
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4368_22739)">
                  <path
                    d="M14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6ZM14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z"
                    fill="#171A19"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4368_22739">
                    <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className="comment__content">
          <span>댕댕이랑 함께 바다라니ㅜㅜ 저도 시간 맞춰서 한번 가봐야겠어요~~ </span>
        </div>
        <div className="comment__reaction">
          <button className={clsx('comment__like', isLiked && '--active')}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 12L6.21875 11.3534C5.17708 10.501 4.31771 9.77059 3.64062 9.16236C2.96354 8.55412 2.42969 8.01293 2.03906 7.53879C1.64844 7.06466 1.3776 6.63123 1.22656 6.23851C1.07552 5.84579 1 5.44349 1 5.03161C1 4.17912 1.31771 3.46073 1.95313 2.87644C2.58854 2.29215 3.36979 2 4.29688 2C4.80729 2 5.30208 2.10057 5.78125 2.30172C6.26042 2.50287 6.66667 2.78544 7 3.14943C7.33333 2.78544 7.73958 2.50287 8.21875 2.30172C8.69792 2.10057 9.19271 2 9.70312 2C10.6302 2 11.4115 2.29215 12.0469 2.87644C12.6823 3.46073 13 4.17912 13 5.03161C13 5.44349 12.9271 5.841 12.7813 6.22414C12.6354 6.60728 12.3672 7.03352 11.9766 7.50287C11.5859 7.97222 11.0495 8.5158 10.3672 9.13362C9.6849 9.75144 8.8125 10.501 7.75 11.3822L7 12Z"
                fill="currentColor"
              />
            </svg>
            <span>0</span>
          </button>
          <button className={clsx('comment__reply-btn', isReplying && '--active')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4368_22760)">
                <path
                  d="M13.3333 15.0013L13.3333 17.668L18 13.0013L13.3333 8.33463L13.3333 11.068C10 11.068 7.66667 10.0013 6 7.66797C6.66667 11.0013 8.66667 14.3346 13.3333 15.0013Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_4368_22760">
                  <rect width="16" height="16" fill="white" transform="translate(20 21) rotate(-180)" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="ss-text-button --primary ml-10">2개의 답글 보기</button>
          {isReplying && <button className="comment__quit-reply-btn">답글취소</button>}
        </div>
      </div>
      <div className={clsx('reply__area', isReplyShow && '--active')}>
        {isReplying && <CommentInput className={'--reply mb-30'} />}
        {isReplyShow && (
          <>
            <Reply />
            <Reply />
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;

const Reply = ({ isWriter = true, isLiked }) => {
  return (
    <div className="comment__reply">
      <div className="comment__inform">
        <div>
          <div className="comment__author">
            <div className="comment__avatar">
              <img src="/src/assets/images/samples/sample3.jpg" alt="image" />
            </div>
            <span className="comment__username">달이</span>
          </div>
          {isWriter && (
            <div className="comment__writer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 0L9.65644 1.81807L12 1.0718L12.5255 3.47452L14.9282 4L14.1819 6.34356L16 8L14.1819 9.65644L14.9282 12L12.5255 12.5255L12 14.9282L9.65644 14.1819L8 16L6.34356 14.1819L4 14.9282L3.47452 12.5255L1.0718 12L1.81807 9.65644L0 8L1.81807 6.34356L1.0718 4L3.47452 3.47452L4 1.0718L6.34356 1.81807L8 0Z"
                  fill="#40BD2B"
                />
                <g clipPath="url(#clip0_4368_22648)">
                  <path
                    d="M6.80045 9.66656L5.41245 8.27856C5.25645 8.12256 5.00445 8.12256 4.84845 8.27856C4.69245 8.43456 4.69245 8.68656 4.84845 8.84256L6.52045 10.5146C6.67645 10.6706 6.92845 10.6706 7.08444 10.5146L11.3164 6.28256C11.4724 6.12656 11.4724 5.87456 11.3164 5.71856C11.1604 5.56256 10.9084 5.56256 10.7524 5.71856L6.80045 9.66656Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4368_22648">
                    <rect width="9.6" height="9.6" fill="white" transform="translate(3.2002 3.19922)" />
                  </clipPath>
                </defs>
              </svg>
              작성자
            </div>
          )}
        </div>
        <div className="comment__submenu">
          <span>timestamp</span>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4368_22739)">
                <path
                  d="M14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6ZM14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z"
                  fill="#171A19"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="comment__content">
        <span>댕댕이랑 함께 바다라니ㅜㅜ 저도 시간 맞춰서 한번 가봐야겠어요~~ </span>
      </div>
      <div className="comment__reaction">
        <button className={clsx('comment__like', isLiked && '--active')}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 12L6.21875 11.3534C5.17708 10.501 4.31771 9.77059 3.64062 9.16236C2.96354 8.55412 2.42969 8.01293 2.03906 7.53879C1.64844 7.06466 1.3776 6.63123 1.22656 6.23851C1.07552 5.84579 1 5.44349 1 5.03161C1 4.17912 1.31771 3.46073 1.95313 2.87644C2.58854 2.29215 3.36979 2 4.29688 2C4.80729 2 5.30208 2.10057 5.78125 2.30172C6.26042 2.50287 6.66667 2.78544 7 3.14943C7.33333 2.78544 7.73958 2.50287 8.21875 2.30172C8.69792 2.10057 9.19271 2 9.70312 2C10.6302 2 11.4115 2.29215 12.0469 2.87644C12.6823 3.46073 13 4.17912 13 5.03161C13 5.44349 12.9271 5.841 12.7813 6.22414C12.6354 6.60728 12.3672 7.03352 11.9766 7.50287C11.5859 7.97222 11.0495 8.5158 10.3672 9.13362C9.6849 9.75144 8.8125 10.501 7.75 11.3822L7 12Z"
              fill="currentColor"
            />
          </svg>
          <span>0</span>
        </button>
      </div>
    </div>
  );
};
