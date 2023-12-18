import {backendApi} from "@/api/http";

function socketConnection() {
    const websocket = new WebSocket("ws://127.0.0.1:8080/ws/chat?mode=chatList&chatId=0&memberId="+1);
    websocket.onmessage = onMessage;
}

function onMessage(msg) {
    console.log(msg);
}

export {
    socketConnection,
}