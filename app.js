const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Modified DevOps output to check the latest changes --> First DevOps output via Kali Linux");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
