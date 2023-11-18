// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5173;

// 정적 파일 서빙 (빌드된 프론트엔드 파일)
app.use(express.static(path.join(__dirname, '/dist')));

// 기본 라우트
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,  '/dist', 'index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})


// 서버 시작
app.listen(port, () => {
    console.log(`Frontend server is running at http://3.38.46.230:${port}`);
});