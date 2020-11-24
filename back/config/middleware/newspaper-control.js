const { getNewspaper } = require('../../api/services/newspaper.service');
const logger = require('../../utils/logger');

exports.getIDNewspaper = async (req, res, next) => {
	try {
		const {params: {newspaper}} = req;

		const newspaperDataBase = await getNewspaper(newspaper);

		req.idNewspaper = newspaperDataBase._id;

		next();
	} catch(err) {
		logger.error(err);
		return res.status(401).send('Unauthorized Request');
	}
};
