const querystring = require('querystring');

exports.query = (req, res) =>
{
    const queryParameters = req.url.split('?')[1];
    const params = querystring.parse(queryParameters);

    const name = params['name'];
    const surname = params['surname'];

    res.send('Hello ' + name + " " + surname)
}