const {
	getNews,
	saveNews,
	saveNew,
	getSelectedNew,
	updateNew,
	getWebScrapping,
	getSelectedNewScrapping
} = require('../../services/news.service');


exports.getNews = async function (req, res) {
	const {idNewspaper, params: {newspaper}} = req;

	const newsElPais = await getNews(idNewspaper);

	if(newsElPais.length === 0) {
		const newsScrapped = await getWebScrapping(newspaper);
		const newsToResponse = await saveNews(idNewspaper, newsScrapped);

		return res.status(200).send({response: newsToResponse});
	}

	return res.status(200).send({response: newsElPais});
};

exports.getSelectedNew = async function(req, res) {
	const {params: {id, newspaper}} = req;

	const newFinded = await getSelectedNew(id);
	const {title, body, url} = newFinded;
	const textIsEmpty = (title && body) ? false : true;

	if(textIsEmpty) {
		const {title, body} = await getSelectedNewScrapping(newspaper, url);
		await updateNew(id, title, body);

		const newMappedUpdated = {
			...newFinded.toObject(),
			body: body
		}

		return res.status(200).send({response: newMappedUpdated});
	}

	return res.status(200).send({response: newFinded});
}

exports.insertNew = async function(req, res) {
	const {idNewspaper, body} = req;

	const newToResponse = await saveNew(idNewspaper, body);

	return res.status(200).send({response: newToResponse});
}
