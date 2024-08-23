const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method === "POST"){
        const params = new URL(req.url).searchParams;
        console.log(params);
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});