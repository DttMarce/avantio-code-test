const { Router } = require('express');

const { newController, newValidation } = require('../controllers/new/');
const { getIDNewspaper } = require('../../config/middleware/newspaper-control');

const router = new Router();

router.get(
	'/:newspaper/',
	newValidation,
	getIDNewspaper,
	newController.getNews
);

router.get(
	'/:newspaper/:id',
	newValidation,
	newController.getSelectedNew
);

router.post(
	'/:newspaper/',
	newValidation,
	getIDNewspaper,
	newController.insertNew
);

router.delete(
	'/:idNew/',
	newController.removeNew
);

module.exports = router;
