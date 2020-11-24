const { Router } = require('express');

const { newController, newValidation } = require('../controllers/new/');
const { getIDNewspaper } = require('../../config/middleware/newspaper-control');

const router = new Router();

router.get(
	'/:newspaper/',
	newValidation,
	getIDNewspaper,
	newController.getNewsElPais
);

router.get(
	'/:newspaper/:id',
	newValidation,
	newController.getSelectedNewElPais
);

// router.get(
// 	'/el-mundo/',
// 	newValidation,
// 	newController.getNewsElMundo
// );

module.exports = router;
