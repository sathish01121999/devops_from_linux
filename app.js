const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Our extraordinary output on the floor to show the reployment");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
