const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Came to check the output so far, what's up!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
