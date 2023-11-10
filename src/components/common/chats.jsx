import React, { useEffect, useRef, useState } from 'react';
import sample2 from '/src/assets/images/samples/sample2.jpg';
import sample5 from '/src/assets/images/samples/sample5.jpg';
import sample7 from '/src/assets/images/samples/sample7.webp';

const ChatBox = () => {
  const data = {
    chatList: [
      {
        id: 1,
        avatar: sample2,
        username: 'MEKC123',
        latestContent: '지금 분양 가능할까요?',
        latestTimestamp: '2023-09-23T12:34:56Z',
        isRead: false,
        isReserved: false,
      },
      {
        id: 2,
        avatar: sample5,
        username: '달이',
        latestContent: '네 알겠습니다 감사합니다~',
        latestTimestamp: '2023-09-22T12:34:56Z',
        isRead: true,
        isReserved: false,
      },
      {
        id: 3,
        avatar: sample7,
        username: '새식이',
        latestContent: '주변 지역에 살고있는데 강아지를 만나볼 수 있을까요?',
        latestTimestamp: '2023-09-22T12:34:56Z',
        isRead: true,
        isReserved: true,
      },
    ],
    messages: [
      {
        id: 1,
        senderId: 123,
        receiverId: 456,
        content: '안녕하세요.\n혹시 지금 분양 가능할까요?',
        timestamp: '2023-09-23T12:00:00Z',
        isRead: false,
        isMine: false,
      },
      {
        id: 2,
        senderId: 456,
        receiverId: 123,
        content: '네 가능합니다~',
        timestamp: '2023-09-23T12:01:00Z',
        isRead: false,
        isMine: true,
      },
    ],
  };

  // 채팅 상태
  const [chatList, setChatList] = useState(data.chatList);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState(data.messages);

  const handleChatClick = (id) => {
    const chat = chatList.find((chat) => chat.id === id);
    setSelectedChat(chat);
  };

  // 채팅 토글 기능
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseClick = () => {
    setIsOpen(false);
    setSelectedChat(null);
  };
  const handleBackClick = () => {
    setSelectedChat(null);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setIsOpen(false);
        setSelectedChat(null);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="ss-chat" ref={chatRef}>
      {/* 버튼 영역 */}
      <button className="ss-button --md" onClick={handleButtonClick}>
        채팅하기
      </button>

      {/* 채팅 영역 */}
      {isOpen && (
        <div className="chat__box">
          <ChatHeader
            chatList={chatList}
            selectedChat={selectedChat}
            handleCloseClick={handleCloseClick}
            handleBackClick={handleBackClick}
          />
          {selectedChat ? (
            <>
              <ChatContent messages={messages} />
              <ChatInput />
            </>
          ) : (
            <ChatList chatList={chatList} handleChatClick={handleChatClick} />
          )}
        </div>
      )}
    </div>
  );
};

