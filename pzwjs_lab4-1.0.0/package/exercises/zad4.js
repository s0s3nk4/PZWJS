const http = require('http');

const server = http.createServer((req, res) =>
{
    if(req.url === '/newpage')
    {
        res.writeHead(200,
            {
                'Content-Type': 'text/html; charset=utf-8'
            }
        );
        res.write('<h1>Welcome on new site !</h1>');
        res.write('<p>Here is content of our new web page.</p>');
        res.end();
    }
    else if(req.url === '/oldpage')
    {
        res.writeHead(200,
            {
                'Content-Type': 'text/html; charset=utf-8'
            }
        );
        res.write('<h1>This is our old site ...</h1>');
        res.write('<p>We recommend you to visit our new site.</p>');
        res.end();
    }
    else
    {
        res.writeHead(404,
            {
                'Content-Type': 'text/html; charset=utf-8'
            }
        );
        res.write('<h1>Error 404</h1>');
        res.write('<p>Page not found</p>');
        res.end();
    }
});

server.listen(8080, () =>
{
    console.log('Server works on http://localhost:8080');
});