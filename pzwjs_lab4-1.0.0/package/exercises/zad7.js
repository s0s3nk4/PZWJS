const https = require('https');
const fs = require('fs');

const options = 
{
    key: '',
    cert: '',
};

const server = https.createServer(options, (req, res) => 
{
    if(req.url === '/newhttps')
    {
        res.writeHead(200,
            {
                'Content-Type': 'text/html; charset=utf-8'
            }
        );
        res.write('<h1>Welcome on new secured site !</h1>');
        res.write('<p>Here is content of our new web page.</p>');
        res.end();
    }
    else if(req.url === '/oldhttps')
    {
        
        res.writeHead(200,
            {
                'Content-Type': 'text/html; charset=utf-8'
            }
        );
        res.write('<h1>Welcome on old secured site !</h1>');
        res.write('<p>Here is content of our old web page.</p>');
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
    console.log('Server HTTPS works on https://localhost:8080');
})