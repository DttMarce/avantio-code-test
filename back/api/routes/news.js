const { Router } = require('express');

const { newController, newValidation } = require('../controllers/new/')

const router = new Router();

router.get(
	'/el-pais/',
	newValidation,
	newController.getNews
);

module.exports = router;
