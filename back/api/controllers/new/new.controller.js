var ObjectId = require('mongoose').Types.ObjectId;

const { values } = require('lodash');
const logger = require('../../../utils/logger');

const News = require('../../models/news');

const { getWebScrappingElPais, getWebScrappingSelectedNewElPais } = require('../../services/elpais.service');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getNewsElPais = async function (req, res) {
	const {idNewspaper} = req;

	const dateTime = new Date();
	const currentDay = dateTime.getDate();
	const currentMonth = dateTime.getMonth() + 1;
	const currentYear = dateTime.getFullYear();
	const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

	const newsElPais = await News.find({
		date: {$gte: currentDate},
		newspaper:{$eq: new ObjectId(`${idNewspaper}`)}
	}, async (err, newsFinded) => {
		if (err) {
			return res.status(500).send({error: `Internal Server Error: ${err}`});
		}

		return newsFinded;
	});

	if(newsElPais.length === 0) {
		const newsScrapped = await getWebScrappingElPais();
		let newsToResponse = [];

		await Promise.all(newsScrapped.map( async newScrapped => {
			const newToSave = new News();

			newToSave.author = newScrapped.author;
			newToSave.img = newScrapped.img;
			newToSave.title = newScrapped.title;
			newToSave.url = newScrapped.url;
			newToSave.newspaper = idNewspaper;

			newsToResponse.push(newToSave);

			await newToSave.save((err, newSaved) => {
				if (err) {
					return res.status(500).send({response: `Error al guardar en la bbdd: ${err}`});
				}
			});
		}));

		return res.status(200).send({response: newsToResponse});
	}

	return res.status(200).send({response: newsElPais});
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getSelectedNewElPais = async function(req, res) {
	const {params: {id}} = req;

	await News.findById(id, async (err, dayNewsFinded) => {
		const {title, body, url} = dayNewsFinded;
		const textIsEmpty = (title && body) ? false : true;

		if(textIsEmpty) {
			const {title, body} = await getWebScrappingSelectedNewElPais(url);

			News.update({
				_id: {$eq: new ObjectId(`${id}`)}
			},{
				$set: {
					'title': title,
					'body': body
				}
			}, (err, count) => {
				console.log(count);
			});

			const newMappedUpdated = {
				...dayNewsFinded.toObject(),
				body: body
			}

			return res.status(200).send({response: newMappedUpdated});
		}

		return res.status(200).send({response: dayNewsFinded});
	})
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exports.getNewsElMundo = async function (req, res) {
// 	const dateTime = new Date();
// 	const currentDay = dateTime.getDate();
// 	const currentMonth = dateTime.getMonth() + 1;
// 	const currentYear = dateTime.getFullYear();
// 	const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

// 	await DailyNews.findOne({
// 		date: {$gte: currentDate},
// 		newspaper: {$eq: 'el-mundo'}
// 	}, async (err, newsFinded) => {
// 		if(newsFinded) {
// 			return res.status(200).send({response: newsFinded.news});
// 		}

// 		const response = await getWebScrappingElMundo();
// 		const dailyNews = new DailyNews();

// 		dailyNews.date = dateTime;
// 		dailyNews.newspaper = 'el-mundo';
// 		dailyNews.news = response;

// 		try {
// 			dailyNews.save((err, dailyNewsSaved) => {
// 				if (err) {
// 					return res.status(500).send({response: `Error al guardar en la bbdd: ${err}`});
// 				}

// 				return res.status(200).send({response: dailyNewsSaved.news});
// 			});
// 		} catch	(error) {
// 			logger.error(error)
// 		}
// 	});
// };

// exports.getSelectedNewElMundo = async function(req, res) {
// 	const {params: {id}} = req;

// 	await DailyNews.findOne({
// 		"news._id": {$eq: new ObjectId(`${id}`)}
// 	}, async (err, dayNewsFinded) => {
// 		const {news} = dayNewsFinded;

// 		let newMapped = await news.find(newToFilter => newToFilter._id == id);
// 		const {text, url} = newMapped;

// 		const textIsEmpty = (!text.title && !text.body);

// 		if(textIsEmpty) {
// 			const {title, body} = await getWebScrappingSelectedNewElMundo(url);

// 			DailyNews.update({
// 				"news._id": {$eq: new ObjectId(`${id}`)}
// 			},{
// 				$set: {
// 					'news.$.text.title': title,
// 					'news.$.text.body': body
// 				}
// 			}, (err, count) => {
// 				console.log(count);
// 			});

// 			const newMappedUpdated = {
// 				...newMapped,
// 				text: {
// 					title: title,
// 					body: body
// 				}
// 			}

// 			return res.status(200).send({response: newMappedUpdated});
// 		}

// 		return res.status(200).send({response: newMapped});
// 	})
// }
