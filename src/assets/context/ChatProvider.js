import React, { createContext, useContext } from 'react';

const WebSocketContext = createContext();

export function WebSocketProvider({ children }) {
    const socket = new WebSocket('ws://127.0.0.1:8090/ws/chat?memberId=1');

    return (
        <WebSocketContext.Provider value={socket}>
            {children}
        </WebSocketContext.Provider>
    );
}

export function useWebSocket() {
    return useContext(WebSocketContext);
}