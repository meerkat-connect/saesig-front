// WebSocketContext.js
import React, { createContext, useContext, useState } from 'react';

const WebSocketContext = createContext();

export function WebSocketProvider({ children }) {
    const [socket, setSocket] = useState(new WebSocket('ws://127.0.0.1:8080/ws/chat?mode=chatList&chatId=0&memberId=1'));

    const updateWebSocket = () => {
        // 로그인 시점에 호출되어야 하는 함수
        const newSocket = new WebSocket('ws://127.0.0.1:8080/ws/chat?mode=chatList&chatId=0&memberId=1');
        setSocket(newSocket);
    };

    return (
        <WebSocketContext.Provider value={{ socket, updateWebSocket }}>
            {children}
        </WebSocketContext.Provider>
    );
}

export function useWebSocket() {
    return useContext(WebSocketContext);
}