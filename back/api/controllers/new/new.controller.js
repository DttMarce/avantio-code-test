const New = require('../../models/new');

const { getWebScrapping } = require('../../services/new.service')

exports.getNews = async function (req, res) {

	const response = await getWebScrapping();
	res.status(200).send({response});
};
