const express = require('express');
const router = express.Router();
const url = require('url');

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');
const QueryStringCont = require('../controllers/QueryStringCont');

router.get('/new', (req, res) =>
{
    const parsedUrl = url.parse(req.url, true);
    parsedUrl.pathname = '/server1';

    const newUrl = url.format(parsedUrl);

    res.redirect(newUrl);
});

router.get('/', PagesController.home);
router.post('/applications', ApplicationsController.store);
router.get('/hello', QueryStringCont.query);

module.exports = router;