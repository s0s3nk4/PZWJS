    const net = require('net');

    const client = net.createConnection({port: 8080}, () =>
    {
        console.log('Connected with server');
        client.write('Hello on our server');
    });

    client.on('data', (data) =>
    {
        console.log(`Received from server: ${data.toString()}`);
        client.end();
    });

    client.on('end', () =>
    {
        console.log(`Connection with server ended`);
    });

    client.on('error', (err) =>
    {
        console.error(`Error: ${err.message}`);
    });