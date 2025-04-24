const http = require('http');

const server = http.createServer((req, res) => 
{
    console.log(`Request received: ${req.method} ${req.url}`);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to our new server!\n')
});

const PORT = 8080;

server.listen(PORT, () => 
{
    console.log(`Server is online on http://localhost:${PORT}`);
});