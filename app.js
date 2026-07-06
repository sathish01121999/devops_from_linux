const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hiii Buddy, it's me. Any update?");
});

server.listen(3003, () => {
    console.log("Server running on port 3003");
});
