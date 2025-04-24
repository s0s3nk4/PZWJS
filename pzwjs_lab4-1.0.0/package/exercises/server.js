const { createServer } = require('http');
const net = require('net');

const server = net.createServer((socket) =>
{
    console.log('New connection with client');

    socket.on('data', (data) =>
    {
        console.log(`Received from client: ${data.toString()}`);
        socket.write(`Server received: ${data.toString()}`);
    });

    socket.on('end', () =>
    {
        console.log('Connection with server ended');
    });

    socket.on('error', (err) =>
    {
        console.error(`Error: ${err.message}`);
    });
});

server.listen(8080, (req, res) =>
{
    console.log('Server listening on port 8080');
});