const express = require('express');
const app = express();

const PORT = 8080;

app.get('/ex9get', (req, res) =>
{
    res.send('<h1>Metoda app.get</h1>')
});

app.route('/ex9route')
    .get((req, res) =>
    {
        res.send('<h1>GET dla route</h1>')
    })
    .post((req, res) =>
    {
        res.send('<h1>POST dla route</h1>')
    });

app.use((req, res) =>
{
    res.status(404).send('<h1>Error 404</h1>')
});

app.listen(PORT, () =>
{
    console.log(`Server works on http://localhost:${PORT}`);
});