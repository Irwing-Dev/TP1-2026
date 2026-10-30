const http = require("http");
const port = 8080;

const currentDate = new Date();

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html; charset=UTF-8'
    });
    res.write(`Olá, segundo o sistema desse computador, agora são: ${currentDate.getHours()}:${currentDate.getMinutes()}`);
    res.end();
}).listen(port);

console.log(`porta rodando em http://localhost:${port}`);
