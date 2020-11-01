const New = require('../../models/new');

const { getWebScrappingElPais, getWebScrappingElMundo } = require('../../services/new.service')

exports.getNewsElPais = async function (req, res) {
	const response = await getWebScrappingElPais();
	res.status(200).send({response});
};

exports.getNewsElMundo = async function (req, res) {
	const response = await getWebScrappingElMundo();
	res.status(200).send({response});
};
