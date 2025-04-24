const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const contactController = require('./controllers/contactController');
const servicesController = require('./controllers/servicesController');

app.get('/', homeController);
app.get('/about', aboutController);
app.get('/contact', contactController);
app.get('/services', servicesController);

const PORT = 8080;
app.listen(PORT, () =>
{
    console.log(`Server works on port http://localhost:${PORT}`);
});