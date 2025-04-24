const http = require('https');
const url = 'https://www.w3schools.com/java/';

http.get(url, (res) => 
{
    let data = '';

    res.on('data', (chunk) => 
    {
        data += chunk;
    });

    res.on('end', () => 
    {
        console.log('Answear from server:');
        console.log(data);
    });
}).on('error', (err) =>
{
    console.error("Connection error: ", err.message);
});