const logger = require('../../../utils/logger/logger');
const DailyNews = require('../../models/dailyNews');

const { getWebScrappingElPais, getWebScrappingElMundo } = require('../../services/new.service')

exports.getNewsElPais = async function (req, res) {
	const dateTime = new Date();
	const currentDay = dateTime.getDate();
	const currentMonth = dateTime.getMonth() + 1;
	const currentYear = dateTime.getFullYear();
	const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

	await DailyNews.findOne({
		date: {$gte: currentDate},
		newspaper: {$eq: 'el-pais'}
	}, async (err, newsFinded) => {
		if(newsFinded) {
			return res.status(200).send({response: newsFinded.news});
		}

		const response = await getWebScrappingElPais();
		const dailyNews = new DailyNews();

		dailyNews.date = dateTime;
		dailyNews.newspaper = 'el-pais';
		dailyNews.news = response;

		try {
			dailyNews.save((err, dailyNewsSaved) => {
				if (err) {
					return res.status(500).send({response: `Error al guardar en la bbdd: ${err}`});
				}

				return res.status(200).send({response: dailyNewsSaved.news});
			});
		} catch	(error) {
			logger.error(error)
		}
	});
};

exports.getNewsElMundo = async function (req, res) {
	const dateTime = new Date();
	const currentDay = dateTime.getDate();
	const currentMonth = dateTime.getMonth() + 1;
	const currentYear = dateTime.getFullYear();
	const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

	await DailyNews.findOne({
		date: {$gte: currentDate},
		newspaper: {$eq: 'el-mundo'}
	}, async (err, newsFinded) => {
		if(newsFinded) {
			return res.status(200).send({response: newsFinded.news});
		}

		const response = await getWebScrappingElMundo();
		const dailyNews = new DailyNews();

		dailyNews.date = dateTime;
		dailyNews.newspaper = 'el-mundo';
		dailyNews.news = response;

		try {
			dailyNews.save((err, dailyNewsSaved) => {
				if (err) {
					return res.status(500).send({response: `Error al guardar en la bbdd: ${err}`});
				}

				return res.status(200).send({response: dailyNewsSaved.news});
			});
		} catch	(error) {
			logger.error(error)
		}
	});
};
