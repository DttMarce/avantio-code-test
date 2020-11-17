const { Router } = require('express');

const { newController, newValidation } = require('../controllers/new/')

const router = new Router();

router.get(
	'/el-pais/',
	newValidation,
	newController.getNewsElPais
);

router.get(
	'/el-pais/:id',
	newValidation,
	newController.getSelectedNewElPais
);

router.get(
	'/el-mundo/',
	newValidation,
	newController.getNewsElMundo
);

module.exports = router;