const ChatHeader = ({ chatList, selectedChat, handleCloseClick, handleBackClick }) => {
  return (
    <div className="chat__header">
      {!selectedChat && (
        <>
          <div>
            <h6>대화중인 식구</h6>
            <span>{chatList.length}</span>
          </div>
          <div>
            <button onClick={handleCloseClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.3007 5.7107C17.9107 5.3207 17.2807 5.3207 16.8907 5.7107L12.0007 10.5907L7.1107 5.7007C6.7207 5.3107 6.0907 5.3107 5.7007 5.7007C5.3107 6.0907 5.3107 6.7207 5.7007 7.1107L10.5907 12.0007L5.7007 16.8907C5.3107 17.2807 5.3107 17.9107 5.7007 18.3007C6.0907 18.6907 6.7207 18.6907 7.1107 18.3007L12.0007 13.4107L16.8907 18.3007C17.2807 18.6907 17.9107 18.6907 18.3007 18.3007C18.6907 17.9107 18.6907 17.2807 18.3007 16.8907L13.4107 12.0007L18.3007 7.1107C18.6807 6.7307 18.6807 6.0907 18.3007 5.7107Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </>
      )}
      {selectedChat && (
        <>
          <div>
            <button onClick={handleBackClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.7539 4.43461L9.02884 12.1597L16.7539 19.8848C17.082 20.2128 17.082 20.745 16.7539 21.0732C16.4257 21.4014 15.8936 21.4014 15.5655 21.0732L7.24614 12.7539C7.08854 12.5962 7 12.3826 7 12.1597C7 11.9367 7.08854 11.723 7.24614 11.5654L15.5655 3.24614C15.6065 3.20512 15.6506 3.16922 15.6972 3.13845C16.0234 2.92308 16.4667 2.95898 16.7539 3.24614C17.082 3.57433 17.082 4.10643 16.7539 4.43461Z"
                  fill="#ACACAC"
                />
              </svg>
            </button>
            <img src={`${selectedChat.avatar}`} alt="" />
            <h6>{selectedChat.username}</h6>
          </div>
          <div>
            <button className="mr-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6ZM14 18C14 16.9 13.1 16 12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z"
                  fill="#171A19"
                />
              </svg>
            </button>
            <button onClick={handleCloseClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.3007 5.7107C17.9107 5.3207 17.2807 5.3207 16.8907 5.7107L12.0007 10.5907L7.1107 5.7007C6.7207 5.3107 6.0907 5.3107 5.7007 5.7007C5.3107 6.0907 5.3107 6.7207 5.7007 7.1107L10.5907 12.0007L5.7007 16.8907C5.3107 17.2807 5.3107 17.9107 5.7007 18.3007C6.0907 18.6907 6.7207 18.6907 7.1107 18.3007L12.0007 13.4107L16.8907 18.3007C17.2807 18.6907 17.9107 18.6907 18.3007 18.3007C18.6907 17.9107 18.6907 17.2807 18.3007 16.8907L13.4107 12.0007L18.3007 7.1107C18.6807 6.7307 18.6807 6.0907 18.3007 5.7107Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const ChatList = ({ chatList, handleChatClick }) => {
  const timeStamp = (date) => {
    const nowDate = new Date();
    const targetDate = new Date(date);
    const timeDiff = nowDate.getTime() - targetDate.getTime();
    const minutesDiff = Math.round(timeDiff / (1000 * 60));
    let displayString;
    if (minutesDiff === 0) {
      displayString = '방금';
    } else if (minutesDiff < 60) {
      displayString = minutesDiff + '분 전';
    } else if (minutesDiff < 2440) {
      displayString = Math.round(minutesDiff / 60) + '시간 전';
    } else if (minutesDiff < 10080) {
      displayString = Math.round(minutesDiff / 420) + '일 전';
    } else {
      displayString = Math.round(minutesDiff / 2940) + '주 전';
    }
    return displayString;
  };

  return (
    <div className="chat__list">
      {chatList.length > 0 ? (
        <ul className="list">
          {chatList.map((chat) => (
            <li className="list__item" key={chat.id} onClick={() => handleChatClick(chat.id)}>
              <div className="item__user">
                <div>
                  <img src={`${chat.avatar}`} alt="" />
                </div>
                <div>
                  <h6>{chat.username}</h6>
                  <span>{chat.latestContent}</span>
                </div>
              </div>
              <div className="item__status">
                <div />
                <span>{timeStamp(chat.latestTimestamp)}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="nodata">
          <div>
            <svg width="94" height="29" viewBox="0 0 94 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5042 7.618C20.9018 6.6163 21.129 5.94615 21.4307 5.30774C22.6554 2.73646 24.8883 2.21798 27.1247 3.98154C28.8002 5.30421 30.0107 7.01486 31.0473 8.84544C33.589 13.3284 35.3745 18.1147 36.7448 23.0633C36.8335 23.3807 36.9081 23.7087 36.9187 24.0332C36.9507 24.9115 36.6738 25.2148 35.8005 25.3206C35.6372 25.3418 35.4704 25.3418 35.3035 25.3383C29.9894 25.1866 24.6895 25.6416 19.3789 25.6663C15.1262 25.6839 10.8699 25.9943 6.6101 25.9626C4.99847 25.952 3.41169 25.7157 1.81425 25.5887C0.330417 25.4723 -0.191411 24.8127 0.0641783 23.3983C0.990689 18.2487 2.03079 13.1238 4.73578 8.52095C5.63389 6.9937 6.63495 5.54758 7.95194 4.34483C11.3172 1.27624 15.0445 1.39263 18.2217 4.61995C19.031 5.44177 19.6664 6.39762 20.5042 7.61448V7.618ZM21.4343 9.51912C21.5834 10.2528 21.7609 10.7712 21.1716 10.93C20.6356 11.0746 20.4297 10.5667 20.2273 10.1822C19.9185 9.59672 19.638 9.00063 19.3328 8.41513C18.7435 7.28645 18.03 6.24948 17.1212 5.34301C14.6434 2.87402 11.6367 2.74705 8.99915 5.05731C7.31652 6.53165 6.09892 8.36575 5.10141 10.348C4.81743 10.9159 4.72158 11.4767 4.93457 12.0939C5.49545 13.7199 6.20187 15.2648 7.30587 16.6016C8.59801 18.1676 10.2735 18.2629 11.7361 16.8167C12.439 16.1219 13.0282 15.3107 13.7027 14.5841C14.867 13.3214 15.8717 13.2826 17.1177 14.4465C17.7602 15.0461 18.3211 15.741 19.1233 16.1607C20.4084 16.8308 21.4307 16.658 22.3963 15.5858C22.6909 15.2577 22.9217 14.8733 23.2234 14.5523C24.086 13.6317 24.8599 13.5718 25.8219 14.3654C26.2479 14.7146 26.6135 15.1343 27.0217 15.5011C27.7282 16.1325 28.5269 16.6298 29.4569 16.8591C30.3302 17.0707 31.097 16.8767 31.6862 16.1431C32.24 15.4553 32.5027 14.7781 32.1051 13.8751C31.0615 11.5014 29.8971 9.19463 28.3529 7.09599C27.6678 6.1613 26.8833 5.29363 25.9177 4.63758C24.7285 3.8334 23.692 4.0027 22.9075 5.16313C21.9632 6.55987 21.5976 8.15765 21.4414 9.51912H21.4343ZM33.1523 16.6615C30.9834 18.5203 30.1456 18.9965 26.9862 17.0213C26.3863 16.6474 25.8716 16.1219 25.3604 15.6246C24.796 15.0743 24.3203 15.0743 23.8659 15.7304C23.7417 15.9103 23.6103 16.0901 23.4683 16.2595C22.0271 17.9384 20.1812 18.2311 18.2785 17.0848C17.5578 16.651 17.0041 16.0443 16.4254 15.4482C15.6303 14.6264 15.2682 14.637 14.5298 15.487C13.7701 16.3582 13.0602 17.2753 12.1905 18.0512C11.0403 19.0812 9.74462 19.2258 8.32113 18.7531C7.39107 18.4427 6.72724 17.829 6.14152 17.0566C5.28601 15.9208 4.75353 14.6088 4.12876 13.3707C3.96901 13.4272 3.89092 13.4307 3.87672 13.466C2.45678 16.5416 1.8036 19.8289 1.21078 23.1268C1.03329 24.1214 1.34567 24.4142 2.38578 24.4706C3.87672 24.5517 5.3712 24.5552 6.86569 24.594C11.4059 24.7104 15.9356 24.3824 20.4687 24.2519C24.8954 24.1249 29.322 24.1673 33.7522 24.1355C34.0291 24.1355 34.306 24.1285 34.5829 24.1249C35.339 24.1108 35.5449 23.7299 35.3426 23.0421C34.7214 20.9364 34.1463 18.8166 33.1523 16.6686V16.6615Z"
                fill="#ADADAD"
              />
              <path
                d="M93.9902 10.7957C94.0931 15.4338 93.3831 20.1602 92.3608 24.8513C92.2294 25.4614 91.9952 26.0611 91.7325 26.6325C90.9799 28.269 89.812 29.0838 87.8596 28.9921C85.2078 28.8651 82.6023 28.4031 79.9683 28.1703C78.346 28.0257 77.7425 27.1686 77.6822 25.4791C77.5686 22.1918 78.0372 18.9715 78.7933 15.783C79.4109 13.18 79.3896 13.0918 76.6811 13.4586C74.2992 13.7831 71.9314 13.762 69.5495 13.6526C69.0738 13.6315 68.5981 13.5821 68.1295 13.5045C66.383 13.2118 65.7547 12.5628 65.6801 10.7745C65.6162 9.3037 65.5488 7.82584 65.7582 6.35855C65.847 5.74131 65.7795 5.23693 65.3535 4.75018C65.1193 4.48212 64.9453 4.12588 64.8424 3.78375C64.4483 2.47872 65.4565 1.32888 66.7309 1.76624C67.6822 2.09073 68.4455 1.92496 69.3081 1.61105C71.1078 0.955 72.9999 0.634032 74.8849 0.408296C78.8359 -0.0572839 82.801 -0.163098 86.7733 0.249576C87.9909 0.376552 89.1659 0.679885 90.3551 0.937365C91.9064 1.27244 92.8507 2.23535 93.2873 3.72732C93.6884 5.09937 93.9334 6.49611 93.9724 7.92107C93.9973 8.81696 93.976 9.70932 93.976 10.7851L93.9902 10.7957ZM92.6803 11.092C92.6128 9.09913 92.7406 7.16274 92.3643 5.21929C92.0129 3.39224 91.1751 2.32352 89.2369 1.99903C84.5156 1.21248 79.7801 1.03612 75.034 1.55108C73.2555 1.74155 71.4664 2.05546 69.7695 2.70445C69.2797 2.89139 68.7259 3.01837 68.4455 3.51569C67.6361 4.96534 66.6066 6.33386 66.9794 8.17502C67.1036 8.78169 66.9971 9.4342 67.0078 10.0656C67.0326 11.9984 67.2953 12.2665 69.1945 12.3264C71.9456 12.4111 74.7003 12.5698 77.4337 12.0513C77.8952 11.9631 78.385 11.9737 78.8607 11.9949C80.16 12.0513 80.7031 12.6298 80.5398 13.9136C80.4156 14.9012 80.1706 15.8783 79.9399 16.8517C79.2867 19.6346 78.9566 22.4493 79.0737 25.3063C79.127 26.5866 79.2548 26.7347 80.5291 26.9076C82.6804 27.1968 84.8316 27.4754 86.9863 27.74C89.2298 28.0151 90.1954 27.4119 90.8663 25.2322C91.3952 23.518 91.6579 21.7403 91.9242 19.9732C92.0591 19.0668 91.8567 18.8728 90.884 18.8234C90.0392 18.7775 89.1837 18.8446 88.3424 18.7776C86.3154 18.6224 85.1439 17.6101 84.6505 15.6596C84.4801 14.9929 84.3665 14.3122 84.4446 13.628C84.7251 11.2789 85.0233 8.92982 85.3214 6.58076C85.3747 6.16103 85.4812 5.74483 85.7581 5.41328C85.8433 5.30747 86.0385 5.21576 86.1628 5.23693C86.2834 5.25809 86.4503 5.41681 86.4751 5.53673C86.5213 5.78716 86.5071 6.05522 86.4822 6.31623C86.2799 8.41134 86.0705 10.5064 85.8575 12.598C85.7758 13.3881 85.7261 14.1782 85.8575 14.9612C86.1166 16.5026 86.9757 17.2891 88.5234 17.3914C89.3683 17.4478 90.2202 17.3984 91.0651 17.4267C91.9029 17.4549 92.2933 17.0881 92.4247 16.2486C92.6909 14.5203 92.5986 12.7814 92.6732 11.0955L92.6803 11.092Z"
                fill="#ADADAD"
              />
              <path
                d="M52.0097 2.34967C58.3177 2.33203 63.2698 6.27888 64.1324 12.1445C64.7039 16.0384 63.4402 19.4844 60.8346 22.3414C56.8943 26.6621 51.9813 28.5174 46.1631 27.1383C39.2373 25.4946 35.6626 18.5885 38.1582 11.947C40.2845 6.27888 45.9359 2.3673 52.0132 2.34967H52.0097ZM62.8935 13.7317C62.8864 9.20992 60.1992 5.64047 55.8932 4.15555C49.5567 1.96874 41.6477 6.00729 39.3829 12.0598C37.0897 18.197 40.1567 24.2954 46.4293 25.9391C48.2113 26.4082 50.0147 26.447 51.8535 26.1366C57.7746 25.1419 63.11 19.8054 62.8935 13.7282V13.7317Z"
                fill="#ADADAD"
              />
              <path
                d="M79.2859 6.07731C79.3108 5.20611 79.9711 4.36666 80.7485 4.23263C81.3555 4.12682 81.7637 4.41604 82.0406 4.92747C82.4666 5.71402 82.2714 6.54289 81.4939 7.17072C81.0715 7.51285 80.6207 7.78444 80.0456 7.52696C79.5522 7.30475 79.2682 6.76158 79.2859 6.07731Z"
                fill="#ADADAD"
              />
              <path
                d="M49.9632 19.2582C49.1325 19.2123 48.3196 19.0571 47.5919 18.6198C47.1056 18.327 46.7222 17.9355 46.5909 17.3606C46.527 17.0819 46.5412 16.7892 46.7896 16.6093C47.0736 16.4083 47.3257 16.5705 47.489 16.8068C48.135 17.7274 49.0615 17.9426 50.1158 17.8932C51.1666 17.8438 52.0896 17.5969 52.5333 16.5035C52.6859 16.1296 52.8989 15.7558 53.3853 15.9603C53.8893 16.1755 53.8858 16.6375 53.7686 17.0925C53.6267 17.6533 53.2646 18.059 52.7889 18.3764C51.9369 18.9478 50.9749 19.17 49.9597 19.2547L49.9632 19.2582Z"
                fill="#ADADAD"
              />
              <path
                d="M54.8838 12.2675C54.9051 12.9976 54.2591 13.6713 53.542 13.6678C52.8533 13.6643 52.3031 13.0929 52.3067 12.3874C52.3102 11.6644 52.8498 11.0859 53.5207 11.0859C54.2307 11.0859 54.8661 11.6397 54.8838 12.2675Z"
                fill="#ADADAD"
              />
              <path
                d="M46.2018 12.6206C46.1556 13.3542 45.4563 14.0243 44.7925 13.9714C44.1677 13.9221 43.6565 13.3648 43.6743 12.7546C43.6956 12.0386 44.4055 11.3614 45.0836 11.4107C45.6977 11.4566 46.2373 12.0421 46.2018 12.6206Z"
                fill="#ADADAD"
              />
            </svg>
            <span>현재 대화를 진행중인 식구가 없습니다.</span>
          </div>
        </div>
      )}
    </div>
  );
};

const ChatContent = ({ messages }) => {
  return (
    <div className="chat__content">
      {messages.length > 0 ? (
        <div className="content">
          <div className="content__notification">
            <span>입양에 대한 결정이 확실하신가요?</span>
            <button>입양요청 취소</button>
          </div>
          {/* <div className="content__notification">반려동물을 만나본 뒤 메뉴에서 입양확정 버튼을 눌러주세요</div> */}
          <div className="content__date">2023.03.20</div>
          <div className="content__bubble mb-30">
            <div className="content__avatar">
              <img src="/src/assets/images/samples/sample2.jpg" alt="" />
            </div>
            <div className="content__message">안녕하세요 혹시 지금 분양가능할까요?</div>
            <div className="content__timestamp">오후 03:20</div>
          </div>
          <div className="content__bubble --mine mb-6">
            <div className="content__avatar">
              <img src="/src/assets/images/samples/sample2.jpg" alt="" />
            </div>
            <div className="content__message">안녕하세요 혹시 지금 분양가능할까요?</div>
            <div className="content__timestamp">오후 03:20</div>
          </div>
          <div className="content__bubble --mine mb-30">
            <div className="content__avatar">
              <img src="/src/assets/images/samples/sample2.jpg" alt="" />
            </div>
            <div className="content__message">안녕하세요 혹시 지금 분양가능할까요?</div>
            <div className="content__timestamp">오후 03:20</div>
          </div>
          <div className="content__bubble  mb-30">
            <div className="content__avatar">
              <img src="/src/assets/images/samples/sample2.jpg" alt="" />
            </div>
            <div className="content__message">안녕하세요 혹시 지금 분양가능할까요?</div>
            <div className="content__timestamp">오후 03:20</div>
          </div>
          <div className="content__bubble --mine mb-30">
            <div className="content__avatar">
              <img src="/src/assets/images/samples/sample2.jpg" alt="" />
            </div>
            <div className="content__message">안녕하세요 혹시 지금 분양가능할까요?</div>
            <div className="content__timestamp">오후 03:20</div>
          </div>
          <div className="content__bubble">
            <div className="content__avatar">
              <img src="/src/assets/images/samples/sample2.jpg" alt="" />
            </div>
            <div className="content__typing">
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      ) : (
        <div className="nodata">
          <div>
            <svg width="94" height="29" viewBox="0 0 94 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5042 7.618C20.9018 6.6163 21.129 5.94615 21.4307 5.30774C22.6554 2.73646 24.8883 2.21798 27.1247 3.98154C28.8002 5.30421 30.0107 7.01486 31.0473 8.84544C33.589 13.3284 35.3745 18.1147 36.7448 23.0633C36.8335 23.3807 36.9081 23.7087 36.9187 24.0332C36.9507 24.9115 36.6738 25.2148 35.8005 25.3206C35.6372 25.3418 35.4704 25.3418 35.3035 25.3383C29.9894 25.1866 24.6895 25.6416 19.3789 25.6663C15.1262 25.6839 10.8699 25.9943 6.6101 25.9626C4.99847 25.952 3.41169 25.7157 1.81425 25.5887C0.330417 25.4723 -0.191411 24.8127 0.0641783 23.3983C0.990689 18.2487 2.03079 13.1238 4.73578 8.52095C5.63389 6.9937 6.63495 5.54758 7.95194 4.34483C11.3172 1.27624 15.0445 1.39263 18.2217 4.61995C19.031 5.44177 19.6664 6.39762 20.5042 7.61448V7.618ZM21.4343 9.51912C21.5834 10.2528 21.7609 10.7712 21.1716 10.93C20.6356 11.0746 20.4297 10.5667 20.2273 10.1822C19.9185 9.59672 19.638 9.00063 19.3328 8.41513C18.7435 7.28645 18.03 6.24948 17.1212 5.34301C14.6434 2.87402 11.6367 2.74705 8.99915 5.05731C7.31652 6.53165 6.09892 8.36575 5.10141 10.348C4.81743 10.9159 4.72158 11.4767 4.93457 12.0939C5.49545 13.7199 6.20187 15.2648 7.30587 16.6016C8.59801 18.1676 10.2735 18.2629 11.7361 16.8167C12.439 16.1219 13.0282 15.3107 13.7027 14.5841C14.867 13.3214 15.8717 13.2826 17.1177 14.4465C17.7602 15.0461 18.3211 15.741 19.1233 16.1607C20.4084 16.8308 21.4307 16.658 22.3963 15.5858C22.6909 15.2577 22.9217 14.8733 23.2234 14.5523C24.086 13.6317 24.8599 13.5718 25.8219 14.3654C26.2479 14.7146 26.6135 15.1343 27.0217 15.5011C27.7282 16.1325 28.5269 16.6298 29.4569 16.8591C30.3302 17.0707 31.097 16.8767 31.6862 16.1431C32.24 15.4553 32.5027 14.7781 32.1051 13.8751C31.0615 11.5014 29.8971 9.19463 28.3529 7.09599C27.6678 6.1613 26.8833 5.29363 25.9177 4.63758C24.7285 3.8334 23.692 4.0027 22.9075 5.16313C21.9632 6.55987 21.5976 8.15765 21.4414 9.51912H21.4343ZM33.1523 16.6615C30.9834 18.5203 30.1456 18.9965 26.9862 17.0213C26.3863 16.6474 25.8716 16.1219 25.3604 15.6246C24.796 15.0743 24.3203 15.0743 23.8659 15.7304C23.7417 15.9103 23.6103 16.0901 23.4683 16.2595C22.0271 17.9384 20.1812 18.2311 18.2785 17.0848C17.5578 16.651 17.0041 16.0443 16.4254 15.4482C15.6303 14.6264 15.2682 14.637 14.5298 15.487C13.7701 16.3582 13.0602 17.2753 12.1905 18.0512C11.0403 19.0812 9.74462 19.2258 8.32113 18.7531C7.39107 18.4427 6.72724 17.829 6.14152 17.0566C5.28601 15.9208 4.75353 14.6088 4.12876 13.3707C3.96901 13.4272 3.89092 13.4307 3.87672 13.466C2.45678 16.5416 1.8036 19.8289 1.21078 23.1268C1.03329 24.1214 1.34567 24.4142 2.38578 24.4706C3.87672 24.5517 5.3712 24.5552 6.86569 24.594C11.4059 24.7104 15.9356 24.3824 20.4687 24.2519C24.8954 24.1249 29.322 24.1673 33.7522 24.1355C34.0291 24.1355 34.306 24.1285 34.5829 24.1249C35.339 24.1108 35.5449 23.7299 35.3426 23.0421C34.7214 20.9364 34.1463 18.8166 33.1523 16.6686V16.6615Z"
                fill="#ADADAD"
              />
              <path
                d="M93.9902 10.7957C94.0931 15.4338 93.3831 20.1602 92.3608 24.8513C92.2294 25.4614 91.9952 26.0611 91.7325 26.6325C90.9799 28.269 89.812 29.0838 87.8596 28.9921C85.2078 28.8651 82.6023 28.4031 79.9683 28.1703C78.346 28.0257 77.7425 27.1686 77.6822 25.4791C77.5686 22.1918 78.0372 18.9715 78.7933 15.783C79.4109 13.18 79.3896 13.0918 76.6811 13.4586C74.2992 13.7831 71.9314 13.762 69.5495 13.6526C69.0738 13.6315 68.5981 13.5821 68.1295 13.5045C66.383 13.2118 65.7547 12.5628 65.6801 10.7745C65.6162 9.3037 65.5488 7.82584 65.7582 6.35855C65.847 5.74131 65.7795 5.23693 65.3535 4.75018C65.1193 4.48212 64.9453 4.12588 64.8424 3.78375C64.4483 2.47872 65.4565 1.32888 66.7309 1.76624C67.6822 2.09073 68.4455 1.92496 69.3081 1.61105C71.1078 0.955 72.9999 0.634032 74.8849 0.408296C78.8359 -0.0572839 82.801 -0.163098 86.7733 0.249576C87.9909 0.376552 89.1659 0.679885 90.3551 0.937365C91.9064 1.27244 92.8507 2.23535 93.2873 3.72732C93.6884 5.09937 93.9334 6.49611 93.9724 7.92107C93.9973 8.81696 93.976 9.70932 93.976 10.7851L93.9902 10.7957ZM92.6803 11.092C92.6128 9.09913 92.7406 7.16274 92.3643 5.21929C92.0129 3.39224 91.1751 2.32352 89.2369 1.99903C84.5156 1.21248 79.7801 1.03612 75.034 1.55108C73.2555 1.74155 71.4664 2.05546 69.7695 2.70445C69.2797 2.89139 68.7259 3.01837 68.4455 3.51569C67.6361 4.96534 66.6066 6.33386 66.9794 8.17502C67.1036 8.78169 66.9971 9.4342 67.0078 10.0656C67.0326 11.9984 67.2953 12.2665 69.1945 12.3264C71.9456 12.4111 74.7003 12.5698 77.4337 12.0513C77.8952 11.9631 78.385 11.9737 78.8607 11.9949C80.16 12.0513 80.7031 12.6298 80.5398 13.9136C80.4156 14.9012 80.1706 15.8783 79.9399 16.8517C79.2867 19.6346 78.9566 22.4493 79.0737 25.3063C79.127 26.5866 79.2548 26.7347 80.5291 26.9076C82.6804 27.1968 84.8316 27.4754 86.9863 27.74C89.2298 28.0151 90.1954 27.4119 90.8663 25.2322C91.3952 23.518 91.6579 21.7403 91.9242 19.9732C92.0591 19.0668 91.8567 18.8728 90.884 18.8234C90.0392 18.7775 89.1837 18.8446 88.3424 18.7776C86.3154 18.6224 85.1439 17.6101 84.6505 15.6596C84.4801 14.9929 84.3665 14.3122 84.4446 13.628C84.7251 11.2789 85.0233 8.92982 85.3214 6.58076C85.3747 6.16103 85.4812 5.74483 85.7581 5.41328C85.8433 5.30747 86.0385 5.21576 86.1628 5.23693C86.2834 5.25809 86.4503 5.41681 86.4751 5.53673C86.5213 5.78716 86.5071 6.05522 86.4822 6.31623C86.2799 8.41134 86.0705 10.5064 85.8575 12.598C85.7758 13.3881 85.7261 14.1782 85.8575 14.9612C86.1166 16.5026 86.9757 17.2891 88.5234 17.3914C89.3683 17.4478 90.2202 17.3984 91.0651 17.4267C91.9029 17.4549 92.2933 17.0881 92.4247 16.2486C92.6909 14.5203 92.5986 12.7814 92.6732 11.0955L92.6803 11.092Z"
                fill="#ADADAD"
              />
              <path
                d="M52.0097 2.34967C58.3177 2.33203 63.2698 6.27888 64.1324 12.1445C64.7039 16.0384 63.4402 19.4844 60.8346 22.3414C56.8943 26.6621 51.9813 28.5174 46.1631 27.1383C39.2373 25.4946 35.6626 18.5885 38.1582 11.947C40.2845 6.27888 45.9359 2.3673 52.0132 2.34967H52.0097ZM62.8935 13.7317C62.8864 9.20992 60.1992 5.64047 55.8932 4.15555C49.5567 1.96874 41.6477 6.00729 39.3829 12.0598C37.0897 18.197 40.1567 24.2954 46.4293 25.9391C48.2113 26.4082 50.0147 26.447 51.8535 26.1366C57.7746 25.1419 63.11 19.8054 62.8935 13.7282V13.7317Z"
                fill="#ADADAD"
              />
              <path
                d="M79.2859 6.07731C79.3108 5.20611 79.9711 4.36666 80.7485 4.23263C81.3555 4.12682 81.7637 4.41604 82.0406 4.92747C82.4666 5.71402 82.2714 6.54289 81.4939 7.17072C81.0715 7.51285 80.6207 7.78444 80.0456 7.52696C79.5522 7.30475 79.2682 6.76158 79.2859 6.07731Z"
                fill="#ADADAD"
              />
              <path
                d="M49.9632 19.2582C49.1325 19.2123 48.3196 19.0571 47.5919 18.6198C47.1056 18.327 46.7222 17.9355 46.5909 17.3606C46.527 17.0819 46.5412 16.7892 46.7896 16.6093C47.0736 16.4083 47.3257 16.5705 47.489 16.8068C48.135 17.7274 49.0615 17.9426 50.1158 17.8932C51.1666 17.8438 52.0896 17.5969 52.5333 16.5035C52.6859 16.1296 52.8989 15.7558 53.3853 15.9603C53.8893 16.1755 53.8858 16.6375 53.7686 17.0925C53.6267 17.6533 53.2646 18.059 52.7889 18.3764C51.9369 18.9478 50.9749 19.17 49.9597 19.2547L49.9632 19.2582Z"
                fill="#ADADAD"
              />
              <path
                d="M54.8838 12.2675C54.9051 12.9976 54.2591 13.6713 53.542 13.6678C52.8533 13.6643 52.3031 13.0929 52.3067 12.3874C52.3102 11.6644 52.8498 11.0859 53.5207 11.0859C54.2307 11.0859 54.8661 11.6397 54.8838 12.2675Z"
                fill="#ADADAD"
              />
              <path
                d="M46.2018 12.6206C46.1556 13.3542 45.4563 14.0243 44.7925 13.9714C44.1677 13.9221 43.6565 13.3648 43.6743 12.7546C43.6956 12.0386 44.4055 11.3614 45.0836 11.4107C45.6977 11.4566 46.2373 12.0421 46.2018 12.6206Z"
                fill="#ADADAD"
              />
            </svg>
            <p>
              MEKC123 님에게
              <br />
              궁금한 사항을 문의해보세요!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const ChatInput = () => {
  return (
    <div className="chat__input">
      <div className="input">
        <div className="input__expand">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.008 3.09753C11.4565 3.09753 11.011 3.543 11.011 4.09455L11.0039 11.003L4.08841 11.003C3.53687 11.003 3.09139 11.4485 3.09139 12C3.09139 12.5515 3.53687 12.997 4.08841 12.997L11.0039 12.997L11.0039 19.9125C11.0039 20.4641 11.4494 20.9095 12.0009 20.9095C12.5525 20.9095 12.998 20.4641 12.998 19.9125L12.998 12.997L19.9135 12.997C20.465 12.997 20.9105 12.5515 20.9105 12C20.9105 11.4485 20.465 11.003 19.9135 11.003L12.998 11.003L12.998 4.08748C12.998 3.55008 12.5454 3.09753 12.008 3.09753Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="input__input">
          <input type="text" placeholder="새식이님에게 보내기" />
          <button className="input__emoji">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.25 8C8.25 8.6904 7.69036 9.25 7 9.25C6.30964 9.25 5.75 8.6904 5.75 8C5.75 7.30965 6.30964 6.75 7 6.75C7.69036 6.75 8.25 7.30965 8.25 8Z"
                fill="#D9D9D9"
              />
              <path
                d="M13 9.25C13.6904 9.25 14.25 8.6904 14.25 8C14.25 7.30965 13.6904 6.75 13 6.75C12.3096 6.75 11.75 7.30965 11.75 8C11.75 8.6904 12.3096 9.25 13 9.25Z"
                fill="#D9D9D9"
              />
              <path
                d="M6.53514 12C6.89369 11.7926 7.34732 11.9231 7.63093 12.225C8.22431 12.8567 9.06651 13.25 10 13.25C10.9335 13.25 11.7757 12.8567 12.3691 12.225C12.6527 11.9231 13.1063 11.7926 13.4649 12C13.8234 12.2074 13.9501 12.671 13.6889 12.9925C12.8187 14.0638 11.4898 14.75 10 14.75C8.51021 14.75 7.18128 14.0638 6.3111 12.9925C6.04995 12.671 6.1766 12.2074 6.53514 12Z"
                fill="#D9D9D9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5Z"
                fill="#D9D9D9"
              />
            </svg>
          </button>
          <button className="input__send">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="#D9D9D9" />
              <path
                d="M22.2322 12.7668L11.0543 17.613C10.4223 17.8893 10.4376 18.8206 11.0696 19.0732L15.1356 20.707C15.3336 20.786 15.4935 20.9517 15.5696 21.1569L17.1382 25.3638C17.3818 26.0268 18.288 26.0426 18.5545 25.3875L23.2373 13.8086C23.4885 13.1535 22.8566 12.4984 22.2322 12.7668Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
