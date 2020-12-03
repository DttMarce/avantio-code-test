var ObjectId = require('mongoose').Types.ObjectId;

const News = require('../models/news');

const { getWebScrappingElPais, getWebScrappingSelectedNewElPais } = require('./elpais.service');
const { getWebScrappingElMundo, getWebScrappingSelectedNewElMundo } = require('./elmundo.service');

exports.getWebScrapping = async function (nameNewspaper) {
	let webSelected;

	if(nameNewspaper == 'el-pais') {
		webSelected = await getWebScrappingElPais();
	}

	if(nameNewspaper == 'el-mundo') {
		webSelected = await getWebScrappingElMundo();
	}

	return webSelected;
}

exports.getSelectedNewScrapping = async function (nameNewspaper, url) {
	let newSelected;

	if(nameNewspaper == 'el-pais') {
		newSelected = await getWebScrappingSelectedNewElPais(url);
	}

	if(nameNewspaper == 'el-mundo') {
		newSelected = await getWebScrappingSelectedNewElMundo(url);
	}

	return newSelected;
}

exports.getNews = async function (idNewspaper) {
	const dateTime = new Date();
	const currentDay = dateTime.getDate();
	const currentMonth = dateTime.getMonth() + 1;
	const currentYear = dateTime.getFullYear();
	const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

	return await News.find({
		date: {$gte: currentDate},
		newspaper:{$eq: new ObjectId(`${idNewspaper}`)}
	}, async (err, newsFinded) => {
		if (err) {
			return res.status(500).send({error: `Internal Server Error: ${err}`});
		}

		return newsFinded;
	});
}

exports.saveNews = async function (idNewspaper, newsScrapped) {
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

	return newsToResponse;
}

exports.getSelectedNew = async function(id) {
	const findNew = await News.findById(id, async (err, selectedNew) => {
		if (err || !selectedNew) {
			return false;
		}

		return selectedNew;
	});

	return findNew;
}

exports.updateNew = async function(id, title, body) {
	News.update({
		_id: {$eq: new ObjectId(`${id}`)}
	},{
		$set: {
			'title': title,
			'body': body
		}
	}, (err, count) => {
		if(err) {
			console.error(error);
		}
		console.log(count);
	});
}
