const { Router } = require('express');

routerNews = require('./news');

const router = new Router();

router.use('/', routerNews);

module.exports = router;
