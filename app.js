const http = require("http");
const client = require("prom-client");

const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics();

const counter = new client.Counter({
    name: "http_requests_total",
    help: "Total HTTP Requests"
});

const server = http.createServer(async (req, res) => {

    if (req.url === "/metrics") {
        res.setHeader("Content-Type", client.register.contentType);
        res.end(await client.register.metrics());
        return;
    }

    counter.inc();

    res.end("I just uninstalled PUBG to revisit you, what's up!");
});

server.listen(3003, () => {
    console.log("Server running on port 3003");
});
